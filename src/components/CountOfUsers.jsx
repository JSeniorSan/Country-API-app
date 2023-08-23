import { useSelector } from "react-redux";

export default function CountOfUsers() {
  const length1 = useSelector((state) => state.userReducer.info.length);
  const status = useSelector((state) => state.userReducer.status);
  const err = useSelector((state) => state.userReducer.error);
  console.log(length1);
  return (
    <div>
      <div>{"Users:" + length1}</div>
      <div>{"Status:" + status}</div>
      <div>{"ERR:" + err}</div>
    </div>
  );
}
