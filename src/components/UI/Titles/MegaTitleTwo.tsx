export const MegaTitleTwo = ({
  Component,
  desc,
  title,
  gradientText,
}: MegaTitleTwoProps) => {
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

export interface MegaTitleTwoProps {
  title: string;
  gradientText: string;
  desc: string;
  Component?: React.FC;
}
