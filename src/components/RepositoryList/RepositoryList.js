import React from 'react';
import {connect} from 'react-redux';
import './RepositoryList.css';
import Repository from "../Repository/Repository";

const RepositoryList = (props) => (
    <div className="repos-container">
        {props.repos && props.repos.length
            ?
            props.repos.map((repo, id) => (
                <Repository key={id} repo={repo}/>
            ))
            :
            "Loading list of public repositories..."
        }
    </div>
);

const mapStateToProps = state => ({
    repos: state.rootReducer.repoList.repos
});

export default connect(mapStateToProps)(RepositoryList);
