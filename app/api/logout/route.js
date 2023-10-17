import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    const res = NextResponse.json(
      {
        success: true,
        msg: "Logout Successful",
      },
      { status: 200 }
    );
    res.cookies.set("token", "", {
      httpOnly: true,
      path: "/",
      maxAge: 0,
    });
    return res;
  } catch (error) {
    return NextResponse.json(
      { success: false, msg: error.message },
      { status: 500 }
    );
  }
}
