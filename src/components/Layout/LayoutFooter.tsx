import { Grid } from '@mui/material'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { styled } from '@mui/material/styles'
import FooterIcon_1 from './../../assets/icon/icon_footer1.png'
import FooterIcon_2 from './../../assets/icon/icon_footer2.png'
import FooterIcon_3 from './../../assets/icon/icon_footer3.png'
import FooterIcon_4 from './../../assets/icon/icon_footer4.png'
import Image from 'next/image'

const useStyles = makeStyles((theme) => ({
  container: {},
}))

const Wrapper = styled('div')((theme) => ({
  position: 'absolute',
  width: '100%',
}))

const FooterContainer = styled('div')((theme) => ({
  width: '100%',
  height: '212px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  color: '#fff',
  backgroundColor: '#050505',
  gap: '1.5rem',
}))

const FooterSns = styled('div')((theme) => ({
  width: '45%',
  display: 'flex',
  justifyContent: 'space-evenly',
}))
const FooterBox = styled('div')((theme) => ({
  width: '50%',
  height: '33px',
  background: '#D0D0D0',
}))
const FooterBoxs = styled('div')((theme) => ({
  width: '50%',
  height: '33px',
  background: '#282828',
}))

export default function LayoutFooter() {
  const classes = useStyles()

  return (
    <Wrapper>
      <FooterContainer>
        <FooterSns>
          <div>
            <Image
              src={FooterIcon_1}
              alt="footer_icon"
              width={17}
              height={13}
            />
          </div>
          <div>
            <Image
              src={FooterIcon_2}
              alt="footer_icon"
              width={13}
              height={13}
            />
          </div>
          <div>
            <Image
              src={FooterIcon_3}
              alt="footer_icon"
              width={16}
              height={13}
            />
          </div>
          <div>
            <Image
              src={FooterIcon_4}
              alt="footer_icon"
              width={14}
              height={14}
            />
          </div>
        </FooterSns>
        <FooterBox />
        <FooterBoxs />
      </FooterContainer>
    </Wrapper>
  )
}
