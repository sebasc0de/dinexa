import { IconBaseProps } from "react-icons";

const MegaTitleThree = ({ title, desc, Icon }: Props) => {
  return (
    <div className="text-center megaTitleThree">
      <Icon className="box-icon" size={50} />
      <h4 className="subtitle mt-3">{title}</h4>
      <p className="desc">{desc}</p>
    </div>
  );
};

interface Props {
  title: string;
  desc: string;
  Icon: React.FC<IconBaseProps>;
}

export default MegaTitleThree;
