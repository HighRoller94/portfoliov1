import React from 'react'
import Head from 'next/head'
import AltNavOverlay from '../components/AltNavOverlay'

const pyre = () => {
  return (
    <>
    <Head>
        <title>Ash Bridges | Pyre</title>
        <meta 
            name="description" 
            content="Music player app powered by React." />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/logoFill.svg" />
    </Head>
    <AltNavOverlay />
    <div>pyre</div>
    </>
    
  )
}

export default pyre