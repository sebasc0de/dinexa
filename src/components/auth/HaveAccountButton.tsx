import Link from "next/link";

export const HaveAccountButton = () => {
  return (
    <small className="d-block text-center mt-3 desc">
      Already have an account?{" "}
      <span>
        <Link href="/login">Login</Link>
      </span>
    </small>
  );
};
