import Link from "next/link";

const CreateAccountButton = () => {
  return (
    <small className="d-block text-center mt-3 desc">
      Have you an account?{" "}
      <span>
        <Link href="/create-account">Register</Link>
      </span>
    </small>
  );
};

export default CreateAccountButton;
