import { dbConnect } from '@/app/Components/lib/mongodb'
import productModel from '../../Schema/productschema';
import { NextResponse } from 'next/server';

export async function GET() {
    await dbConnect();

    const datas = await productModel.find({ offer: true });
    return NextResponse.json({data: datas})
}