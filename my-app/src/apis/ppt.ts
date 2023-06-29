import axios from "axios";

// 유저의 모든 ppt 가져오기
// HttpMethod : GET
// uri : /form

export const getPptList = async () => {
  const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/form`);

  return response.data;
};

export interface IPpt {
  formIdx: number;
  imgUrl: string;
}

export interface IPptList {
  pptList: IPpt[];
}

// 한 ppt의 모든 slides 가져오기
// HttpMethod : GET
// uri : /form/{formIdx}
export interface IPptSlide {
  pptIdx: number;
  imgUrl: string;
}

export interface IPptSlideList {
  pptSlideList: IPptSlide[];
}

export const getPptSlideList = async (formIdx: number) => {
  const response = await axios.get(
    `${process.env.REACT_APP_BASE_URL}/form/${formIdx}`
  );
  return response.data;
};

// ppt 저장 api
// HttpMethod : POST
// uri : /form

interface IPptSave {
  imgUrl: string[];
}

export const savePpt = async (pptSave: IPptSave) => {
  const response = await axios.post(
    `${process.env.REACT_APP_BASE_URL}/form`,
    pptSave
  );
  return response;
};
