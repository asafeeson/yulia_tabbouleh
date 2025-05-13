export interface MetaDataImg {
	itemprop: 'author' | 'license' | 'thumbnail' | 'fileformat' | 'width' | 'height';
	content: string;
}

export interface MetaDataLink {
  itemprop:
    | 'name'
    | 'description'
    | 'datePublished'
    | 'dateModified'
    | 'author'
    | 'publisher'
    | 'inLanguage'
    | 'thumbnailUrl'
    | 'license'
    | 'mainEntityOfPage';
  content: string;
}
