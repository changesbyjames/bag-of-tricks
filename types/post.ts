import Author from './author'

type PostType = {
  slug: string
  title: string
  link: string
  excerpt: string
  content: string
  article: {
    link: string
    title?: string
  }
}

export default PostType
