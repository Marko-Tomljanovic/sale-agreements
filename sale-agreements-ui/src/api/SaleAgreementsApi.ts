import { axiosInstance } from "../services/axiosConfig";

export const fetchKP = async () => {
  const { data } = await axiosInstance.get("/kupoprodajni-ugovori");
  return data;
};

export const fetchFilterKP = async (kupac: string, aktivnost: any) => {
  const response = await axiosInstance.get(
    `/filters/kupoprodajni-ugovori?kupac=${kupac}&aktivnost=${String(
      aktivnost
    )}`
  );
  return response;
};

export const PostKP = async (values: any) => {
  const response = await axiosInstance.post(`/kupoprodajni-ugovori`, values);
  return response;
};

export const fetchDetaljiKP = async (id: string) => {
  const { data } = await axiosInstance.get(`/kupoprodajni-ugovori/${id}`);
  return data;
};
