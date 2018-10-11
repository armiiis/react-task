import React from "react";

export const StatusIndicator = props => (
    <div className={`state-indicator ${props.status}`}>
        {props.status || "IDLE"}
    </div>
);


// export class StatusIndicator extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             status: "IDLE"
//         }
//     }
//
//     render() {
//         return (
//             <div className="state-indicator">
//                 {this.props.state}
//             </div>
//         )
//     }
// }