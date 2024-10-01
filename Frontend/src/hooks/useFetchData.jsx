import React, { useEffect, useState } from 'react';
import { token } from '../../config';

const useFetchData = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const token = localStorage.getItem('token');

    const isTokenExpired = (token) => {
        if (!token) return true;
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        const jsonPayload = decodeURIComponent(atob(base64).split('').map(c => {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));

        const decoded = JSON.parse(jsonPayload);
        const currentTime = Date.now() / 1000;
        return decoded.exp < currentTime; // Token has expired
    };

    useEffect(() => {
        const fetchData = async () => {
            if (isTokenExpired(token)) {
                setError('Token is expired');
                return;
            }

            setLoading(true);

            try {
                console.log(`Requesting URL: ${url}`); // Debug the URL
                const res = await fetch(url, {
                    headers: { Authorization: `Bearer ${token}` },
                });

                const result = await res.json();

                if (!res.ok) {
                    throw new Error(result.message || "Failed to fetch data.");
                }

                setData(result.data);
                setLoading(false);
            } catch (err) {
                console.error(err); // Log the error for debugging
                setLoading(false);
                setError(err.message);
            }
        };

        fetchData();
    }, [url, token]);

    return { data, loading, error };
};

export default useFetchData;
