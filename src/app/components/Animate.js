"use client"
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './Animate.css'; // Import your CSS file

export const Animate = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const textElement = textRef.current;

    // Define a function to trigger the animation on scroll
    const animateOnScroll = () => {
      // Get the scroll position of the page
      const scrollPosition = window.scrollY;

      // Define the scroll position at which you want to trigger the animation
      const triggerPosition = 200; // Adjust this value as needed

      if (scrollPosition > triggerPosition) {
        // Create a GSAP animation when the scroll position is greater than the trigger position
        gsap.from(textElement, {
          x: -100, // Start position (left)
          opacity: 0, // Start opacity
          scale: 0.5, // Start scale (small)
          duration: 4, // Animation duration
          ease: 'power4.out', // Easing function
        });

        // Remove the scroll event listener once the animation has been triggered
        window.removeEventListener('scroll', animateOnScroll);
      }
    };

    // Add a scroll event listener to trigger the animation
    window.addEventListener('scroll', animateOnScroll);

    // Cleanup: Remove the scroll event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', animateOnScroll);
    };
  }, []);



  const textRef1 = useRef(null);

  useEffect(() => {
    const textElement = textRef1.current;

    // Define a function to trigger the animation on scroll
    const animateOnScroll = () => {
      // Get the scroll position of the page
      const scrollPosition = window.scrollY;

      // Define the scroll position at which you want to trigger the animation
      const triggerPosition = 1000; // Adjust this value as needed

      if (scrollPosition > triggerPosition) {
        // Create a GSAP animation when the scroll position is greater than the trigger position
        gsap.from(textElement, {
          x: -100, // Start position (left)
          opacity: 0, // Start opacity
          scale: 0.5, // Start scale (small)
          duration: 4, // Animation duration
          ease: 'power4.out', // Easing function
        });

        // Remove the scroll event listener once the animation has been triggered
        window.removeEventListener('scroll', animateOnScroll);
      }
    };

    // Add a scroll event listener to trigger the animation
    window.addEventListener('scroll', animateOnScroll);

    // Cleanup: Remove the scroll event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', animateOnScroll);
    };
  }, []);

  const textRef2 = useRef(null);

  useEffect(() => {
    const textElement = textRef2.current;

    // Define a function to trigger the animation on scroll
    const animateOnScroll = () => {
      // Get the scroll position of the page
      const scrollPosition = window.scrollY;

      // Define the scroll position at which you want to trigger the animation
      const triggerPosition = 1800; // Adjust this value as needed

      if (scrollPosition > triggerPosition) {
        // Create a GSAP animation when the scroll position is greater than the trigger position
        gsap.from(textElement, {
          x: -100, // Start position (left)
          opacity: 0, // Start opacity
          scale: 0.5, // Start scale (small)
          duration: 4, // Animation duration
          ease: 'power4.out', // Easing function
        });

        // Remove the scroll event listener once the animation has been triggered
        window.removeEventListener('scroll', animateOnScroll);
      }
    };

    // Add a scroll event listener to trigger the animation
    window.addEventListener('scroll', animateOnScroll);

    // Cleanup: Remove the scroll event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', animateOnScroll);
    };
  }, []);



  const textRef3 = useRef(null);

  useEffect(() => {
    const textElement = textRef3.current;

    // Define a function to trigger the animation on scroll
    const animateOnScroll = () => {
      // Get the scroll position of the page
      const scrollPosition = window.scrollY;

      // Define the scroll position at which you want to trigger the animation
      const triggerPosition = 2000; // Adjust this value as needed

      if (scrollPosition > triggerPosition) {
        // Create a GSAP animation when the scroll position is greater than the trigger position
        gsap.from(textElement, {
          x: -100, // Start position (left)
          opacity: 0, // Start opacity
          scale: 0.5, // Start scale (small)
          duration: 4, // Animation duration
          ease: 'power4.out', // Easing function
        });

        // Remove the scroll event listener once the animation has been triggered
        window.removeEventListener('scroll', animateOnScroll);
      }
    };

    // Add a scroll event listener to trigger the animation
    window.addEventListener('scroll', animateOnScroll);

    // Cleanup: Remove the scroll event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', animateOnScroll);
    };
  }, []);


  const textRef4 = useRef(null);

  useEffect(() => {
    const textElement = textRef4.current;

    // Define a function to trigger the animation on scroll
    const animateOnScroll = () => {
      // Get the scroll position of the page
      const scrollPosition = window.scrollY;

      // Define the scroll position at which you want to trigger the animation
      const triggerPosition = 2000; // Adjust this value as needed

      if (scrollPosition > triggerPosition) {
        // Create a GSAP animation when the scroll position is greater than the trigger position
        gsap.from(textElement, {
          x: -100, // Start position (left)
          opacity: 0, // Start opacity
          scale: 0.5, // Start scale (small)
          duration: 4, // Animation duration
          ease: 'power4.out', // Easing function
        });

        // Remove the scroll event listener once the animation has been triggered
        window.removeEventListener('scroll', animateOnScroll);
      }
    };

    // Add a scroll event listener to trigger the animation
    window.addEventListener('scroll', animateOnScroll);

    // Cleanup: Remove the scroll event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', animateOnScroll);
    };
  }, []);



  const textRef5 = useRef(null);

  useEffect(() => {
    const textElement = textRef5.current;

    // Define a function to trigger the animation on scroll
    const animateOnScroll = () => {
      // Get the scroll position of the page
      const scrollPosition = window.scrollY;

      // Define the scroll position at which you want to trigger the animation
      const triggerPosition = 2000; // Adjust this value as needed

      if (scrollPosition > triggerPosition) {
        // Create a GSAP animation when the scroll position is greater than the trigger position
        gsap.from(textElement, {
          x: -100, // Start position (left)
          opacity: 0, // Start opacity
          scale: 0.5, // Start scale (small)
          duration: 4, // Animation duration
          ease: 'power4.out', // Easing function
        });

        // Remove the scroll event listener once the animation has been triggered
        window.removeEventListener('scroll', animateOnScroll);
      }
    };

    // Add a scroll event listener to trigger the animation
    window.addEventListener('scroll', animateOnScroll);

    // Cleanup: Remove the scroll event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', animateOnScroll);
    };
  }, []);


  const textRef6 = useRef(null);

  useEffect(() => {
    const textElement = textRef6.current;

    // Define a function to trigger the animation on scroll
    const animateOnScroll = () => {
      // Get the scroll position of the page
      const scrollPosition = window.scrollY;

      // Define the scroll position at which you want to trigger the animation
      const triggerPosition = 2800; // Adjust this value as needed

      if (scrollPosition > triggerPosition) {
        // Create a GSAP animation when the scroll position is greater than the trigger position
        gsap.from(textElement, {
          x: -100, // Start position (left)
          opacity: 0, // Start opacity
          scale: 0.5, // Start scale (small)
          duration: 4, // Animation duration
          ease: 'power4.out', // Easing function
        });

        // Remove the scroll event listener once the animation has been triggered
        window.removeEventListener('scroll', animateOnScroll);
      }
    };

    // Add a scroll event listener to trigger the animation
    window.addEventListener('scroll', animateOnScroll);

    // Cleanup: Remove the scroll event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', animateOnScroll);
    };
  }, []);


  const textRef7 = useRef(null);

  useEffect(() => {
    const textElement = textRef7.current;

    // Define a function to trigger the animation on scroll
    const animateOnScroll = () => {
      // Get the scroll position of the page
      const scrollPosition = window.scrollY;

      // Define the scroll position at which you want to trigger the animation
      const triggerPosition = 2800; // Adjust this value as needed

      if (scrollPosition > triggerPosition) {
        // Create a GSAP animation when the scroll position is greater than the trigger position
        gsap.from(textElement, {
          x: -100, // Start position (left)
          opacity: 0, // Start opacity
          scale: 0.5, // Start scale (small)
          duration: 4, // Animation duration
          ease: 'power4.out', // Easing function
        });

        // Remove the scroll event listener once the animation has been triggered
        window.removeEventListener('scroll', animateOnScroll);
      }
    };

    // Add a scroll event listener to trigger the animation
    window.addEventListener('scroll', animateOnScroll);

    // Cleanup: Remove the scroll event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', animateOnScroll);
    };
  }, []);




  const textRef8 = useRef(null);

  useEffect(() => {
    const textElement = textRef8.current;

    // Define a function to trigger the animation on scroll
    const animateOnScroll = () => {
      // Get the scroll position of the page
      const scrollPosition = window.scrollY;

      // Define the scroll position at which you want to trigger the animation
      const triggerPosition = 2400; // Adjust this value as needed

      if (scrollPosition > triggerPosition) {
        // Create a GSAP animation when the scroll position is greater than the trigger position
        gsap.from(textElement, {
          x: -100, // Start position (left)
          opacity: 0, // Start opacity
          scale: 0.5, // Start scale (small)
          duration: 4, // Animation duration
          ease: 'power4.out', // Easing function
        });

        // Remove the scroll event listener once the animation has been triggered
        window.removeEventListener('scroll', animateOnScroll);
      }
    };

    // Add a scroll event listener to trigger the animation
    window.addEventListener('scroll', animateOnScroll);

    // Cleanup: Remove the scroll event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', animateOnScroll);
    };
  }, []);




  const textRef9 = useRef(null);

  useEffect(() => {
    const textElement = textRef9.current;

    // Define a function to trigger the animation on scroll
    const animateOnScroll = () => {
      // Get the scroll position of the page
      const scrollPosition = window.scrollY;

      // Define the scroll position at which you want to trigger the animation
      const triggerPosition = 2400; // Adjust this value as needed

      if (scrollPosition > triggerPosition) {
        // Create a GSAP animation when the scroll position is greater than the trigger position
        gsap.from(textElement, {
          x: -100, // Start position (left)
          opacity: 0, // Start opacity
          scale: 0.5, // Start scale (small)
          duration: 4, // Animation duration
          ease: 'power4.out', // Easing function
        });

        // Remove the scroll event listener once the animation has been triggered
        window.removeEventListener('scroll', animateOnScroll);
      }
    };

    // Add a scroll event listener to trigger the animation
    window.addEventListener('scroll', animateOnScroll);

    // Cleanup: Remove the scroll event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', animateOnScroll);
    };
  }, []);


  const textRef10 = useRef(null);

  useEffect(() => {
    const textElement = textRef10.current;

    // Define a function to trigger the animation on scroll
    const animateOnScroll = () => {
      // Get the scroll position of the page
      const scrollPosition = window.scrollY;

      // Define the scroll position at which you want to trigger the animation
      const triggerPosition = 2400; // Adjust this value as needed

      if (scrollPosition > triggerPosition) {
        // Create a GSAP animation when the scroll position is greater than the trigger position
        gsap.from(textElement, {
          x: -100, // Start position (left)
          opacity: 0, // Start opacity
          scale: 0.5, // Start scale (small)
          duration: 4, // Animation duration
          ease: 'power4.out', // Easing function
        });

        // Remove the scroll event listener once the animation has been triggered
        window.removeEventListener('scroll', animateOnScroll);
      }
    };

    // Add a scroll event listener to trigger the animation
    window.addEventListener('scroll', animateOnScroll);

    // Cleanup: Remove the scroll event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', animateOnScroll);
    };
  }, []);



  const textRef11 = useRef(null);

  useEffect(() => {
    const textElement = textRef11.current;

    // Define a function to trigger the animation on scroll
    const animateOnScroll = () => {
      // Get the scroll position of the page
      const scrollPosition = window.scrollY;

      // Define the scroll position at which you want to trigger the animation
      const triggerPosition = 2400; // Adjust this value as needed

      if (scrollPosition > triggerPosition) {
        // Create a GSAP animation when the scroll position is greater than the trigger position
        gsap.from(textElement, {
          x: -100, // Start position (left)
          opacity: 0, // Start opacity
          scale: 0.5, // Start scale (small)
          duration: 4, // Animation duration
          ease: 'power4.out', // Easing function
        });

        // Remove the scroll event listener once the animation has been triggered
        window.removeEventListener('scroll', animateOnScroll);
      }
    };

    // Add a scroll event listener to trigger the animation
    window.addEventListener('scroll', animateOnScroll);

    // Cleanup: Remove the scroll event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', animateOnScroll);
    };
  }, []);



  const textscroll = useRef(null);

  useEffect(() => {
    const scrollElement = textscroll.current;

    // Define a function to trigger the animation on scroll
    const animateOnScroll = () => {
      // Get the scroll position of the page
      const scrollPosition = window.scrollY;

      // Create an animation that scrolls the text horizontally
      gsap.to(scrollElement, {
        x: -scrollPosition, // Scroll the text horizontally
        ease:'power4.out', // Use a different easing function for a smoother scroll
      });
    };

    // Add a scroll event listener to trigger the animation
    window.addEventListener('scroll', animateOnScroll);

    // Cleanup: Remove the scroll event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', animateOnScroll);
    };
  }, []);


  
    const imageRef = useRef(null);
  
    useEffect(() => {
      const imageElement = imageRef.current;
  
      // Create a GSAP animation to rotate the image
      gsap.to(imageElement, {
        rotation: '+=360', // Rotate the image 360 degrees
        ease: 'power0.easeNone',
        repeat:-1,  // Animation duration in seconds
        
      });
    }, []);




  return (
    <div >
      <div className='float'>
        <h1
          ref={textRef}
          className='text'
          style={{fontWeight: '800', fontSize: '80px' }}
        >
          Does this sound familiar...
        </h1>
        
      </div>
        <div className="scroll"ref={textscroll}>
          <div>
            <p className='card' ><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;😋Healthy Lifestyle </p>
          </div>

          <div>
            <p className='card' ><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;😋Sports Car </p>
          </div>
          <div>
            <p className='card' ><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;😋Big Bungalow</p>
          </div>
          <div>
            <p className='card' ><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;😋No Tension</p>
          </div>
          <div>
            <p className='card' ><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;😋Travelling World</p>
          </div>
        </div>
        
        <div ref={textRef1}>
        <h1
          className='text '
          style={{fontWeight: '800', fontSize: '80px' }}
        >
          Meet the app...
        </h1>
          <div className='flex justify-between'>
            <p className='text-3xl ms-20 m-20 pl-80'>A personalized crypto Mangaging & Trading Firm<br/>
              filled with science-driven tolls to boost your Crypto<br/>
              experience
              <br/>
              <br/>
              Think of it as a pocket cheerleader towards a<br/>
              better, more fulfilling
            </p>
            <div>
              <img style={{width:"100px", marginRight:"300px"}} ref={imageRef} src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1200px-Bitcoin.svg.png"/>
            </div>
        </div>

      </div>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      <div >
          <div >
            <p className='rate_skills'>Let your freinds family, and co-workers(anonymously) rate your social skill.</p>
            <h1 ref={textRef2} className='wonder'><b>Ever wondered How Blockchain works?</b></h1>
          </div>

          <div className='ques ml-10 mr-20 text-x flex justify-between'>
            <div className='flex flex-col'>
              <img ref={textRef3} className='num_image' src='https://static.thenounproject.com/png/4347545-200.png'/>
              <p className='text-xl ml-20'>Data Transactions</p>
            </div>
            <div>
              <img ref={textRef4} className='num_image' src='https://static.thenounproject.com/png/4347545-200.png'/>
              <p className='text-xl ml-10'>Validation and Block Formation<br/>
              question about you</p>
            </div>
            <div>
              <img ref={textRef5} className='num_image' src='https://static.thenounproject.com/png/4347545-200.png'/>
              <p className='text-xl'>Consensus and Decentralization<br/>
              the same way - and where not!</p>
            </div>
          </div>

          <div className='flex justify-evenly mt-60'>
            <p ref={textRef8} className='path p4 text-2xl ml-10'>You</p>
            <p ref={textRef9}className='path p3 text-2xl mt-10 ml-10'>anonymous</p>
            <p ref={textRef10} className='path p2 text-2xl ml-10'>Anonymous 2</p>
            <p ref={textRef11} className='path p1 text-2xl ml-10 mt-10'>Anonymous 3</p>
          </div>
        </div>
        
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

        <div className>
          <p className='test-text'>We take privacy seriously</p><br/>
          <h2 ref={textRef6} className='test-text2'><b>Before you get started</b></h2><br/>
          <p className='test-text3'>"We won't share your answers with anyone (and won't ever tell<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;you which freinds said what about you)"</p>
          <br/><br/>
          <div ref={textRef7} className='flex flex-row'>
          <p className='test-text4'>with love&nbsp;&nbsp;</p><p style={{fontFamily:"cursive", fontSize:"30px"}}>Team Blockahead</p>
          </div>
          <br/>
          <button className='test_button'>Start a test</button>
          <br/><br/>
          <p className='min'>Take only 5 minutes</p>
        </div>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    </div>
  );
};
