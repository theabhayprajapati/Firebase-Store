import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { SearchIcon } from '@heroicons/react/solid';
import { signIn, useSession } from 'next-auth/react';
type Props = {};

const Header = (props: Props) => {
    const { data: session } = useSession()
    let router = useRouter();
    return <div className="flex     border-3 w-full h-10 bg-yellow-300 md:h-16">
        <div className="flex justify-center items-center h-full w-[15%] bg-red-500">
            <h1>
                AMAZON
            </h1>
        </div>
        {/* //Search and more */}

        <div className="flex justify-center items-center h-full w-[60%] bg-violet-500">
            <div className='w-[80%]'>
                <div className="pt-2 relative mx-auto text-gray-600 ">
                    <input autoComplete='false' className="border-2 border-gray-300 w-full bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
                        type="search" name="search" placeholder="Search" />
                    <button type="submit" className="absolute right-0 top-0 mt-5 mr-4">
                        <SearchIcon className="text-gray-600 h-4 w-4 fill-current" />
                    </button>
                </div>
            </div>
        </div>

        {/* //account Name, Basket , Wishlist Details */}
        <div className="w-[25%] flex gap-4 bg-green-400 items-center justify-center">
            <div className='flex-col' >
                <h1>
                    Hello,
                </h1>
                <h1 className='font-bold' onClick={() => signIn()}>
                    {
                        session ? (session?.user.name) : "Login"
                    }
                </h1>
            </div>
            <div>
                {/* make a basket button with badge that count's number of items in baskets */}
                <button className='bg-yellow-900 rounded-md p-2 px-4 flex gap-2 items-center'>
                    <h1 className='text-white'>Basket</h1>
                    <span className="inline-flex items-center justify-center px-2 py-1 mr-2 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">9</span>
                </button>

            </div>
            <div>
                <Link href="/Wishlist"> Wishlist</Link>
            </div>
        </div>
    </div >;
};

export default Header;
