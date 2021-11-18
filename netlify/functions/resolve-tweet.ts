import fetch from 'node-fetch';
import { builder, Handler } from "@netlify/functions";

const OGHandler: Handler = async (event, context) => {

  const tweetURL = `https://${event.path.replace('/.netlify/builders/resolve-tweet/', '')}`;
  const publishURL = `https://publish.twitter.com/oembed?url=${tweetURL}`

  try {
    const response = await fetch(publishURL);
    const body = await response.json();

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body),
    };

  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify(error),
      headers: {
        'Content-Type': 'application/json',
      },
    };
  }
};

const handler = builder(OGHandler);

export { handler };