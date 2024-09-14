/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import { BooksInterface } from "@/tools/interfaces";
import { useEffect, useState } from "react";

export default function Search() {
    const [books, setBooks] = useState<BooksInterface[]>(); 
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null); 
    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await fetch('http://localhost:5500/api/books'); // درخواست به API            
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
  return (
    <div className="flex justify-center mt-4 w-full">
      <div className="w-full">
        <div className="w-[85%] mx-auto"></div>
      </div>
    </div>
  );
}
