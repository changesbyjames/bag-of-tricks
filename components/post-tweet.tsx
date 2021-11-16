import { useEffect, useState } from 'react';

type Props = {
  link: string
}

const PostTweet = ({ link }: Props) => {
  
  const [tweet, setTweet] = useState<string>();
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(`https://publish.twitter.com/oembed?url=https://${link}`);
				const meta = await response.json()
        setTweet(meta.html);
      } catch (e) {}
    })()
  }, [link])

  return tweet ? <div
	  dangerouslySetInnerHTML={{ __html: tweet }} 
		className="mx-auto max-w-2xl my-8 rounded-md border overflow-hidden">
  </div> : null
}

export default PostTweet;
