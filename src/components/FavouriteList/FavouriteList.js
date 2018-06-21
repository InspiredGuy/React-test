import React from 'react';
import './FavouriteList.css';
import {connect} from "react-redux";
import Repository from "../Repository/Repository";
import {getKey} from "../../helpers/favouritesHelper";

const FavouriteList = (props) => (
    <div className="favourites-container">
        {props.repos && props.repos.length
            ?
            props.repos
                .filter(repo => props.favourites[getKey(repo)])
                .map((repo, id) => (
                    <Repository key={id} repo={repo}/>
                ))
            :
            "No favourite repositories yet. Go add some!"
        }
    </div>
);

const mapStateToProps = state => ({
    repos: state.rootReducer.repoList.repos,
    favourites: state.rootReducer.repoList.favourites
});

export default connect(mapStateToProps)(FavouriteList);
