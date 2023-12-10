import styled from "styled-components";

export const FooterWrapper = styled.footer`
  padding: 2rem;
  background-color: #222;
  color: #fff;
`;

export const FooterContent = styled.div`
  padding: 0 3rem;
  margin: 4.5rem 100px;
  @media (max-width: 1300px) {
    margin: 4.5rem 10px;
    padding: 0 2rem;
  }
  @media (max-width: 488px) {
    margin: 4.5rem 10px;
    padding: 0;
  }
`;

export const FooterParagraph = styled.p`
  font-size: 0.9rem;
  font-weight: 400;
  margin-bottom: 1rem;
  color: rgba(255, 255, 255, 0.7);
`;

export const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const FooterColumn = styled.div``;

export const FooterLink = styled.a`
  text-decoration: underline;
  margin-bottom: 1rem;
  display: block;
  font-size: 0.9rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.7);
`;
