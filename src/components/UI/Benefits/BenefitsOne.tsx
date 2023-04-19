import { Col, Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";

export const BenefitsOne = ({ data, title, subtitle }: Props) => {
  const { t } = useTranslation(["homepage"]);

  return (
    <Container className="benefitsOne p-0 p-lg-5">
      <Row className="text-center">
        <h2 className="subtitle">{title}</h2>
        <p className="desc">{subtitle}</p>
      </Row>
      <Row>
        {data.map((item, i) => {
          const { Icon, title, desc } = item;

          return (
            <Col key={i} className="benefitsOne__card" lg={6}>
              <div className="benefitsOne__card--iconbox">
                <Icon />
              </div>

              <h5 className="benefitsOne__card--title">
                {t(`benefitsOne.data.${title}`)}
              </h5>
              <p className="benefitsOne__card--desc">
                {t(`benefitsOne.data.${desc}`)}
              </p>
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
