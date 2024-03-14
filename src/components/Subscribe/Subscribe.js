import React from 'react'
import { Form } from 'react-bootstrap'

const Subscribe = () => {
  return (
    <div className='subscribe'>
          <div className='container'>
      <h2>Hurry up! Subscribe our newsletter
and get 25% Off</h2>
      <p>Limited time offer for this month. No credit card required.</p>
      <Form>
<div className='row'>
<div className='col-md-8'>
         <input type='email' placeholder='Email Address here'/>
         </div>
         <div className='col-md-4'>
         <button>Subscribe</button>
         </div>
</div>
      </Form>
      </div>
    </div>
  )
}

export default Subscribe
