import { StyledHamburger } from "./MenuHamburger.styled";

function MenuHamburger({ onClick, isOpen }) {
  return (
    <StyledHamburger
      //préfixer le nom du prop avec un $  pour que le prop isOpen ne soit pas transmis directement au DOM
      $isOpen={isOpen}
      onClick={onClick}
      aria-label="Toggle navigation"
      aria-expanded={isOpen}
      // onClick={() => console.log("StyledHamburger a été cliqué!")}
    >
      <span></span>
      <span></span>
      <span></span>
    </StyledHamburger>
  );
}

export default MenuHamburger;
