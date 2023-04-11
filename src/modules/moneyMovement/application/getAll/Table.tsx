import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";

// Project imports
import { MoneyMovement } from "../../../../types";
import { Repository } from "../Repository";
import Service from "../Service";

function BasicExample({ repository }: { repository: Repository }) {
  // Service init
  const service = new Service(repository);

  // Movements state
  const [movements, setMovements] = useState<MoneyMovement[]>();

  useEffect(() => {
    const data = service.getAll();
    setMovements(data);
  }, []);

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
        {movements?.map((item) => (
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
