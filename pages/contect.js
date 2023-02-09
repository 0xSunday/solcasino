import ContentForm from "@/components/contect/ContentForm";
// import Footer from "@/components/footer";
import NavBar from "@/components/NavBar";
import React from "react";

const contect = () => {
  return (
    <section className="bg-black xl:px-0 sm:px-16 px-6  ">
      <NavBar con={false} cont={false} allp={true} />
      <ContentForm />

      {/* <Footer /> */}
    </section>
  );
};

export default contect;
