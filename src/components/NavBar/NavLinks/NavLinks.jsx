import Link from "next/link";
import HomeLinks from "../HomeLinks/HomeLinks";

function NavLinks() {
  return (
    <nav>
      <Link href="/">Stream Study Prime</Link>
      {/* <Link href="/">Accueil</Link> */}
      <HomeLinks />
      <Link href="/boutique">Boutique</Link>
      <Link href="/tv">TV en direct</Link>
      <Link href="/categories">Catégories</Link>
    </nav>
  );
}

export default NavLinks;
