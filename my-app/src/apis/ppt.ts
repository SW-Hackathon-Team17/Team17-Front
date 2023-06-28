import axios from "axios";

export const getPptList = async () => {
  const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/ppt`);

  return response.data;
};

export interface IPpt {
  pptIdx: number;
  imgUrl: string;
}

export interface IPptList {
  pptList: IPpt[];
}
