import connectToDB from "@/database";
import AuthUser from "@/middleware/AuthUser";
import Product from "@/models/product";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function DELETE(req) {
  try {
    await connectToDB();
    const isAuthUser = await AuthUser(req);

    if (isAuthUser?.role === "admin") {
      const { searchParams } = new URL(req.url);
      const id = searchParams.get("id");

      if (!id)
        return NextResponse.json({
          success: false,
          message: "L’ID de produit est requis",
        });

      const deletedProduct = await Product.findByIdAndDelete(id);

      if (deletedProduct) {
        return NextResponse.json({
          success: true,
          message: "Le produit a été supprimé avec succès",
        });
      } else {
        return NextResponse.json({
          success: false,
          message: "Impossible de supprimer le produit ! Veuillez réessayer",
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
