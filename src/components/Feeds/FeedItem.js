import React from "react";

const FeedItem = ({ contacts }) => {
  return (
    <div className="col-sm-4 offset-4">
      {contacts.map(contact => (
        <div className="row" key={contact.email}>
          <div className="col-sm-2">
            <img alt="" className="rounded-circle" src={contact.thumbnail} />
          </div>
          <div className="col-sm-9">
            <strong>
              {contact.name} ({contact.gender})
            </strong>
            <br />
            <small>{contact.email}</small>
            <br />
            <small>City - {contact.city}</small>
            <code> Ph: {contact.cell}</code>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeedItem;
