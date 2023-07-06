import { Request, Response } from "express";
import httpStatus from "http-status";

import { isIdValid } from "../utils/id-validator";

import * as bookService from "./../services/book-service";
import { book } from "@prisma/client";

export async function getBooks(req: Request, res: Response) {
  const books = await bookService.getBooks();
  res.send(books);
}

export async function getBook(req: Request, res: Response) {
  const id = parseInt(req.params.id);

  if (!isIdValid(id)) return res.sendStatus(httpStatus.BAD_REQUEST);

  const book = await bookService.getBook(id);
  res.send(book);
}

export async function createBook(req: Request, res: Response) {
  const book = req.body as book;
  await bookService.createBook(book);
  res.sendStatus(httpStatus.CREATED);
}

export async function reviewBook(req: Request, res: Response) {
  const review = req.body as book;

  if (!isIdValid(review.id)) return res.sendStatus(httpStatus.BAD_REQUEST);

  await bookService.reviewBook(review);
  res.sendStatus(httpStatus.OK);
}