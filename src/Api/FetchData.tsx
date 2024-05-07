import { useState, useEffect } from 'react';
import axios from 'axios';

function FetchData({ url }) {
    const [apiData, setApiData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(url);
                setApiData(response.data);
            } catch (error) {
                console.error("Ошибка при получении данных:", error);
            }
        };

        fetchData();
    }, [url]);

    return apiData;
}

export default FetchData;