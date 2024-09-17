import IPerguntas from "../types/IPerguntas";
const API_TOKEN = process.env.DATO_TOKEN;
const DATO_URL = process.env.DATO_URL;
const DATO_URL_PREVIEW = process.env.DATO_URL_PREVIEW;
interface iCmsService {
  query: string,
  preview: boolean
}

export async function cmsService({ query, preview }:iCmsService):Promise<IPerguntas> {
  const url = preview ? DATO_URL_PREVIEW : DATO_URL;
  try {
    const pageContentResponse = await fetch(url? url : "", {
      method: "POST",

      headers: {
        "content-type": "application/json",
        Authorization: "Bearer " + API_TOKEN
      },
      body: JSON.stringify({
        query
      })
    }).then(async serverResponse => {
      const body = await serverResponse.json();
      if (!body.errors) return body;

      throw new Error(JSON.stringify(body));
    });
    console.log("cmsService",{
      ...pageContentResponse.data
    })

    return {
      ...pageContentResponse.data
    };
  } catch (error:any) {
    throw new Error(error.message);
  }
}
