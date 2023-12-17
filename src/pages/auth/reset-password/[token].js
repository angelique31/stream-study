// src/pages/auth/reset-password/[token].js

import ResetPasswordForm from "@/components/ResetPasswordForm/ResetPasswordForm";
import { useRouter } from "next/router";

const ResetPasswordPage = () => {
  const router = useRouter();
  const { token } = router.query;

  // Vous pouvez passer le token au formulaire ou l'utiliser directement dans cette page
  return <ResetPasswordForm token={token} />;
};

export default ResetPasswordPage;
