import { v1 as uuidv1 } from "uuid";

export const get = <T>(url: string, config?: object): Promise<T> =>
  fetch(url, config).then((res) => res.json());

export const post = async (url: string, content: object, config: any) =>
  await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Request-ID": uuidv1(),
      Authorization: config.headers.Authorization,
    },
    body: JSON.stringify(content),
  });

export const del = async (url: string, config: any) =>
  await fetch(url, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "X-Request-ID": uuidv1(),
      Authorization: config.headers.Authorization,
    },
  });
