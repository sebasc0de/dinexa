import MessageOne from "../UI/Messages/MessageOne";

const WalletInitialMessage = ({ onStepComplete }: Props) => {
  return (
    <MessageOne
      title="Before start..."
      subtitle="Set up your wallet by adding your current funds before getting started."
      imgUrl="gifs/Money.gif"
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
