import { useRouter } from 'next/router';

export default function Custom404() {
  const router = useRouter();
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
      }}>
      <h1>Hi well this is awkward...</h1>
      <p>The page you wanted to visit {router.asPath} doesn&#39;t exist</p>
      <p>Maybe go back?</p>
    </div>
  );
}
