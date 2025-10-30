import { dbConnect } from '@/app/Components/lib/mongodb'
import CartModel from '../Schema/cartschema';
import ShippingModel from '../Schema/checkout';
import { NextResponse } from 'next/server';

export async function POST(req) {
    await dbConnect();

    const body = await req.json();

    const { formData, guestId } = body

    const detailsToAdd = {
        fullname: formData.fullname,
        email: formData.email,
        city: formData.city,
        pincode: formData.pincode,
        address: formData.address,
        payment: formData.payment,
        phonenumber: formData.phonenumber,
    };

    let cart = await CartModel.findOne({ deviceId: guestId });

    const productToAdd = cart.items.map(item => ({ 
        id: item.id,
        name: item.name,
        description: item.description,
        category: item.category,
        stock: item.stock,
        firstprize: item.firstprize,
        lastprize: item.lastprize,
        discount: item.discount,
        quantity: item.quantity,
        images: item.images,
    }));;

    const grandtotal = cart.grandtotal;
    const newCart = new ShippingModel({
        deviceId:guestId,
        status:'processing',
        grandtotal: grandtotal,
        shipping: [detailsToAdd],
        items: productToAdd,
    });

    await newCart.save();

    await CartModel.deleteOne({ _id: cart._id });
    return NextResponse.json({ message: 'success', shippingId: newCart._id });
}

export async function GET(req) {
    await dbConnect();

   const { searchParams } = new URL(req.url)
   const Email = searchParams.get('Email')

   const data =await ShippingModel.find({ "shipping.email" : Email})

   return NextResponse.json({ message: data });
}