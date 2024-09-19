import { revalidateTag } from "next/cache";

const DATO_WEBHOOK_TOKEN = process.env.DATO_WEBHOOK_TOKEN;

export async function POST(request: Request) {
  try {
    const texto = await request.json()
    const auth = await request.headers.get("Authorization")
    if (auth != `Bearer ${DATO_WEBHOOK_TOKEN}`){
      return new Response("Not Authorized", {status: 401})
    }
    console.log("tag:", texto.tag)

    if (texto.tag === "faq"){
      revalidateTag("faq")
      console.log("tag faq revalidada")
    }

  } catch (e) {
    return new Response(`Webhook error: ${(e as Error).message}`, {
      status: 400,
    })
  }
 
  return new Response('Success!', {
    status: 200,
  })
}