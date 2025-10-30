import { dbConnect } from '@/app/Components/lib/mongodb'
import ShippingModel from '../../Schema/checkout';
import { NextResponse } from 'next/server';

export async function GET(req) {
    await dbConnect();

    const { searchParams } = new URL(req.url)
    const status = searchParams.get('status')

    const data = await ShippingModel.find({ status: status })

    return NextResponse.json({ message: data });
}

export async function PUT(req) {
    await dbConnect();

    const { searchParams } = new URL(req.url)
    const id = searchParams.get('id')

    const order = await ShippingModel.findById(id)
    if(!order) {
        return NextResponse.json({ success: false });
    }

    let newStatus = order.status;

    if (order.status === 'processing') newStatus = 'confirm';
    else if (order.status === 'confirm') newStatus = 'packed';
    else if (order.status === 'packed') newStatus = 'success';

    order.status = newStatus;
    await order.save();

    return NextResponse.json({ success: true, newStatus });
}