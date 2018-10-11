import axios from "axios";

export function loadData(api) {
    return dispatch => {
        dispatch({type: "ON_REQUEST"});
        axios.get(api)
            .then(response => dispatch({type: "ON_SUCCESS", payload: response.data}))
            .catch(error => dispatch({type: "ON_FAILURE", error}));
    }
}