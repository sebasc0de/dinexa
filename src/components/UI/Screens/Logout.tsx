import { useRouter } from "next/router";
import MessageOne from "../Messages/MessageOne";

const Logout = () => {
  const router = useRouter();

  return (
    <main className="p-2 p-md-5">
      <MessageOne
        title="Logout succesfull"
        subtitle="You have successfully logged out"
        imgUrl="gifs/Logout.gif"
        buttonAction={() => router.push("/")}
        buttonText="Go to homepage"
      />
    </main>
  );
};

export default Logout;
