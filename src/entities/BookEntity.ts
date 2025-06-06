export interface BookCreateEntity {
  img: string;
  title: string;
}

export interface BookEntity {
  id: string;
  img: string;
  title: string;
}

export interface BookResponseEntity {
  id: string;
  img: string;
  title: string;
}

export interface BookListEntity {
  id: string;
  img: string;
  title: string;
}

export interface BookEditEntity {
  id: string;
  img: string;
  title: string;
}

export interface BookImageResponse {
  link: string;
}

export interface BookImageListResponse {
  items: BookImageResponse[];
}
