import { AxiosRequestHeaders } from "axios";

declare interface AuthHeader extends AxiosRequestHeaders {
	Authorization: string;
}
