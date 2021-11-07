import React from "react";
import { Link } from "react-router-dom";
import user from '../images/user.png';

const ContactDetail = (props) => {
    const{name, email} = props.location.state.contact;
    return (
        <div className="main">
            <div className="ui card centered">
                <div className="image">
                    <img src={user} alt="user" />
                </div>
                <div className="content">
                    <div className="header">{name}</div>
                    <div className="description">{email}</div>
                </div>
            </div>
            <Link to="/">
                <div className="center-div">
                    <button className="ui button blue centered">Back to Contact List</button>
                </div>
            </Link>
        </div>
    );
}

export default ContactDetail;