import { AuthHeader, LabelModule } from "../definitions/index.js";
import { get, del, post } from "../libs/apiRequests.js";
import { LABELS_URL } from "../libs/constants.js";

const labelClientModule = (headers: AuthHeader): LabelModule => {
  return {
    create: (label) =>
      post(`${LABELS_URL}`, label, { headers }).then((res) => res.json()),

    getAll: () => get(`${LABELS_URL}`, { headers }),

    get: (id) => get(`${LABELS_URL}/${id}`, { headers }),

    delete: (id) => del(`${LABELS_URL}/${id}`, { headers }),

    update: (id, label) => post(`${LABELS_URL}/${id}`, label, { headers }),
  };
};
export default labelClientModule;
