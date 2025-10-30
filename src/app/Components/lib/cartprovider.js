'use client'

import { useState, createContext, useContext, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { getOrCreateGuestId } from './guestid';
import axios from 'axios';

const CartContext = createContext();

export const Cartprovider = ({ children }) => {
    const [cartValue, SetcartValue] = useState(0)
    const pathname = usePathname()
    const guestId = getOrCreateGuestId();

    useEffect(() => {
        axios.get(`/api/cart/crud?guestId=${guestId}`)
            .then((res) => {
                if(res.data.message === 'nodata'){
                    console.log('no cart')
                }else{
                if (res.data.message.items.length === 0) {
                    SetcartValue(0)
                } else {
                    SetcartValue(res.data.message.items.length)
                }
            }
            })
    }, [pathname])


    return (
        <CartContext.Provider value={{ cartValue, SetcartValue }}>
            {children}
        </CartContext.Provider>
    )
};

export const useCart = () => useContext(CartContext)