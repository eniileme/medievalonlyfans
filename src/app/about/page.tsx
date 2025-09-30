import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
            About Medieval OnlyFans
          </h1>
          
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Welcome to the most epic medieval entertainment platform in the realm! 
              Our sandbox application combines the best of medieval culture with modern web technology.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
              What We Offer
            </h2>
            
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-6 space-y-2">
              <li>Authentic medieval memes and content</li>
              <li>Interactive knight and dragon adventures</li>
              <li>Premium castle tours and jester performances</li>
              <li>Community of medieval enthusiasts</li>
            </ul>
            
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
              Technology Stack
            </h2>
            
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Built with Next.js 15, TypeScript, and Tailwind CSS, this application 
              demonstrates modern web development practices while maintaining the 
              authentic medieval aesthetic.
            </p>
            
            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6 mt-8">
              <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-2">
                🏰 Explore Our Sandbox
              </h3>
              <p className="text-blue-800 dark:text-blue-200 mb-4">
                Check out our interactive MOF sandbox to see the medieval theme in action!
              </p>
              <Link 
                href="/mof"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
              >
                Visit MOF Sandbox →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
