import React, {Component}  from 'react';
import PropTypes from 'prop-types';


class Statut extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div>
<h4>{this.props.name}</h4>
        <p className="bio">{this.props.bio}</p>
        <h5 className="profession">{this.props.profession}</h5>{this.props.children }
</div> );
    }
}

export default Statut;
Statut.propTypes = {
    name: PropTypes.string,
    bio: PropTypes.string,
    profession: PropTypes.string
};

