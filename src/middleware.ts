import { NextResponse, type MiddlewareConfig, NextRequest } from "next/server";
import { publicRoutes } from "./routes/public/publicRoutes";
import { REDIRECT_WHEN_NOT_AUTHENTICATED } from "./routes/public/RedirectWhenNotAuthenticated";

export function middleware(NextRequest: NextRequest) {
  const pathUrl = NextRequest.nextUrl.pathname;
  const isPublicRoute = publicRoutes.find((route) => {
    if (route.path.includes("*")) {
      const basePathUrl = route.path.replace("/*", "/");
      return pathUrl.startsWith(basePathUrl);
    }
    return route.path === pathUrl;
  });
  const hasAuthToken = NextRequest.cookies.get("authToken");

  if ((hasAuthToken && !isPublicRoute) || (!hasAuthToken && isPublicRoute)) {
    return NextResponse.next();
  } else if (!hasAuthToken && !isPublicRoute) {
    const redirectUrl = NextRequest.nextUrl.clone();
    redirectUrl.pathname = REDIRECT_WHEN_NOT_AUTHENTICATED;

    return NextResponse.redirect(redirectUrl);
  } else if (
    hasAuthToken &&
    isPublicRoute &&
    isPublicRoute.whenAuthenticated === "redirect"
  ) {
    const redirectUrl = NextRequest.nextUrl.clone();
    redirectUrl.pathname = "/";

    return NextResponse.redirect(redirectUrl);
  }

  return NextResponse.next();
}

export const config: MiddlewareConfig = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
