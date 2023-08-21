import { useSelector } from "react-redux";

export default function CountOfUsers() {
  const length1 = useSelector((state) => state.userReducer.length);
  console.log(length1);
  return <div>{"Users:" + length1}</div>;
}
