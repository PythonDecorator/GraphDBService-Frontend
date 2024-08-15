import {QueryClient} from '@tanstack/react-query';

export const queryClient = new QueryClient();

export const authorizedRequest = async ({url, signal, method, payload, searchTerm}) => {
    const token = localStorage.getItem('token');

    if (!token || token === '') {
        throw new Error('Please login and try again');
    }

    const urlParams = new URLSearchParams();

    if (searchTerm) {
        urlParams.append('search', searchTerm);
    }

    const requestUrl = url + (urlParams.toString() ? `?${urlParams.toString()}` : '');

    const request = payload ? {
        method: method,
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
        signal: signal
    } : {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
        signal: signal
    };

    const response = await fetch(requestUrl, request);

    if (!response.ok) {
        const error = new Error('An error occurred');
        error.code = response.status;
        error.detail = await response.json();
        throw error;
    }

    return await response.json();
};


export const unAuthorizedRequest = async ({url, signal, method, payload, searchTerm}) => {

    const urlParams = new URLSearchParams();

    if (searchTerm) {
        urlParams.append('search', searchTerm);
    }

    const requestUrl = url + (urlParams.toString() ? `?${urlParams.toString()}` : '');

    const request = payload ? {
        method: method,
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
        signal: signal
    } : {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
        },
        signal: signal
    };

    const response = await fetch(requestUrl, request);

    if (!response.ok) {
        const error = new Error('An error occurred');
        error.code = response.status;
        error.detail = await response.json();
        throw error;
    }

    return await response.json();
};
