import styled from  'styled-components'

export const Navbar = styled.nav`
  padding: 10px 20px 40px;
  background: transparent;
  background-image: -webkit-gradient(linear,left top,left bottom,from(rgba(0,0,0,.46)),color-stop(89%,transparent));

  li {
    font-size: 13px;
    font-weight: 100;
  }

  @media (min-width: 992px) {
    li {
      padding-left: 40px;
    }
  }

`

export const Image = styled.img`
  width: 80px;
  height: auto;
`
export const ImageResponsive = styled.img`
  width: 56px;
  height: auto;
`
