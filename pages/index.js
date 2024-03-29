import Head from 'next/head';

import Headers from '../components/Headers';
import Carousels from '../components/Carousels';
import Landing from '../components/Landing';
import Favorie from '../components/Favorie';
import CycleW from '../components/CycleW';
import Footer from '../components/Footer';
export default function Home() {
  return (
    <div>
      <Head>
        <title>Formation</title>
        <link rel="icon" href="/favicon.icon" />
      </Head>

      <div>
        <Headers />
      </div>
      <div>
        <Carousels />
      </div>

      <div className="flex justify-center">
        {' '}
        <Landing />
      </div>
      <div className="flex justify-center">
        {' '}
        <CycleW />
      </div>

      <div className="flex justify-center">
        <Favorie />
      </div>
      <div>
        <Footer />{' '}
      </div>
      <div className="flex justify-center"> </div>
      <div className="flex justify-center"> </div>

      {/* <div className="flex justify-center"> <ChatBox/> </div> */}
    </div>
  );
}
