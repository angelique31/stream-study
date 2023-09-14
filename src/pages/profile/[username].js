import { useRouter } from "next/router";

function UserProfile() {
  const router = useRouter();
  const { username } = router.query;

  return (
    <div>
      <h1>Profil de {username}</h1>
      <p>{`Voici le profil de l'utilisateur ${username}`}.</p>
      {/* Afficher plus d'informations sur l'utilisateur ici */}
    </div>
  );
}

export default UserProfile;
