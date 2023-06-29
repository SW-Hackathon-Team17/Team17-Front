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
  const response = await axios.get(
    `${process.env.REACT_APP_BASE_URL}/form/${formIdx}/${pgNum}/script`
  );
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
  formIdx: number,
  pgNum: number,
  script: string
) => {
  const response = await axios.post(
    `${process.env.REACT_APP_BASE_URL}/form/${formIdx}/${pgNum}/script`,
    { script }
  );
  return response;
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
