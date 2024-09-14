'use client'
import { useState } from "react";

export default function AddBook () {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [publisher, setPublisher] = useState('');
    const [pages, setPages] = useState('');
    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        const newBook = {
            title: title,
            author: author,
            publisher: publisher,
            pages: parseInt(pages),
            read: 0,  
            isReading: false,  
        };
        try {
            const response = await fetch('http://localhost:5500/api/books', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newBook),
            });

            if (response.ok) {
                console.log('کتاب با موفقیت اضافه شد');
                setTitle('');
                setAuthor('');
                setPublisher('');
                setPages('');
            } else {
                console.log('خطایی در اضافه کردن کتاب رخ داد');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return(
        <div className="flex justify-center mt-4 w-full">
            <div className="w-full">
                <form onSubmit={handleSubmit} className="w-[85%] mx-auto border rounded-xl border-transparent bg-gray-100 p-3 flex flex-col">
                    <div className="flex flex-wrap justify-start gap-4">
                        <div className="flex">
                            <label htmlFor="title" className="mx-2">نام کتاب</label>
                            <input value={title} onChange={(e)=>setTitle(e.target.value)} type="text" id="title" className="bg-transparent border rounded-md border-gray-400"/>
                        </div>
                        <div className="flex">
                            <label htmlFor="author" className="mx-2">نام نویسنده</label>
                            <input value={author} onChange={(e)=>setAuthor(e.target.value)} type="text" id="author"className="bg-transparent border rounded-md border-gray-400"/>
                        </div>
                        <div className="flex">
                            <label htmlFor="publisher" className="mx-2">نام انتشارات</label>
                            <input value={publisher} onChange={(e)=>setPublisher(e.target.value)} type="text" id="publisher" className="bg-transparent border rounded-md border-gray-400"/>
                        </div>
                        <div className="flex">
                            <label htmlFor="pages" className="mx-2">تعداد صفحات</label>
                            <input value={pages} onChange={(e)=>setPages(e.target.value)} type="number" id="pages" className="bg-transparent border rounded-md border-gray-400"/>
                        </div>
                    </div>
                    <button type="submit" className="bg-green-400 text-white hover:bg-green-500 w-1/3 mx-auto rounded-md p-2">اضافه کردن کتاب</button>
                </form>
            </div>
        </div>
    )
}