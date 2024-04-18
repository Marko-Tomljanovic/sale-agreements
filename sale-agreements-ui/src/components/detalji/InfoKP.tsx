import { Descriptions } from "antd";
import dayjs from "dayjs";
import useConstructStatusTag from "../../custom-hooks/useConstructStatusTag";

export default function InfoKP({ detalji }: { detalji: any }) {
  const { constructStatusTag } = useConstructStatusTag();

  return (
    <>
      <Descriptions bordered title="Detalji kupoprodajnog ugovora">
        <Descriptions.Item label="Kupac">{detalji.kupac}</Descriptions.Item>
        <Descriptions.Item label="Broj ugovora">
          {detalji.broj_ugovora}
        </Descriptions.Item>
        <Descriptions.Item label="Datum akontacija">
          {dayjs(detalji.datum_akontacije).format("DD.MM.YYYY")}
        </Descriptions.Item>
        <Descriptions.Item label="Rok isporuke">
          {dayjs(detalji.rok_isporuke).format("DD.MM.YYYY")}
        </Descriptions.Item>
        <Descriptions.Item label="Status">
          {constructStatusTag(detalji.status)}
        </Descriptions.Item>
      </Descriptions>
    </>
  );
}
