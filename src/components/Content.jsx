import React, { Component } from 'react'
import {Row,Col,Container} from 'react-bootstrap'
import plansData from './data/data.json'
import {Carousel} from 'react-bootstrap'

class Content extends Component {
  render() {
      return (

        <Container>
            {console.log(plansData)}
        <Row className='RowContainer-class row-cols-xs-2 row-cols-md-4'>
            {plansData&&plansData.map(
                Plan=><Col className='Col-class'>
                {<div className='planwrapper_title'>
                  <h4 className='h3_class'>{Plan.title}</h4>
                </div>}
                <div className='featureswrapper-class'>
                    {Plan.features.map(feature=>
                      <h6>{feature}</h6>
                      )}
                </div>
              </Col>)}
      
        </Row>
        </Container>
      )
    }
}

export default Content
