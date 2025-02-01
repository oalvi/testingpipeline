export default function Home() {
  return (
    <main className="min-h-screen p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <h1 className="text-4xl font-bold mb-8">
          Vercel Pipeline Demo
        </h1>
        
        <div className="bg-white rounded-lg p-6 shadow-lg">
          <p className="text-2xl mb-4">
            Current Environment: {' '}
            <span className="font-bold text-blue-600">
              {process.env.ENVIRONMENT || 'local'}
            </span>
          </p>
          
          <p className="text-gray-600">
            Build Time: {new Date().toLocaleString()}
          </p>
        </div>
      </div>
    </main>
  );
}
