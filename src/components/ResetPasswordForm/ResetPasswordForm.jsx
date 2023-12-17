// src/components/ResetPasswordForm.js

import { useRouter } from "next/router";
import { useState, useEffect } from "react";

import {
  NavBar,
  Form,
  PasswordTitle,
  SmallTitle,
  Label,
  FormFieldContainer,
  Input,
  Button,
  ErrorMessage,
  CheckboxLabel,
  Checkbox,
  ButtonContainer,
} from "./ResetPasswordForm.styled";
import LogoLink from "../HomeAuthLinks/LogoLink/LogoLink";
import useFormErrors from "../../hooks/useFormErrors";

// export default function ResetPasswordForm({ token }) {
//   const router = useRouter();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [logoutAll, setLogoutAll] = useState(false);

//   const { errors, setFieldError } = useFormErrors({
//     password: "",
//     confirmPassword: "",
//   });

//   useEffect(() => {
//     console.log("Token utilisé sur le client:", token);
//     const fetchEmail = async () => {
//       try {
//         const response = await fetch(`/api/auth/get-email?token=${token}`);

//         if (!response.ok) {
//           throw new Error("Impossible de récupérer l'email.");
//         }
//         const data = await response.json();
//         setEmail(data.email); // Mettre à jour l'état avec l'email récupéré
//       } catch (error) {
//         console.error(error);
//         // Gérer l'erreur (afficher un message, rediriger, etc.)
//       }
//     };

//     if (token) {
//       fetchEmail();
//     }
//   }, [token]);

//   const handlePasswordChange = (e) => {
//     const newPassword = e.target.value;
//     setPassword(newPassword);

//     if (newPassword.length > 0 && newPassword.length < 6) {
//       setFieldError(
//         "password",
//         "Le mot de passe doit comporter entre 6 et 60 caractères"
//       );
//     } else {
//       setFieldError("password", "");
//     }
//   };

//   const handleConfirmPasswordChange = (e) => {
//     const newConfirmPassword = e.target.value;
//     setConfirmPassword(newConfirmPassword);

//     let errorMessage = ""; // Variable pour stocker le message d'erreur

//     if (newConfirmPassword === "") {
//       errorMessage = ""; // Pas d'erreur si le champ est vide
//     } else if (newConfirmPassword !== password) {
//       errorMessage = "Doit correspondre à votre nouveau mot de passe.";
//     }

//     setFieldError("confirmPassword", errorMessage); // Mettre à jour l'état d'erreur une seule fois ici
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Validation avant la soumission
//     if (password.length < 6 || password.length > 60) {
//       setFieldError(
//         "password",
//         "Le mot de passe doit comporter entre 6 et 60 caractères"
//       );
//       return; // Arrête la soumission si le mot de passe est invalide
//     }

//     if (password !== confirmPassword) {
//       setFieldError(
//         "confirmPassword",
//         "Doit correspondre à votre nouveau mot de passe."
//       );
//       return; // Arrête la soumission si les mots de passe ne correspondent pas
//     }

//     try {
//       const response = await fetch("/api/auth/reset-password", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ token, newPassword: password }),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         // Gérer le succès
//         router.push("/auth/passwordChangedConfirm");
//       } else {
//         // Gérer les erreurs
//         setFieldError("password", data.message || "Une erreur est survenue");
//       }
//     } catch (error) {
//       // Gérer les erreurs de requête
//       setFieldError("password", "Erreur de communication avec le serveur");
//     }
//   };

//   return (
//     <>
//       <NavBar>
//         <LogoLink />
//       </NavBar>
//       <Form onSubmit={handleSubmit}>
//         <PasswordTitle>Modifiez votre mot de passe</PasswordTitle>
//         <SmallTitle>{`Protégez votre compte en définissant un mot de passe unique d'au moins 6 caractères.`}</SmallTitle>
//         <Label htmlFor="email">E-mail actuel</Label>
//         <FormFieldContainer>
//           <Input
//             type="email"
//             id="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//             disabled
//           />
//         </FormFieldContainer>
//         <Label htmlFor="password">Nouveau mot de passe (6-60 caractères)</Label>
//         <FormFieldContainer>
//           <Input
//             type="password"
//             id="password"
//             value={password}
//             onChange={handlePasswordChange}
//             required
//             placeholder="Nouveau mot de passe (6-60 caractères)"
//           />
//           {errors.password && <ErrorMessage>{errors.password}</ErrorMessage>}
//         </FormFieldContainer>

