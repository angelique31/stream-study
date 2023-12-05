import EmailSentModal from "@/components/EmailSentModal/EmailSentModal";
import Footer from "@/components/Footer/Footer";
import ForgotPasswordModal from "@/components/ForgotPasswordModal/ForgotPasswordModal";

function loginHelp() {
  return (
    <>
      <ForgotPasswordModal />
      {/* <EmailSentModal /> */}
      <Footer />
    </>
  );
}

export default loginHelp;
