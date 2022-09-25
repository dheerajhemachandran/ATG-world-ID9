import React from 'react'
import styles from './Live.module.css'
import Deals from '../Deals'
import cover from '../../assets/Cover.svg'
import profile from '../../assets/Profile.svg'

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
    <div className={styles.livedeals}>
      <div className={styles.title}>Live Deals</div>
      <div className={styles.sub}>130 Opportunities</div>

      <div className="row gap">

          {deals.map((deal)=>
          <Deals deal={deal} closed={false}/>)}
      </div>
      <div className="d-flex justify-content-center">
        <div className="btn-outline-dark-blue">View more</div>
      </div>
    </div>
  )
}

export default Live
