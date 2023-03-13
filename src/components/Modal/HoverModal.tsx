import styled from '@emotion/styled'

const Wrapper = styled('ul')((theme) => ({
  position: 'absolute',
  top: '3.5rem',
  width: '195px',
  height: '211px',
  borderTop: '1px solid  #53FFD6',
  background: '#000',
  transform: 'translateX(-25%)',
}))

const GuideHoverContainer = styled('div')((theme) => ({}))

const GuideList = ['THE WOLRD', 'HERO', 'CONTROL', 'MOD GUIDE']

export default function Header_Guide_Hover() {
  return (
    <Wrapper>
      <GuideHoverContainer>
        {GuideList.map((value, index) => (
          <li style={{ listStyleType: 'none' }} key={index}>
            {value}
          </li>
        ))}
      </GuideHoverContainer>
    </Wrapper>
  )
}
