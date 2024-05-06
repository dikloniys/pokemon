import React, { useState, useEffect } from 'react';
import axios from 'axios';

function FetchData() {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("https://lavka.pokemonbattle-stage.me/get_avatars");
                setData(response.data);
            } catch (error) {
                console.error("Ошибка при получении данных:", error);
            }
        };

        fetchData();
    }, []);
    console.log(JSON.stringify(data, null, 2))
    return (
        <></>
    );
}

export default FetchData;