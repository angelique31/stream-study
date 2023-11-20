import styled from "styled-components";
// import picture from "../../assets/pictures/pictureConnect.jpg";
export const LandingContainer = styled.div`
  height: 900px;
  background-size: cover;
  background-position: center;

  background-image: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.9),
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.9)
    ),
    url("/assets/landingPage/picture-landingPage.jpg");
`;

export const NavBarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px;
`;

export const StyledLink = styled.div`
  color: black;

  font-size: 1.2rem;
  font-weight: 500;
`;

export const LoginForm = styled.form`
    background-color: rgba(0,0,0,.75);
    border-radius: 4px;
    width: 450px;
    margin: auto;
    padding: 60px 68px 40px;
    @media (max-width: 580px) {
      padding: 10px;
      width: 100%;
    }
}`;

export const StyledH1 = styled.h1`
  color: white;
  font-size: 2rem;
  font-weight: 500;
  margin-bottom: 28px;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  margin: 10px auto;
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
  border: 1px solid black;
  border-radius: 4px;
  font-size: 1rem;
  width: 100%;
  box-sizing: border-box;
  transition: border-color 0.3s;
  background: #333;
  &:focus {
    outline: none;
    border-color: #0070f3;
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
    width: 100%;
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
export const ButtonWrapper = styled.div`
  width: 100%;
`;

export const Button = styled.button`
  color: white;
  font-size: 1rem;
  font-weight: 400;
  padding: 16px;
  border-radius: 4px;
  background-color: rgb(229, 9, 20);
  border: none;
  margin-top: 24px;
  transition: 0.3s ease;
  width: 100%;
  cursor: pointer;
  text-align: center;
  &:hover {
    background: rgb(193, 17, 25);
  }
  @media (max-width: 520px) {
    width: 100%;
  }

  @media (max-width: 450px) {
    padding: 9px 10px;
  }
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 10px 0 30px 0;
`;

export const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const Checkbox = styled.input.attrs({ type: "checkbox" })`
  margin-right: 8px;
`;

export const TextCheckbox = styled.p`
  font-size: 0.8rem;
  color: #b3b3b3;
`;

export const Help = styled.div`
  color: #b3b3b3;
  cursor: pointer;
  font-size: 0.8rem;
`;

export const Text = styled.p`
  color: #b3b3b3;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 16px 0 10px 0;
  font-size: 1rem;
`;

export const TextSignIn = styled.button`
  color: white;
`;

export const ReCAPTCHAText = styled.div`
  font-size: 0.8rem;
  color: #b3b3b3;
`;

export const TextMore = styled.p`
  color: #0071eb;
`;
