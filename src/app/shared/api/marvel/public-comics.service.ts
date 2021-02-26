import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ApiService, IUrl } from '../api.service';
import { IMarvelResponse, IMarvelPagination, IMarvelComic } from './marvel.interface'

@Injectable({
    providedIn: 'root'
})
export class PublicComicsService {

    private apiUrl = '/v1/public/comics';

    constructor(
        private http: HttpClient,
        private api: ApiService
    ) {}

    getPublicComics(searchParams: IPublicComicsParams): Observable<IMarvelResponse<IMarvelPagination<IMarvelComic>>> {
        let queryVars: IPublicComicsParams = searchParams;
        queryVars.apikey = this.api.marvelApiKey;

        let url: IUrl<IPublicComicsParams> = {
            domain: this.api.marvelDomain,
            subdir: this.apiUrl,
            queryVars: queryVars
        }

        return this.http.get<IMarvelResponse<IMarvelPagination<IMarvelComic>>>(this.api.getUrl(url))
    }

}

export interface IPublicComicsParams {
    apikey?: string;
    format?: string;
    formatType?: string;
    noVariants?: boolean;
    dateDescriptor?: string;
    dateRange?: string; //YYYY-MM-DD,YYYY-MM-DD
    title?: string;
    titleStartsWith?: string;
    startYear?: number;
    issueNumber?: number;
    diamondCode?: string;
    digitalId?: number;
    upc?: string;
    isbn?: string;
    ean?: string;
    issn?: string;
    hasDigitalIssue?: boolean;
    modifiedSince?: Date;
    creators?: number;
    characters?: number;
    series?: number;
    events?: number;
    stories?: number;
    sharedAppearances?: number;
    collaborators?: number;
    orderBy?: string;
    limit?: number;
    offset?: number;
  }