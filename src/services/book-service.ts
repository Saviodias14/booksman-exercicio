import { book } from "@prisma/client";
import { notFoundError } from "../errors/not-found";

import * as booksRepository from "./../repositories/books-repository";

export async function getBooks() {
  return await booksRepository.getBooks();
}

export async function getBook(id: number) {
  const book = await booksRepository.getBook(id);
  if (!book) {
    throw notFoundError();
  }

  return book;
}

export async function createBook(book: book) {
  return await booksRepository.createBook(book);
}

export async function reviewBook(review: book) {
  await getBook(review.id); // check if the book exists

  return await booksRepository.reviewBook(review);
}