"use client"
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
//import link to be used like <Link>
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const Work = () => {

  useEffect(() => {
    // Reset scroll position when component mounts
    window.scrollTo(0, 0);
    
    let ctx = gsap.context(() => {
      document.querySelectorAll(".work-showcase").forEach((section) => {
        let workName = document.querySelector(".work-title .work-name");
        let projectName = section.getAttribute("data-project");

        gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top 50%",
            end: "bottom 50%",
            scrub: 1,
            markers: false,
            onEnter: () => {
              workName.innerHTML = projectName;
              gsap.to(workName, { opacity: 1, duration: 0.5 });
            },
            onLeave: () => {
              gsap.to(workName, { opacity: 0, duration: 0.5, onComplete: () => workName.innerHTML = "" });
            },
            onEnterBack: () => {
              workName.innerHTML = projectName;
              gsap.to(workName, { opacity: 1, duration: 0.5 });
            },
            onLeaveBack: () => {
              gsap.to(workName, { opacity: 0, duration: 0.5, onComplete: () => workName.innerHTML = "" });
            }
          },
        });
      });
    });

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, []);

  useEffect(() => {
    // Reset scroll position when component mounts
    window.scrollTo(0, 0);
    
    const scrollTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-wrapper",
        start: "top top",
        end: "+=500%",
        pin: ".work-title",
        pinSpacing: true,
        scrub: 1,
        markers: false,
      }
    });

    // Scale up first
    scrollTl.to(".work-title-inner", {
      scale: 2,
      ease: "none",
      duration: 1
    })
    // .to(".work-showcase-wrapper", {
    //   yPercent: -100,
    //   ease: "none",
    //   duration: 2
    // })
    .to(".work-title-inner", {
      scale: 1.5,
      ease: "none",
      duration: 0.1
    });

    return () => {
      scrollTl.kill();
      ScrollTrigger.getAll().forEach(st => st.kill()); // Kill all ScrollTrigger instances
      ScrollTrigger.clearMatchMedia(); // Clear any matchMedia queries
    };
  }, []);

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">
        <div className="relative overflow-hidden">
          <div className="work-wrapper">
            <div className="height-fit-body flex items-center justify-center w-full work-title sticky top-0">
            <span className="work-name">name</span>
            <div className="work-title-inner">
              <span className="font-[500] text-center text-[12rem]">WORK</span>
            </div>
            </div>
            <div className="work-showcase-wrapper h-[400vh]">
              <div className="flex flex-col h-full justify-between">
                <div className="work-showcase" data-project="MDMD">
                  <Link href={'/mdmd'}>
                  <video width="640" height="360" autoPlay loop muted playsInline>
                    <source src="/works/2.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  </Link>
                </div>
                <div className="work-showcase" data-project="Hot Buttered">
                  <img src="/works/6.png" alt="hotbuttered"/>
                </div>
                <div className="work-showcase" data-project="JFD Studio">
                  <video width="640" height="360" autoPlay loop muted playsInline>
                    <source src="/works/3.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <div className="work-showcase" data-project="IMSU">
                  <video width="640" height="360" autoPlay loop muted playsInline>
                    <source src="/works/4.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
