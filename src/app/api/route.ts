export async function POST(request: Request) {
  try {
    const text = await request.text()
    console.log(text)
  } catch (e) {
    return new Response(`Webhook error: ${(e as Error).message}`, {
      status: 400,
    })
  }
 
  return new Response('Success!', {
    status: 200,
  })
}