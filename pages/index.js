import React, { useState, useEffect } from 'react';
import Head from 'next/head'

// Third party libraries
import { QrReader } from 'react-qr-reader';

// Styles
import styles from '../styles/Home.module.css'

export default function Home() {

  const [data, setData] = useState('')

  useEffect(()=>{
    data && console.log("state value changed -->",data)
  }, [data])

  // scanner result handler
  const handleScannerOutput = (res) => {
    console.log('response of qr code scanner -->', res)
    alert(res)
    setData(res)
  }

  return (
    <>

      <Head>
        <title>Qr Code Scanner</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <div className={styles.position_relative}>

        <div className={`${styles.shadow} ${styles.shadow_left}`}></div>
        <div className={`${styles.shadow} ${styles.shadow_right}`}></div>
        
        <div className={styles.qr_highlighter}></div>

        {/* QR Code scanner */}
        <QrReader
          onResult={(result) => {
            if (!!result) {
              handleScannerOutput(result?.text)
            }
          }}
          videoContainerStyle={{ paddingTop: "100vh" }}
          className={styles.qr_scanner}
        />

      </div>

    </>
  )
}
