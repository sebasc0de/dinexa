import { useState } from "react";
import Form from "react-bootstrap/Form";

// Categories
import SpendCategories from "../../data/spend/categories";

// Spend category
import { SpendCategory } from "../../types";

function BasicExample({ onChangeHandler }: Props) {
  const [categories, setCategories] =
    useState<SpendCategory[]>(SpendCategories);

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
        {categories.map((item) => {
          return (
            <option key={item.id} value={item.title}>
              {item.title}
            </option>
          );
        })}
      </Form.Select>
    </>
  );
}

interface Props {
  onChangeHandler: (e: any) => void;
}

export default BasicExample;
