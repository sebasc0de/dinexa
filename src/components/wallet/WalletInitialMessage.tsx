import MessageOne from "../UI/Messages/MessageOne";

const WalletInitialMessage = ({ onStepComplete }: Props) => {
  return (
    <MessageOne
      title="Before start..."
      subtitle="Set up your wallet with your money and total savings before start."
      imgUrl="gifs/Configuration.gif"
      imgSize={300}
      buttonText="Start now"
      buttonAction={onStepComplete}
    />
  );
};

interface Props {
  onStepComplete: () => void;
}

export default WalletInitialMessage;
