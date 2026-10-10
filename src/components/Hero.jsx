



function Hero() {
   return (
       <section id="home" className="hero">
           <div className="container hero-inner">
               <img
                   className="profile-img"
                   src="mmm.jpeg"
                   alt="Profile photo of the student"
                   width="180"
                   height="180"
               />
               <div className="hero-text">
                   <h1>Hi, I'm Your name</h1>
                   <p className="subtitle">
                       First-year B.Tech student, Computer Science Engineering
                   </p>
                   <p>
                       I'm learning to code and build things that work. Right now I'm
                       exploring C, Python and web basics.
                   </p>
                   <a href="#projects" className="btn">See my projects</a>
               </div>
           </div>
       </section>
   );
}


export default Hero;

