import TitleAndIcons from "@/components/TitleAndIcons";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <TitleAndIcons title="WELCOME" />

      <div className="space-y-5">
        <h3 className="green-text font-semibold text-3xl">Miloš Đurica</h3>
        <div className="space-y-20 ">
          <div className="space-y-2 text-lg md:w-[80%]">
            <p>
              Hi there! I am
              <span className="green-text"> software developer </span>from
              Serbia.
            </p>
            <p>I am interested in both Front-End and Back-End technologies.</p>
            <p>
              Currently focused on <span className="green-text">Next.js</span> -
              framework for <span className="green-text">React</span>
            </p>
          </div>
          <div
            className="md:space-x-10 space-y-10 md:space-y-0 
            flex flex-col md:flex-row justify-center md:justify-start items-start"
          >
            <Link
              // !buttons are different size, but this works on GALAXY FOLD
              // !dont want to fix them to lower size since then text goes in 2 rows
              className="max-w-[250px] min-w-[200px] p-4 flex justify-center items-center
              shadow-sm shadow-[#18D26E] rounded-lg 
              hover:green-text hover:scale-105 ease-in duration-200"
              href="/about"
            >
              Learn more about me
            </Link>
            <Link
              className="max-w-[250px] min-w-[200px] p-4 flex justify-center items-center
              shadow-sm shadow-[#18D26E] rounded-lg 
              hover:green-text hover:scale-105 ease-in duration-200"
              href="/projects"
            >
              Check out my projects
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
