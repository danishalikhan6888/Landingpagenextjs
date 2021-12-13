import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import axios from 'axios'
import useSWR from 'swr'

const Hero = () => {
  const [APIData, setAPIData] = useState([])
  const fetcher = url => axios.get(url).then(res => res.data) 
  const { data, error } = useSWR('https://catfact.ninja/fact', fetcher)
  
 
  useEffect(() => {
   
  }, []);

  return (
    <section className="section position-relative">
      <Container>
        <Row className="align-items-center">
          <Col lg={6}>
            <div className="pr-lg-5">
              <p className="text-uppercase text-primary font-weight-medium f-14 mb-4">Lorem Ipsum</p>
              <h1 className="mb-4 font-weight-normal line-height-1_4">Simply dummy text of the printing <span className="text-primary font-weight-medium">Name</span></h1>
              <p className="text-muted mb-4 pb-2">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
              <button onClick={() => { getAPIData() }} className="btn btn-warning">
                Find Out How <span className="ml-2 right-icon">&#8594;</span>
              </button>
            </div>
          </Col>
          <Col lg={6}>
            <div className="mt-5 mt-lg-0">
              <img src="/images/Group Members.png" alt="" className="img-fluid mx-auto d-block" />
            </div>
          </Col>
        </Row>
        <Row className="align-items-center">
          {/* {APIData.map((item, i) => {
            return (
              <Col className="overflow-hidden"  key={i} lg={3}>
                {JSON.stringify(APIData)}
              </Col>
            );
          })} */}
          <Col className="overflow-hidden" lg={3}>
            {/* {JSON.stringify(APIData)} */}
            {error ? <div>failed to load</div> : ""}
            {!data ? <div>loading...</div> : JSON.stringify(data)}
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Hero;