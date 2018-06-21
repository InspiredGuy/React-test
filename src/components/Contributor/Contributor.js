import React, {Component} from 'react';
import './Contributor.css';

class Contributor extends Component {
    render() {
        const contributor = this.props.contributor;
        return (
            <div className="contributor">
                <div>
                    <img className="contributor-avatar" src={contributor.avatar_url}/>
                    <a className="contributor-link" href={contributor.html_url}>{contributor.login}</a>
                </div>
                <div>Contributions: {contributor.contributions}</div>
            </div>
        );
    }
}

export default Contributor;
