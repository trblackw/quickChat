import { APIMethod, KeyValue } from './types';

export class FetchWrapper {
   private _method: APIMethod = 'GET';
   //dealing with proxy issue with parcel
   private _baseUrl: string = 'http://localhost:8080/';
   private _headers: KeyValue<string, string>[] = [
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

   public setBaseUrl(newUrl: string): FetchWrapper {
      this._baseUrl = newUrl;
      return this;
   }

   public setMethod(newMethod: APIMethod): FetchWrapper {
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
   public initiateFetch(route: string): Promise<any> {
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
