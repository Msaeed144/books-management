/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import { BooksInterface } from "@/tools/interfaces";
import { useEffect, useState } from "react";
import Book from '@/components/Books'
import Link from "next/link";


export default function Home() {
  const [books, setBooks] = useState<BooksInterface[]>(); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null); 

  useEffect(() => {
    const fetchBooks = async () => {
        try {
            const response = await fetch('http://localhost:5500/api/books');          
            const data = await response.json();
            setBooks(data);
            setLoading(false); 
        } catch (error: any) {
            setError(error.message);
            setLoading(false);
        }
    };
    fetchBooks();
  }, []);

  const updateBookStatus = async (bookId: number, currentStatus: boolean) => {
    try {
      const response = await fetch(`http://localhost:5500/api/books/${bookId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ isReading: !currentStatus }), 
      });
  
      if (response.ok) {
        const updatedBook = await response.json();
        setBooks(prevBooks =>
          prevBooks?.map(book =>
            book.id === updatedBook.id ? updatedBook : book
          )
        );
      } else {
        console.error('Failed to update book status', response.status);
      }
    } catch (error) {
      console.error('Error updating book status', error);
    }
  };
  
  const deleteBook = async (bookId: number) => {
    try {
      const response = await fetch(`http://localhost:5500/api/books/${bookId}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        setBooks(prevBooks => prevBooks?.filter(book => book.id !== bookId)); 
      } else {
        console.error('Failed to delete book', response.status);
      }
    } catch (error) {
      console.error('Error deleting book', error);
    }
  };
  
  if (loading) {
    return <p>درحال دریافت...</p>;
  }

  if (error) {
    return <p>خطا {error}</p>;
  }

  return (
    <div className="flex justify-center mt-4 w-full">
      <div className="w-full">
        <div className="w-[85%] mx-auto">
          <h3 className="text-lg mb-2">لیست کتاب‌ها</h3>
          <p className="text-gray-700 my-4">کتاب هایی که در حال مطالعه هستند وارد صفحه ی <Link className="text-blue-500 hover:text-blue-700" href="/my-books">قفسه ی من </Link> می شوند و در آن صفحه قابل مدیریت هستند</p>
          <div className=" grid grid-cols-5 gap-4  mx-auto ">
            {books?.map(book => (
              <Book key={book.id} book={book} updateBookStatus={updateBookStatus} deleteBook={deleteBook}/>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
