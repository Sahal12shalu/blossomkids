import { NextResponse } from 'next/server'
import Razorpay from 'razorpay'
import CartModel from '../Schema/cartschema';

export async function POST(req, res) {
    const { userId } = await req.json();

    if (!userId) {
        return NextResponse.json({ error: "User ID is required" }, { status: 400 });
    }

    let cart = await CartModel.findOne({ deviceId: userId });
    const grandtotal = cart.grandtotal + 100

    const razorpay = new Razorpay({
        key_id: process.env.RAZORPAY_KEY_ID,
        key_secret: process.env.RAZORPAY_SECRET_ID
    })

    const options = {
        amount: grandtotal * 100,
        currency: 'INR',
        receipt: `receipt_order_${Date.now()}`,
    }

    const order = await razorpay.orders.create(options);
    return NextResponse.json(order)
}