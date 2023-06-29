import axios from "axios";

/**
 * @description 스크립트 불러오기 API
 * @async
 * @function IPptSlideList
 * @method GET
 * @param {/form/{formIdx}/{pgNum}/script} url
 * @returns {IScript}
 */
export interface IScript {
  script: string;
}

export const getScript = async (formIdx: number, pgNum: number) => {
  const response = await axios.get(`/form/${formIdx}/${pgNum}/script`);
  return response.data;
};

/**
 *  @description 스크립트 저장하기 API
 * @async
 * @function saveScript
 * @method POST
 * @param {/form/{formIdx}/{pgNum}/script} url
 */

export const saveScript = async (
  formIdx: number | null,
  pgNum: number,
  script: string
) => {
  const response = await axios.post(`/form/${formIdx}/${pgNum}/script`, script);
  return response.data;
};

/**
 * @description 스크립트 수정하기 API
 * @async
 * @function updateScript
 * @method PUT
 * @param {/form/{formIdx}/{pgNum}/script} url
 */

export const updateScript = async (
  formIdx: number,
  pgNum: number,
  script: string
) => {
  const response = await axios.put(
    `${process.env.REACT_APP_BASE_URL}/form/${formIdx}/${pgNum}/script`,
    { script }
  );
  return response;
};

/**
 * @description 스크립트 삭제하기 API
 * @function deleteScript
 * @method DELETE
 * @param {/form/{formIdx}/{pgNum}/script} url
 */

export const deleteScript = (formIdx: number, pgNum: number) => {
  const response = axios.delete(
    `${process.env.REACT_APP_BASE_URL}/form/${formIdx}/${pgNum}/script`
  );
  return response;
};

export const postData = async (formIdx: number, pgNum: number, data: any) => {
  const response = await axios.post(
    `http://127.0.0.1:5000/form/${formIdx}/${pgNum}/data`,
    data
  );
  return response;
};

export const getData = async (formIdx: number, pgNum: number) => {
  const response = await axios.get(
    `http://127.0.0.1:5000/form/${formIdx}/${pgNum}/data`
  );
  return response.data;
};
