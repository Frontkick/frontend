"use client"
import React,{ useRef, useEffect } from 'react';
import { gsap } from 'gsap/gsap-core';
import './Footer.css';

export const Footer = () => {
    const textRef = useRef(null);

    useEffect(() => {
      const textElement = textRef.current;
  
      // Define a function to trigger the animation on scroll
      const animateOnScroll = () => {
        // Get the scroll position of the page
        const scrollPosition = window.scrollY;
  
        // Define the scroll position at which you want to trigger the animation
        const triggerPosition = 3500; // Adjust this value as needed
  
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
      const triggerPosition = 3500; // Adjust this value as needed

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
      const triggerPosition = 4000; // Adjust this value as needed

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
      const triggerPosition = 4500; // Adjust this value as needed

      if (scrollPosition > triggerPosition) {
        // Create a GSAP animation when the scroll position is greater than the trigger position
        gsap.from(textElement, {
          x: -100, // Start position (left)
          y:1000,
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

  const imageRefs = useRef([]);

  useEffect(() => {
    const images = imageRefs.current;

    // Create a GSAP timeline for the animations
    const tl = gsap.timeline({ repeat: -1 });

    // Animate each image individually
    images.forEach((image, index) => {
      tl.to(image, {
        x: '+=30', // Move the image to the right
        y: '+=30', // Move the image down
        duration: 1,
        ease: 'power1.inOut',
        repeat: -1, // Repeat the animation indefinitely
        yoyo: true, // Reverse the animation to create a floating effect
        delay: index * 0.2, // Stagger the animation of each image/*
      });
    });
  }, []);
  
  return (
    <div>
        <div className='flex flex-row justify-evenly'>
            <div className=' flex-col'>
                <h1 ref={textRef} className='text-6xl'><b>Work with us</b></h1><br/><br/><br/><br/>
                
                <h2 className='text-xl '><b>About</b></h2><br/>
                
                <p className=''>At ahead our goal is to make self-<br/>
                improvemet fun and lasting. We know there's<br/>
                a way how to make it work. And that's what<br/>
                ahead is all about</p><br/>
                
                <h2><b>Product</b></h2><br/>
                
                <p>Sure, you could spend ages reading books or<br/>
                sitting in seminars on how to become better<br/>
                spouse, parent, or manager - like we did...</p>
            </div>

            
            <div className=' flex-col'>
                
                <h1 ref={textRef1} className='text-6xl text-cyan-800'><b>ahead</b></h1><br/><br/><br/><br/>
                
                <div className='scrollbar'>
                
                <h2><b>Power through, even when the<br/>
                going gets tough</b></h2><br/>
                
                <p>We help you spot and work around<br/>
                whatever stands in the way, be it bad<br/>
                habits, fears, etc</p><br/>
                
                <h3><b>Learn more about who you are<br/>
                and where you want to go</b></h3><br/>
                
                <p>We ask the right questions to help you<br/>
                better understand why you do things the<br/>
                way you do</p><br/>
                
                <h3><b>Point3</b></h3><br/>
                
                <p>We ask the right questions to help you<br/>
                better understand why you do things the<br/>
                way you do</p><br/>
                
                <h3><b>Point4</b></h3><br/>
                
                <p>We ask the right questions to help you<br/>
                better understand why you do things the<br/>
                way you do</p>
                
                </div>
            </div>
        </div>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/>

        <div>
            <h1 ref={textRef2} className='text-5xl ml-40'><b>Open Vacancies</b></h1><br/><br/><br/><br/>
            <div className='text-2xl ml-10 flex flex-row justify-evenly'>
                <div className=' job_card flex-col'>
                    
                    <h2 style={{marginLeft:'30px', marginTop:'15px'}}><b>Senior Blockchain Developer</b></h2><br/>
                    
                    <ul style={{ listStyleType: 'disc', marginLeft:'50px'}}>
                    
                        <li className='hell'>Full-time position</li>
                    
                        <li>Bangalore or remote</li>
                    
                        <li>$85-100k, 0.8-1.8% equity share options</li>
                    
                    </ul>
                    <button className='button1'>more details</button>
                </div>

                <div className=' job_card flex-col'>
                
                    <h2 style={{marginLeft:'30px', marginTop:'15px'}}><b>Senior Designer</b></h2><br/>
                
                    <ul style={{ listStyleType: 'disc', marginLeft:'50px'}}>
                        <li> Full-time position</li>
                        <li> Bangalore or remote</li>
                        <li>$40-55k, 0.1-1% equity share options</li>
                    </ul>
                    <button className='button1'>more details</button>
                
                </div>
                
                <div className=' job_card flex-col'>
                
                    <h2 style={{marginLeft:'30px', marginTop:'15px'}}><b>Dashing Intern</b></h2><br/>
                
                    <ul style={{ listStyleType: 'disc', marginLeft:'50px'}}>
                        <li>Full-time position</li>
                        <li>Bangalore or remote</li>
                        <li>$30-35k, 0.5-1.8% equity share options</li>
                    </ul>
                    <button className='button1'>more details</button>
                </div>
            </div>
        </div>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

        <div className='text-center flex flex-col'>
            
            <img ref={textRef3} className='img_logo' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAwFBMVEX///9mPP5yZf2emPz///1YHv/8/P9tX/xpWv5cLP5lOv7Mwf7Sz/2Zkvyblfze2/zz8P/PzP5uSP2knvz49/9gMv5jN/5zZ/1QBv+0rfxuYf3Jvf16bv2rk/5qXPxdLv3W0/yoovrQzfzk4vt1afuOhft/dPvr6vt+XfuCZPvPxPubhPvz8fvf3fuHffu7tvyVjfyMcfuVffuvnvqnk/t0UPzAs/y5qvtqQfxiU/xwSv3AsPuPdvmrmfuHa/p2VPp/PpjTAAAKRUlEQVR4nO2cjVeizBfHVa4KqFgKFtgDmBVlmr1nu9v2//9Xz7yowMxgPv12Y+h3v+fsOSVsh49z79yXmaFWQ6FQKBQKhUKhUCgUCoVCoVAoFAqFQqFQKBQKhUKhUCgUCoVCoVAo1P+xAPoAZT/E3xQsbl5vFt8XEQ6GZtAIzOFB2U/yl9RaNsIGVdhYtsp+mL8gOL0wGxuZF6ffzVRheksMNFVg3k6/FaM7aWf5GGN74pb9WH9MMG60G7LajfH3GEaIT0wFH3PHk7j6jJDkHVAwVfM2qTij67dVBpox1dCvsDsCdE5CadjED8KTTkUTOZKC3oQiT7ttSIMahDeVTFbhoCfxsSg4lR0zCJ2DqiEC+IHkgCGfOsnkKtluO/ArNYwAp2cSRBgs1xAAy0C+fHZYHUaY3kgRMAiHbgoA7lAy4YZ5U5lErqVwtHPh6WF6rnDTKpQc4Ca1luiB4YVsgQCHF6Kptlu1xNV8HGH241kkbDeWyscGdynkq4RwdtLVGnFxF1njPCEp6QsTM0iGOYMmhIdmeDv90mf+L3L/8by6QGjubsvAIjspMUKSFUz09Ef4OfLsukB4NvvI5mB2JhDSwNLRz1Sh+8MifAKhGe/xX2NTJKRtjr5mjNNf1qhelwm70p1yn62rICTu20u+4sH3E8zfiAPWPyYE6F42L7tC5FAS0iTd1yRyAIwHkV3fgxCm92SkR9Z9PvoXENI8dqZDIgfxlZXy7SAE983mI+3Zb9nRKSQkpnpeujtCcu+N6vU9CKHDR5r9iwaZybKYkHbkjFLrKqg9sAixD2HSZGyWzUbcbqbzyC5CmhGVWVct6pHAV/esrpqwa9GrqxnMVtRWrcyVLGHflMvKRnlJztgS+Ebe9RzUhDG513skwwHw6BUTkrpKah6bh2XAMXXyhKPoik0MCkIyHxF3tfhgTK1iQvIFLMS6ShdC23oac4+RCCG5ZgmBtWC/LnYRKuoqTQi90cMmBKSEr5QD3Ic6DxP7jCEVtPxsXaUFoW3dpzXShrAdPFOz6zxtAqb3wDpRDzv8cKPECLUitFfZ9UBOGLwaCS2PrqI0YHqXMcSXu+bSrSA+0opwkE2oGaF5saAGeh3lEoJR9M4+sI/TCKAmrLknWhOGR7QwhJc0I9/aM/3neT/T2wsI5zoTmgFb/Tx9ssSEYBM1s7dXkZB1WqZ31khCIzneyPod5/5KBQlp4jJ/lAzUtq7izlNzEzW3qiAhycifB1LGGq2eaVLWl8ra6hHSSl7iG1lvRRV71QgBkl+R6IB283fxmkTFCKH2Jk0wtvXjcEeJlyM82EJqSgjjVSTyefWXnSVsjjB2Nn0LzQhXjBD6V1IE5CVjKrnFn6+Aez2f33JwFuhDaFt3bloj5SeY39leEiTD6JfIKBAahjOe12hU3ZSJpRPa0Q+6uan1YssR8D23z6K1bASD4+Zbfn+JRGg4xiktSg7Xq+FlE3oRLQyh8y73bOyXLAsrbI8GzeZxPbfdSyY0jN6EDD24ftgunXDU/DWlNdJvKUKMrOtcX543JyghYXzvpxdUhIbD3THpmUG5hNYT3V4h1kjcQPvZW931SiEnbB4f32+HV0lIGJ0ONdX+hVki4Th6ZjWSJTlgtMrvO1yG67p/TUgZH9bXCggpI/36oBOWRzid02U1uUby7Lf8Gqf/uoHYEhLGf/jFQkLqjjQVmpe5CgXpslrqgNG9mKL54ecIiTsuy+3qz99GcoS4lPcafJqQRo5ZiYts/ZWqRqrJD7Q/YWKIiIYzLM9K5a6+9ThXfeH7E4I7cxwBsddX/MmvkdDVt62iGml/Qrqp0e/pSWhHg8IaaUt4dLT6iJBOX0NHP0KbpGjF63xrwqMjk470R4R0b6PhaEZoj653zeqc8Kg9sLm3fkBIW8ljvQjt1e7daJTwqPEjTQk+IqSmqhfhYL7zRj88arzWM5HFjj4iJJmsXoTiRiC3s8xUun7bXAmR07YqTUhnCsdZbsuHF3E/A1XzkV+sICFMJw6vDTZrbvASidmdF236U+m+tiD7x/UlhHkasXvDzd5LN9/DIeXxeoChu+2pNYLzjGVrSwjTHh/AdTtiu/2yf7VlHFlXm4cG/5VWxkG4XlVN+1b6Eo4dXhH0h5wR0itPfFdU9JSWx8Aq//Bkxs9ntIcVIOwQQmdJfm/N8oTkoR9IcezVHzL9KWDm6ZMpZtoLKGF6s9aEE9j+6GTbo5BcN69z/VJK2Oa3ty6CChHyn2fMYMfZoySQ5LNXShj6/OebihISn9yR0lWWMLVSHjQK19YyVlqripXSudTxiTG2OmkF1POVtf96Lm1PXIDpeZVmGhINO3G2xCMfzFrKgzM8XWt0JqxjHE70jxa1xFinbEZezlB5cNvnvXAe8dvBYntBX8LafNkT6TamqnBHiLenZoLQyXTVNCYkwZtnphInKTdU7tjhxzHNm9y2da0JycAYPeKKE7n3aai6VfOJ2eb7xDLSm5AkKIdj8lEseSOJHKoDBsnQF09z6U64VmusYJzs1cPWjHBV9L4ZSMT+Lo0c44/fo6BZJyq/Rzgv6Kvc8XT3EUOYLx29CHP7vAVB61SeVnuTRXEDGVqH2nWE69m9+pJgLrujwzI75d3iqOtCuD5voYjpdDemyh2Njsodya3Ct1EiYcGZmZwAXlYPlLGvWBk0YvEbAVce7hIJ5XNPNm0SZot6dno2GrBoLq8MinUVwKl8j2OUt0KqOrtmW6s0bYHpHT+qxlYW6QQpM2YSOVgMlVlQqSv50vlDtstt3SWdv2332YyadHUYporI4cy4O8pLo4WZ7JdKPEPK3fGR5DiwzG2F9lY/6Q6geCibIaurFMvb6mrk6xHz54D5MEaD5/hSILet91NQLtRTklhhoMoUtgzlznJvGSXrHRHrZfcnS4U1KkqtmU7vyFJsHBJlPaUzkMIdpWFd7l6S/HKpNn9l5Vm5rdDQLegDbPgmOjigoPV7MZQaRdeixbXGxYw0EyiF4SOxd5so+a5UWYkikVs7YEfPd5tQLe6kjab5paacVHUVy8i/+Kn/k2D2LrijZz+0FDvd+N35Kok7oO6vGYb8hvYRq4xhKtccpEbiiVzWHR2jq6+BbgUH2wVt27qMgZULm0MU6V3EC9mqVKauot0NzQdwLejzdCaq05KY7+BynHGmqw+8Q+UYNMkhdRUbRulb0FgAnVXkWW8tyOzCo4tsm3fudTfu57DqCWY9h6ZolQGssQNev6kD5soFWgzSMZtmU9Cef8BOVlTonYJrASsXhKhOd20fCFkpzz8rx8fU8m/laKcogm+lfndVBDVVSSR+0BvGRfGyClIVgwobrbTmcjGYc8zSmxT/u/JTp2CgGtZInxHEsvcZGtdIn1Gro+jqa1wjfUIsDc3yVSlF21OwyBSD7Ijo99N2ke3D1cPqyqW9GVIjadZF+5OCZHI7+XYOmBMpLKqZY6NQKBQKhUKhUCgUCoVCoVAoFAqFQqFQKBQKhUKhUCgUCoVCoVAoFOpP6V/mi/In+tXnZAAAAABJRU5ErkJggg==" />
            
            <h1 className='top text-4xl text-violet-600'><b>Blockahead</b></h1>
            
            <div className='top flex flex-row'>
                <p className='text_margin'>AuguststraBe 26, 10117 Berlin</p>
                <p className='text2'>hi@Blockahead-app.com</p>
            
            </div>
            
            <button className='top'>Download on the app Store</button>
            
            <p className=''>@ 2022 Blockahead app. All right reserved</p>
        </div>
        
    </div>
  );
};
