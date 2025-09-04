import React from 'react'
import { useGSAP } from '@gsap/react'
import { SplitText } from 'gsap/all'
import gsap from 'gsap'


const Hero = () => {
    useGSAP(()=>{
        const heroSplit = new SplitText(".title",{type:"chars, words"})
        const paraSplit = new SplitText(".subtitle",{type:"lines"})

        heroSplit.chars.forEach((char)=> char.classList.add("text-gradient"))

        gsap.from(heroSplit.chars,{
            yPercent:100,
            opacity:0,
            duration:1.8,
            ease:"expo.out",
            stagger:0.06,
        })

        gsap.from(paraSplit.lines,{
            yPercent:100,
            opacity:0,
            duration:1.8,
            ease:"expo.out",
            stagger:0.06,
            delay:1
        })

        gsap.timeline({
            scrollTrigger:{
                trigger:"#hero",
                start:"top top",
                end:"bottom top",
                scrub:true
            }
        })
        .to(".right-leaf",{y:200},0)
        .to(".left-leaf",{y:-200},0)

    },[])
  return (
    <>
    <section id='hero' className='noisy select-none'>
    <h1 className='title'>MOJITO</h1>
    <img src="/images/hero-left-leaf.png" alt="leaf" className='left-leaf'/>
    <img src="/images/hero-right-leaf.png" alt="leaf" className='right-leaf'/>

    <div className="body">
        <div className="content">
            <div className="space-y-5 hidden md:block">
                <p>Cool. Crisp. Classic.</p>
                <p className="subtitle">
                    Sip the Spirit <br/> of Summer
                </p>
            </div>
            <div className="view-cocktails">
                <p className="subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, blanditiis. Lorem ipsum dolor sit amet.</p>
                <a href="#cocktails">View Cocktails</a>
            </div>
        </div>
    </div>
    </section>
    </>
  )
}

export default Hero