import React from "react";
import styled, { css } from "styled-components";

// function Link(props) {
//   return <a {...props}>{props.children}</a>;
// }

const Link = styled.a`
  text-decoration: none;
  color: black;
  font-weight: bold;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  transition: all 0.3s ease-in-out;
  &:hover {
    color: #000;
  }
  ${(props) =>
    props.primary &&
    css`
      background: tomato;
      color: black;
    `}
`;

export default Link;
