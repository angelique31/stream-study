import styled from "styled-components";

export const NavBar = styled.nav`
  background-color: rgba(0, 0, 0, 0.97);
`;

export const Form = styled.form`
  background: #f3f3f3;
  padding: 20px;

  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const PasswordTitle = styled.h1`
  font-size: 2rem;
  margin-bottom: 10px;
  font-weight: 900;
`;

export const SmallTitle = styled.h2`
  font-size: 1rem;
  margin-top: 12px;
  margin-bottom: 32px;
  font-weight: 400;
}
`;

export const Label = styled.label`
  display: none;
  margin-bottom: 5px;
`;

export const Input = styled.input`
  width: 60%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  height: 48px;
  @media (max-width: 600px) {
    width: 90%;
  }
  @media (max-width: 400px) {
    width: 100%;
  }
`;

export const Button = styled.button`
  padding: 10px 15px;
  margin-right: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background-color: #007bff;
  color: white;

  &:last-of-type {
    background-color: #6c757d;
  }

  &:hover {
    opacity: 0.9;
  }
`;

export const FormFieldContainer = styled.div`
  margin-bottom: 4%;
`;

export const ErrorMessage = styled.div`
  color: #b92d2b;
  font-size: 13px;
`;

export const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const Checkbox = styled.input`
  margin-right: 10px;
  height: 25px;
  width: 25px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 40px;
`;
