import request from 'superagent';
import {
    BASE_URL,
    GET_REPO_LIST_REQUEST,
    GET_REPO_LIST_SUCCESS,
    GET_REPO_LIST_FAIL
} from "../constants";

export const getRepoList = () => async (dispatch) => {
    dispatch({type: GET_REPO_LIST_REQUEST});

    request.get(`${BASE_URL}/repositories`)
        .set('Accept', 'application/json')
        .end((err, res) => {
            if (err || !res.body) {
                dispatch({type: GET_REPO_LIST_FAIL});
            } else {
                dispatch({type: GET_REPO_LIST_SUCCESS, payload: res.body});
            }
        });
};
