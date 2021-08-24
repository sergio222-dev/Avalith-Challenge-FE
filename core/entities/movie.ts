import TMDBConfigs from 'core/configs/TMDB';

export class Movie {
    private _title: string;
    private _originaltitle: string;
    private _popularity: number;
    private _overview: string;
    private _video: boolean;
    private _backdropPath: string;


    get Title() {
        return this._title;
    }

    get OriginalTitle() {
        return this._originaltitle;
    }

    get Popularity() {
        return this._popularity;
    }

    get Video() {
        return this._video;
    }

    get Overview() {
        return this._overview;
    }

    get BackDropPath() {
        return this._backdropPath;
    }

    get ParsedDropPath() {
        return TMDBConfigs.imageBackUrl + this._backdropPath;
    }


    private constructor( sTitle: string, sOriginalTitle: string, sOverview: string, sBackDropPath: string, iPopularity: number, bVideo: boolean ){ 
        this._title = sTitle;
        this._originaltitle = sOriginalTitle;
        this._overview = sOverview;
        this._popularity = iPopularity;
        this._backdropPath = sBackDropPath;
        this._video = bVideo;
    }

    public static Create(sTitle: string, sOriginalTitle: string, sOverView: string, sBackDropPath: string, iPopularity: number, bVideo: boolean): Movie {
        return new Movie(sTitle, sOriginalTitle, sOverView, sBackDropPath, iPopularity, bVideo);
    }
}