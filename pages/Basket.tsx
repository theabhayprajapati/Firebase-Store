import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { signIn, useSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import { db } from '../firebase';

type Props = {};

const Basket = (props: Props) => {
  const { data: session } = useSession();
  const [basketItem, setbasketItem] = useState()
  // getting data from firebase
  useEffect(() => {
    const getbasketitems = async () => {
      const colRef = collection(db, 'cart')

      onSnapshot(query(colRef), orderBy('timestamp', 'desc'), (snapshot) => { setbasketItem(snapshot.docs) })
    }
    getbasketitems()
  }, [])

  return <div>
    <nav className="max-w-screen-2xl m-auto">
      <Header />
    </nav>
    {
      !session ? <main>
        <div className='bg-gray-100 min-h-screen p-5 flex gap-10 max-w-screen-2xl m-auto  '>


          {/* //todo: Adding signi page */}
          <div className='w-[60%] bg-white rounded-md'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, dicta?
            <div className='h-full'>
              {/* //todo: upper div */}
              <div className='h-[40%] bg-red-400 flex'>
                <div className='w-[40%]'>
                  <h1 className="text-3xl">
                    AMAZON
                  </h1>
                </div>

                <div className='w-[60%] bg-yellow-400'>
                  <div>
                    Signin to amazon
                    <button onClick={() => signIn()} className='bg-blue-400 rounded-md p-2 px-5'>
                      SignIn
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div>
              {/* //todo: lower div */}
            </div>
          </div>
          {/* //todo: adding sidde propjex */}
          <div className='w-[40%] bg-white rounded-md'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint, ea.
          </div>
        </div>
      </main>
        : <main className='min-w-[320px] md:min-w-[768px] ld:min-w-[1200px] m-auto flex gap-10' >
          <div className=' min-w-[75%] bg-yellow-500 '>
            {/* showing shopping cart */}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa amet nobis eius totam nesciunt sed voluptates beatae magni, aspernatur facere commodi cupiditate quis eos dolores! Repudiandae sapiente praesentium vel beatae?
          </div>
          <div className='min-w-[25%] bg-green-400 h-screen m-auto'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique, ad aperiam! Amet culpa nam commodi voluptatem fugit reprehenderit unde aspernatur distinctio neque quo optio, consectetur est molestiae quas placeat consequatur.
            {/* showing totla and remmende products */}
          </div>
        </main>
    }
  </div>;
};

export default Basket;
