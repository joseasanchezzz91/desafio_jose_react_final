import { START, SUCCESS, ERROR } from './peliculas.const';
import {peliculasGetAll,peliculasCreate,peliculasUpdate,peliculasDelete} from '../../../services/peliculas.service';



const peliculasActionStart = () => ({ type: START, payload: null });
const peliculasActionSUCCESS = (data) => ({ type: SUCCESS, payload: data });
const peliculasActionERROR = (data) => ({ type: ERROR, payload: data });

export const peliculaAsyncAtionGetAll = () => {
    return (dispatch)=>{
        dispatch(peliculasActionStart());
      peliculasGetAll().then(res=>{
          dispatch(peliculasActionSUCCESS(res.data.data));  
      }).catch(error=>{
          dispatch(peliculasActionERROR(error.data));
      });
    }
}


export const peliculaAsyncAtionCreate = (data) => {
    return (dispatch)=>{
        dispatch(peliculasActionStart());
        peliculasCreate(data).then(res=>{

          dispatch(peliculasActionSUCCESS(res.data.data));  
      }).catch(error=>{
          dispatch(peliculasActionERROR(error.data));
      });
    }
}

export const peliculaAsyncAtionEdit = (data) => {
     return (dispatch)=>{
        dispatch(peliculasActionStart());
        peliculasUpdate(data).then(res=>{
          dispatch(peliculasActionSUCCESS(res.data.data));  
      }).catch(error=>{
          dispatch(peliculasActionERROR(error));
      });
    }
}

export const peliculaAsyncAtionDelete = (data) => {
    return (dispatch)=>{
       dispatch(peliculasActionStart());
       peliculasDelete(data).then(res=>{
         dispatch(peliculasActionSUCCESS(res.data.data));  
     }).catch(error=>{
         dispatch(peliculasActionERROR(error));
     });
   }
}