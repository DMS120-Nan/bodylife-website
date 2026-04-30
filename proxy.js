import { NextResponse } from "next/server";

const REGION_COOKIE = "bodylife-region";
const DEFAULT_REGION = "us";
const MIDDLE_EAST_COUNTRIES = new Set([
  "AE",
  "SA",
  "QA",
  "KW",
  "OM",
  "BH",
  "EG",
  "JO"
]);
const VALID_REGIONS = new Set(["us", "me"]);

function getCountryCode(request) {
  return (
    request.headers.get("x-vercel-ip-country") ||
    request.headers.get("cf-ipcountry") ||
    request.headers.get("x-country-code") ||
    request.geo?.country ||
    ""
  ).toUpperCase();
}

function getDetectedRegion(request) {
  const countryCode = getCountryCode(request);

  return MIDDLE_EAST_COUNTRIES.has(countryCode) ? "me" : DEFAULT_REGION;
}

function isPrefetch(request) {
  return (
    request.headers.get("purpose") === "prefetch" ||
    request.headers.get("next-router-prefetch") === "1"
  );
}

function setRegionCookie(response, region) {
  response.cookies.set(REGION_COOKIE, region, {
    httpOnly: false,
    maxAge: 60 * 60 * 24 * 365,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production"
  });
}

export function proxy(request) {
  const { pathname } = request.nextUrl;
  const firstSegment = pathname.split("/").filter(Boolean)[0];
  const savedRegion = request.cookies.get(REGION_COOKIE)?.value;

  if (pathname === "/") {
    const region = VALID_REGIONS.has(savedRegion)
      ? savedRegion
      : getDetectedRegion(request);
    const url = request.nextUrl.clone();

    url.pathname = `/${region}`;

    const response = NextResponse.redirect(url);
    setRegionCookie(response, region);

    return response;
  }

  if (VALID_REGIONS.has(firstSegment) && !isPrefetch(request)) {
    const response = NextResponse.next();
    setRegionCookie(response, firstSegment);

    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/us/:path*", "/me/:path*"]
};
