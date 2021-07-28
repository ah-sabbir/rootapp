import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import Navigation from '../components/navigation/navBar'
import logoImage from '../public/favicon.png'

export default function Home() {
  const [text, setText] = useState("")
  const [fullText, setFullText] = useState("Your source of leading.")
  const [index, setIndex] = useState(0)
  const [reverseIndex, setReverseIndex] = useState(fullText.length)

    useEffect(() => {
      if (index < fullText.length) {
        setTimeout(() => {
          setText(text + fullText[index])
          setIndex(index + 1)
          setReverseIndex(index - 1)
        }, 150)
      }
      // if( index <= fullText.length){
      //   setInterval(() => {
      //     setText(text + fullText[index])
      //     setIndex(index + 1)
      //   }, 500);
      // }
    }, [index])


  return (
    <div>
      <Head>
        <title>task time</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className="header"></div>
      <div className="w-screen h-screen  bg-black box-border flex bg-gray-darkest">
        <Navigation/>
        <div className=" flex-col w-full h-full items-center">
          {/* <h1 className=" font-mono text-5xl font-bold uppercase ">
            {text}
            <span className="animate-blinker">|</span>
          </h1> */}
          <div className="flex h-1/2 items-end justify-center">
            {/* <h1 className="text-yellow-600 uppercase tracking-widest font-Qahiri font-bold">tasktime</h1> */}
            <Image 
              src={logoImage} 
              alt="Picture of the author"
              width={350}
              height={250} />
          </div>
          <div className="flex h-1/2 items-start justify-center">
            {/* <p className="text-white-light uppercase">track the task to be faster.</p> */}
          </div>
        </div>
      </div>
    </div>
  )
}
