import { useEffect, useState } from 'react'
import {
  Button,
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  Nav,
  Container,
  Row,
  Col,
} from 'reactstrap'

function FusballNavbar() {
  const [collapseOpen, setCollapseOpen] = useState(false)
  const [collapseOut, setCollapseOut] = useState('')
  const [color, setColor] = useState('navbar-transparent')
  useEffect(() => {
    window.addEventListener('scroll', changeColor)
    return function cleanup() {
      window.removeEventListener('scroll', changeColor)
    }
  }, [])
  const changeColor = () => {
    if (
      document.documentElement.scrollTop > 99 ||
      document.body.scrollTop > 99
    ) {
      setColor('bg-default')
    } else if (
      document.documentElement.scrollTop < 100 ||
      document.body.scrollTop < 100
    ) {
      setColor('navbar-transparent')
    }
  }
  const toggleCollapse = () => {
    document.documentElement.classList.toggle('nav-open')
    setCollapseOpen(!collapseOpen)
  }
  const onCollapseExiting = () => {
    setCollapseOut('collapsing-out')
  }
  const onCollapseExited = () => {
    setCollapseOut('')
  }
  return (
    <Navbar className={'fixed-top ' + color} color-on-scroll="100" expand="lg">
      <Container>
        <div className="navbar-translate">
          <NavbarBrand to="/" id="navbar-brand">
            <span>Valatron </span>
            office fusball
          </NavbarBrand>
          <button
            aria-expanded={collapseOpen}
            className="navbar-toggler navbar-toggler"
            onClick={toggleCollapse}
          >
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button>
        </div>
        <Collapse
          className={'justify-content-end ' + collapseOut}
          navbar
          isOpen={collapseOpen}
          onExiting={onCollapseExiting}
          onExited={onCollapseExited}
        >
          <div className="navbar-collapse-header">
            <Row>
              <Col className="collapse-brand" xs="6">
                <a href="/" onClick={(e) => e.preventDefault()}>
                  Office fusball
                </a>
              </Col>
              <Col className="collapse-close text-right" xs="6">
                <button
                  aria-expanded={collapseOpen}
                  className="navbar-toggler"
                  onClick={toggleCollapse}
                >
                  <i className="tim-icons icon-simple-remove" />
                </button>
              </Col>
            </Row>
          </div>
          <Nav navbar>
            <NavItem>
              <Button color="success" className="d-none d-lg-block">
                Přihlášení
              </Button>
            </NavItem>
            <NavItem>
              <Button color="default" className="d-none d-lg-block">
                Registrace
              </Button>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  )
}

export default FusballNavbar
