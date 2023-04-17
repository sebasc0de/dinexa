import { Col, Container, Row } from "react-bootstrap";

export const BenefitsOne = ({ data, title, subtitle }: Props) => {
  return (
    <Container className="benefitsOne p-0 p-lg-5">
      <Row className="text-center">
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </Row>
      <Row>
        {data.map((item, i) => {
          const { Icon, title, desc } = item;

          return (
            <Col key={i} className="benefitsOne__card" lg={6}>
              <div className="benefitsOne__card--iconbox">
                <Icon />
              </div>

              <h5 className="benefitsOne__card--title">{title}</h5>
              <p className="benefitsOne__card--desc">{desc}</p>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

interface Props {
  title: string;
  subtitle: string;
  data: BenefitItem[];
}

export interface BenefitItem {
  title: string;
  desc: string;
  Icon: React.FC;
}
