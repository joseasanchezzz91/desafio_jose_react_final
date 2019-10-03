import axios from 'axios';
import { apiHost } from '../configure';

class ApiError extends Error { }


export const peliculasGetAll = async (token) => {
    try {
        return await axios.get(`${apiHost}/api/peliculas`, {
            headers: {
                authorization: `bearer ${token}`,
            },
        });
    } catch (error) {
        const status = error.response.status;
        if (status === 404) throw new ApiError('404');
        throw new ApiError(error.message);
    }
};

export const peliculasUpdate = async (data,token) => {
    try {
        return await axios.put(`${apiHost}/api/peliculas/${data.id}`,data,{
            headers: {
                authorization: `bearer ${token}`,
                data: data,
            },
        });
    } catch (error) {
        const status = error.response;
        if (status === 404) throw new ApiError('404');
        throw new ApiError(error.message);
    }
};


export const peliculasCreate = async (data,token) => {
    try {
        return await axios.post(`${apiHost}/api/peliculas/`, data,{
            headers: {
                authorization: `bearer ${token}`,
                data: data,
            },
        });
    } catch (error) {
        const status = error.response.status;
        if (status === 404) throw new ApiError('404');
        throw new ApiError(error.message);
    }
};


export const peliculasDelete = async (data,token) => {
    try {
        return await axios.delete(`${apiHost}/api/peliculas/${data.id}`,{
            headers: {
                authorization: `bearer ${token}`
            },
        });
    } catch (error) {
        const status = error.response;
        if (status === 404) throw new ApiError('404');
        throw new ApiError(error.message);
    }
};