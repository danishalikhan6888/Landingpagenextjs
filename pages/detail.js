import Layout from "../components/Layout";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Feature from '../components/Feature';
import Service from '../components/Service';
import About from '../components/About';
import Footer from '../components/Footer';
import { Container, Row, Col } from 'reactstrap';

const Index = ({ data }) => {
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
      <Hero data={data} />
      <Footer />
    </Layout>
  )
}



export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://alpha-squad-uploads.s3.amazonaws.com/posts.json`)
  const data = await res.json()
  // Pass data to the page via props
  return {
    props: { data }
  };
}
export default Index;
