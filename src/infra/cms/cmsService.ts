import IPerguntas from "../types/IPerguntas";
const API_TOKEN = process.env.DATO_TOKEN;
const DATO_URL = process.env.DATO_URL;
const DATO_URL_PREVIEW = process.env.DATO_URL_PREVIEW;
interface iCmsService {
  query: string,
  tag: string
  preview: boolean,
}


export async function cmsService<respose>({ query,tag, preview }:iCmsService):Promise<respose> {
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
      }),
      next: {
        tags: [tag]
      }
    }).then(async serverResponse => {
      const body = await serverResponse.json();
      if (!body.errors) return body;

      throw new Error(JSON.stringify(body));
    });

    return {
      ...pageContentResponse.data
    };
  } catch (error:any) {
    throw new Error(error.message);
  }
}
