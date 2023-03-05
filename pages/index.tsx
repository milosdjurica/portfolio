import Link from "next/link";

export default function Home() {
  return (
    <div
      className="text-start p-10 space-y-10
    flex flex-col justify-center
    "
    >
      <div className="flex flex-col md:flex-row justify-between">
        <h2 className="text-4xl tracking-wider font-bold green-underline">WELCOME</h2>
        <div>ICONS GITHUB LINKEDIN PERSONAL SITE LINKTREE</div>
      </div>

      <div className="flex flex-col md:flex-row">
        <div className="w-1/3">Slika</div>
        <div className="space-y-5">
          <h3 className="green-text text-3xl">Software Developer</h3>
          <div className="space-y-20 ">
            <div className="space-y-2 text-lg md:w-[70%]">
              <p>
                Hi there! My name is
                <span className="green-text"> Miloš Đurica</span> and i am from
                Serbia.
              </p>
              <p>
                I am interested in both front and back end technologies.
                Currently focused on Next.js - React Framework.
              </p>
            </div>
            <div
              className="md:space-x-10 space-y-10 md:space-y-0 
            flex flex-col md:flex-row justify-center md:justify-start items-center"
            >
              <Link
                className="w-[250px] p-4 flex justify-center items-center
              shadow-sm shadow-[#18D26E] rounded-lg 
              hover:green-text hover:scale-105 ease-in duration-200"
                href="/about"
              >
                Learn more about me
              </Link>
              <Link
                className="w-[250px] p-4 flex justify-center items-center
                shadow-sm shadow-[#18D26E] rounded-lg 
              hover:green-text hover:scale-105 ease-in duration-200"
                href="/projects"
              >
                See some of my projects
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
