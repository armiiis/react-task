import React from "react";

export class Checkbox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isChecked: false
        }
    }

    checkboxHandler() {
        this.setState({
            isChecked: !this.state.isChecked
        }, () => this.props.onClick(this.state.isChecked, this.props.value));
    }

    render() {
        return (
            <div className={`checkbox ${this.state.isChecked ? "checked" : ""}`}>
                <input type="checkbox"
                       checked={this.state.isChecked}
                       onChange={() => this.checkboxHandler()}
                />
                {this.props.title}
                <br/>
            </div>
        )
    }
}