import { GET_ERRORS, CLEAR_ERRORS} from './types';

//REturn Errors
 export const returnErrors =(msg, status, id=null)=>{
     return {
         type: GET_ERRORS,
         payload: {msg, status, id}
     }
 }
  //clear Errors
  export const clearErrors =()=>{
      return{
          type: CLEAR_ERRORS
      }
  }