import { dbConnect } from '@/app/Components/lib/mongodb'
import productModel from '../../Schema/productschema';
import { NextResponse } from 'next/server';

export async function POST(req) {
    await dbConnect();

    const body = await req.json();
    productModel.insertOne(body)

    return NextResponse.json({data: 'success'})
}

export async function GET() {
    await dbConnect();

    const datas =await productModel.find()
    return NextResponse.json({data: datas})
}

export async function DELETE(req) {
    await dbConnect();

    const { searchParams } = new URL(req.url)
    const id = searchParams.get('id')

    const data = await productModel.findByIdAndDelete(id)
    if(data){
    return NextResponse.json({data: 'success'})
    }else{
        return NextResponse.json({data: 'unsuccess'})
    }
}

export async function PUT(req) {
    await  dbConnect()

    const body = await req.json();
    
    const { proId,name,category,stock,description,firstprize,lastprize,discount,images,offer,offerimage } = body;

    if (!proId) {
      return NextResponse.json({ error: 'Product ID is missing' }, { status: 400 });
    }

    const updatedProduct = await productModel.findByIdAndUpdate(
      proId,
      { name,category,stock,description,firstprize,lastprize,discount,images,offer,offerimage },
      {
        new: true,
        runValidators: true,
      }
    );
    if(updatedProduct){
    return NextResponse.json({data: 'success'})
    }else{
    return NextResponse.json({data: 'unsuccess'})
    }

}
