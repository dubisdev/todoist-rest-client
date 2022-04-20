import { AuthHeader, ProjectModule } from "../definitions/index.js";
import { get, del, post } from "../libs/apiRequests.js";
import { PROJECTS_URL } from "../libs/constants.js";

const projectClientModule = (headers: AuthHeader): ProjectModule => {
  return {
    create: (project) =>
      post(`${PROJECTS_URL}`, project, { headers }).then((res) => res.json()),

    getAll: () => get(`${PROJECTS_URL}`, { headers }),

    get: (id) => get(`${PROJECTS_URL}/${id}`, { headers }),

    getCollaborators: (id) =>
      get(`${PROJECTS_URL}/${id}/collaborators`, { headers }),

    delete: (id) => del(`${PROJECTS_URL}/${id}`, { headers }),

    update: (id, project) =>
      post(`${PROJECTS_URL}/${id}`, project, { headers }),
  };
};
export default projectClientModule;
