import Link from 'next/link'

type Props = {
  title: string
  excerpt: string
  slug: string
}

const PostPreview = ({
  title,
  excerpt,
  slug,
}: Props) => {
  return (
    <div>
      <h3 className="text-2xl mb-3 font-medium leading-tight">
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a className="hover:underline">{ excerpt ? '✏️' : '🔗' } {title}</a>
        </Link>
      </h3>
      <p className="leading-relaxed mb-4">{excerpt}</p>
    </div>
  )
}

export default PostPreview
