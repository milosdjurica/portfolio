import linktreeImg from "@/public/assets/linktree/linktree.png";
import TitleAndIcons from "@/src/components/TitleAndIcons";
import DemoCodeProject from "@/src/components/project/DemoCodeProject";
import TechnologiesUsed from "@/src/components/project/TechnologiesUsed";

function Linktree() {
  return (
    <>
      <TitleAndIcons title="LINKTREE CLONE" />

      <div className="space-y-20">
        <DemoCodeProject
          image={linktreeImg}
          demo="https://milosdjurica-linktree.vercel.app/"
          code="https://github.com/milosdjurica/nextjs-linktree"
        />

        <div className="space-y-10 flex flex-col justify-around">
          <div className="space-y-5 w-full">
            <h4 className="text-2xl green-underline font-bold inline-block">
              ABOUT PROJECT
            </h4>
            <p>
              This was a simple project but an interesting one. By building the
              Linktree clone i learned how to deploy project on Vercel.
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

export default Linktree;
