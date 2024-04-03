import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Post() {
  const router = useRouter();

  return (
    <div>
      <h1>Id current post: {router.query.id}</h1>
      <ul>
        <li>
          <Link href='/'>
            <a>Back to home</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}
