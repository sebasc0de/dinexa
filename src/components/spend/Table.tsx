import Table from "react-bootstrap/Table";

// Redux
import { useAppSelector } from "../../redux/hooks";
import TotalTableItem from "../UI/TotalTableItem";
import MessageNotFoundOne from "../UI/Messages/MessageNotFoundOne";

// Icons
import { HiOutlineInformationCircle } from "react-icons/hi";

function BasicExample() {
  const { data } = useAppSelector((state) => state.spends);

  if (data.length < 1)
    return (
      <MessageNotFoundOne
        Icon={HiOutlineInformationCircle}
        text="Not money movements yet"
      />
    );
  return (
    <Table className="spend-table" responsive bordered>
      <thead>
        <tr>
          <th className="subtitle">#</th>
          <th className="subtitle">Name</th>
          <th className="subtitle">Category</th>
          <th className="subtitle">Total</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => {
          return (
            <tr key={item.id}>
              <td className="subtitle">{item.id}</td>
              <td className="desc">{item.name}</td>
              <td className="desc">{item.category}</td>
              <td>
                <TotalTableItem type="substract" total={item.total} />
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}

export default BasicExample;