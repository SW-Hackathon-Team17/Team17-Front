import axios from "axios";

/**
 * @description 키워드 불러오기 API
 * @async
 * @function getKeywords
 * @method GET
 * @param {/form/{formIdx}/{pgNum}/keywords} url
 * @returns {IKeywords}
 */

export interface IKeyword {
  keyword: string;
  level: number;
}
export interface IKeywords {
  keywords: IKeyword[];
}

export const getKeywords = async (formIdx: number, pgNum: number) => {
  const response = await axios.get(`/form/${formIdx}/${pgNum}/keywords`);
  return response.data;
};

/**
 * @description 키워드 저장하기 API
 * @async
 * @function saveKeywords
 * @method POST
 * @param {/form/{formIdx}/{pgNum}/keywords} url
 */

export const saveKeywords = async (
  formIdx: number | null,
  pgNum: number,
  keywords: IKeyword[]
) => {
  const response = await axios.post(
    `/form/${formIdx}/${pgNum}/keywords`,
    keywords
  );
  return response;
};

/**
 * @description 키워드 수정하기 API
 * @async
 * @function updateKeywords
 * @method PUT
 * @param {/form/{formIdx}/{pgNum}/keywords} url
 */

export const updateKeywords = async (
  formIdx: number,
  pgNum: number,
  keywords: IKeyword[]
) => {
  const response = await axios.put(
    `${process.env.REACT_APP_BASE_URL}/form/${formIdx}/${pgNum}/keywords`,
    { keywords }
  );
  return response;
};

export const getKeywordFromScript = async (field: string, script: string) => {
  const requestBody = { field: field, script: script };
  const response = await axios.post(
    `${process.env.REACT_APP_BASE_URL}/ai/chatgpt`,
    { field: field, script: script }
  );
  return response;
};
