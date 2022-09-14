import Card from "@/components/Card/Card.jsx";
import Compute from "@/components/Compute/Compute";
import ReactLog from "@/assets/react.svg";
import { Divider } from "antd-mobile";

const Home = () => {
  return (
    <>
      <Card price="100" src={ReactLog} />
      <Divider />
      <Compute />
      <Divider />
    </>
  );
};
export default Home;
