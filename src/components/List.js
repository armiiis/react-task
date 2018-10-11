import React from "react";
import {Checkbox} from "../components/Checkbox";

export class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedItems: []
        }
    }

    onCheckboxClicked(isChecked, index) {
        const selectedItems = this.state.selectedItems.slice();
        isChecked
            ? selectedItems.push(index)
            : selectedItems.splice(selectedItems.indexOf(index), 1);
        this.setState({selectedItems});
    }

    componentWillUnmount() {
        this.setState({selectedItems: []});
    }

    render() {
        const dataList = this.props.data && this.props.data.map((object, index) => {
            return (
                <div key={index} className="list-item">
                    <Checkbox onClick={(isChecked) => this.onCheckboxClicked(isChecked)}/>
                    <div>{object.name}</div>
                </div>
            )
        });
        return (
            <div className="list">
                Selected count: {this.state.selectedItems.length}
                {dataList}
            </div>
        );
    }
}