import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import Navigation from '../components/navigation/Navigation'
// import styles from '../styles/Home.module.css'
import busWindowImage from '../images/bus-window-side.jpg'


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
        <title>Fantasy Motion Studio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className=""></div>
      <div className="w-screen h-screen  bg-black box-border flex bg-gray-darkest">
        <Navigation/>
        <div className="w-full h-auto flex justify-center items-center">
          {/* <h1 className=" font-mono text-5xl font-bold uppercase ">
            {text}
            <span className="animate-blinker">|</span>
          </h1> */}
          <h1 className=" text-yellow-600 uppercase font-Qahiri font-bold">Fantasy Motion Studio</h1>
        </div>
      </div>
    </div>
  )
}
