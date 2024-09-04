import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const env = process.env.NODE_ENV;
  const currentDate = new Date();
  const startDate = new Date('2024-11-1');
  const endDate = new Date('2025-01-31');
  if (env == "development"){
    return NextResponse.next();
  }
  if (currentDate < startDate) {
    return NextResponse.redirect(new URL('/aguardando/abertura', request.url));
  } else if (currentDate > endDate) {
    return NextResponse.redirect(new URL('/aguardando/proxima', request.url));
  }
  return NextResponse.next();
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/inscricao'],
}