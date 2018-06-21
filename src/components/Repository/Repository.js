import React, {Component} from 'react';
import {connect} from 'react-redux';
import {setFavourite} from '../../store/actions/favourites';
import {Link} from 'redux-little-router';
import './Repository.css';
import {getKey} from "../../helpers/favouritesHelper";

class Repository extends Component {
    render() {
        const repo = this.props.repo;
        const isFavourite = this.props.favourites[getKey(repo)];
        return (
            <div className="repository">
                <div className="repository-buttons">
                    <Link className="repository-buttons-link" href={`/contributors/${repo.owner.login}/${repo.name}`}>
                        <i className="far fa-address-book"></i>
                    </Link>
                    <button className="repository-favourite"
                            onClick={() => this.props.setFavourite(repo, !isFavourite)}>
                        <i className={(isFavourite ? "fas" : "far") + " fa-bookmark"}></i>
                    </button>
                </div>
                <div className="repository-person">
                    <img className="repository-avatar" src={repo.owner.avatar_url}/>
                    <a className="repository-person-link" href={repo.url}>{repo.name}</a>&nbsp;(author: {repo.owner.login})
                </div>
                <div>{repo.description}</div>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    setFavourite: (repo, favourite) => {
        dispatch(setFavourite(repo, favourite));
    }
});

const mapStateToProps = state => ({
    favourites: state.rootReducer.repoList.favourites
});

export default connect(mapStateToProps, mapDispatchToProps)(Repository);
