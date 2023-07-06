import { book } from "@prisma/client";
import prisma from "../database";

export async function getBooks() {
  const result = await prisma.book.findMany();
  return result;
}

export async function getBook(id: number) {
  const result = await prisma.book.findUnique({ where: { id } });
  return result;
}

export async function createBook(book: book) {
  const { title, author, publisher, purchaseDate } = book;

  const result = await prisma.book.create({
    data: {
      title,
      author,
      publisher,
      purchaseDate,
    }
  });

  return result;
}

export async function reviewBook( bookReview: book) {
  const { id, grade, review } = bookReview;

  const result = await prisma.book.update({ 
    data: bookReview, 
    where: {id}  })
  return result;
}