import { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";

// Spend category
import { getAll } from "../../modules/spend_category/application/Service";
import { Repository } from "../../modules/spend_category/application/Repository";
import { SpendCategory } from "../../types";

function BasicExample({ onChangeHandler, repository }: Props) {
  const [categories, setCategories] = useState<SpendCategory[]>([]);

  useEffect(() => {
    getAll(repository).then(setCategories);
  }, []);

  return (
    <>
      <Form.Label>Category:</Form.Label>
      <Form.Select
        onChange={onChangeHandler}
        className="mb-3"
        autoComplete="off"
        name="category"
        aria-label="Default select example"
      >
        {categories.map((item) => (
          <option key={item.id} value={item.id}>
            {item.title}
          </option>
        ))}
      </Form.Select>
    </>
  );
}

interface Props {
  onChangeHandler: (e: any) => void;
  repository: Repository;
}

export default BasicExample;
