import React from 'react';
import { useQuery } from 'react-query';
import { CartItemType } from '../pages';
import Product from './Product';

type Props = {};

const Products = (props: Props) => {
    const { isLoading, error, data } = useQuery('repoData', () =>
        fetch('https://fakestoreapi.com/products').then(res =>
            res.json()
        )
    )
    if (isLoading) {
        return (
            <div>Loading...</div>
        )
    }



    return <div>
        <main className="p-5 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-3 gap-2">
                {
                    data && data.map((item: any) => {
                        return <Product key={item.id} item={item} />
                    })
                }

            </div>
        </main>
    </div>;
};

export default Products;
