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

export const TextContainer = styled.div`
  text-align: center;
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 500;
  width: 340px;
  line-height: 2.5rem;
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

  @media (max-width: 450px) {
    padding: 9px 10px;
  }
`;
