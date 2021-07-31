import "./App.css";
import BasicLayout from "./layout/BasicLayout";
import HomePage from "./pages/HomePage";
import { Layout } from "antd";

const App = () => {
  return (
    <Layout className="container">
      {/* Router */}
      {/* Home 화면 */}
      <BasicLayout Page={HomePage} />
    </Layout>
  );
};

export default App;
