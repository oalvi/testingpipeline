export default function Home() {
  return (
    <main>
      <h1>Vercel Pipeline Demo</h1>
      <p>Environment: {process.env.ENVIRONMENT || 'local'}</p>
    </main>
  );
}
