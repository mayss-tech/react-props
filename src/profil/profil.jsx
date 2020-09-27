import React  from 'react';
function Statut (props) {
    return ( <div>
        <h4>{props.name}</h4>
        <p className="bio">{props.bio}</p>
        <h5 className="profession">{props.profession}</h5>{props.children }
    </div> )
}
export default Statut;


