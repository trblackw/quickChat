export type KeyValue<Key, Value> = {
   key: Key,
   value: Value,
 };

 export type APIMethod = "POST" | "GET" | "PUT";

 export type APIResult = "success" | "failure";

 export type APIError = {
    ErrorCode: string,
    Description: string
 }

 export type APIResponse<Res> = {
    Result: APIResult,
    Response: Res | APIError
 }