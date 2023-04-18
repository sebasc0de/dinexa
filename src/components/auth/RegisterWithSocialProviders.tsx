import { LoginWithFacebook } from "./LoginWithFacebook";
import { LoginWithGoogle } from "./LoginWithGoogle";

export const RegisterWithSocialProviders = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "1rem",
        marginBottom: "1rem",
      }}
    >
      <LoginWithGoogle />
      <LoginWithFacebook />
    </div>
  );
};
