import axios from 'axios';
import { apiHost } from '../configure';

class ApiError extends Error { }
const prevJwt = () => JSON.parse(localStorage.getItem('jwt')) || '';

export const peliculasGetAll = async (data) => {
    try {
        return await axios.get(`${apiHost}/api/peliculas`, {
            // headers: {
            //     authorization: `bearer ${prevJwt().token}`,
            // },
        });
    } catch (error) {
        const status = error.response.status;
        if (status === 404) throw new ApiError('404');
        throw new ApiError(error.message);
    }
};

export const peliculasUpdate = async (data) => {
    try {
        return await axios.put(`${apiHost}/api/peliculas/${data.id}`,data,{
            headers: {
                // authorization: `bearer ${prevJwt().token}`,
                data: data,
            },
        });
    } catch (error) {
        const status = error.response;
        if (status === 404) throw new ApiError('404');
        throw new ApiError(error.message);
    }
};


export const peliculasCreate = async (data) => {
    try {
        return await axios.post(`${apiHost}/api/peliculas/`, data,{
            headers: {
                data: data,
            },
        });
    } catch (error) {
        const status = error.response.status;
        if (status === 404) throw new ApiError('404');
        throw new ApiError(error.message);
    }
};


export const peliculasDelete = async (data) => {
    try {
        return await axios.delete(`${apiHost}/api/peliculas/${data.id}`,data,{
            headers: {
                // authorization: `bearer ${prevJwt().token}`,
                data: data,
            },
        });
    } catch (error) {
        const status = error.response;
        if (status === 404) throw new ApiError('404');
        throw new ApiError(error.message);
    }
};