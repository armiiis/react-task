import React from "react";

export const Button = props => (
    <button disabled={props.disabled} onClick={() => props.onClick()}>
        {props.title}
    </button>
);