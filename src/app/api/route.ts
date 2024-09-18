export async function POST(request: Request) {
  try {
    const requisicao = await request
    console.log(requisicao.body)
    console.log(requisicao.credentials)
  } catch (e) {
    return new Response(`Webhook error: ${(e as Error).message}`, {
      status: 400,
    })
  }
 
  return new Response('Success!', {
    status: 200,
  })
}