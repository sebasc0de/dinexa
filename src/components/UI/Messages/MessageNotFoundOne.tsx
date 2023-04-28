import { IconBaseProps } from "react-icons";

const MessageNotFoundOne = ({ text, Icon }: Props) => {
  return (
    <div className="box-1 messageNotFoundOne">
      {Icon && <Icon size={25} />}
      {text}
    </div>
  );
};

interface Props {
  text: string;
  Icon?: React.FC<IconBaseProps>;
}

export default MessageNotFoundOne;
