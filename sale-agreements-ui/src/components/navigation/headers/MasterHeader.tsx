import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Button, Col, Layout, Row, Typography, theme } from "antd";
import GoBackButton from "../../buttons/GoBackButton";
import { useLocation } from "react-router-dom";
import HeaderButtons from "../../buttons/HeaderButtons";

const { Header } = Layout;

const MasterHeader = ({
  collapsed,
  setCollapsed,
}: {
  collapsed: boolean;
  setCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const location = useLocation();
  const pathname = location.pathname;

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const headerStyle = {
    padding: "0",
    background: colorBgContainer,
    whiteSpace: "nowrap",
  } as React.CSSProperties;

  const constructHeaderTitle = () => {
    let title = "Lista kupoprodajnih ugovora";
    if (pathname.includes("/detalji")) title += "  / Detalji";
    return title;
  };

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
          {pathname.includes("/detalji") && <GoBackButton />}

          <Typography.Text strong>{constructHeaderTitle()}</Typography.Text>
        </Col>

        <Col flex="auto">
          <HeaderButtons />
        </Col>
      </Row>
    </Header>
  );
};

export default MasterHeader;
