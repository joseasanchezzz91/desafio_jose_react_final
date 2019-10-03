import { START, SUCCESS, ERROR } from './peliculas.const';
import {peliculasGetAll,peliculasCreate,peliculasUpdate,peliculasDelete} from '../../../services/peliculas.service';



const peliculasActionStart = () => ({ type: START, payload: null });
const peliculasActionSUCCESS = (data) => ({ type: SUCCESS, payload: data });
const peliculasActionERROR = (data) => ({ type: ERROR, payload: data });

export const peliculaAsyncAtionGetAll = () => {
    return (dispatch)=>{
        dispatch(peliculasActionStart());
        const token=localStorage.getItem('toke');
      peliculasGetAll(token).then(res=>{
          dispatch(peliculasActionSUCCESS(res.data.data));  
      }).catch(error=>{
          dispatch(peliculasActionERROR(error.data));
      });
    }
}


export const peliculaAsyncAtionCreate = (data) => {
    return (dispatch)=>{
        dispatch(peliculasActionStart());
        const token=localStorage.getItem('toke');
        peliculasCreate(data,token).then(res=>{
          dispatch(peliculaAsyncAtionGetAll());
      }).catch(error=>{
          dispatch(peliculasActionERROR(error.data));
      });
    }
}

export const peliculaAsyncAtionEdit = (data) => {
     return (dispatch)=>{
        dispatch(peliculasActionStart());
        const token=localStorage.getItem('toke');
        peliculasUpdate(data,token).then(res=>{
           
           
      }).catch(error=>{
          dispatch(peliculasActionERROR(error));
      });
    }
}

export const peliculaAsyncAtionDelete = (data) => {
    return (dispatch)=>{
       dispatch(peliculasActionStart());
       const token=localStorage.getItem('toke');
       peliculasDelete(data,token).then(res=>{
           dispatch(peliculaAsyncAtionGetAll());
         dispatch(peliculasActionSUCCESS(res.data.data));  
     }).catch(error=>{
         dispatch(peliculasActionERROR(error));
     });
   }
}