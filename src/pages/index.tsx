import Form from "../modules/moneyMovement/application/create/Form";

// Project imports
import Repository from "../modules/moneyMovement/infraestructure/JSONRepository";

const index = () => {
  return (
    <div>
      <Form repository={new Repository()} />
    </div>
  );
};

export default index;
