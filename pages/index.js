import Head from 'next/head'
//provides optimized image major advantage is lazyloading(load only if image is in viewport)
// import Image from 'next/image'
//script component make using third party script easier 
import Script from 'next/script'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
// import Dummy from '@/components/dummy' used to demonstrate global style jsx
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    {/* <Dummy/> just to demonstrate global style js */}
     {/* style jsx is used to write internal css */}
      <style jsx>
      {`
        h2{
          font-size:30px;
        }
        h3{
          font-size:20px;
        }
        .blogItem{
          margin-bottom:10px;
        }
      `}
     </style>
      <Head>
        <title>Hunting coder</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* adding meta keyword */}
        <meta name="keywords" content='next,huntingcoder blog,hunting coder' /> 
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <script src="/sc.js"></script> */}

      
      <main className={styles.main}>
          <h1 className={styles.title}>
            Hunting Coder
          </h1>
          <div className={styles.imgWrap}>
          {/* we can't use image component of next while using static site generation instead use img tag
          <Image className={styles.myImg} src="/home.jpg" alt="" width={237} height={158}/> */}
          <img className={styles.myImg} src="/home.jpg" alt="" width={237} height={158} />
          </div>
          <br />
          <p className={styles.description}>
            A blog for hunting coders by a hunting coder
          </p>
          <br /> <br />
        <div className="blogs">
          <h2>Latest Blogs</h2> <br />
          <div className="blogItem">
            <h3>How to learn javascript in 2023</h3>
            <p>Javascript can be learned from any platform, kaisa laga mera majak</p>
          </div>
        </div>
        <div className="blogs">
          <div className="blogItem">
            <h3>How to learn javascript in 2023</h3>
            <p>Javascript can be learned from any platform, kaisa laga mera majak</p>
          </div>
        </div>
        <div className="blogs">
          <div className="blogItem">
            <h3>How to learn javascript in 2023</h3>
            <p>Javascript can be learned from any platform, kaisa laga mera majak</p>
          </div>
        </div>
      </main>
    </>
  )
}
