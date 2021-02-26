import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public marvelDomain = 'https://gateway.marvel.com:443';
  public marvelApiKey = 'f83ca9f25066676168e8d455530aacae';

  constructor() { }

  getUrl(url: IUrl<any>): string {
    let queryVars = '?';
    if (url.queryVars) {
      let queryKeys = Object.keys(url.queryVars);
      for(let i=0; i<queryKeys.length; i++) {
        queryVars = queryVars + (queryVars.length>1?'&':'') + queryKeys[i] + '=' + url.queryVars[queryKeys[i]]
      }
    }
    return url.domain + url.subdir + (url.queryVars?queryVars:'') 
  }
}

export interface IUrl<parameters> {
  domain: string;
  subdir: string;
  queryVars?: parameters;
}
