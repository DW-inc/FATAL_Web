import Head from 'next/head'
import React from 'react'

interface CustomHeadProps {
  title: string
  description: string
}

const CustomHead: React.FC<CustomHeadProps> = ({ title, description }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="view-transition" content="same-origin" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content="http://ffffatalbomb.com/ogImage.png" />
      {/* <meta property="og:url" content="https://my-page.com" /> 추후 주소 수정 */}
      <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}

export default CustomHead
