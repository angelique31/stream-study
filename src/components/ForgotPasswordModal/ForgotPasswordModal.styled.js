import styled from "styled-components";

export const NavBarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px;
`;

export const StyledLink = styled.div`
  color: red;
  position: relative;
  z-index: 2;
  font-size: 1.2rem;
  font-weight: 500;
`;

export const LandingContainer = styled.div`
  position: relative;
  height: 900px;
  background-size: cover;
  background-position: 150px;
  background-attachment: fixed;
  background-image: url("/assets/the-crown.jpg");
`;
export const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalContainer = styled.div`
  background: #f3f3f3;
  padding: 40px;
  height: 500px;
 
  width: 90%;
  max-width: 450px;
  width: 450px;
  margin: auto;
    
}
`;

export const ModalTitle = styled.h2`
  margin-bottom: 1em;
  color: #333;
  font-size: 2em;
  font-weight: 500;
  line-height: 50px;
`;

export const InstructionText = styled.p`
  margin: 30px 0px;
  font-size: 16px;
`;

export const ModalForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const Input = styled.input`
  padding: 10px 11px;
  border: 1px solid #b3b3b3;
  border-radius: 2px;
  height: 44px;
  font-size: 1rem;
`;

export const Button = styled.button`
  padding: 0.5em;
  border: none;
  border-radius: 4px;
  background-color: #0080ff;
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.55);
  color: white;
  cursor: pointer;
  min-height: 48px;
  padding: 14px 2em;
  font-size: 1.25rem;
  &:hover {
    background-color: #2490fd;
  }
`;

export const OptionText = styled.p`
  margin-top: 50px;
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

export const SpanContainer = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 450px;
  bottom: 130px;
  color: #999;
`;

export const TextMore = styled.p`
  color: #999;
  text-decoration: underline;
`;
