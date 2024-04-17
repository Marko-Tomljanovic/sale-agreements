import { SnippetsOutlined } from "@ant-design/icons";
import { Layout, Menu } from "antd";
import { useNavigate } from "react-router-dom";

const { Sider } = Layout;

const SiderMenu = ({ collapsed }: { collapsed: boolean }) => {
  const navigate = useNavigate();

  const changeRoute = (route: string) => {
    navigate(`${route}`);
  };

  return (
    <Sider trigger={null} collapsible collapsed={collapsed} width={230}>
      <div className="demo-logo-vertical" />
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["/"]}
        onClick={(e) => {
          changeRoute(e.key);
        }}
        items={[
          {
            key: "/",
            icon: <SnippetsOutlined />,
            label: "Kupoprodajni ugovori",
          },
        ]}
      />
    </Sider>
  );
};

export default SiderMenu;
