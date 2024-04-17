import { Descriptions } from "antd";

export default function InfoKP({ detalji }: { detalji: any }) {
  return (
    <>
      <Descriptions bordered title="Detalji kupoprodajnog ugovora">
        <Descriptions.Item label="Kupac">Marko Marić</Descriptions.Item>
        <Descriptions.Item label="Broj ugovora">1810000000</Descriptions.Item>
        <Descriptions.Item label="Datum akontacija">
          10.10.2020
        </Descriptions.Item>
        <Descriptions.Item label="Rok isporuke">10.10.2020</Descriptions.Item>
        <Descriptions.Item label="Status">3</Descriptions.Item>
      </Descriptions>
    </>
  );
}
