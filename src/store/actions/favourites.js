import {
    FAVOURITES_SET_STATUS
} from "../constants";
import {getKey} from "../../helpers/favouritesHelper";

export const setFavourite = (repo, favourite) => (dispatch) => {
    const key = getKey(repo);
    dispatch({type: FAVOURITES_SET_STATUS, payload: {key, favourite}});
};
