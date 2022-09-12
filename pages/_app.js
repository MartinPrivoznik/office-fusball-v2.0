import "../assets/css/nucleo-icons.css";
import "../assets/scss/blk-design-system-react.scss";
import "../assets/demo/demo.css";

import {Container} from 'reactstrap';
import Layout from '../components/Layout/Layout'

function MyApp({ Component, pageProps }) {
  return <Container><Layout><Component {...pageProps} /></Layout></Container>
}

export default MyApp
