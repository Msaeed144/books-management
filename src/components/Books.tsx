import { BookComponentProps } from "@/tools/interfaces";
import React from "react";
import { Tooltip } from "@mui/material";
interface BooksProps extends BookComponentProps {
  updateBookStatus: (id: number, isReading: boolean) => void;
}

const Books: React.FC<BooksProps> = ({ book, updateBookStatus  , deleteBook}) => {
  return (
    <div className=" overflow-auto text-center min-w-[130px] max-w-[130px] md:min-w-[190px] md:max-w-[190px] border rounded-md border-gray-300 px-2 py-4 bg-gray-50 shadow-xl flex flex-col">
     <Tooltip title="حذف" placement="top-end">
      <div onClick={()=>deleteBook(book.id)} className=" cursor-pointer">
         <svg width="20px" height="20px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"  fill="#ef4444" stroke="#ef4444"><g id="SVGRepo_bgCarrier" stroke-width="0"/><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/><g id="SVGRepo_iconCarrier"> <title>cross-circle</title> <desc>Created with Sketch Beta.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Icon-Set-Filled"  transform="translate(-570.000000, -1089.000000)" fill="#ef4444"> <path d="M591.657,1109.24 C592.048,1109.63 592.048,1110.27 591.657,1110.66 C591.267,1111.05 590.633,1111.05 590.242,1110.66 L586.006,1106.42 L581.74,1110.69 C581.346,1111.08 580.708,1111.08 580.314,1110.69 C579.921,1110.29 579.921,1109.65 580.314,1109.26 L584.58,1104.99 L580.344,1100.76 C579.953,1100.37 579.953,1099.73 580.344,1099.34 C580.733,1098.95 581.367,1098.95 581.758,1099.34 L585.994,1103.58 L590.292,1099.28 C590.686,1098.89 591.323,1098.89 591.717,1099.28 C592.11,1099.68 592.11,1100.31 591.717,1100.71 L587.42,1105.01 L591.657,1109.24 L591.657,1109.24 Z M586,1089 C577.163,1089 570,1096.16 570,1105 C570,1113.84 577.163,1121 586,1121 C594.837,1121 602,1113.84 602,1105 C602,1096.16 594.837,1089 586,1089 L586,1089 Z" id="cross-circle" > </path> </g> </g> </g></svg>
      </div>
      </Tooltip>
      <h4 className="mb-2">{book.title}</h4>
      <p className="mb-2">نویسنده: <span>{book.author}</span></p>
      <p className="mb-2">نشر: <span>{book.publisher}</span></p>
      <div>
        <button className={`text-white p-1 rounded-md ${book.isReading?"bg-red-500":"bg-green-500"}`} onClick={()=>updateBookStatus(book.id, book.isReading)}>{book.isReading ? "پایان مطالعه" :"شروع مطالعه"}</button>
      </div>
    </div>
  );
};

export default Books;
