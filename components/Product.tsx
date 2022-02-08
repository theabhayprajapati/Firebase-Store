import React, { useEffect, useState } from 'react';
import { addDoc, collection, deleteDoc, doc, getDocs, increment, onSnapshot, orderBy, query, serverTimestamp, setDoc, updateDoc } from "firebase/firestore";
import { db } from '../firebase';
import { useSession } from 'next-auth/react';

type Props = {
    id: number;
    category: string;
    description: string;
    image: string;
    price: number;
    title: string;
    amount: number;
};


export const removefromCart = (item: any) => {

}
export const addtoWishlist = (item: any) => { }
const Product = ({ item }: any) => {
    const [basketitems, setbasketitems] = useState<any>([])
    const { data: session } = useSession()

    let docid;
    const colRef = collection(db, 'cart')

    const addtoCart = async (item: any) => {
        // add document to firebae
        await addDoc(colRef, { ...item, timestamp: serverTimestamp(), amount: 1 })

        // onSnapshot(colRef, async (snapshot) => {
        //     let data = snapshot.docs
        //     console.log("DATA FROM SNAPSHOT", data)
        //     let docid;
        //     let docamount;
        //     let finding = data.filter(docs => docs.data().id === item.id)
        //     console.log("FINDING", finding.map(docs => { docid = docs.id, docamount = docs.data().amount }))
        //     console.log(docid)
        //     console.log(docamount)
        //     let docRef = doc(colRef, docid)
        //     await updateDoc(docRef, { amount: increment(1) })
        // })
    }




    return <div className="border-2 rounded-md w-full">
        <h1>
            {item.title}
        </h1>
        <h1>
            {item.price}
        </h1>
        <div className='flex gap-2'>
            <button onClick={() => { addtoCart(item) }} className="bg-yellow-300 rounded-md ">
                Add to cart
            </button>
            <button className="bg-violet-500 rounded-md"> Wishlist</button>
            <button onClick={() => removefromCart(item)} className="bg-red-500 rounded-md">Remove item from cart</button>
        </div>
    </div>;
};

export default Product;
