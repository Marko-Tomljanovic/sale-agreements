import { useState, ReactNode } from "react";
import { Layout, theme } from "antd";
import MasterHeader from "../navigation/headers/MasterHeader";
import SiderMenu from "../navigation/SiderMenu";

const { Content } = Layout;

const GlavniLayout = ({ children }: { children: ReactNode }) => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{ height: "100vh" }}>
      <SiderMenu collapsed={collapsed} />
      <Layout>
        <MasterHeader collapsed={collapsed} setCollapsed={setCollapsed} />
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <main>{children}</main>
        </Content>
      </Layout>
    </Layout>
  );
};

export default GlavniLayout;
