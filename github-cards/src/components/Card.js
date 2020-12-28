import React from 'react';
import './Card.css';

class Card extends React.Component{
    
    render(){
        const {name, location, avatar_url} = this.props.profile;
        return(
            <div className='profile'>
                <img src={avatar_url} alt="Profile"/>
                <div className="info">
                    <div className="name">{name}</div>
                    <div className="location">{location}</div>
                </div>
            </div>
        );
    }
}

export default Card;