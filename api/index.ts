import { NowRequest, NowResponse } from "@now/node";
import url from "url";

export default async (request: NowRequest, response: NowResponse) => {
  try {
    const pathName = url.parse(request.url).pathname;

    // edge cache
    // setEdgeCache(response, "text/plain");

    response.status(200).send(`Hello Vercel!! : ${pathName}`);
  } catch (error) {
    console.error(`Error: ${error}`, error);
    response.status(400).send(`Error: ${error}`);
  }
};

function setEdgeCache(response: NowResponse, contentType: string) {
  response.setHeader("Context-Type", contentType);
  response.setHeader("Cache-Control", "public, max-age=315360000");
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
}
