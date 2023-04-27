import { Button } from "react-bootstrap";

const CardOne = ({ cardTitle, cardDesc, Component }: Props) => {
  return (
    <div className="cardOne">
      <h5 className="cardOne--title">{cardTitle}</h5>
      <p className="cardOne--desc">{cardDesc}</p>
      {Component && <Component />}
    </div>
  );
};

interface Props {
  cardTitle: string;
  cardDesc: string;
  Component?: React.FC;
}

export default CardOne;
