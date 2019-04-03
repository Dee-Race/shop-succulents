import styled from "styled-components";

export const ButtonContainer = styled.button`
  text-transform: capitalize;
  font-size: 1.4rem;
  background: white;
  border: 0.5rem solid var(--lightBlue);
  border-color: ${props =>
    props.cart ? "var(--mainDark)" : "var(--lightBlue)"};
  color: ${prop => (prop.cart ? "var(--mainDark)" : "var(--lightBlue)")};
  border-radius: 0.5rem;
  padding: 0.2rem 0.5rem;
  cursor: pointer;
  margin: 0.2rem 0.5rem 0;
  transition: all 0.5s ease-in-out;
  &:hover {
    background: ${prop => (prop.cart ? "var(--mainDark)" : "var(--lightBlue)")};
    color: white;
  }
  &:focus {
    outline: none;
  }
`;
