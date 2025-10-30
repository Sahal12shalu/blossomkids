import { dbConnect } from '@/app/Components/lib/mongodb'
import productModel from '../../Schema/productschema';
import CartModel from '../../Schema/cartschema';
import { NextResponse } from 'next/server';

export async function POST(req) {
  await dbConnect();

  const { searchParams } = new URL(req.url)
  const proId = searchParams.get('proId')
  const deviceId = searchParams.get('deviceId')

  const product = await productModel.findById(proId);

  let cart = await CartModel.findOne({ deviceId });

  const productToAdd = {
    id: proId,
    name: product.name,
    description: product.description,
    category: product.category,
    stock: product.stock,
    firstprize: product.firstprize,
    lastprize: product.lastprize,
    discount: product.discount,
    quantity: 1,
    images: product.images,
  };

  const productPrice = parseFloat(product.lastprize);

  if (!cart) {
    const newCart = new CartModel({
      deviceId,
      grandtotal: productPrice,
      items: [productToAdd],
    });

    await newCart.save();
    return NextResponse.json({ message: 'success' });
  }

  const existingProductIndex = cart.items.findIndex(
    (item) =>
      item.id === product.id
  );
  if (existingProductIndex !== -1) {
    cart.items[existingProductIndex].quantity += 1;
  } else {
    cart.items.push(productToAdd);
  }

  cart.grandtotal += productPrice;

  await cart.save();

  return NextResponse.json({ message: 'success' });
}

export async function GET(req) {
  await dbConnect();

  const { searchParams } = new URL(req.url)
  const guestId = searchParams.get('guestId')

  const data = await CartModel.findOne({ deviceId: guestId })

  if (data) {
    return NextResponse.json({ message: data });
  } else {
    return NextResponse.json({ message: 'nodata' });
  }
}

export async function DELETE(req) {
  await dbConnect();

  const { searchParams } = new URL(req.url)
  const proId = searchParams.get('proId')
  const guestId = searchParams.get('guestId')

  const cart = await CartModel.findOne({ deviceId: guestId });
  if (cart) {

    const itemToRemove = cart.items.find(
      (item) => item._id.toString() === proId
    );

    if (!itemToRemove) {
      return NextResponse.json({ message: "nocart" });
    }

    if (cart.items.length === 1 && cart.items[0]._id.toString() === proId) {

      await CartModel.deleteOne({ _id: cart._id });
      return NextResponse.json({ message: 'cartdeleted' });
    } else {

      const itemTotal = itemToRemove.lastprize * itemToRemove.quantity;

      const newGrandTotal = cart.grandtotal - itemTotal;
      await CartModel.updateOne(
        { deviceId: guestId },
        { $pull: { items: { _id: proId } },
        $set: { grandtotal: newGrandTotal < 0 ? 0 : newGrandTotal },
        }
      );

      return NextResponse.json({ message: 'Itemremoved',grandtotal: newGrandTotal < 0 ? 0 : newGrandTotal, });
    }
  } else {
    return NextResponse.json({ message: 'nocart' });
  }
}

export async function PUT(req) {
  await dbConnect();

  const { searchParams } = new URL(req.url)
  const proId = searchParams.get('proId')
  const guestId = searchParams.get('guestId')
  const action = searchParams.get('action')

  const cart =await CartModel.findOne({deviceId : guestId})
  if(!cart) return NextResponse.json({ message: 'nocart' });

  const item =await cart.items.find((i)=>String(i.id) === String(proId))
  if(!item) return NextResponse.json({ message: 'noitem' });

  if(action === 'inc') item.quantity += 1;
  if(action === 'dec' && item.quantity > 1) item.quantity -= 1;

  cart.grandtotal = cart.items.reduce((sum,i) => sum + i.lastprize * i.quantity, 0);

  await cart.save()

  return NextResponse.json({ message: 'success', updatedItem:{ id: item.id, quantity: item.quantity}, 
  grandtotal: cart.grandtotal });
}