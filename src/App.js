import "./App.css";
import HomePage from "./pages/HomePage";
import HeaderContainer from "./layout/HeaderContainer";
import MainContentsContainer from "./layout/MainContentsContainer";
import FooterContainer from "./layout/FooterContainer";
import { Layout } from "antd";

const App = () => {
  return (
    <Layout className="container">
      <HeaderContainer />
      <MainContentsContainer />
      <FooterContainer />
    </Layout>
  );
};

export default App;
