import { APIMethod, KeyValue } from './types';
export const baseUrl = 'http://localhost:8080/';

export class APIService {
   private _method: APIMethod = 'GET';
   //dealing with proxy issue with parcel
   private _baseUrl: string = baseUrl;
   private _headers: KeyValue<string, string>[] | any = [
      {
         key: 'Accept',
         value: 'application/json'
      },
      {
         key: 'Content-Type',
         value: 'application/json'
      }
   ];

   constructor(private _authToken?: string) {}

   public setBaseUrl(newUrl: string): APIService {
      this._baseUrl = newUrl;
      return this;
   }

   public setMethod(newMethod: APIMethod): APIService {
      this._method = newMethod;
      return this;
   }

   public request<T>(body: T): RequestInit {
      return {
         headers: this._headers,
         method: this._method,
         body: JSON.stringify(body)
      };
   }
   public init(route: string): Promise<any> {
      return new Promise((resolve, reject) => {
         fetch(`${this._baseUrl}${route}`).then(resolve).catch(reject)
      })
   }
}

export class RequestBody<T> {
   constructor(private _requestBody: T) {}

   get requestBody(): T {
      return this._requestBody;
   }

   set requestBody(newRequestBody: T) {
      this._requestBody = newRequestBody;
   }
}
