import { useRouter } from "next/router";
import MessageOne from "../Messages/MessageOne";

const Unauthorized = () => {
  const router = useRouter();

  return (
    <main className="p-2 p-md-5">
      <MessageOne
        title="Unauthorized"
        subtitle="Your session have been expired, please login with your account"
        imgUrl="gifs/Unauthorized.gif"
        buttonAction={() => router.push("/login")}
        buttonText="Login"
      />
    </main>
  );
};

export default Unauthorized;
