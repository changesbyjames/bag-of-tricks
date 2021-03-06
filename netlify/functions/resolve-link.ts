import OpenGraphClient, { SuccessResult } from 'open-graph-scraper';
import { builder, Handler } from "@netlify/functions";

const OGHandler: Handler = async (event, context) => {

  const url = `https://${event.path.replace('/.netlify/builders/resolve-link/', '')}`;

  try {
    const body = await OpenGraphClient({ url });
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body.result),
    };

  } catch (e) {

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({}),
    };
  }
};

const handler = builder(OGHandler);

export { handler };