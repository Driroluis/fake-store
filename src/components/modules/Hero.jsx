/* eslint-disable react/prop-types */
const Hero = ({ data: { title, image } }) => {
    return (
      <section className="relative min-h-[37.5vh] flex">
        <img
          src={image}
          alt={title}
          width={1920}
          height={1080}
          className="absolute object-cover w-full h-full opacity-75 -z-10"
        />
        <div className="container flex items-center justify-center px-2 mx-auto">
          <h1 className="text-5xl font-black text-center text-slate-950">{title}</h1>
        </div>
      </section>
    );
  };
  
  export default Hero;