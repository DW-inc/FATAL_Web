import { AppBar, Container } from '@mui/material'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { styled } from '@mui/material/styles'
import { color } from '@mui/system'
import fatalbomblogo from '../../assets/image/fatalbomb.png'
import Image from 'next/image'
import people from '../../assets/icon/people.png'
import circle from '../../assets/icon/Circle.png'
import { useRouter } from 'next/router'

const useStyles = makeStyles((theme) => ({}))

const HeaderAppbar = styled(AppBar)({
  position: 'fixed',
  display: 'flex',
  justifyContent: 'center',
})

const HeaderContainer = styled(Container)((theme) => ({
  width: '100%',
  height: '75px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  color: '#fff',
  backgroundColor: '#050505',
}))

const TopContainer = styled('div')((theme) => ({
  display: 'flex',
  alignItems: 'center',
}))

const HeaderPlay = styled('div')((theme) => ({
  width: '150px',
  height: '42px',
  backgroundColor: '#767676',
  color: '#fff',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontWeight: '700',
  fontSize: '16px',
}))

const HeaderLogo = styled('div')((theme) => ({
  width: '161px',
  height: '22px',
  cursor: 'pointer',
}))

const TopPeopleIcon = styled('div')((theme) => ({
  marginRight: '2rem',
}))

const TopCircleIcon = styled('div')((theme) => ({
  marginRight: '2rem',
}))

export default function LayoutHeader() {
  const classes = useStyles()
  const router = useRouter()

  const ClickMain = () => {
    router.push('/')
  }

  return (
    <HeaderAppbar>
      <HeaderContainer maxWidth={false}>
        <HeaderLogo onClick={ClickMain}>
          <Image src={fatalbomblogo} alt="logo" />
        </HeaderLogo>
        <TopContainer>
          <TopPeopleIcon>
            <Image src={people} alt="peopleIcon" width={16} height={16} />
          </TopPeopleIcon>
          <TopCircleIcon>
            <Image src={circle} alt="languageIcon" width={16} height={16} />
          </TopCircleIcon>
          <HeaderPlay>지금 플레이하기</HeaderPlay>
        </TopContainer>
      </HeaderContainer>
    </HeaderAppbar>
  )
}
