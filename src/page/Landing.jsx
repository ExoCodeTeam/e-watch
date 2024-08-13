import { useState } from "react";
import icon1 from "../assets/i1.svg";
import icon2 from "../assets/i2.svg";
import icon3 from "../assets/i3.svg";
import icon4 from "../assets/i4.svg";
import icon5 from "../assets/i5.svg";
import icon6 from "../assets/i6.svg";
import icon7 from "../assets/i7.svg";
import icon8 from "../assets/i8.svg";
import icon9 from "../assets/i9.svg";

function Landing() {
  return (
    <>
      <div className="pt-[20px] px-[125px] bg-[#E2E2E2] min-h-screen">
        <Navbar />
        <LandingSection />
      </div>
      <Product />
      <About />
      <Footer />
    </>
  );
}

const Navbar = () => {
  const [dropDown, setDropDown] = useState(false);

  return (
    <nav className="flex items-center justify-between p-4">
      <h1 className="text-[20px]">
        E-WATCH
        <span className="relative bottom-2 font-[400]">©</span>
      </h1>
      <ul className="uppercase flex gap-[80px] max-lg:hidden">
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Feature</a>
        </li>
        <li className="flex items-center gap-[6px]">
          <img src={icon2} className="w-[20px]" alt="Search Icon" />
          <a href="#">Search</a>
        </li>
        <li className="flex items-center gap-[6px]">
          <img src={icon3} className="w-[20px]" alt="Cart Icon" />
          <a href="#">Cart(0)</a>
        </li>
      </ul>
      <button
        onClick={() => {
          setDropDown(!dropDown);
        }}
        className="lg:hidden flex items-center"
        aria-label="Toggle menu"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
      {dropDown && (
        <ul className="uppercase flex flex-col gap-[13px] lg:hidden absolute right-[130px] top-[72px] bg-[#c9c9c9] rounded-md p-3 text-center">
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Feature</a>
          </li>
          <li className="flex items-center gap-[6px]">
            <img src={icon2} className="w-[20px]" alt="Search Icon" />
            <a href="#">Search</a>
          </li>
          <li className="flex items-center gap-[6px]">
            <img src={icon3} className="w-[20px]" alt="Cart Icon" />
            <a href="#">Cart(0)</a>
          </li>
        </ul>
      )}
    </nav>
  );
};

