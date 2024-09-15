import { MyBookInterface } from "@/tools/interfaces";
import { useState } from "react";

const MyBook: React.FC<MyBookInterface> = ({ book }) => {
  const [readPage, setReadPage] = useState(book.read?.toString()); 
  const [localRead, setLocalRead] = useState(book.read); 

  const updateReadPage = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:5500/api/books/${book.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ read: parseInt(readPage) }), 
      });

      if (!response.ok) {
        throw new Error("Failed to update the book");
      }

      const updatedBook = await response.json();
      console.log("Book updated:", updatedBook);

      setLocalRead(updatedBook.read);

    } catch (error) {
      console.error("Error updating the book:", error);
    }
  };

  return (
    <div className="flex justify-around w-full bg-gray-100 shadow-lg rounded-lg my-2 p-2 h-[7rem]">
      <p className="my-auto text-lg">{book.title}</p>
      <div className="my-auto text-center flex flex-col gap-2">
        <p>نوشته‌ی <span>{book.author}</span></p>
        <p>نشر <span>{book.publisher}</span></p>
      </div>
      <div className="my-auto text-center flex flex-col gap-2">
        <p>تعداد صفحات کتاب: {book.pages}</p>
        <p>تعداد صفحات خوانده شده: {localRead}</p>
        <p>{((localRead / book.pages) * 100).toFixed(2)} درصد از کتاب خوانده شده</p>
      </div>
      <form onSubmit={updateReadPage} className="my-auto text-center flex flex-col gap-2">
        <div>
          <label htmlFor="readpage">تعداد صفحات خوانده شده: </label>
          <input
            value={readPage}
            onChange={(e) => setReadPage(e.target.value)}
            type="number"
            name="readpage"
            id="readpage"
            className="bg-transparent border border-gray-300 rounded-lg p-1"
            placeholder="چند صفحه خوندی؟"
            max={book.pages}
          />
        </div>
        <button
          type="submit"
          className="bg-green-500 px-2 py-1 text-white hover:bg-green-600 rounded-md w-1/3 mx-auto"
        >
          ثبت تغییرات
        </button>
      </form>
    </div>
  );
};

export default MyBook;
