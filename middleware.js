import { NextResponse } from "next/server";
export async function middleware(req) {
  // req.cookies.delete("token");
  // console.log("cookies", req.cookies.get("token"));
  let token = req.cookies.get("token")?.value || "";
  const currPath = req.nextUrl.pathname;
  const safePage = ["/donate", "/need", "/profile"];
  if (safePage.includes(currPath) && !token) {
    const url = req.nextUrl.clone();
    url.pathname = "/login";
    return NextResponse.redirect(url);
  } else if (
    (currPath === "/signup" && token) ||
    (currPath === "/login" && token)
  ) {
    const url = req.nextUrl.clone();
    url.pathname = "/logout";
    return NextResponse.redirect(url);
  } else if (currPath === "/logout" && !token) {
    const url = req.nextUrl.clone();
    url.pathname = "/login";
    return NextResponse.redirect(url);
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    "/",
    "/donate",
    "/need",
    "/login",
    "/signup",
    "/logout",
    "/profile",
  ],
};
