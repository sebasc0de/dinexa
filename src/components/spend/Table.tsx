import Table from "react-bootstrap/Table";

// Redux
import { useAppSelector } from "../../redux/hooks";
import TotalTableItem from "../UI/TotalTableItem";
import MessageNotFoundOne from "../UI/Messages/MessageNotFoundOne";

// Icons
import { HiOutlineInformationCircle } from "react-icons/hi";
import { dateFormatter } from "../../utils/returnDate";

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
          <th className="subtitle">Name</th>
          <th className="subtitle">Date</th>
          <th className="subtitle">Category</th>
          <th className="subtitle">Total</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => {
          const date = dateFormatter(item.created_at, true);

          return (
            <tr key={item.id}>
              <td className="subtitle">{item.name}</td>
              <td className="desc">{date}</td>
              <Category id={item.category_id} />
              <td>
                <TotalTableItem
                  message="This money has been subtracted from your wallet."
                  type="substract"
                  total={item.total}
                />
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}

const Category = ({ id }: { id: number }) => {
  return <td className="desc">dsaa</td>;
};

export default BasicExample;
