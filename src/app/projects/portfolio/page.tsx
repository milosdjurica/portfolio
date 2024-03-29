import homeImg from "@/public/assets/portfolio/home.png";
import TitleAndIcons from "@/src/components/TitleAndIcons";
import DemoCodeProject from "@/src/components/project/DemoCodeProject";
import TechnologiesUsed from "@/src/components/project/TechnologiesUsed";

function Portfolio() {
  return (
    <>
      <TitleAndIcons title="MY PERSONAL SITE" />

      <div className="space-y-20">
        <DemoCodeProject
          image={homeImg}
          demo="/"
          code="https://github.com/milosdjurica/portfolio"
        />

        <div className="space-y-10 flex flex-col justify-around">
          <div className="space-y-5 w-full">
            <h4 className="text-2xl green-underline font-bold inline-block">
              ABOUT PROJECT
            </h4>
            <p>
              This is my personal site which contains information about me, my
              projects and skills.
            </p>
            <p>
              Well, what else to say? You are already on this project, feel free
              to explore!
            </p>
          </div>

          <TechnologiesUsed
            technologies={["Next.js", "React", "Tailwind", "Vercel"]}
          />
        </div>
      </div>
    </>
  );
}

export default Portfolio;
