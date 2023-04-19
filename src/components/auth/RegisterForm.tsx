import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { supabase } from "../../lib/supabase";

const RegisterForm = () => {
  return (
    <Auth
      socialLayout="horizontal"
      view="sign_up"
      supabaseClient={supabase}
      providers={["google", "facebook", "twitter"]}
      appearance={{
        theme: ThemeSupa,
        variables: {
          default: {
            colors: {
              brandAccent: "#007aff",
              brand: "#007aff",
            },
          },
        },
      }}
    />
  );
};

export default RegisterForm;
