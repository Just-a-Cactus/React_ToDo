import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Svg = ({ icon, ...props }) => {
  switch (icon) {
    case "trash":
      return (
        <TrashIcon {...props} width="20" height="20" viewBox="0 0 20 20">
          <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
          <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
        </TrashIcon>
      );
    case "edit":
      return (
        <EditIcon {...props} width="20" height="20" viewBox="0 0 20 20">
          <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
        </EditIcon>
      );
    case "done":
      return (
        <DoneIcon {...props} width="20" height="20" viewBox="0 0 20 20">
          <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
        </DoneIcon>
      );
    case "delete":
      return (
        <DeleteIcon {...props} width="16" height="16" viewBox="0 0 16 16">
          <path d="M5.83 5.146a.5.5 0 0 0 0 .708L7.975 8l-2.147 2.146a.5.5 0 0 0 .707.708l2.147-2.147 2.146 2.147a.5.5 0 0 0 .707-.708L9.39 8l2.146-2.146a.5.5 0 0 0-.707-.708L8.683 7.293 6.536 5.146a.5.5 0 0 0-.707 0z" />
          <path d="M13.683 1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-7.08a2 2 0 0 1-1.519-.698L.241 8.65a1 1 0 0 1 0-1.302L5.084 1.7A2 2 0 0 1 6.603 1h7.08zm-7.08 1a1 1 0 0 0-.76.35L1 8l4.844 5.65a1 1 0 0 0 .759.35h7.08a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1h-7.08z" />
        </DeleteIcon>
      );
    default:
      return null;
  }
};

export default Svg;

Svg.propTypes = {
  icon: PropTypes.string.isRequired,
};

const Icon = styled.svg`
  fill: currentColor;
  margin-left: 5px;
`;

const TrashIcon = styled(Icon)`
  @media (hover: hover) {
    :hover {
      color: ${(props) => props.theme.accentColor};
    }
  }
`;

const EditIcon = styled(Icon)`
  @media (hover: hover) {
    :hover {
      color: ${(props) => props.theme.editColor};
    }
  }
`;

const DoneIcon = styled(Icon)`
  margin-bottom: 3px;
  margin-left: 5px;

  @media (hover: hover) {
    :hover {
      color: ${(props) => props.theme.editColor};
    }
  }}
`;

const DeleteIcon = styled(Icon)`
  position: absolute;
  right: 10px;
  top: 6px;

  @media (hover: hover) {
    :hover {
      color: ${(props) => props.theme.accentColor};
    }
  }
`;
