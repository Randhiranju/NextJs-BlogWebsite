import '@/styles/globals.css'
//  global css is css applied to all pages of next app
import Navbar from '@/components/Navbar'
export default function App({ Component, pageProps }) {
  return(
  <> 
  <Navbar/>
   <Component {...pageProps} />
   </>
  )
} 
