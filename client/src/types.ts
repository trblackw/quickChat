import { generateTimeStamp } from './utils';

export type KeyValue<Key, Value> = {
   key: Key;
   value: Value;
};

export type APIMethod = 'POST' | 'GET' | 'PUT';

export type APIResult = 'success' | 'failure';

export type APIError = {
   ErrorCode: string;
   Description: string;
};

export type APIResponse<Res> = {
   Result: APIResult;
   Response: Res | APIError;
};

export class Message {
   constructor(public text: string) {}
   public _timeStamp = generateTimeStamp();
}
// export class User {
//    constructor(private name: string) {}
// }

// export class ChatMessage extends Message {
//    constructor(from: User, content: string) {
//       super(from, content);
//    }
// }

// export class Message {
//    text: string;
//    constructor(text: string) {
//       this.text = text
//    }
//    private _timeStamp = generateTimeStamp();
// }

export const newMessageToServer = 'newMessageToServer';
export const newMessageFromServer = 'newMessageFromServer';
export const messageEmittedFromServer = 'emitMessageToConnections';
