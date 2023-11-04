import { Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '600'], 
})



export const metadata = {
  title: 'StartUp-000',
  description: 'In associate with Tahsin Faiyaz && AR Aronno GH.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`poppins ${poppins.className}`}>
      
        {children}</body>
    </html>
  )
}
