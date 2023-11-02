import connectToDB from "@/database";
import AuthUser from "@/middleware/AuthUser";
import Product from "@/models/product";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function PUT(req) {
  try {
    await connectToDB();

    const isAuthUser = await AuthUser(req);

    if (isAuthUser?.role === "admin") {
      const extractData = await req.json();
      const {
        _id,
        name,
        price,
        description,
        category,
        sizes,
        deliveryInfo,
        onSale,
        priceDrop,
        imageUrl,
      } = extractData;

      const updatedProduct = await Product.findOneAndUpdate(
        {
          _id: _id,
        },
        {
          name,
          price,
          description,
          category,
          sizes,
          deliveryInfo,
          onSale,
          priceDrop,
          imageUrl,
        },
        { new: true }
      );

      if (updatedProduct) {
        return NextResponse.json({
          success: true,
          message: "Produit mis à jour avec succès",
        });
      } else {
        return NextResponse.json({
          success: false,
          message: "Impossible de mettre à jour le produit ! Veuillez réessayer plus tard",
        });
      }
    } else {
      return NextResponse.json({
        success: false,
        message: "Vous n’êtes pas authentifié",
      });
    }
  } catch (e) {
    console.log(error);
    return NextResponse.json({
      success: false,
      message: "Quelque chose s’est mal passé ! Veuillez réessayer plus tard",
    });
  }
}
