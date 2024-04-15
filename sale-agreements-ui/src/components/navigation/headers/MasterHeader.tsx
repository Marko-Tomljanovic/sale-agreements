import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import { Button, Col, Layout, Row, Typography, theme } from "antd";

const { Header } = Layout;

const MasterHeader = ({
  collapsed,
  setCollapsed,
}: {
  collapsed: boolean;
  setCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const headerStyle = {
    padding: "0",
    background: colorBgContainer,
    whiteSpace: "nowrap",
  } as React.CSSProperties;

  return (
    <Header style={headerStyle}>
      <Row align={"middle"} wrap={false}>
        <Col flex="none">
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
          <Typography.Text strong>Lista kupoprodajnih ugovora</Typography.Text>
        </Col>

        <Col flex="auto">
          <Button
            type="primary"
            icon={<PlusOutlined />}
            style={{ float: "right", marginRight: "20px" }}
          >
            Dodaj kupoprodajni ugovor
          </Button>
        </Col>
      </Row>
    </Header>
  );
};

export default MasterHeader;
