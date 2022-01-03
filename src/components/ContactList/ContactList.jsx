import React from "react";
import PropTypes from "prop-types";
import ContactItem from "./ContactItem";
import { List, Notification } from "./ContactList.styled";

export default function ContactList({ array, removeContact }) {
  return (
    <List>
      {array.length > 0 ? (
        array.map((el) => {
          return (
            <ContactItem
              key={el.id}
              id={el.id}
              name={el.name}
              number={el.number}
              OnClick={removeContact}
            />
          );
        })
      ) : (
        <Notification>This list is empty</Notification>
      )}
    </List>
  );
}

ContactList.propTypes = {
  array: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
  removeContact: PropTypes.func.isRequired,
};
