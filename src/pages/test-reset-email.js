import ResetEmail from "@/components/ResetEmail/ResetEmail";
import React from "react";

const TestResetEmailPage = () => {
  // Remplacez ces valeurs par celles que vous souhaitez tester
  const testUsername = "TestUser";
  const testResetLink = "http://localhost:3000/auth/reset-password/test-token";

  return <ResetEmail username={testUsername} resetLink={testResetLink} />;
};

export default TestResetEmailPage;
