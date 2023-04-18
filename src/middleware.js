import { NextResponse } from "next/server";

export async function middleware(request, _next) {
    const res = NextResponse.next();
    let ip = request.ip || request.headers.get('x-real-ip')
    const forwardedFor = request.headers.get('x-forwarded-for')
    if (!ip && forwardedFor) {
        ip = forwardedFor.split(',').at(0) || 'Unknown'
    }
    if (ip) {
        res.cookies.set("user-ip", ip, {
            httpOnly: false,
        });
    }
    
    const { nextUrl: url, geo } = request;
    const country = geo.country || 'gb';
    res.cookies.set("user-country", country, {
        httpOnly: false,
    });
  
    return res;
}

