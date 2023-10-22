import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
`;

export const SearchInputWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
`;

export const StyledInput = styled.input`
  opacity: ${(props) => (props.$visible ? "1" : "0")};
  visibility: ${(props) => (props.$visible ? "visible" : "hidden")};
  transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;

  width: 100%;
  height: 50px;

  border: 1px solid rgb(222, 226, 230);
  background: white;
  position: relative;
  font-size: 1.2rem;
  color: white;
  padding-left: 53px;

  background-color: #1d1b1b;
  opacity: 0.9;
  @media (max-width: 1070px) {
    margin-left: 50px;
  }
  @media (max-width: 590px) {
    opacity: 1; // Pour rendre l'input toujours visible
    visibility: visible;
    padding-left: 17px;
    width: 168px;
  }
  @media (max-width: 470px) {
    width: 140px;
  }
  @media (max-width: 420px) {
    width: 130px;
    margin-left: 20px;
  }
`;

export const IconWrapper = styled.div`
  position: absolute;
  left: 15px;
  width: 22px;
  height: 22px;
  cursor: pointer;
  @media (max-width: 1070px) {
    left: 65px;
  }
  @media (max-width: 586px) {
    display: none; // Pour cacher l'icône de la loupe
  }
`;
