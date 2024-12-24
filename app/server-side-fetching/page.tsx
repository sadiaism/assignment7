import React from 'react'


interface IBooks{
    id:number;
    name:string;
    type:string;
    available:boolean;
}


const page = async () => {
    const response = await fetch ("https://simple-books-api.glitch.me/books/");
    const parsedResponse:IBooks[] = await response.json()  
    console.log("books >>>",parsedResponse)  

return (
    <div><h1 className='flex justify-center items-center text-[32px] font-semibold'>SERVER SIDE FETCHING</h1>
    <div className='lg:grid grid-cols-2 justify-center items-center lg:gap-[50px] ml-[50px] mr-[50px] mt-[50px] sm:grid-cols-1 sm:gap-[24px]'>
        {parsedResponse.map((books,index) =>
    
    <div key={index} className='flex flex-col gap-[30px] border bg-[#F5F5F5] rounded-2xl '>
        
        <p className='flex justify-center items-center text-[24px] text-blue-950 font-bold'>{books.name}</p>
        <p className='flex justify-center items-center font-bold'>id:{books.id}</p>
        <p className='flex justify-center items-center text-red-700 font-bold'>type:{books.type}</p>
        <p className='flex justify-center items-center text-blue-800 font-bold'>Available{books.available}</p>
        </div>
        )}
      
    </div></div>
  )
}
export default page
