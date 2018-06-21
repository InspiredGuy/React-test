import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Fragment} from 'redux-little-router';
import {Header} from './components/Header/Header.js';
import RepositoryList from './components/RepositoryList/RepositoryList';
import FavouriteList from "./components/FavouriteList/FavouriteList";
import ContributorsList from "./components/ContributorsList/ContributorsList";
import {getRepoList} from "./store/actions/repoList";


class App extends Component {
    componentWillMount() {
        this.props.getRepoList();
    }

    render() {
        return (
            <Fragment forRoute="/">
                <div className="App">
                    <Header/>
                    <Fragment forRoute="/">
                        <RepositoryList/>
                    </Fragment>
                    <Fragment forRoute="/favourites">
                        <FavouriteList/>
                    </Fragment>
                    <Fragment forRoute="/contributors/:owner/:repo">
                        <ContributorsList/>
                    </Fragment>
                </div>
            </Fragment>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    getRepoList: () => {
        dispatch(getRepoList());
    }
});

const mapStateToProps = state => ({
    repos: state.rootReducer.repoList.repos
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
