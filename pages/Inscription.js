import Head from 'next/head';

import Headers from '../components/Headers';
import Insc from '../components/Insc';
import Footer from '../components/Footer';
export default function Inscription() {
  return (
    <div>
      <Head>
        <title>Formation</title>
        <link rel="icon" href="/favicon.icon" />
      </Head>

      <div>
        <Headers />
      </div>
      <div></div>

      <div className="flex justify-center">
        <Insc />{' '}
      </div>
      <div className="flex justify-center"> </div>

      <div className="flex justify-center"></div>
      <div>
        <Footer />{' '}
      </div>
      <div className="flex justify-center"> </div>
      <div className="flex justify-center"> </div>

      {/* <div className="flex justify-center"> <ChatBox/> </div> */}
    </div>
  );
}