//         <Label htmlFor="confirmPassword">
//           Saisissez le nouveau mot de passe une 2e fois
//         </Label>
//         <FormFieldContainer>
//           <Input
//             type="password"
//             id="confirmPassword"
//             value={confirmPassword}
//             onChange={handleConfirmPasswordChange}
//             required
//             placeholder="Saisissez le nouveau mot de passe une 2e fois"
//           />
//           {errors.confirmPassword && (
//             <ErrorMessage>{errors.confirmPassword}</ErrorMessage>
//           )}
//         </FormFieldContainer>
//         <CheckboxLabel>
//           <Checkbox
//             type="checkbox"
//             id="logoutAll"
//             checked={logoutAll}
//             onChange={(e) => setLogoutAll(e.target.checked)}
//           />
//           Se déconnecter de tous les appareils
//         </CheckboxLabel>

//         <ButtonContainer>
//           <Button type="submit">Enregistrer</Button>
//           <Button type="button" onClick={() => router.push("/login")}>
//             Annuler
//           </Button>
//         </ButtonContainer>
//       </Form>
//     </>
//   );
// }

export default function ResetPasswordForm(userEmail) {
  const router = useRouter();
  const emailFromQuery = router.query.email;

  // Utilisez `emailFromQuery` pour initialiser votre état email
  const [email, setEmail] = useState(emailFromQuery || "");

  // const [email, setEmail] = useState(userEmail);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [logoutAll, setLogoutAll] = useState(false);

  const { errors, setFieldError } = useFormErrors({
    password: "",
    confirmPassword: "",
  });

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);

    if (newPassword.length > 0 && newPassword.length < 6) {
      setFieldError(
        "password",
        "Le mot de passe doit comporter entre 6 et 60 caractères"
      );
    } else {
      setFieldError("password", "");
    }
  };

  const handleConfirmPasswordChange = (e) => {
    const newConfirmPassword = e.target.value;
    setConfirmPassword(newConfirmPassword);

    let errorMessage = ""; // Variable pour stocker le message d'erreur

    if (newConfirmPassword === "") {
      errorMessage = ""; // Pas d'erreur si le champ est vide
    } else if (newConfirmPassword !== password) {
      errorMessage = "Doit correspondre à votre nouveau mot de passe.";
    }

    setFieldError("confirmPassword", errorMessage); // Mettre à jour l'état d'erreur une seule fois ici
  };

  useEffect(() => {
    // Si l'e-mail est présent dans l'URL, décodez-le et mettez à jour l'état
    if (router.query.email) {
      setEmail(decodeURIComponent(router.query.email));
    }
  }, [router.query]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation avant la soumission
    if (password.length < 6 || password.length > 60) {
      setFieldError(
        "password",
        "Le mot de passe doit comporter entre 6 et 60 caractères"
      );
      return; // Arrête la soumission si le mot de passe est invalide
    }

    if (password !== confirmPassword) {
      setFieldError(
        "confirmPassword",
        "Doit correspondre à votre nouveau mot de passe."
      );
      return; // Arrête la soumission si les mots de passe ne correspondent pas
    }

    // Si tout est valide, redirige vers la page de confirmation
    router.push("/auth/passwordChangedConfirm");
  };

  return (
    <>
      <NavBar>
        <LogoLink />
      </NavBar>
      <Form onSubmit={handleSubmit}>
        <PasswordTitle>Modifiez votre mot de passe</PasswordTitle>
        <SmallTitle>{`Protégez votre compte en définissant un mot de passe unique d'au moins 6 caractères.`}</SmallTitle>
        <Label htmlFor="email">E-mail actuel</Label>
        <FormFieldContainer>
          <Input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled
          />
        </FormFieldContainer>
        <Label htmlFor="password">Nouveau mot de passe (6-60 caractères)</Label>
        <FormFieldContainer>
          <Input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
            placeholder="Nouveau mot de passe (6-60 caractères)"
          />
          {errors.password && <ErrorMessage>{errors.password}</ErrorMessage>}
        </FormFieldContainer>

        <Label htmlFor="confirmPassword">
          Saisissez le nouveau mot de passe une 2e fois
        </Label>
        <FormFieldContainer>
          <Input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            required
            placeholder="Saisissez le nouveau mot de passe une 2e fois"
          />
          {errors.confirmPassword && (
            <ErrorMessage>{errors.confirmPassword}</ErrorMessage>
          )}
        </FormFieldContainer>
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
    </>
  );
}
