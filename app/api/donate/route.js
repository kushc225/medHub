import { NextResponse } from "next/server";
import MedicineModel from "@/models/MedicineModel.js";
import { dbConnect } from "@/features/dbConnect.js";
import decodeToken from "@/features/decodeToken";

export async function POST(req) {
  try {
    await dbConnect();
    const { token, list } = await req.json();
    const decoded = await decodeToken(token);
    const newmed = await MedicineModel.create({
      owner: decoded.id,
      list: list,
    });
    return NextResponse.json(
      { success: true, msg: "Medicine added Successfully", newmed },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, msg: error.message },
      { status: 500 }
    );
  }
}
