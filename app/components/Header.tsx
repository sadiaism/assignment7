import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <div>
         <nav>
        <ul className="flex h-[100px] justify-center items-center gap-10 bg-slate-200 text-[#000000] font-semibold text-[24px]">
          <Link href="/"><li className="hover:text-pink-200">Home</li></Link>
          <Link href="/client-side-fetching"><li className="hover:text-pink-200">Client Side</li></Link>
          <Link href="/server-side-fetching"><li className="hover:text-pink-200">Server Side</li></Link>
        </ul>
      </nav>

      
    </div>
  )
}

export default Header
