import React from "react";
import {Checkbox} from "./Checkbox";
import {Button} from "./Button";
import {List} from "./List";
import {StatusIndicator} from "./StatusIndicator";
import {connect} from "react-redux";
import * as actions from "../actions/index";
import store from "../store";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedApi: null
        }
    }

    onButtonClicked(api) {
        this.props.loadData(api);
    }

    onCheckboxClicked(isChecked, api) {
        this.setState({selectedApi: isChecked ? api : null});
    }

    render() {
        const list = this.props.payload
            ? <List data={this.props.payload}/>
            : "";

        const selectedApi = this.state.selectedApi
            ? <div className="api-wrapper">
                <div className="text">{this.state.selectedApi}</div>
                <StatusIndicator status={store.getState().status}/>
            </div>
            : "";

        return (
            <div className="container">
                <div className="wrapper">
                    <Checkbox title="Select api"
                              value="https://jsonplaceholder.typicode.com/users/"
                              onClick={(isChecked, api) => this.onCheckboxClicked(isChecked, api)}/>
                    {selectedApi}
                    <Button title="Load data"
                            disabled={!this.state.selectedApi}
                            onClick={() => this.onButtonClicked(this.state.selectedApi)}/>
                </div>
                {list}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return state;
};

export default connect(mapStateToProps, actions)(App);