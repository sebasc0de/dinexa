const SimpleTitleOne = ({ title, desc }: Props) => {
  return (
    <div className="mb-5">
      <h3 className="title--2 text-center">{title}</h3>
      <p className="desc text-center text-xl">{desc}</p>
    </div>
  );
};

interface Props {
  title: string;
  desc: string;
}

export default SimpleTitleOne;
