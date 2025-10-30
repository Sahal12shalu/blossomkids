import { dbConnect } from '@/app/Components/lib/mongodb'
import ShippingModel from '../../Schema/checkout';
import { NextResponse } from 'next/server';

export async function GET(req) {
    await dbConnect();

   const { searchParams } = new URL(req.url)
   const shippingId = searchParams.get('shippingId')

   const data = await ShippingModel.findById(shippingId)

   return NextResponse.json({ message: data });
}

export async function PUT(req) {
   await dbConnect();

   const { searchParams } = new URL(req.url)
   const orderId = searchParams.get('orderId')

   await ShippingModel.findByIdAndUpdate({_id:orderId},{status : 'cancel'},{new:true})

   return NextResponse.json({ message: 'success' });
}