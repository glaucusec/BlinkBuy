import { NextRequest, NextResponse } from "next/server";
import { decrypt } from "./lib/session";

export const config = {
  matcher: ["/sign_in", "/sign_up", "/account"],
};

export default async function middleware(request: NextRequest) {
  const sessionCookie = request.cookies.get("session");
  const sessionValid = await decrypt(sessionCookie?.value);
  const pathname = request.nextUrl.pathname;

  // redirect to login if not authenticated.
  if (!sessionValid && pathname == "/account") {
    return NextResponse.redirect(new URL("/sign_in", request.url));
  }
}
