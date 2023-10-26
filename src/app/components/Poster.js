"use client"
import React from 'react';
import './Header.css';
import { useRef,useEffect } from 'react';
import { gsap } from 'gsap/gsap-core';


export const Poster = () => {

    const textRef = useRef(null);

    useEffect(() => {
      const textElement = textRef.current;
  
      // Define a function to trigger the animation on scroll
      const animateOnScroll = () => {
        // Get the scroll position of the page
        const scrollPosition = window.scrollY;
  
        // Define the scroll position at which you want to trigger the animation
        const triggerPosition = 0; // Adjust this value as needed
  
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

  return (
    <div>
        <div className='flex flex-row' style={{marginLeft:'100px', marginTop:'80px'}} ref={textRef}>
            <div>
                <p className='text-violet-600' style={{fontSize:'40px', marginLeft:'200px'}}>Blockahead</p>

                <h1 style={{fontSize:'100px'}}><b>Master your life<br/>
                by mastering<br/>
                emotions</b>
                </h1>
                <div className='flex flex-row'>
                    <a href='#'><img style={{marginLeft:'200px' }} width={150} height={30} src='https://e7.pngegg.com/pngimages/422/842/png-clipart-apple-store-logo-app-store-android-google-play-get-started-now-button-text-logo.png'/></a>
                    <div className=' ml-8 flex-col'>
                        <img width={150} src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAhoAAABdCAMAAADUpT/pAAAAk1BMVEUAAAD/3hb/4Bb/5hf/4hb/5Bf/5xe5oRD31xWjjg7oyhTx0hXQtRL93BbpyxSTgA1mWQnYvBPgwxPJrxGCcQtORAd8bAuwmQ91ZgqIdgwgHAPDqhFHPgaahg2xmg9cUAgVEgImIQMeGgM2LwU8NAWfiw5VSgcNCwFtXwmGdQwtJwSpkw85MgVhVQhCOQYaFgL/7hgtdmZAAAAPTUlEQVR4nL1d2WKqMBA1C4jibt2qVq1ttfV2+f+vuwERWRJkJhnmue0pYc6ZJZPQakHtG/wbNtYs2q5JsONbk2izZ3KIvUcOkbFN0CTafNIk2qXdJFpvSA6x/aPHuFv7r0nZmPjHBtEC1iBYyx+QQ4SSHiO1E5e95tA2Qi6aQ1sKsWoO7d0T1NHyLJjfHJGHHvOaI3Jb8gaJPJa8QZKFXE6JIXqSNUjkkLMGiaw8ozkibwRj/kdTaEufMXEghTiqB2LiixTjbiP1QM0RWUkU492m0NoKjZzIqY2lQuuQQiwUBJMXUoy79SI08dkQmpKoBoksIzRJX1HG9hYxmtNWeyx6IN4nxUgtlqjGiBxJVHNEjiSKMY+WyKm1I44xMSeEWMUvi4knQoy7xRKl0Johcu+K1hCRB5zREzm1mNFMUrZtrg/UFJGvD8TkugmwY0zjpoh8lShiIqc2vDKa+RsyiF3yQM0QOZEohbZvAC2RqIaInEgULZFTSxhNSbJp8kDNELmbPBDz3htAYzc0saQH+7pxjJLIqY1uHON8TwRxuHlGI0ROJaoRIqcS1QiRF+lKNkGyXormbYkgOl7qGg0QeZpxRHoipxKl0OiJ3E/RuDxRgx1Sr2c8JMK4PxAdRmrPd89ogMgfIoNGviP6mUHzyHcrL5mVFGcSiHnmgeiJnJGoBoickShFZGKwrEQ1QLIMo5kck0BMMstHhXG3IPNAzCMm8j7r9eRE/sih+SNatKccmqDYrdz4LPdEtDNKOYkiJ3JOosiJnJUoepJlJUqhvRBAtHMPRB2RJ3k0YiLnJIqayPv8ozHvHyXaLM9okt1KmV8+zgkwUtvkREOhkY42LAtotGMH714BjYLIqa0LjkgwdrAtPBATlEQuSJRCoyTypIRGOT9UkChakv3KIpr7TY6wAEEbkYt+SErkH1FCI5wfKkoUCZFTK0qUipauBwHPfhGCksgliVJPRDejVJIo0vmhkkSR7lYWJYpg7GBceiBKIpckipTIRc1llER+K3PMPZFTK0uUWkm3JDuWaUw4CDjSLB/d/NBQ82x0RC5LFOX8kIbRzHM7pPeigaAjsu6B6AYBNRKl0KiIzLVoRPNDPxqOuSaZ9oGoiHzUqCAdkUdaNCoiD7VoVPNDOolyPD+00j4Q1SCgVqLI5od6BrQ9CZpWosjGDrSMdrtb2dVCUBG5r0ejIfJBp7mMish6iaIaBNRLlEKbOYPYGZaP+e4w7maQKOUbewK0hV40iIhskCiisQO9RDnd5JgaHoiGyAaJIiKyQaJoxg6+TF7vksipfZsYzVzddrDf6CrX2DjfuB5SOulK8QQtOLhG25s0V6FNfl2j/baNKynXv47BTr8miYpItkf/3ePHaL69tHuTQeD5xtVT6yd8GQy60/ZlOx/tkDsPp3+789P7ot3rDgJRieb7MuxOFNpwPvpAdlX2P7vzZ2exHis03ze+qxiNK7T1y2W4/J4h+0Svm+/zqvOi0MK++u/NaNL3+2F3rNBWCg1ZzB5m38vh5WU96YbsIdpAoS06q/P35pFXHt4+lsPtYtqbBFJ6QghPSsn1OW5+CTmX6W8Ek950sR0uP/5VruXp6203H76/9MbdBE1i0MJJb33ZDs+zR2g/30/D97ZC6ye/6tVCu4Ld/r9wHKGtzrNj5Zv7PW6+P4cdhTZgUkLRvASNDxRaZ/g52hwr39zrcTZaDS/r3jjkWDRPsu641+4Mn743x336p2dKHKaTMOwrdRCeF//Zh++nClDheQrPF/0wHEdykq05R9tFhBb0hZ8+hCWajNFkhLZWaNnhh/n2RQlfGCgGXT3dCi1xkxgtCAcKrTPM+sjqvb3udcOA+8ItGg/Cbm/dfs9udZ+U7617gzCQ8WtzhCZuaO2XraqZen81+QqHi/D+cpnq88SPwcjQck3gt4AUzctfULSTghJN5Ed+5349ccCARWj9aBy347v/+ymOXzyVsK7IJazRvGIPbkyIJnmhmX4YVER3a7SgkMnN+oRoXveags8FlW9wTQW4JfNEycv90raxgLNGC8t5MJ0neuXGxzOdJ/qp1M8YDYjs66r1pWYT3AlaqMtFqTxRaJtUVJ4otIfcejSeyP1MWP4KK4o4tMmBvm6g8URhmMw+exS+4RsOJA4pPJH7hmbfC4Un8sIeN4EUmt4VTVD2jc3fjfugXE6h7p7oXhO5eYeFwBPLYdm5FJrfFYEncr/ioK/zoMy9iib6j2tPlP2KLeeRa0/UpVBugzL3qwfO3Xpi5btqufZEySo3PH67TqOzp02hUvsJnHqiPoVyKYXcezRTPHRYFsng0ZnYhUNPlINHbWyX6aE5LN/MpSeaUih3Qfnxu3LpiXLw+hDNnSc+flcuPbEyLCc2deWJFWH5tevGN24Nk2pzJYWi1mT7tyNP9GudNft0E50rU6i7Xdx4YnVYdiKFouYUx8mJFNZ7V1HX3IEn8rpn9nYuWthc1rwO48mFJuq7UHdzUCn79QfN7T3xUbqbMQeeWPtdtVpHe0989K4ytuP2aNXpbisav7NzQA463bOwFF4uIUfobIOyDH4AaBNLT5QDwCjRV2jpG3XC8shum1zCDnDYeaIMYLd82AVlr7sHoa2t0OqlUHebWPl9nXS31fpnIYWl/cGHtrNIDzV7Tg/MJihD35XdnnbdFOpuFp5YPyyjpRD+rlRQRkuhqQivsg/0/o2POA+4xHoiLCwnhm5acl4/LCODMuZdtbCeyDHvCh2Ui3tONQ3pidxDfY5oidtJhKVQF4QDVuw5PTCMFHL00TlM15wXx3bq2jPGE2WAvMMJ1bSs14W6Gzwocw9/AgselCXDH3OED5rJEH9ND9wTMWE5McSedt0u1N2glbLkNodsoINmnmZ/sL5Bg7J+z6muQXcSfatzX1BPBHShUjuApNA0tlPXZsZTZDrzLC9UhA2a6Ues6pv5GJTOTGM7da0NQcOGZeMJQw2E9cHoQ/lqIaPZ3wc0A2S+9teIzAFonvV9QO8ASoM6hhkznabVmP3ljSfWpGvork0ymWftGuazmho0a9fYAlwDecOM9pImk/m298qYrhfQmf0pdt0lTUY0a0XU34CiN/uvYGjvNDKh4aLXEyRoWV8QcYFkNtYfmDGe/dcY57bHogGR2YHbQ7I25C3YEF+3v7IB4uv291IDEhv7WzBfQbWe7eV5M0hBhLz8fQBZPutkA7R8tvd6vIH6r7bftT2DKhTbW7AgsRL5XdsTrByXj4fwqmwHWj5b1TVe/KN/NMtSGRQrrfXXfKuGzlCf3IKk1cz6+zzlC5Or0ew+uVG80/2BWX5yYwJqsNnqLyhW4oq9F9jLslRdmK/bXiIKKMtjNLtLRIG7h8Lqfp7yheuVhtJfSFodYdhdVAbzdcsSbw9sXUurjxB+A1vXdpeIraCOCNl1vdovdNjL6uqwDfBl2X1WYQ58WXYttg5wx8uz+j4KMFZiij1ICyo2gRoxSAyWVjPLFhuoLGe2WS+oLGe2LTZgrMToLyytZujG2tUgLajYrFpsoLI8Mqv7UUEbh5HZ3I9quiHXaAi3h/q6XYkHTDXsSrxn8EyDTYsN1IKKzabFBo2VmC9GgYfybC6zB6bVzK7Eg7WgIrNpsWk++/MIzaLYg8ZKRIvN3IIyYluorrEFZZ4nsmixGWOlMfO2cXtjWW5Es7mV2hgrzWhQ/TVt+kvRM11VavEte1NaLWXPNJBl0WIztaBkf2xEw7fYDKkGF+HANNqGb7EdTDeui4np4iWw/upTDYXw1tpM9AtoUeIZPgXhT19b36F+AS2mKPQSJYWizzzQLyB+iqL4WdIbWpS1D6XhgxvoFpuhhS3ZKuphGtCAxZ42L5T9a1z61A4u41X3VfuxHxFeheFdu4D4Fpu2BaWc/hoP20L7wSh0i01blnO/F++vHqZaluFbbNoWNhfreKzgRy+KwBabrgUlM4ff2rqogmisXU2XVst7MXzQRhWBBNO2oGJaXe1HJ4r4FpsuVnpBGg21oojXX02s5KKb7q4+6UQRmGyUfV3RKjs/M5uUHwld4mm+ppnQKrFRWHYedIutHCu5yK3Ok0YU0VMU5Vgp89/F25Z1Hq+/5WXyWO6taEQR2GIrtaAkL25orUrVA1p1i2k1z9AqsU7pkdAttmJeyMWgfOdd6XvRyBbbV1F+uT8uNBI0ooj9OkqpLOf+ep//EU2mKEFTbIVUo0CrxNYFEKzqFltQUlfYH4qBEttiK7agJNOI3aZbREO22IpTlGWnb8WimEfD6m+hLNc4fUsjiqAWW74FpaKV3os/uvlH8nGqey6gFWl1+7F8oMSqbr4FpVK0vfbHVvkGDrbFlo+VUhi6WZ18qo1NNvKxUnKDhxWiCqjFlmtBSW6u3IY8u9DI2bWcr3uBOWG+5B4JNbuWb0HpaXW1UzsnHB6uxZZNNVQsMbZHvnJRBev2LIc23Zt+Li+KoBZbJq3m1We3TuuMcCBVN5NWy+rzQMdxBg3ZYsukGp6JVlebZUUR12L7yjCnyumVnbOpto86D535fKIq/SubI9n+A2h2OPX1Klrd/p97Uw+ZbKRLomj1aEmW96iCU91NBm36aJ5qeE+1cWfY7i0o+fhwaUYUcS22+xSllI94kxVFQIvt+eZ9D2iV2DZdQNSX7NPJEC+oUwakC8g5Aiwty5XT11iQU5pq41pstxaUcvoaTZ+vNNXGFXu3VCNuIz+0uygCWmxJWq1iSb0xxd9pAoKaXUtSDVl3uuntFlVQB5WSslzymuHo4yaKqCm2ZIrS69esfW+iiNPfJNUQYc2Wzy3VBhR7cVr9KFrlLGnqoWbXYl/n/qT+Dta8Hy8gqsSLY6WiVf2Ng2SnA9Vi86+xBLAsiShiWmwzcaVYfQ3YX0URkPVGLSgpYQu/jRYQNbsW5YW1aZXYS7SAmCmKqAXFa9PqateogmmxRWW5cnrQBsIxjiqYYi+KldzvgXbLrlGldovtIGG0Sn4rKr8QGxszX5X7YLX5mQiOUV0VKyV89yoSRUyLTcVKycDnIpZKFDHFnoqVIgBPiA2lV19/lwJIq8TUAiJKvK0A0ioxFVV8+DVKaw9Iq8QiUYT/1kTWu4+zaAshES22QKI+ra5Esbb+tgV2KOcdcf3PmGMPebb/4CVeECIHL5+nf+AW2+m20w+2t8kf2IHf/sbIPcDdoG5no4O/e+kL7rYWF5vMwHko4v9L7Qx2Yfj/d7dPsAsvLY42vWv6Sf8BU8Db3KjyAf8AAAAASUVORK5CYII='/>
                        <p style={{marginLeft:'-12px', marginTop:'10px'}}>100+ App store reviews</p>   
                    </div>
                </div>
            </div>
            <div className='flex flex-row'>
                <img style={{marginRight:'10px', marginLeft:'150px'}} width={300} height={120} src='https://framerusercontent.com/images/Pa7GzCqbrmaKMjNDT5klTyHUI.png?scale-down-to=512'/>
                <img  width={300} height={120} src='https://framerusercontent.com/images/KkMEfdjlb56H5xZcSNAomLfYtOc.png?scale-down-to=1024'/>
            </div>
        </div>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/>
    </div>
  );
};
