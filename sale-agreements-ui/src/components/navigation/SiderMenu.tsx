import { FormOutlined, SnippetsOutlined } from "@ant-design/icons";
import { Layout, Menu, Space, Typography } from "antd";
import { useNavigate } from "react-router-dom";

const { Sider } = Layout;

const SiderMenu = ({ collapsed }: { collapsed: boolean }) => {
  const navigate = useNavigate();

  const changeRoute = (route: string) => {
    navigate(`${route}`);
  };

  const isTitle = !collapsed ? "Zadatak" : null;

  return (
    <Sider trigger={null} collapsible collapsed={collapsed} width={230}>
      <Typography.Title
        level={3}
        style={{ textAlign: "center", color: "white" }}
      >
        <Space size={"middle"}>
          <FormOutlined />
          {isTitle}
        </Space>
      </Typography.Title>
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
