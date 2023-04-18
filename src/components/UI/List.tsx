import React from "react";

export const List = ({ listTitle, data }: Props) => {
  return (
    <ul className="list">
      <h4 className="title--3">{listTitle}</h4>
      {data.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
};

interface Props {
  listTitle: string;
  data: string[];
}
