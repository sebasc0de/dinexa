export const MegaTitleTwo = ({
  Component,
  desc,
  title,
  gradientText,
}: Props) => {
  return (
    <div className="megaTitleTwo">
      <h2 className="megaTitleTwo--title">
        {title}
        <span className="megaTitleTwo--gradient">{gradientText}</span>
      </h2>

      <span className="megaTitleTwo--desc">{desc}</span>
      {Component && <Component />}
    </div>
  );
};

interface Props {
  title: string;
  gradientText: string;
  subtitle: string;
  desc: string;
  Component?: React.FC;
}
