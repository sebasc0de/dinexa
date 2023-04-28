import { useRouter } from "next/router";
import MessageOne from "../components/UI/Messages/MessageOne";

const AccountCreated = () => {
  const router = useRouter();

  return (
    <main className="p-2 p-md-5">
      <MessageOne
        title="Account created!"
        subtitle="Confirm your singup with the link in your email account."
        imgUrl="gifs/Success.gif"
        buttonAction={() => router.push("/")}
        buttonText="Return"
      />
    </main>
  );
};

export default AccountCreated;
