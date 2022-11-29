import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Input from "../atoms/Input";
import Svg from "../atoms/Svg";

const Search = ({
  buttons,
  setButtons,
  setIsActive,
  setSearch,
  searchValue,
}) => {
  const handleCancelPress = (e) => {
    if (e.code === "Escape") setSearch("");
  };

  const handleSearchChange = (e) => {
    const newState = [...buttons];
    const tempSearch =
      e.target.name === "search"
        ? e.target.value
        : searchValue.slice(0, searchValue.length - 1);
    newState.map((el) => {
      if (el.name === "all") {
        setIsActive(el.name);
        return (el.active = true);
      } else return (el.active = false);
    });
    setSearch(tempSearch);
    setButtons([...newState]);
  };

  return (
    <StyledSearch onSubmit={(e) => e.preventDefault()}>
      <Input
        type={"text"}
        name={"search"}
        value={searchValue}
        onChange={handleSearchChange}
        placeholder={"Search"}
        onKeyDown={searchValue ? handleCancelPress : null}
      />
      {searchValue ? (
        <Svg icon={"delete"} onClick={handleSearchChange} />
      ) : null}
    </StyledSearch>
  );
};

Search.propTypes = {
  onSearchChange: PropTypes.func,
  onCancelPress: PropTypes.func,
  searchValue: PropTypes.string,
};

export default Search;

const StyledSearch = styled.form`
  position: relative;
`;
