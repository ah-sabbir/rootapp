import type { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import AppLayout from '../AppLayout/AppLayout'
import Main from '../components/Content/Home/Main'

import Header from '../components/Header/Header'


const Home: NextPage = () => {
  return (
    <React.Fragment>
       <AppLayout>
          <Main/> 
       </AppLayout>  
    </React.Fragment>
  )
}

export default Home
