# Open app/page.tsx and update the content
cat > app/page.tsx << 'EOL'
export default function Home() {
  return (
    <main className="min-h-screen p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <h1 className="text-4xl font-bold mb-8">
          Vercel Pipeline Demo - v2
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

          <p className="mt-4 text-green-600">
            Testing pipeline approvals! 🚀
          </p>
        </div>
      </div>
    </main>
  );
}
EOL

# Commit and push the changes
git add app/page.tsx
git commit -m "test: update homepage to test pipeline approvals"
git push origin main
