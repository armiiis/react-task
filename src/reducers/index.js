const mainReducer = (state = {}, action) => {
    switch (action.type) {

        case "ON_REQUEST":
            return {
                status: "LOADING"
            };

        case "ON_SUCCESS":
            return {
                ...state,
                status: "LOADED",
                payload: action.payload
            };

        case "ON_FAILURE":
            return {
                status: "ERROR"
            };

        default:
            return state;
    }
};

export default mainReducer;