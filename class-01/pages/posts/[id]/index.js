import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Post() {
  const router = useRouter();

  return (
    <div>
      Current post id: {router.query.id}
      <ul>
        <li>
          <Link href='/'>
            <a>Go to home</a>
          </Link>
        </li>
        <li>
          <Link href={`${router.query.id}/comments`}>
            <a>Go to comments</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}
