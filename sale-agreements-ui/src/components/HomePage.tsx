import { EditOutlined } from "@ant-design/icons";
import { Button, Table, Tooltip } from "antd";
import useConstructStatusTag from "../custom-hooks/useConstructStatusTag";
import { useState } from "react";
import ModalChangeKupoprodajniUgovor from "../modals/ModalChangeKupoprodajniUgovor";
import { constructEditIconTooltip } from "../utils/constructs";
import { SelectedRow } from "../utils/types";
import FiltersListaKP from "./filters/FiltersListaKP";
import { useNavigate } from "react-router-dom";
import { INIT_STATE_SELECTED_ROW } from "../utils/initialStates";

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedRow, setSelectedRow] = useState<SelectedRow>(
    INIT_STATE_SELECTED_ROW
  );
  const navigate = useNavigate();
  const { constructStatusTag } = useConstructStatusTag();

  const dataSource = [
    {
      id: "1",
      kupac: "Filip Filipović",
      broj_ugovora: "10/33",
      datum_akontacije: "25.08.2024",
      rok_isporuke: "25.08.2024",
      status: 1,
    },
    {
      id: "2",
      kupac: "Marko Filipović",
      broj_ugovora: "10/33",
      datum_akontacije: "25.08.2024",
      rok_isporuke: "25.08.2024",
      status: 2,
    },
    {
      id: "3",
      kupac: "Janko Filipović",
      broj_ugovora: "10/33",
      datum_akontacije: "25.08.2024",
      rok_isporuke: "25.08.2024",
      status: 3,
    },
  ];

  const columns = [
    {
      title: "Ime kupca",
      dataIndex: "kupac",
      key: "kupac",
    },
    {
      title: "Broj ugovora",
      dataIndex: "broj_ugovora",
      key: "broj_ugovora",
    },
    {
      title: "Rok isporuke",
      dataIndex: "rok_isporuke",
      key: "rok_isporuke",
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
    {
      title: "Akcije",
      key: "akcije",
      render: (record: any) => {
        return (
          <Tooltip
            placement="top"
            title={constructEditIconTooltip(record.status)}
          >
            <Button
              type="link"
              icon={<EditOutlined />}
              disabled={record.status === 3}
              onClick={(event) => {
                event.stopPropagation(); // Zaustavi pokretanje detalja
                setSelectedRow(record);
                setIsModalOpen(true);
              }}
            />
          </Tooltip>
        );
      },
    },
  ];
  return (
    <>
      <FiltersListaKP />
      <Table
        dataSource={dataSource}
        columns={columns}
        rowKey="id"
        onRow={(record, rowIndex) => {
          return {
            onClick: (event) => {
              navigate(`/detalji/${record.id}`);
            },
            style: { cursor: "pointer" },
          };
        }}
        pagination={false}
      ></Table>
      <ModalChangeKupoprodajniUgovor
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        selectedRow={selectedRow}
      />
    </>
  );
}
