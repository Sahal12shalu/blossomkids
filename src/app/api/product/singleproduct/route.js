import { dbConnect } from '@/app/Components/lib/mongodb'
import productModel from '../../Schema/productschema';
import { NextResponse } from 'next/server';

export async function GET(req) {
    await dbConnect();

    const { searchParams } = new URL(req.url)
    const id = searchParams.get('proId')

    const datas = await productModel.findById(id)

    return NextResponse.json({ data: datas })
}

export async function POST(req) {

    await dbConnect();

    const { searchParams } = new URL(req.url)
    const id = searchParams.get('proId')

    const product = await productModel.findById(id)

    const recommended = await productModel.find({
      category: product.category,
      _id: { $ne: product._id }
    }).limit(3);


    return NextResponse.json({ data: recommended })
}
