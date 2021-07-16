import Head from 'next/head'
import Image from 'next/image'
import link from 'next/link'
import { useEffect, useState } from 'react'
import navigation from '../components/navigation/navigation'
// import styles from '../styles/Home.module.css'

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
        <title>this is my test application</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <navigation/>
      <div className=" h-screen bg-gray-800 flex justify-center items-center">
        <navigation/>
        <div className=" ">
          <h1 className=" font-mono text-5xl font-bold uppercase ">
            {text}
            <span className="animate-blinker">|</span>
            </h1>
        </div>
      </div>
    </div>
  )
}
