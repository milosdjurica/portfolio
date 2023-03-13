import TitleAndIcons from "@/components/TitleAndIcons";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <TitleAndIcons title="WELCOME" />

      <div className="space-y-5">
        <h3 className="green-text font-semibold text-3xl">Miloš Đurica</h3>
        <div className="space-y-10 md:space-y-20">
          <div className="space-y-2 text-lg md:w-[80%]">
            <p>
              Hi there! I am
              <span className="green-text"> software developer </span>from
              Serbia.
            </p>
            <p>Interested in both Front-End and Back-End technologies.</p>
            <p>
              Mainly focused on{" "}
              <span className="green-text">React/Next.js.</span>
            </p>
          </div>
          <div className="space-x-10 flex justify-start">
            <Link
              className="p-3 flex justify-center items-center
              shadow-sm shadow-[#18D26E] rounded-lg 
              hover:green-text hover:scale-105 ease-in duration-200"
              href="/about"
            >
              About Me
            </Link>
            <Link
              className="p-3 flex justify-center items-center
              shadow-sm shadow-[#18D26E] rounded-lg 
              hover:green-text hover:scale-105 ease-in duration-200"
              href="/projects"
            >
              My Projects
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
