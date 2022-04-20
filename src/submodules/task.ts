import { AuthHeader, TaskModule } from "../definitions/index.js";
import { get, post, del } from "../libs/apiRequests.js";
import { TASKS_URL } from "../libs/constants.js";

const taskClientModule = (headers: AuthHeader): TaskModule => {
  return {
    create: (task) =>
      post(`${TASKS_URL}`, task, { headers }).then((res) => res.json()),

    update: (id, task) => post(`${TASKS_URL}/${id}`, task, { headers }),

    reopen: (id) => post(`${TASKS_URL}/${id}/reopen`, {}, { headers }),

    delete: (id) => del(`${TASKS_URL}/${id}`, { headers }),

    getAll: () => get(`${TASKS_URL}`, { headers }),

    get: (id) => get(`${TASKS_URL}/${id}`, { headers }),

    close: (id) => post(`${TASKS_URL}/${id}/close`, {}, { headers }),

    search: (params) => get(`${TASKS_URL}`, { headers, params }),
  };
};

export default taskClientModule;
