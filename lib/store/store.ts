import { makeAutoObservable } from 'mobx';

class Book {
  totalBooks: number = 0;
  books: any = [];
  currentBook: any = null;
  numberOfBooks = 0;
  searchValue = '';
  sorting = 'newest';
  category = 'all';
  currentPage = '/';

  constructor() {
    makeAutoObservable(this, {}, { deep: true });
  }

  setTotalBooks(amount: number) {
    this.totalBooks = amount;
  }

  setBooks(books: any) {
    this.books = books;
  }

  setCurrentBook(book: any) {
    this.currentBook = book;
  }
  setNumberOfBooks(number: number) {
    this.numberOfBooks = number;
  }

  setSearchValue(value: string) {
    this.searchValue = value;
  }

  setSortingType(sort: string) {
    this.sorting = sort;
  }

  setCategory(category: string) {
    this.category = category;
  }

  setCurrentPage(url: string) {
    this.currentPage = url;
  }
}

export default new Book();
