import connectToDB from "@/database";
import AuthUser from "@/middleware/AuthUser";
import Address from "@/models/address";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function DELETE(req) {
  try {
    await connectToDB();
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({
        success: false,
        message: "L’ID d’adresse est requis",
      });
    }

    const isAuthUser = await AuthUser(req);

    if (isAuthUser) {
      const deletedAddress = await Address.findByIdAndDelete(id);

      if (deletedAddress) {
        return NextResponse.json({
          success: true,
          message: "L’adresse est supprimée avec succès",
        });
      } else {
        return NextResponse.json({
          success: false,
          message: "Impossible de supprimer l’adresse ! Veuillez réessayer",
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
