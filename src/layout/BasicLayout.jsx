import HeaderContainer from "../components/layout/HeaderContainer";
import FooterContainer from "../components/layout/FooterContainer";
import { Breadcrumb, Layout } from "antd";
import { Link } from "react-router-dom";

const { Content } = Layout;

const BasicLayout = ({ Page }) => {
  return (
    <>
      {/* Header */}
      <HeaderContainer />

      {/* Main Container */}
      <Content className="main">
        {/* Breadcrumb  */}
        <Breadcrumb className="main__breadcrumb">
          <Breadcrumb.Item>
            <Link to="/home">Home</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>app</Breadcrumb.Item>
        </Breadcrumb>

        {/* Page */}
        <Page />
      </Content>

      {/* Footer */}
      <FooterContainer />
    </>
  );
};

export default BasicLayout;
