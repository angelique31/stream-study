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
  opacity: ${(props) => (props.visible ? "1" : "0")};
  visibility: ${(props) => (props.visible ? "visible" : "hidden")};
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
}
`;

export const IconWrapper = styled.div`
  position: absolute;
  left: 15px;
  width: 22px;
  height: 22px;
  cursor: pointer;
  @media (max-width: 650px) {
  }
`;
