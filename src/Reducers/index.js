import {
    FETCH_DATA_BEGIN,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_FAILURE,
} from "../Actions/actionsTypes";


const initialState = {
    data: [],
    loading: true,
    error: null,
};

export function dataReducer(
    state = initialState,
    action
) {
    switch (action.type) {
        case FETCH_DATA_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            };

        case FETCH_DATA_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload.data,
            };

        case FETCH_DATA_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                data: [],
            };
        default:
            return state;
    }
}
