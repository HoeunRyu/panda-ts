import { AxiosResponse } from "axios";
import { instance } from "@/utils/APIs/axiosInstance";
import {
  OrderByType,
  GetArticleApiQueryParams,
  ArticleList,
} from "@/shared/type";

/** 게시글 목록 조회
 * @param {Object} params - 쿼리 정보
 * @param {int} params.page - 페이지 번호
 * @param {int} params.limit - 페이지 당 게시글 수
 * @param {string} params.sort - 정렬 기준(recent, favorite)
 * @param {string} params.keyword - 검색 키워드
 */
export const getArticleListAPI = async (
  params: Partial<GetArticleApiQueryParams> = {}
): Promise<ArticleList> => {
  //쿼리 기본값
  const { page = 1, limit = 10, sort = "recent", keyword = "" } = params;

  try {
    const response: AxiosResponse<ArticleList> = await instance.get(
      "/articles",
      {
        params: { page, limit, sort, keyword },
      }
    );
    response.status;
    // console.log("getArticleList", response.data);
    return response.data;
  } catch (err) {
    throw err;
  }
};

export const ORDER_BY: OrderByType = {
  RECENT: { value: "recent", name: "최신순" },
  FAVORITE: { value: "favorite", name: "좋아요순" },
};
