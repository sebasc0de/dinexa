import { ReactNode } from "react";

const EarningCardOne = ({ title, earning, Icon }: Props) => {
  return (
    <div className="earningCardOne">
      {Icon}
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
  Icon: ReactNode;
}

export default EarningCardOne;
