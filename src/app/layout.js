import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/footer/Footer'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: {
    default:"Homepage",
    template:"%s | Next.js 14"
  },
  description: "Next.js starter app description",
  icons: {
    icon: {
      media: '(prefers-color-scheme: light)',
        url: '/images/dc.png',
        href: '/images/dc.png',
    }
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <div className="container">
        <Navbar />
          {children}
        <Footer />
      </div>
        
      </body>
    </html>
  )
}