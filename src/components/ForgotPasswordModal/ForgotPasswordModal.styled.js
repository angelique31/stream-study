import styled from "styled-components";

export const LandingContainer = styled.div`
  height: 900px;
  background-size: cover;
  background-position: center;

  background-image: url("/assets/the-crown.jpg");
`;
// export const Backdrop = styled.div`
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   background: rgba(0, 0, 0, 0.5);
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;

export const ModalContainer = styled.div`
  background: #f3f3f3;
  padding: 40px;

 
  width: 90%;
  max-width: 450px;
  width: 450px;
  margin: auto;
    
}
`;

export const ModalTitle = styled.h2`
  margin-bottom: 1em;
  color: #333;
`;

export const InstructionText = styled.p`
  margin: 16px 0px;
  font-size: 16px;
`;

export const ModalForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.5em;
`;

export const Input = styled.input`
  padding: 0.5em;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const Button = styled.button`
  padding: 0.5em;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export const OptionText = styled.p`
  margin-top: 1em;
  color: #555;
`;

export const OptionLink = styled.a`
  color: #007bff;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;
