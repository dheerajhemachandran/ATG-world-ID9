import React from 'react'
import styles from './Closed.module.css'
import Deals from '../Deals'
import cover from '../../assets/Cover.svg'
import profile from '../../assets/Profile.svg'

const Closed = () => {
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
  
    <div className={styles.livedeals}>
      <div className={styles.title}>Closed Deals</div>
      <div className={styles.sub}>30 Opportunities.</div>

      <div className="row">

          {deals.map((deal)=>
          <Deals deal={deal} closed={true}/>)}
      </div>
      <div className="d-flex justify-content-center">
        <div className="btn-outline-dark-blue">View more</div>
      </div>
    </div>
  )
}

export default Closed
