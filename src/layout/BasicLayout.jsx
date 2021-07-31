import HeaderContainer from "../components/layout/HeaderContainer";
import FooterContainer from "../components/layout/FooterContainer";
import { Breadcrumb, Layout } from "antd";

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
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
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
