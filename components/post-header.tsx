import DateFormatter from './date-formatter'
import PostTitle from './post-title'

type Props = {
  title: string
  date: string
}

const PostHeader = ({ title, date }: Props) => {
  return (
    <div className="max-w-2xl mx-auto mb-8">
      <PostTitle>{title}</PostTitle>
      <div className="max-w-2xl mx-auto">
        <div className="mb-6 text-sm">
          <DateFormatter dateString={date} />
        </div>
      </div>
    </div>
  )
}

export default PostHeader
