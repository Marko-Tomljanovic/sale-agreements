import { Table, Typography } from "antd";
import useConstructStatusTag from "../../custom-hooks/useConstructStatusTag";

export default function TableArtikli({ data }: { data: any }) {
  const { constructStatusTag } = useConstructStatusTag();

  const columns = [
    {
      title: "Naziv artikla",
      dataIndex: "naziv",
      key: "naziv",
    },
    {
      title: "Dobavljač",
      dataIndex: "dobavljac",
      key: "dobavljac",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (text: any) => {
        return (
          <span style={{ whiteSpace: "nowrap" }}>
            {constructStatusTag(text)}
          </span>
        );
      },
    },
  ];
  return (
    <>
      <Typography.Title level={5}>Lista artikla</Typography.Title>
      <Table
        dataSource={data}
        columns={columns}
        rowKey="id"
        pagination={false}
      ></Table>
    </>
  );
}
