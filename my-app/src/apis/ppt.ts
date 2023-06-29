import axios from "axios";

/**
 * @description 유저의 모든 ppt 가져오기
 * @async
 * @function getPptList
 * @method GET
 * @param {/form} url
 * @returns {IPptList}
 */

export const getPptList = async () => {
  const response = await axios.get(`/form`);

  return response.data;
};

export interface IPpt {
  formIdx: number;
  imgUrl: string;
}

export interface IPptList {
  pptList: IPpt[];
}

/**
 * @description 한 ppt의 모든 slides 가져오기
 * @async
 * @function IPptSlideList
 * @method GET
 * @param {/form/{formIdx}} url
 * @returns {IPptSlideList}
 */
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

/**
 * @description ppt 저장 api
 * @async
 * @function savePpt
 * @method POST
 * @param {/form} url
 */

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

export const postPpt = async (formData: any) => {
  const response = await axios.post(`http://127.0.0.1:5000/form`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response;
};
