import TitleAndIcons from "@/src/components/TitleAndIcons";
import BasicInfo from "@/src/components/about/BasicInfo";
import CodingJourney from "@/src/components/about/CodingJourney";
import Language from "@/src/components/about/Language";

function About() {
  return (
    <>
      <TitleAndIcons title="ABOUT ME" />

      <div className="flex flex-col space-y-10 md:pt-20">
        {/* <Image
          className="mx-auto w-1/3 md:w-1/4
          rounded-lg shadow-sm shadow-[#18D26E]"
          src={myPic}
          alt="Picture of me"
        /> */}
        <BasicInfo />
        <CodingJourney />
        <Language />
      </div>
    </>
  );
}

export default About;
