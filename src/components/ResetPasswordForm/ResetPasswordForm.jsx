// src/components/ResetPasswordForm.js

import { useRouter } from "next/router";
import { useState } from "react";
import {
  Form,
  Label,
  Input,
  Button,
  CheckboxLabel,
  Checkbox,
  ButtonContainer,
} from "./ResetPasswordForm.styled";

export default function ResetPasswordForm() {
  const router = useRouter();
  const [email, setEmail] = useState("angie1979.capucine@yahoo.fr"); // Prérempli ou obtenu d'une autre manière
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [logoutAll, setLogoutAll] = useState(false);
  const { token } = router.query;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Les mots de passe ne correspondent pas.");
      return;
    }
    // Ici, vous enverriez le nouveau mot de passe et le token à votre API pour traitement
    console.log(
      "Token:",
      token,
      "Password:",
      password,
      "Logout All:",
      logoutAll
    );
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label htmlFor="email">E-mail actuel</Label>
      <Input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        disabled
      />

      <Label htmlFor="password">Nouveau mot de passe (6-60 caractères)</Label>
      <Input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        minLength="6"
        maxLength="60"
      />

      <Label htmlFor="confirmPassword">
        Saisissez le nouveau mot de passe une 2e fois
      </Label>
      <Input
        type="password"
        id="confirmPassword"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        required
        minLength="6"
        maxLength="60"
      />

      <CheckboxLabel>
        <Checkbox
          type="checkbox"
          id="logoutAll"
          checked={logoutAll}
          onChange={(e) => setLogoutAll(e.target.checked)}
        />
        Se déconnecter de tous les appareils
      </CheckboxLabel>

      <ButtonContainer>
        <Button type="submit">Enregistrer</Button>
        <Button type="button" onClick={() => router.push("/login")}>
          Annuler
        </Button>
      </ButtonContainer>
    </Form>
  );
}
