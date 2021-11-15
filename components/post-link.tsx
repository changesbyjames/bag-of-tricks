import { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'

type Props = {
  link: string
}

const getUrl = (url: string, link: string) => {
  if (url.includes('http')) {
    return url
  }
  return `${link}${url}`
}

const PostLink = ({ link }: Props) => {
  
  const [info, setInfo] = useState<{ ogTitle: string, ogDescription: string, ogImage: { url: string }, ogUrl: string }>();
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(`/.netlify/builders/resolve-link/${link}`);
        setInfo(await response.json());
      } catch (e) {}
    })()
  }, [link])

  return <div className="mx-auto max-w-2xl my-8 rounded-md border overflow-hidden">
    <a href={`https://${link}`} target="_blank" rel="noreferrer">
      <div style={{aspectRatio: '16 / 9', backgroundImage: info ? `url("${getUrl(info.ogImage.url, info.ogUrl)}")` : undefined }} className="w-full bg-cover bg-center bg-gray-50" />
      <div className="m-4">
        <h3 className="text-xl font-medium">{ info ? info.ogTitle : <Skeleton height={26} /> }</h3>
        <p>{ info ? info.ogDescription : <Skeleton count={3} /> }</p>
        <p className="text-gray-800">{ info ? info.ogUrl : <Skeleton width={130} /> }</p>
      </div>
    </a>
  </div>
}

export default PostLink;
