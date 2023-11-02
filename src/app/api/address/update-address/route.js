import connectToDB from "@/database";
import AuthUser from "@/middleware/AuthUser";
import Address from "@/models/address";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function PUT(req) {
  try {
    await connectToDB();
    const isAuthUser = await AuthUser(req);

    if (isAuthUser) {
      const data = await req.json();
      const { _id, fullName, city, address, country, postalCode } = data;

      const updateAddress = await Address.findOneAndUpdate(
        {
          _id: _id,
        },
        { fullName, city, address, country, postalCode },
        { new: true }
      );

      if (updateAddress) {
        return NextResponse.json({
          success: true,
          message: "L’adresse a été mise à jour avec succès !",
        });
      } else {
        return NextResponse.json({
          success: false,
          message: "Impossible de mettre à jour l’adresse ! Veuillez réessayer",
        });
      }
    } else {
      return NextResponse.json({
        success: false,
        message: "Vous n’êtes pas authentifié",
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
