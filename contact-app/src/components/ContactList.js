import React, {useRef} from "react";
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
    const inputEl = useRef("");
    const deleteContactHandler = (id) => {
        props.getContactId(id);
    };
    
    const renderContactList = props.contacts.map((contact) => {
        return <ContactCard contact={contact} clickHandler={deleteContactHandler} 
        key={contact.id} />;
    });

    const getSearchTerm = () => {
        props.searchKeyword(inputEl.current.value);
    }

    return (
        <div className="main">
            <h2>Contact List</h2>
            <Link to="/add">
                <button className="ui button blue right">AddContact</button>
            </Link>
            <div className="ui search">
                <div className="ui icon input">
                    <input type="text" ref={inputEl} placeholder="Search Contacts" className="prompt" value={props.term} onChange={getSearchTerm} />
                    <i className="search icon"></i>
                </div>
            </div>
            <div className="ui celled list">{renderContactList.length > 0 ? renderContactList : "No Contacts Available"}</div>
        </div>
    );
}

export default ContactList;