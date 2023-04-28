import { useState } from "react";
import MessageOne from "../UI/Messages/MessageOne";

const WalletInitialMessage = () => {
  const [show, setShow] = useState(true);

  if (!show) return null;
  return (
    <MessageOne
      title="Do yo have money?"
      subtitle="Set up your wallet with your money and total savings before start."
      imgUrl="gifs/Configuration.gif"
      imgSize={300}
      buttonText="Start now"
      buttonAction={() => setShow(false)}
    />
  );
};

export default WalletInitialMessage;
