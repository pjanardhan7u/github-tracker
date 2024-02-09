import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'GitHub-Tracker',
  description: 'GitHub-Xplorer: Explore Coding Projects, Open Source, and More | Find Top Repos - Discover a curated collection of GitHub repositories, explore coding projects, open-source initiatives, and find top repositories easily.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-gray-400">
      {children}
      </body>
    </html>
  )
}
