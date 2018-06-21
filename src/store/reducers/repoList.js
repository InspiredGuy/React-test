import {
    FAVOURITES_STORAGE_KEY,
    GET_REPO_LIST_REQUEST,
    GET_REPO_LIST_SUCCESS,
    GET_REPO_LIST_FAIL,
    GET_CONTRIBUTORS_LIST_SUCCESS,
    GET_CONTRIBUTORS_LIST_REQUEST,
    GET_CONTRIBUTORS_LIST_FAIL, FAVOURITES_SET_STATUS
} from "../constants";

const storedFavourites = window.localStorage.getItem(FAVOURITES_STORAGE_KEY);

const initialState = {
    isRequesting: false,
    repos: [],
    contributors: [],
    favourites: storedFavourites ? JSON.parse(storedFavourites) : {}
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_CONTRIBUTORS_LIST_REQUEST:
        case GET_REPO_LIST_REQUEST:
            return {
                ...state,
                isRequesting: true
            };
        case GET_CONTRIBUTORS_LIST_FAIL:
        case GET_REPO_LIST_FAIL:
            return {
                ...state,
                isRequesting: false
            };
        case GET_REPO_LIST_SUCCESS:
            return {
                ...state,
                isRequesting: false,
                repos: action.payload
            };
        case GET_CONTRIBUTORS_LIST_SUCCESS:
            return {
                ...state,
                isRequesting: false,
                contributors: action.payload
            };
        case FAVOURITES_SET_STATUS:
            const newFavourites = Object.assign({}, state.favourites);
            const favKey = action.payload.key;
            if (action.payload.favourite)
                newFavourites[favKey] = 1;
            else if (newFavourites[favKey])
                delete newFavourites[favKey];
            window.localStorage.setItem(FAVOURITES_STORAGE_KEY, JSON.stringify(newFavourites));
            return {
                ...state,
                favourites: newFavourites
            };
        default:
            return {
                ...state
            };
    }
}
