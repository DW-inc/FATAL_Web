import { AppBar, Container } from '@mui/material'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { css, styled } from '@mui/material/styles'
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

const HeaderPlay = styled('div')(
  (theme) => css`
    width: 150px;
    height: 42px;
    background-color: #767676;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    font-size: 16px;

    @media (max-width: 480px) {
      display: none;
    }
  `
)

const HeaderLogo = styled('div')((theme) => ({
  width: '161px',
  height: '22px',
  cursor: 'pointer',
}))

const TopPeopleIcon = styled('div')(
  (theme) => css`
    margin-right: 2rem;
    @media (max-width: 480px) {
      margin-right: 1rem;
    }
  `
)
// const TopPeopleIcon = styled('div')((theme) => ({
//   marginRight: '2rem',
//   @media (max-width: 480px) {
//     display: none;
//   }
// }))

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
          <TopCircleIcon>
            <Image
              src={circle}
              alt="languageIcon"
              onClick={() => router.push('/signup')}
            />
          </TopCircleIcon>
          <TopPeopleIcon>
            <Image
              src={people}
              alt="peopleIcon"
              onClick={() => router.push('/login')}
            />
          </TopPeopleIcon>

          <HeaderPlay>지금 플레이하기</HeaderPlay>
        </TopContainer>
      </HeaderContainer>
    </HeaderAppbar>
  )
}
