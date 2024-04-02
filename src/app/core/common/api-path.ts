import { environment } from "src/environments/environment.staging";

export class ApiPath {
  static API_HOST: string = environment.HOST_API;
  static V3: string = ApiPath.API_HOST + '/v3/selfpaced';

  static GET_MASTER_FILTER: string = ApiPath.V3 + '/categories';
  static GET_PRODUCT: string = ApiPath.V3 + '/course/list';
}