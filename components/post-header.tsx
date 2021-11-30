import PostTitle from './post-title'

type Props = {
  title: string
}

const PostHeader = ({ title }: Props) => {
  return (
    <div className="max-w-2xl mx-auto mb-8">
      <PostTitle>{title}</PostTitle>
    </div>
  )
}

export default PostHeader
