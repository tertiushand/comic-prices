export interface IMarvelResponse<data> {
  code: number;
  status: string;
  copyright: string;
  attributionText: string;
  attributionHTML: string;
  etag: string;
  data: data;
}

export interface IMarvelPagination<results> {
  offset: number;
  limit: number;
  total: number;
  count: number;
  results: results[];
}

export interface IMarvelComic {
  id: number;
  digitalId: number;
  title: string;
  issueNumber: number;
  variantDescription: string;
  description: string;
  modified: Date;
  isbn: string;
  upc: string;
  diamondCode: string;
  ean: string;
  issn: string;
  format: string;
  pageCount: number;
  textObjects: Array<string>;
  resourceURI: string;
  urls: Array<IMarvelUrl>;
  series: Array<IMarvelResource>;
  variants: Array<IMarvelResource>;
  collections: Array<any>;
  dates: Array<IMarvelDate>;
  prices: Array<IMarvelPrice>;
  thumbnail: IMarvelFile;
  images: Array<IMarvelFile>;
  creators: IMarvelCollection;
  characters: IMarvelCollection;
  stories: IMarvelCollection;
  events: IMarvelCollection;
}

export interface IMarvelUrl {
  type: string;
  url: string;
}

export interface IMarvelResource {
  resourceURI: string;
  name: string;
  role: string;
  type: string;
}

export interface IMarvelDate {
  type: string;
  date: Date;
}

export interface IMarvelPrice {
  type: string;
  price: number;
}

export interface IMarvelFile {
  path: string;
  extension: string;
}

export interface IMarvelCollection {
  available: number;
  collectionURI: string;
  items: Array<IMarvelResource>;
  returned: number;
}