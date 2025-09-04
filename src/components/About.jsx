import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";

const About = () => {
  useGSAP(() => {
    const splitedTitle = new SplitText("#about h2",{type:"words"})
    const scrollTimeline = gsap.timeline({
        scrollTrigger:{
            trigger:"#about",
            start:"top center",
        }
    })

    scrollTimeline.from(splitedTitle.words,{
    opacity:0,
    yPercent:100,
    stagger:0.02,
    duration:1,
    ease:"expo.out"   
    })
    .from(".top-grid div, .bottom-grid div",{
        opacity:0,
        duration:1,
        stagger:0.04,
        ease:"power1.inOut"
    },"-=0.5")
    // console.log(splitedTitle)
  });

  return (
    <div id="about">
      <div className="mb-16 md:px-0 px-5">
        <div className="content">
          <div className="md:col-span-8">
            <p className="badge">Best Cocktails</p>
            <h2>
              Where every detail matters <span className="text-white">-</span>
              from muddle to garnish
            </h2>
          </div>
          <div className="sub-content">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa esse
              sapiente totam, praesentium commodi doloribus nostrum mollitia
              aliquid sed animi dolores soluta placeat minima, officiis
              consequatur voluptatem impedit alias quaerat?
            </p>
            <div className="">
              <p className="md:text-3xl text-xl font-bold">
                <span>4.5</span>/5
              </p>
              <p className="text-sm text-white-100">
                Moer then +12000 customers
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="top-grid">
        <div className="md:col-span-3">
          <div className="noisy" />
          <img src="/images/abt1.png" alt="grid-img-1" />
        </div>
        <div className="md:col-span-6">
          <div className="noisy" />
          <img src="/images/abt2.png" alt="grid-img-2" />
        </div>
        <div className="md:col-span-3">
          <div className="noisy" />
          <img src="/images/abt3.png" alt="grid-img-3" />
        </div>
      </div>

      <div className="bottom-grid">
        <div className="md:col-span-8">
          <div className="noisy" />
          <img src="/images/abt4.png" alt="grid-img-4" />
        </div>
        <div className="md:col-span-4">
          <div className="noisy" />
          <img src="/images/abt5.png" alt="grid-img-5" />
        </div>
      </div>
    </div>
  );
};

export default About;
