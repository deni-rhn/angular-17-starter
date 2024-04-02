export class Result<T> {
  status?: string;
  message?: string;
  messages?: string[];
  data?: T;
  metaData?: {
    limit: number;
    offset: number;
    pages: number;
    total: number;
  };
}