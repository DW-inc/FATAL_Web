import Head from 'next/head'
import React from 'react'

interface CustomHeadProps {
  title: string
  description: string
  ogImage?: string // 이제 선택적 속성입니다.
}

const CustomHead: React.FC<CustomHeadProps> = ({
  title,
  description,
  ogImage = '/main.PNG', // 기본값을 설정합니다.
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="view-transition" content="same-origin" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content="/main.PNG" />
      {/* <meta property="og:url" content="https://my-page.com" /> 추후 주소 수정 */}
      <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}

export default CustomHead
