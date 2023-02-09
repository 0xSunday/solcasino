import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";

const contect = () => {
  return (
    <section className="bg-black xl:px-0 sm:px-16 px-6  ">
      <NavBar con={false} cont={false} allp={true} />
      {/* <ContentForm /> */}
      <div className="mb-28">
        <h1 className="font-1 font-poppins font-semibold sm:text-[52px] text-[25px] text-white  text-center">
          Contact me
        </h1>
        <Footer
          insta="https://www.instagram.com/sunil.eth/"
          twitter="https://twitter.com/0xSunilReddy"
          mail="sunday7637@gmail.com"
        />
      </div>
      <div>
        <h1 className="font-1 font-poppins font-semibold sm:text-[52px] text-[25px] text-white  text-center">
          Contact Sol Casino
        </h1>
        <Footer
          twitter="https://twitter.com/Solcasinoio"
          mail="support@solcasino.io"
        />
      </div>
    </section>
  );
};

export default contect;
