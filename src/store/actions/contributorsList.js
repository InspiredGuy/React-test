import request from 'superagent';
import {
    BASE_URL,
    GET_CONTRIBUTORS_LIST_FAIL,
    GET_CONTRIBUTORS_LIST_REQUEST,
    GET_CONTRIBUTORS_LIST_SUCCESS
} from "../constants";

export const getContributorsList = (ownerLogin, repoName) => async (dispatch) => {
    dispatch({type: GET_CONTRIBUTORS_LIST_REQUEST});

    request.get(`${BASE_URL}/repos/${ownerLogin}/${repoName}/contributors`)
        .set('Accept', 'application/json')
        .end((err, res) => {
            if (err || !res.body) {
                dispatch({type: GET_CONTRIBUTORS_LIST_FAIL});
            } else {
                dispatch({type: GET_CONTRIBUTORS_LIST_SUCCESS, payload: res.body});
            }
        });
};
