import React from 'react'
import Deals from './subcomponents/Deals'
import cover from './utils/Cover.svg'
import profile from './utils/Profile.svg'

const Live = () => {
  const deals=[{
    cover:cover,
    profile:profile,
    title:"Uber eats",
    content:"Uber Eats is an online food ordering and delivery platform launched by Uber in 2014.",
    btn1:"FINTECH",
    btn2:"HEALTH"
  },{
    cover:cover,
    profile:profile,
    title:"Uber eats",
    content:"Uber Eats is an online food ordering and delivery platform launched by Uber in 2014.",
    btn1:"FINTECH",
    btn2:"HEALTH"
  },{
    cover:cover,
    profile:profile,
    title:"Uber eats",
    content:"Uber Eats is an online food ordering and delivery platform launched by Uber in 2014.",
    btn1:"FINTECH",
    btn2:"HEALTH"
  },{
    cover:cover,
    profile:profile,
    title:"Uber eats",
    content:"Uber Eats is an online food ordering and delivery platform launched by Uber in 2014.",
    btn1:"FINTECH",
    btn2:"HEALTH"
  },{
    cover:cover,
    profile:profile,
    title:"Uber eats",
    content:"Uber Eats is an online food ordering and delivery platform launched by Uber in 2014.",
    btn1:"FINTECH",
    btn2:"HEALTH"
  },{
    cover:cover,
    profile:profile,
    title:"Uber eats",
    content:"Uber Eats is an online food ordering and delivery platform launched by Uber in 2014.",
    btn1:"FINTECH",
    btn2:"HEALTH"
  },]
  return (
    <div className='livedeals'>
      <div className="title">Live Deals</div>
      <div className="sub-title">130 Opportunities.</div>

      <div className="row">

          {deals.map((deal)=>
          <Deals deal={deal} closed={false}/>)}
      </div>
      <div className="d-flex justify-content-center">
        <div className="btn btn-view">View more</div>
      </div>
    </div>
  )
}

export default Live
