
import Link from "next/link";


export default function Home() {
  return (
    <div className="flex flex-col">


     
      <div className="flex flex-col justify-center items-center gap-[50px] mt-[200px]">

        <h1 className="text-[30px] text-center">Select Methods To Explore Data Fetching using Next.js</h1>
        <Link href="/client-side-fetching"><button className=" w-[200px] h-[50px] border-[1px] border-[#000000] rounded-lg hover:bg-slate-200">Client-Side-Fetching</button></Link>
        <Link href="/server-side-fetching"><button className=" w-[200px] h-[50px] border-[1px] border-[#000000] rounded-lg hover:bg-slate-200">Server-Side-Fetching</button></Link>
        
      </div>









    </div>
      );
}