const LandingSection = () => {
  return (
    <div className="mt-[170px]  flex  max-[885px]:flex-col  sdf justify-between">
      <div>
        <span className="text-9xl max-[1376px]:text-8xl max-[1185px]:text-7xl max-[1015px]:text-6xl ">
          E-WATCH
          <span className="relative bottom-14 text-5xl max-[1185px]:text-xl font-[300]">
            ©
          </span>
        </span>
        <img
          className="w-[280px] h-[280px] rotate-[22deg] min-[885px]:hidden transform transition-transform duration-300 ease-in-out hover:scale-105 "
          src="https://www.figma.com/file/mK1RvVsWlDmVbg4DIJh1QY/image/91a27aa545019fbacdc9958903db21cf59b2d334"
        />
        <div className="px-7 w-fit flex flex-col">
          <h4 className="font-[500] text-2xl mt-[45px] mb-[17px] text-center  ">
            Dark Matter -03
          </h4>
          <p className="text-lg text-center tracking-wider mb-[24px]">
            <span className="font-[600]">$399</span> / <del>$500</del>
          </p>
          <Button />
        </div>
      </div>
      <div>
        <img
          className="w-[480px] h-[480px] rotate-[22deg] max-[1376px]:w-[440px] max-[1376px]:h-[440px] max-[1185px]:w-[380px] max-[1185px]:h-[380px] max-[1015px]:w-[300px] max-[1015px]:h-[300px]  max-[884px]:hidden transform transition-transform duration-300 ease-in-out hover:scale-105"
          src="https://www.figma.com/file/mK1RvVsWlDmVbg4DIJh1QY/image/91a27aa545019fbacdc9958903db21cf59b2d334"
        />
      </div>
    </div>
  );
};
const About = () => {
  return (
    <section className="bg-white py-16 px-8 md:px-16 lg:px-32">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">About</h2>
        <p className="text-lg md:text-xl mb-8">
          At E-WATCH, we are dedicated to providing you with the best in
          wearable technology. Our mission is to create innovative and
          high-quality products that enhance your daily life. With a passion for
          design and technology, our team strives to deliver exceptional
          performance and style in every watch we produce.
        </p>
        <p className="text-lg md:text-xl">
          We believe in the power of technology to improve your lifestyle and
          are committed to crafting devices that seamlessly integrate into your
          daily routine. Our journey began with a vision to revolutionize the
          world of smartwatches, and we continue to push boundaries to bring you
          the latest advancements in wearable tech.
        </p>
        <div className="mt-8 flex justify-center gap-14">
          <img
            className="w-72 rounded-lg"
            src="https://s3-alpha-sig.figma.com/img/0551/6f29/fe84dc5e41d69447c004dc046d6aa420?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Z-~7yLFlLmcM4fPSuldeGJQMvlvrDF9aYvVQFDq-VFruHMEd2arFMTrBeyP0h8CdDJb-gxpN2tkqArN1j8JkWQitU3BM7MQuE2SbFvwRwfr~C4tnkdEz7Suikk8elHPqxtYvhAX~KhQq6~Rtgh2nGmsL2hmdbCf4uudNGLXC-ItcI2yk0JxpVcRSFV8eZow1I2FR~rruTCnDAxYfCBbYjZhwdihKKnsYXkTC4kHWLGg5BWw9UE1gfke348OBvawxmaJUiayDp4npwICILLDFtudsVn4r7lhv9Vz3O~bXUIB2JrqcuGSs2bQTaPAaXz61lRCjsh28zndBgCo5rFRT8A__"
          />

          <img
            className="w-72 rounded-lg"
            src="https://www.figma.com/file/mK1RvVsWlDmVbg4DIJh1QY/image/1538f4b503d76b3662f785cefd526af4d3b51ba1"
          />
        </div>
      </div>
    </section>
  );
};
const Button = () => {
  return (
    <button className="py-[20px] px-[30px] bg-[#414141]  rounded-lg text-[#FFFFFF] hover:opacity-[0.95] transition-all ease-linear">
      <div className="flex justify-between items-center gap-[40px] relative">
        <span className="text-lg">Buy Product</span>
        <span className="w-[38px] h-[1px] bg-white rotate-90 absolute right-[16px]"></span>
        <img src={icon1} className="w-[20px]" />
      </div>
    </button>
  );
};

