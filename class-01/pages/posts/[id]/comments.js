import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Comments() {
  const router = useRouter();

  return (
    <div>
      Comments of post with id: {router.query.id}
      <ul>
        <li>
          <Link href='/'>
            <a>Go to home</a>
          </Link>
        </li>
        <li>
          <Link href={`/posts/${router.query.id}`}>
            <a>Go to post</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}
