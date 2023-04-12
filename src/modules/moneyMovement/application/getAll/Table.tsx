import Table from "react-bootstrap/Table";

// Project imports
import Service from "../Service";
import { Repository } from "../Repository";

// Redux
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import { setMoneyMovement } from "../../../../redux/slices/moneyMovement-slice";
import { useEffect } from "react";

function BasicExample({ repository }: { repository: Repository }) {
  const service = new Service(repository);

  const { data } = useAppSelector((state) => state.moneyMovements);
  const dispatch = useAppDispatch();

  useEffect(() => {
    service.getAll().then((data) => {
      dispatch(setMoneyMovement(data));
    });
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
