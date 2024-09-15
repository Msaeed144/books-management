/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Books from "@/components/Books";
import { BooksInterface } from "@/tools/interfaces";
import { useEffect, useState } from "react";
import { Circles } from "react-loader-spinner";

export default function Search() {
  const [books, setBooks] = useState<BooksInterface[]>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [search , setSearch] = useState("")
  useEffect(() => {
    //fetch book
    const fetchBooks = async () => {
      try {
        const response = await fetch("http://localhost:5500/api/books"); // درخواست به API
        const data = await response.json();
        if(search) {
          const filteredBooks = data.filter((book: { title: string; }) =>book.title.includes(search));
          setBooks(filteredBooks)
          setLoading(false);
        }else{
          setBooks(data);
          setLoading(false);

        }
      } catch (error: any) {
        setError(error.message);
        setLoading(false);
      }
    };
    fetchBooks();
  }, [search]);
  //update book (read or not)
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
  //delete book function
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
    return (
      <div className="flex justify-center mt-4 w-full">
        <div className="w-full">
          <div className="w-[85%] flex justify-center mx-auto p-4 items-center bg-gray-100 border border-gray-300 bg-opacity-40 shadow-lg rounded-md min-h-96">
          <Circles 
            
            height="80"
            width="80"
            color="#8b8b8b"
            ariaLabel="circles-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            />
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="flex justify-center mt-4 w-full">
      <div className="w-full">
        <div className="w-[85%] mx-auto p-4 bg-gray-100 border border-gray-300 bg-opacity-40 shadow-lg rounded-md min-h-96">
          <div>
            <label htmlFor=""> نام کتاب ، نویسنده و ناشر : </label>
            <input
              value={search}
              onChange={(e) =>setSearch(e.target.value)}
              className="bg-transparent border   border-gray-500 p-1 rounded-md"
              type="text"
              name=""
              id=""
              placeholder="دنبال چی می گردی"
            />
          </div>
          <div className=" grid grid-cols-5 gap-4 my-4">
              {
                books?.map((book) =>(<Books book={book} deleteBook={deleteBook} updateBookStatus={updateBookStatus} key={book.id}  />))
              }
          </div>
        </div>
      </div>
    </div>
  );
}
