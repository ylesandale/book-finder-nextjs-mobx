import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://www.googleapis.com/books/v1',
});

export const onSearchBooks = (title: string, number: number, sort: string, category: string) => {
  return instance.get(
    `/volumes?q=${title}+inauthor:keyes${
      category !== 'all' ? `+subject:${category}` : ''
    }&printType=books&startIndex=${number}&maxResults=30&orderBy=${sort}&key=AIzaSyDY2tZCPkBhmNdB_gf99DQ69D2IsChL7Vs`
  );
};

export const onGetBook = (id: string | string[]) => {
  return instance.get(`/volumes/${id}?key=AIzaSyDY2tZCPkBhmNdB_gf99DQ69D2IsChL7Vs`);
};
