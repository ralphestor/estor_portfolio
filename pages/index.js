import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Ralph Estor</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <main className='homeContainer'>
          <h1 className='homeName'>RALPH ESTOR</h1>
          <h1 className='homeTitle'>WEB DEVELOPER</h1>
          <div className='homeBox'></div>
          <div className='homeCircle'></div>
          <div className='homeImgCont'>
            <Image
              className='homeImg'
              src="/ralphgif_edit.gif"
              alt="Ralph Estor"
              layout='fill'
              objectFit='contain'
              draggable='false'
            />
          </div>
          <ul className='homeLinks'>
            <li className='homeLink'>
              <Link href='/about' passHref>
                <a className='homeLink-child'>
                  About
                </a>
              </Link>
            </li>
            <li className='homeLink'>
              <Link href='/projects' passHref>
                <a className='homeLink-child'>
                  Projects
                </a>
              </Link>
            </li>
            <li className='homeLink'>
              <Link href='/connect' passHref>
                <a className='homeLink-child'>
                  Connect
                </a>
              </Link>
            </li>
          </ul>

        </main>
      </div>
    </div>
  )
}
