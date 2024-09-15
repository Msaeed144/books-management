/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import MyBook from "@/components/MyBook";
import { BooksInterface } from "@/tools/interfaces";
import { useEffect, useState } from "react";

export default function MyBooks() {
      // Building the required states
//loading is Not used yet
  const [books, setBooks] = useState<BooksInterface[]>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  //useEffect and fetch data
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch("http://localhost:5500/api/books");
        const data = await response.json();
        const filteredData = data.filter(
          (book: BooksInterface) => book.isReading === true
        );
        setBooks(filteredData);
        setLoading(false);
      } catch (error: any) {
        setError(error.message);
        setLoading(false);
      }
    };
    fetchBooks();
  }, []);
  return (
    <div className="flex justify-center mt-4 w-full">
      <div className="w-full">
        <div className="w-[85%] mx-auto">
          {/* map on data */}
          {books?.map((book) => (
            <MyBook key={book.id} book={book}/>
          ))}
        </div>
      </div>
    </div>
  );
}
