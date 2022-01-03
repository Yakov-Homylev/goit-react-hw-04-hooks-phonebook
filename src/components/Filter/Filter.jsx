import React, { Component } from "react";
import PropTypes from "prop-types";
import { Section, Title, FilterInput } from "./Filter.styled";

export default class Filter extends Component {
  render() {
    return (
      <Section>
        <Title>{this.props.title}</Title>
        <FilterInput type="text" onChange={this.props.onChange} />
      </Section>
    );
  }
}

Filter.prototyp = {
  title: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
