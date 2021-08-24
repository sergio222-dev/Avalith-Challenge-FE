import axios from 'axios';
import TMDBConfigs from 'core/configs/TMDB'

const AxiosMovie = axios.create(
    {
        baseURL: TMDBConfigs.baseApiUrl,
        headers: {
            'Authorization': `Bearer ${process.env.NEXT_PUBLIC_API_READ_ACCESS_TOKEN}`
        }
    }
);

export default AxiosMovie;