import connectToDB from "@/database";
import AuthUser from "@/middleware/AuthUser";
import Cart from "@/models/cart";
import Order from "@/models/order";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(req) {
  try {
    await connectToDB();
    const isAuthUser = await AuthUser(req);

    if (isAuthUser) {
      const data = await req.json();
      const { user } = data;

      const saveNewOrder = await Order.create(data);

      if (saveNewOrder) {
        await Cart.deleteMany({ userID: user });

        return NextResponse.json({
          success: true,
          message: "Des produits sont en route !",
        });
      } else {
        return NextResponse.json({
          success: false,
          message: "Echec de la création d’une commande ! Veuillez réessayer",
        });
      }
    } else {
      return NextResponse.json({
        success: false,
        message: "Vous n’êtes pas authentifiée",
      });
    }
  } catch (e) {
    return NextResponse.json({
      success: false,
      message: "Quelque chose s’est mal passé ! Veuillez réessayer plus tard",
    });
  }
}
