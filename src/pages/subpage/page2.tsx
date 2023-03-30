import Head from "next/head";
import Image from "next/image";
import styles from '@/styles/Home.module.css'
import nextSvg from '@/../public/next.svg'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App: Page 2</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        Page 2!
        <Image src={nextSvg} alt="Next.JS" />
      </main>
    </>
  )
}