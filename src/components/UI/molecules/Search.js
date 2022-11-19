import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Input from "../atoms/Input";
import Svg from "../atoms/Svg";

const Search = ({ onSearchChange, onCancelPress, searchValue }) => (
  <StyledSearch onSubmit={(e) => e.preventDefault()}>
    <Input
      type={"text"}
      name={"search"}
      value={searchValue}
      onChange={onSearchChange}
      placeholder={"Search"}
      onKeyDown={searchValue ? onCancelPress : null}
    />
    {searchValue ? <Svg icon={"delete"} onClick={onSearchChange} /> : null}
  </StyledSearch>
);

Search.propTypes = {
  onSearchChange: PropTypes.func,
  onCancelPress: PropTypes.func,
  searchValue: PropTypes.string,
};

export default Search;

const StyledSearch = styled.form`
  position: relative;
`;
