import React, {Component} from 'react';
import {connect} from 'react-redux';
import {goBack} from 'redux-little-router';
import './ContributorsList.css';
import {getContributorsList} from "../../store/actions/contributorsList";
import Contributor from "../Contributor/Contributor";

class ContributorsList extends Component {
    componentWillMount() {
        this.props.getContributorsList(this.props.owner, this.props.repo);
    }

    render() {
        return (
            <div className="contributors-container">
                <button className="contributors-back" onClick={() => this.props.goBack()}>&lt; back</button>
                {this.props.isRequesting ? "Loading contributors list..." :
                    <div className="contributors-wrap">
                        {this.props.contributors.map((contributor, id) => (
                            <Contributor key={id} contributor={contributor}/>
                        ))}
                    </div>
                }
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    getContributorsList: (owner, repo) => {
        dispatch(getContributorsList(owner, repo));
    },
    goBack: () => {
        dispatch(goBack());
    }
});

const mapStateToProps = state => ({
    isRequesting: state.rootReducer.repoList.isRequesting,
    contributors: state.rootReducer.repoList.contributors,
    owner: state.router.params.owner,
    repo: state.router.params.repo
});

export default connect(mapStateToProps, mapDispatchToProps)(ContributorsList);
