import { AuthHeader, CommentModule } from "../definitions/index.js";
import { get, del, post } from "../libs/apiRequests.js";
import { COMMENTS_URL } from "../libs/constants.js";

const commentClientModule = (headers: AuthHeader): CommentModule => {
  return {
    create: (comment) =>
      post(`${COMMENTS_URL}`, comment, { headers }).then((res) => res.json()),

    getAll: (params) => {
      let url = new URL(`${COMMENTS_URL}`);

      url.search = new URLSearchParams(params).toString();

      return get(url.toString(), { headers, params });
    },

    get: (id) => get(`${COMMENTS_URL}/${id}`, { headers }),

    delete: (id) => del(`${COMMENTS_URL}/${id}`, { headers }),

    update: (id, comment) =>
      post(`${COMMENTS_URL}/${id}`, comment, { headers }),
  };
};
export default commentClientModule;
