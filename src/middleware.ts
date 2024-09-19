import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { cmsService } from './infra/cms/cmsService';
import IDatas from './infra/types/IDatas';
 
const query = `
query { dataImportante{ id inicioDasInscriOes fimDasInscriEs inicioDaCrisma fimDaCrisma } } `

export async function middleware(request: NextRequest) {
  const env = process.env.NODE_ENV;
  const currentDate = new Date();
  const datas = await cmsService<IDatas>({query, tag:"datas", preview:false})
  const startDate = new Date(datas.inicioDasInscriOes);
  const endDate = new Date(datas.fimDasInscriEs);
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