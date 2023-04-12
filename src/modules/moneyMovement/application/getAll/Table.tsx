import Table from "react-bootstrap/Table";

// Redux
import { useAppSelector } from "../../../../redux/hooks";

function BasicExample() {
  const { data } = useAppSelector((state) => state.moneyMovements);

  return (
    <Table responsive striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Total</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
        {data?.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.total}</td>
            <td>{item.category}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default BasicExample;
