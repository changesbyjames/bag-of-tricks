import { useEffect, useState } from 'react';

type Props = {
  link: string
}

const PostTweet = ({ link }: Props) => {
  
  const [tweet, setTweet] = useState<string>();
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(`/.netlify/builders/resolve-tweet/${link}`);
				const meta = await response.json()
        setTweet(meta.html);
        // @ts-ignore
        twttr.widgets.load()
      } catch (e) {}
    })()
  }, [link])

  return tweet ? <div
	  dangerouslySetInnerHTML={{ __html: tweet }} 
		className="mx-auto flex justify-center max-w-2xl my-8 overflow-hidden">
  </div> : null
}

export default PostTweet;
