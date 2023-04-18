import Table from "react-bootstrap/Table";

// Redux
import { useAppSelector } from "../../redux/hooks";

function BasicExample() {
  const { data } = useAppSelector((state) => state.moneyMovements);

  return (
    <Table className="spend-table" responsive bordered>
      <thead>
        <tr>
          <th className="subtitle">#</th>
          <th className="subtitle">Name</th>
          <th className="subtitle">Total</th>
          <th className="subtitle">Category</th>
          <th className="subtitle">Type</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => {
          return (
            <tr key={item.id}>
              <td className="subtitle">{item.id}</td>
              <td className="desc">{item.name}</td>
              <td className="desc">{item.total}</td>
              <td className="desc">{item.category}</td>
              <td className="">Spended money</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}

export default BasicExample;
