import { useState, ChangeEvent } from 'react';
type onChangeEvent = (e: ChangeEvent<HTMLInputElement>) => void;

export default (initialValue: string): { value: string; onChange: onChangeEvent } => {
   const [value, setValue] = useState(initialValue);
   return {
      value,
      onChange: (e: ChangeEvent<HTMLInputElement>): void => {
         setValue(e.target.value);
      }
   };
};
