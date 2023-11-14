// hooks/useEmailRedirect.js
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { clearUserEmail } from "../store/actions/emailActions";

const useEmailRedirect = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const email = useSelector((state) => state.email.email);

  useEffect(() => {
    if (!email) {
      router.push("/");
    }
  }, [email, router]);

  useEffect(() => {
    return () => {
      dispatch(clearUserEmail());
    };
  }, [dispatch]);

  return email;
};

export default useEmailRedirect;
