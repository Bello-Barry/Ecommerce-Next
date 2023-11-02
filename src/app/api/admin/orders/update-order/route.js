import connectToDB from "@/database";
import AuthUser from "@/middleware/AuthUser";
import Order from "@/models/order";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function PUT(req) {
  try {
    await connectToDB();
    const isAuthUser = await AuthUser(req);
    const data = await req.json();

    if (isAuthUser?.role === "admin") {
      const {
        _id,
        shippingAddress,
        orderItems,
        paymentMethod,
        isPaid,
        paidAt,
        isProcessing,
      } = data;

      const updateOrder = await Order.findOneAndUpdate(
        { _id: _id },
        {
          shippingAddress,
          orderItems,
          paymentMethod,
          isPaid,
          paidAt,
          isProcessing,
        },
        { new: true }
      );

      if (updateOrder) {
        return NextResponse.json({
          success: true,
          message: "Le statut de la commande a été mis à jour avec succès ! ",
        });
      } else {
        return NextResponse.json({
          success: true,
          message: "Echec de la mise à jour de l’état de la commande",
        });
      }
    } else {
      return NextResponse.json({
        success: false,
        message: "Vous n’êtes pas autorisée !",
      });
    }
  } catch (e) {
    console.log(e);
    return NextResponse.json({
      success: false,
      message: "Quelque chose s’est mal passé ! Veuillez réessayer plus tard",
    });
  }
}
