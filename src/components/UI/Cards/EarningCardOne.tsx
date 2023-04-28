import { IconBaseProps } from "react-icons";

const EarningCardOne = ({ title, earning, Icon }: Props) => {
  return (
    <div className="earningCardOne">
      {Icon && <Icon size={40} />}
      <div>
        <span className="pre-title">{title}</span>
        <h4 className="earning">{earning}</h4>
      </div>
    </div>
  );
};

interface Props {
  title: string;
  earning: string;
  Icon?: React.FC<IconBaseProps>;
}

export default EarningCardOne;
