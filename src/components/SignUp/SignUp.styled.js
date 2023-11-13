import styled from "styled-components";

export const NavBarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px;
  border-bottom: 1px solid #e6e6e6;
`;

export const StyledLink = styled.div`
  color: black;

  font-size: 1.2rem;
  font-weight: 500;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 110px;
  padding-bottom: 50px;
`;

export const MarginLeftDiv = styled.div`
  margin-left: 20px;
`;

export const CenteredContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const StyledImageContainer = styled.div`
  width: 260px;
`;
export const StyledSpan = styled.span`
  font-size: 0.8rem;
  line-height: 19px;
`;

export const TextContainer = styled.div``;

export const StyledInput = styled.input`
  margin-top: 10px;

  padding: 1rem;

  border: 2px solid
    ${(props) =>
      props.isInvalid
        ? "rgb(229, 9, 20)"
        : props.isValid
        ? "rgb(19, 177, 97)"
        : "black"};

  border-radius: 4px;
  font-size: 1rem;
  width: 100%;
  box-sizing: border-box;
  transition: border-color 0.3s;

  &:focus {
    outline: none;

    border-color: ${(props) =>
      props.isInvalid
        ? "rgb(229, 9, 20)"
        : props.isValid
        ? "rgb(19, 177, 97)"
        : "#0070f3"};
  }

  &::placeholder {
    color: #aaa;
  }

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px white inset !important;
    box-shadow: 0 0 0 30px white inset !important;
    -webkit-text-fill-color: #666 !important; /* Si vous souhaitez également modifier la couleur du texte */
  }
  @media (max-width: 520px) {
    width: 90%;
  }
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 500;
  width: 419px;
  line-height: 2.5rem;
  @media (max-width: 520px) {
    width: 350px;
  }
`;

export const Paragraph = styled.p`
  font-size: 1.1rem;
  width: 340px;
`;

export const Button = styled.button`
  color: white;
  font-size: 1.5rem;
  font-weight: 400;
  padding: 20.5px 2em;
  border-radius: 4px;
  background-color: rgb(229, 9, 20);
  border: none;
  margin-top: 24px;
  transition: 0.3s ease;
  width: 100%;
  cursor: pointer;
  &:hover {
    background: rgb(193, 17, 25);
  }
  @media (max-width: 520px) {
    width: 90%;
  }

  @media (max-width: 450px) {
    padding: 9px 10px;
  }
`;

export const PasswordRequirement = styled.p`
  color: rgb(193, 17, 25);
  font-size: 0.8rem;
  margin-top: 0.5rem;
`;
