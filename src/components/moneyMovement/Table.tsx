import Table from "react-bootstrap/Table";

// Redux
import { useAppSelector } from "../../redux/hooks";

function BasicExample() {
  const { data } = useAppSelector((state) => state.moneyMovements);

  return (
    <Table className="spend-table" responsive bordered>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Total</th>
          <th>Category</th>
          <th>Type</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => {
          return (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.total}</td>
              <td>{item.category}</td>
              <td>Spended money</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}

export default BasicExample;
