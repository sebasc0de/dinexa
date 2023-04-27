const EarningCardOne = ({ title, earning }: Props) => {
  return (
    <div className="earningCardOne">
      <span>i</span>
      <div>
        <span className="pre-title">{title}</span>
        <h4 className="earning">${earning.toFixed(2)}</h4>
      </div>
    </div>
  );
};

interface Props {
  title: string;
  earning: number;
}

export default EarningCardOne;
