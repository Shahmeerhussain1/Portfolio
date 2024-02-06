// import data from "@/data/data";
// import FrontSection from "@/components/FrontSection";
// import { useEffect, useState } from "react";
// import Splash from "@/components/Splash";
// export default function Home() {
//   const [splash, setSplash] = useState(true);



//   return (
//     <>

//       <FrontSection />
//     </>

//   );
// }
'use client';
import data from '@/data/data';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';
const FrontSection = () => {
  let router = useRouter()
  // const AnimatedCursor = dynamic(() => import('react-animated-cursor'), {
  //   ssr: false,
  // });
  return (
    <>
      <div
        id={

          'black-theme-frontPage'
        }
      >


        <div className='AlParentProjects'>

          <div className='headingp'>
            These Are the Projects I have worked on...
          </div>

          <div className='main-projects-div'>

            <div className='main-projects-div-sub'>
              <div className='main-projects-div-sub-round'>
              <img style={{width : '100%' , borderRadius :'inherit'}} src='https://d1ktjbp6cxlhh6.cloudfront.net/hf8nnpB0bvwxhXMvMzbt/iR8E4NFjO9iZqPRqHPf5/1683112004672' />

              </div>
              <h4>Walletly</h4>
              <p>Walletly empowers businesses with customer subscriptions for recurring income and convenient value-driven revenue streams</p>
            </div>

            <div className='main-projects-div-sub'>
              <div className='main-projects-div-sub-round'>
              <img style={{width : '100%' , borderRadius :'inherit'}} src='https://minti.ai/images/mintiIcon.png' />
              </div>
              <h4>Minti</h4>
              <p>Minti is the recruitment app that automatically matches you with active jobs in your area,</p>            </div>

            <div className='main-projects-div-sub'>
              <div className='main-projects-div-sub-round'>
                <img style={{width : '100%' , borderRadius :'inherit'}} src='https://fastroadsideservice.co/images/rolingtyre.png' />
              </div>
              <h4>Fast Roadside service</h4>
              <p>This is a One page Website for like informing the viewers , created on next js .</p>
            </div>

            <div className='main-projects-div-sub'>
              <div className='main-projects-div-sub-round'></div>
              <h4>Walletly</h4>
              <p>Walletly empowers businesses with customer subscriptions for recurring income and convenient value-driven revenue streams</p>
            </div>

            <div className='main-projects-div-sub'>
              <div className='main-projects-div-sub-round'></div>
              <h4>Walletly</h4>
              <p>Walletly empowers businesses with customer subscriptions for recurring income and convenient value-driven revenue streams</p>
            </div>

            <div className='main-projects-div-sub'>
              <div className='main-projects-div-sub-round'></div>
              <h4>Walletly</h4>
              <p>Walletly empowers businesses with customer subscriptions for recurring income and convenient value-driven revenue streams</p>
            </div>

          </div>
        </div>
        {/* <div class='connect__marker'>F
            <div class='connect__circle'></div>
            <div class='connect__circle'></div>
            <div class='connect__circle'></div>
            <div class='connect__circle'></div>
          </div> */}
        <div className='GationBar'>
          <div className='GationBarOne' onClick={() => { router.push('/projects') }}>
            Projects
          </div>
          <div className='GationBarOne' onClick={() => { router.push('/history') }}>
            History
          </div>
          <div className='GationBarOne' onClick={() => { router.push('/contact') }}>
            Contact
          </div>
        </div>
      </div>

      {/* <AnimatedCursor
        innerSize={8}
        outerSize={35}
        innerScale={1}
        outerScale={1.7}
        outerAlpha={0}
        hasBlendMode={true}
        innerStyle={{
          backgroundColor: '#929292',
        }}
        outerStyle={{
          mixBlendMode: 'exclusion',
          border: '3px solid #929292',
        }}
      /> */}
    </>
  );
};
export default FrontSection;
