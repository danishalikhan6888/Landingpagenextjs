import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Link from "next/link";
import axios from 'axios'
import useSWR from 'swr'

const Hero = ({ data, id }) => {
  const [item, setItem] = useState()
  console.log("data", id.id)





  // const getAPIData = async () => {
  //   try {
  //     const response = await axios.get('https://alpha-squad-uploads.s3.amazonaws.com/posts.json', {
  //     }).then((response) => {
  //       setAPIData(response.data)
  //     });
  //   }
  //   catch (err) {
  //   }
  // }
  useEffect(() => {
    if (id.id) {
      findItem()
    }
  }, [id.id]);

  const findItem = () => {
    const found = data.find((_item) => _item.id == id.id)
    setItem(found)
  }





  return (
    <section className="section position-relative">
      <Container>
        
        <div className="d-flex flex-column align-items-start">
          {item && <div style={{ cursor: "pointer" }}  className='d-flex align-items-center'>
            <p className=''>{item.id}:  </p>
            <p className=''>{item.title}</p>
          </div>}
          <Col className="overflow-hidden" lg={3}>
            {/* {JSON.stringify(APIData)} */}
            {/* {error ? <div>failed to load</div> : ""}
            {!data ? <div>loading...</div> : JSON.stringify(data)} */}
          </Col>
        </div>
      </Container>
    </section>
  );
}


export default Hero;