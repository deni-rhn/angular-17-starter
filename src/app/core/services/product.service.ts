import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { ApiPath } from "../common/api-path";
import { map, Observable } from "rxjs";
import { Result } from "src/app/shared/models/result";
import { IProduct } from "src/app/shared/models/response/iproduct";
import { ICommonParams } from "src/app/shared/models/params/icommon-params";
import { ObjectToQueryParams } from "../common/object-to-query-params";

@Injectable()
export class ProductService {
  
  constructor(
    private httpClient: HttpClient
  ) {}

  getProducts(params: ICommonParams): Observable<IProduct | undefined> {
    const qParams: string = ObjectToQueryParams(params);
    const url: string = ApiPath.GET_PRODUCT + `?${qParams}`;
    return this.httpClient.get(url).pipe(
      map((result: Result<IProduct>) => result.data,
      (error: HttpErrorResponse) => error)
    );
  }
}
