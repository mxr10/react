import React from 'react'
import styled, { css } from 'styled-components'
import { Container, Row, Col } from 'react-awesome-styled-grid'
import siteConfig from '../../data/siteConfig'
import { withPrefix } from "gatsby"
import Layout from '../components/layout'
import Hero from '../components/hero'
import SEO from '../components/SEO'
import Wrapper from '../components/wrapper'

const Image = styled.img`
  max-height: 220px;
  max-width: 220px;
  object-fit: cover;
  object-position: center center;
  border-radius: 10px;
  box-shadow: 24px 47px 79px -21px rgba(0,0,0,0.51);
`

const JobCard = styled.a`
  text-decoration: none;
  color: inherit;

  ${({ href }) => href && css`
    &:hover ${Image}{
      transition: transform .5s;
      transform: translateY(-5px);
    }
  `}
`

const cookies = ({ className, location }) => {
  const title = "Uso de Cookies"
  const { keywords, cookies } = siteConfig
  return (
    <Layout location={location}>
      <SEO title={title} keywords={keywords} />
      <Hero heroImg={withPrefix('/images/pierre-chatel-innocenti-W5INoOK-5eI-unsplash.jpg')} title={title} />

      <Wrapper className={className}>
        <Container className="page-content" fluid>
          <Row>
            <p>
                Un cookie es un pequeño archivo de datos que algunos sitios web crean en el disco duro del dispositivo, cuando este los visita. Un archivo cookie puede contener cierta información, como por ejemplo, la identificación de usuario que el sitio web emplea para llevar un recuento de las páginas visitadas. Sin embargo, la única información personal que un cookie puede contener, es aquella que usted mismo proporcione. El cookie no puede leer los datos del disco duro del usuario, ni leer archivos cookie creados por otros sitios Web. Este sitio utiliza los cookies para hacer seguimiento a los patrones de tráfico del usuario cuando usted se registra y cuando intenta ingresar a alguna seccion en nuestro sitio web.
            </p>

            <p>
                Este sitio emplea esta identificación para identificarlo a usted, anónimamente y hacer seguimiento a las páginas visitadas por usted en nuestra página web.
            </p>
          </Row>
        </Container>
      </Wrapper>
    </Layout>
  )
}

export default styled(cookies)`
  .page-content {
    max-width: 100%;
    margin-bottom: 40px;
  }

`
