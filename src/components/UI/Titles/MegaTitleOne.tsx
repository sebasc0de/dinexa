export const MegaTitleOne = ({ Component, desc, subtitle, title }: Props) => {
  return (
    <div className="megaTitleOne">
      <h2 className="megaTitleOne--title">{title}</h2>
      <h4 className="megaTitleOne--subtitle">{subtitle}</h4>

      <span className="megaTitleOne--desc">{desc}</span>
      {Component && <Component />}
    </div>
  );
};

interface Props {
  title: string;
  subtitle: string;
  desc: string;
  Component: React.FC;
}
