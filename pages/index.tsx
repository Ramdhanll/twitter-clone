import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Feed from '../components/Feed'
import Sidebar from '../components/Sidebar'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
   return (
      <div>
         <Head>
            <title>Twitter</title>
            <link rel='icon' href='/favicon.ico' />
         </Head>
         <main className='bg-black min-h-screen flex max-w-[1500px] mx-auto'>
            <Sidebar />
            <Feed />
            {/* Widgets */}

            {/* Modal */}
         </main>
      </div>
   )
}

export default Home
