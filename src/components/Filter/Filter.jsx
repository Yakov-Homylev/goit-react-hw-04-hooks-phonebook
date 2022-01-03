import React from "react";
import PropTypes from "prop-types";
import { Section, Title, FilterInput } from "./Filter.styled";

export default function Filter({ title, onChange }) {
  return (
    <Section>
      <Title>{title}</Title>
      <FilterInput type="text" onChange={onChange} />
    </Section>
  );
}

Filter.propTypes = {
  title: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
