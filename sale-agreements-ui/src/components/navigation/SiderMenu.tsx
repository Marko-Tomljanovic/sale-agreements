import { SnippetsOutlined } from "@ant-design/icons";
import { Layout, Menu } from "antd";

const { Sider } = Layout;

const SiderMenu = ({ collapsed }: { collapsed: boolean }) => {
  return (
    <Sider trigger={null} collapsible collapsed={collapsed} width={230}>
      <div className="demo-logo-vertical" />
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["1"]}
        items={[
          {
            key: "1",
            icon: <SnippetsOutlined />,
            label: "Kupoprodajni ugovori",
          },
        ]}
      />
    </Sider>
  );
};

export default SiderMenu;
