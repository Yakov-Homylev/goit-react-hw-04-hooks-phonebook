import React from "react";
import PropTypes from "prop-types";
import { Item, NumberSpan, DeleteButton } from "./ContactList.styled";

export default function ContactItem({ id, name, number, OnClick }) {
  return (
    <Item>
      {name + ":"} <NumberSpan>{number}</NumberSpan>
      <DeleteButton type="button" onClick={() => OnClick(id)}>
        Delete
      </DeleteButton>
    </Item>
  );
}

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
