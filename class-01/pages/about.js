import Link from 'next/link';

function AboutPage() {
  return (
    <div>
      <h1>About</h1>
      <p>This is page about</p>

      <ul>
        <li>
          <Link href='/'>
            <a>Home</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default AboutPage;