const Product = () => {
  return (
    <div className="dfc  py-[120px] text-center font-semibold text-[25px] px-[125px]">
      <div className="flex items-center flex-col gap-9">
        <h2>Health</h2>
        <div className="bg-[#D9D9D9] relative rounded-full w-[370px] h-[370px]  flex justify-center items-center p-7">
          <img
            className="rotate-[-150deg] hover:scale-110 transition-all"
            src="https://s3-alpha-sig.figma.com/img/91a2/7aa5/45019fbacdc9958903db21cf59b2d334?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=S97hGklpViMBAkkottMa0SQNWZIu81WfA6Na-ovv3txS6zWNgWQlhJiRY6Ye44ydoJqb7iBy431KH~otOfBQ4ZxonM54zAOf-l3dcm9zjemsEl5wcowBz1UJbFz4RZrdFLRHhECQ~loxN2wGGZB0YHJHBEy935JcWOlRAtYX3zsCs08T4FB~uFQ1NJOpVx-ceHCRTk3hk5pMgxVjISUQ0y8qbZIfcnWJ1EmPiS4yus1yxq7ckYEwLmjm~Keioi-rQybhYZez20YCU82vpDagd9iCwOdUXV4T8SPViJG6GYQjS3xr~paQDxGg6Fq~HhK70AUkAy51Aqa-i9C6kbYQJw__"
          />
          <img className="absolute w-11 top-10 left-16" src={icon4} />
        </div>
        <p className="max-w-44">
          Monitor you heartbeats and blood pressure & many more with a click .
        </p>
      </div>
      <div className="flex items-center flex-col gap-9">
        <h2>Connectivity</h2>
        <div className="relative bg-[#D9D9D9] rounded-full w-[370px] h-[370px]  flex justify-center items-center p-20">
          <img
            className="rotate-[150deg] hover:scale-110 transition-all"
            src="https://s3-alpha-sig.figma.com/img/ea84/3889/f855f194f6ea39536e6d004a5e4e80b1?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hGSQc4j~SykEAf-ofMLLOKQPFUz2xiKDJiICJimRJ4P8A9OIyHLm6VDAi1g7SCed-iT-~BBHTu5uCosbT3PgrOqg2BR7sxEPS3FwvWcep3P8A4Qla0OaHEjcNtaGdfaFw6kxpycEmX3GGLRK26eVl975L8v~M8LVjuJy~LxNo7JntccUmN18PCFG~AZPpsM5cIe4RosFYyomYiqf4Q6Bp4anoYZxJUBOC4Kjj2jqGMVDKIKIS~ILSFi98HTWuf4MYXL2LcBRSlhA4IpcN7knXhQ13OCPviyPvWZkN4Q2AmIAxxEc5OQPdD937cPKImBh-1YBWvGSzI8vNdVvf-uxvg__"
          />
          <img className="absolute w-11 top-10 left-16" src={icon5} />
        </div>
        <p className="max-w-44">
          Stay connected with bluethoot wifi phone link and many more.
        </p>
      </div>
      <div className="flex items-center flex-col gap-9">
        <h2>Safety</h2>
        <div className="relative bg-[#D9D9D9] rounded-full w-[370px] h-[370px]  flex justify-center items-center p-20">
          <img
            className="rotate-[150deg] hover:scale-110 transition-all "
            src="https://s3-alpha-sig.figma.com/img/59f0/9a5f/f4ed3f0e0014486235a6a77790952b69?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=m-nFnury1HVfmAEcTFkiiukQfClKP~DIxJewPlzmd6qMIzkpTRfAkAlnAJpKP0o5ZzgDTzhtGV4aYxbcgCnzSujCy~N9iYoQtqiqx4mV7aKe2CXFdV5XmR~eIOLh4SeEmbGDmK6QMnjRnAu7nfTUDWVxVhrKU9gfjFGI-9oFH65WNVHTztUFETm~kkVMQUadIx9HZHkeZ~iBxUOzCxUjpHldLjTs2yqwoEQ-1jt1tvNu05wcQwx~Jf1DxHZ4r9eqsZNoYAz9pcjDZhTiTigLZAAYBP2lwznkDYvOiB2VFUn8vYLOUtDGOE9WWWgyaLBJkasIkcWmwTLoyXoGhl7Z7g__"
          />
          <img className="absolute top-12 right-20 w-6" src={icon6} />
        </div>
        <p className="max-w-44">
          Track loved ones & get incedent reports by calling authorities.
        </p>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="w-full bg-[#414141] text-[19px] py-[50px] px-[125px] flex justify-between text-white">
      <div className="flex flex-col gap-4 ">
        <h5 className="w-fit">All Rights Reserved to Exocode Team, 2024</h5>
        <div className="flex justify-between">
          <span>+213 67 56 41 164</span>
          <span>exocode@gmail.com</span>
        </div>
      </div>
      <div className="w-fit text-center flex flex-col gap-4">
        <h5>Follow us</h5>
        <div className="flex gap-10">
          <img src={icon7} className="w-6 h-6" />
          <img src={icon8} className="w-6 h-6" />
          <img src={icon9} className="w-6 h-6" />
        </div>
      </div>
    </footer>
  );
};
export default Landing;
