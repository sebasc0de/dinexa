import { ReactNode } from "react";

const EarningCardTwo = ({ title, earning, Icon }: Props) => {
  return (
    <div className="earningCardTwo">
      {Icon}
      <div>
        <span className="pre-title">{title}</span>
        <h5 className="earning">{earning}</h5>
      </div>
    </div>
  );
};

interface Props {
  title: string;
  earning: string;
  Icon: ReactNode;
}

export default EarningCardTwo;
