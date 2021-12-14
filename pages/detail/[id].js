import Layout from "../../components/Layout";
import Header from "../../components/Header";
import Hero from "../../components/HeroDetail";
import Feature from '../../components/Feature';
import Service from '../../components/Service';
import About from '../../components/About';
import Footer from '../../components/Footer';
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



export async function getServerSideProps({query}) {
  // Fetch data from external API
  // const id = context.params.id
  const res = await fetch(`https://alpha-squad-uploads.s3.amazonaws.com/${query.id}.json`)
  const data = await res.json()
  // Pass data to the page via props
  return {
    props: { data }
  };
}
export default Index;
