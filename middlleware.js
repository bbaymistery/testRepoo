// middleware.js

import { NextResponse } from 'next/server';

export function middleware(request) {
    const url = request.nextUrl.clone(); // Clone the request URL to modify it
    if (url.pathname.includes('//')) {
        // Check if the URL contains double slashes
        const normalizedPath = url.pathname.replace(/\/\/+/g, '/'); // Replace double slashes with a single slash
        url.pathname = normalizedPath; // Update the pathname with the normalized path
        return NextResponse.redirect(url); // Redirect to the normalized URL
    }
    return NextResponse.next(); // Proceed with the request if no normalization is needed
}
