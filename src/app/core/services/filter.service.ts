import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { ApiPath } from "../common/api-path";
import { map, Observable } from "rxjs";
import { IFilter } from "src/app/shared/models/response/ifilter";
import { Result } from "src/app/shared/models/result";

@Injectable()
export class FilterService {
  
  constructor(
    private httpClient: HttpClient
  ) {}

  getMasterFilter(): Observable<Result<IFilter[]>> {
    return this.httpClient.get(ApiPath.GET_MASTER_FILTER).pipe(
      map((result: Result<IFilter[]>) => result,
      (error: HttpErrorResponse) => error)
    );
  }
}
