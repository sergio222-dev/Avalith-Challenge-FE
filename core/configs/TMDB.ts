type TMDBConfigs = {
    imageBackUrl: string;
    imagePosterUrl: string;
    baseApiUrl: string;
    youtubeBaseUrl: string;
}

const configs: TMDBConfigs = {
    imageBackUrl: 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/',
    imagePosterUrl: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/',
    baseApiUrl: 'https://api.themoviedb.org/3',
    youtubeBaseUrl: 'https://www.youtube.com/embed/',
}

export default configs;