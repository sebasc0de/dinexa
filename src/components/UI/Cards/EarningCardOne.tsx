const EarningCardOne = ({ title, earning, Icon }: Props) => {
  return (
    <div className="earningCardOne">
      <Icon size={40} />
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
  Icon: React.FC<Icon>;
}

interface Icon {
  size: number;
}

export default EarningCardOne;
