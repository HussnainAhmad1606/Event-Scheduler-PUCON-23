import Navbar from '@/components/Navbar'
import '../css/globals.css'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html data-theme="dark" lang="en">
      
      <body>
        <Navbar/>
        {children}
        </body>
    </html>
  )
}
