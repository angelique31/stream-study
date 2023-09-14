import Link from "next/link";

export default function Success() {
  return (
    <div>
      <h1>Bravo! Votre compte est maintenant actif.</h1>
      <Link href="/dashboard/home">Aller au tableau de bord</Link>
    </div>
  );
}
