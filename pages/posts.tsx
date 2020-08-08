import { getPosts } from '../actions';
import { Post } from '../types';

export const getServerSideProps = async () => {
  const posts = await getPosts(); 

  return {
    props: { posts }
  };
}

interface PostsProps {
  posts: Post[]
}

export default function Posts({ posts }: PostsProps) {
  return (
    <section className="posts">
      <div className="container">
        <h1>Posts!</h1>
        <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
        </ul>
      </div>
    </section>
  )
}