import { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'

type Props = {
  title?: string
  link: string
}

const getUrl = (link?: string, url?: string) => {
  if (!url) return;
  if (url.includes('http')) {
    return url
  }
  return `${link}${url}`
}

const PostLink = ({ link, title }: Props) => {
  
  const [info, setInfo] = useState<{ ogTitle: string, ogDescription: string, ogImage: { url: string }, ogUrl: string }>();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(`/.netlify/builders/resolve-link/${link}`);
        setInfo(await response.json());
      } catch (e) {}
      setLoading(false);
    })()
  }, [link])

  return <div className="mx-auto max-w-2xl mb-8 rounded-md border overflow-hidden">
    <a href={`https://${link}`} target="_blank" rel="noreferrer">
      { loading ? <div style={{aspectRatio: '1.91 / 1' }} className="w-full bg-gray-50" /> : null }
      { !loading && info?.ogImage ? <div style={{aspectRatio: '1.91 / 1', backgroundImage: info ? `url("${getUrl(info?.ogUrl, info?.ogImage?.url)}")` : undefined }} className="w-full bg-cover bg-center bg-no-repeat bg-gray-50" /> : null }
      <div className="m-4">
        <h3 className="text-xl font-medium">{ loading ?  <Skeleton height={26} /> : (title ? title : info?.ogTitle) }</h3>
        <p className="text-sm">{ info ? info?.ogDescription : <Skeleton count={3} /> }</p>
        <p className="text-sm text-gray-700">{ loading ? <Skeleton width={130} /> : link }</p>
      </div>
    </a>
  </div>
}

export default PostLink;
