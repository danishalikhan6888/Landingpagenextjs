import Layout from "../components/Layout";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Feature from '../components/Feature';
import Service from '../components/Service';
import About from '../components/About';
import Footer from '../components/Footer';
import { Container, Row, Col } from 'reactstrap';

const Index = () => {
  return (
    <Layout pageTitle="Landing Page Nextjs">
      <Header />
      <Container>
    <Row>
        <Col lg={12}>
          <h2>Detail Page</h2>
        </Col>
      </Row>
    </Container>
     <Service />
      <About />  
       <Hero />
      <Feature/>
    
      <Footer />
    </Layout>
  )
}

export default Index;
