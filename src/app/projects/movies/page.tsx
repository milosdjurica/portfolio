import moviesImg from "@/public/assets/movies-app/big-picture.png";
import TitleAndIcons from "@/src/components/TitleAndIcons";
import DemoCodeProject from "@/src/components/project/DemoCodeProject";
import TechnologiesUsed from "@/src/components/project/TechnologiesUsed";

function Movies() {
  return (
    <>
      <TitleAndIcons title="MOVIES APP" />

      <div className="space-y-20">
        <DemoCodeProject
          image={moviesImg}
          demo="https://movies-nextjs-milosdjurica.vercel.app/"
          code="https://github.com/milosdjurica/movies-nextjs"
        />

        <div className="space-y-10 flex flex-col justify-around">
          <div className="space-y-5 w-full">
            <h4 className="text-2xl green-underline font-bold inline-block">
              ABOUT PROJECT
            </h4>
            <p>
              This project is using TMDB API. UI is similar to Netflix. User can
              click on a specific movie and see more info about it, as well as
              the trailer from YouTube.
            </p>
            <p>Project is created for learning purposes only.</p>
            <p>
              Some ideas to improve project are:
              <ul>
                <li>1. Add option to save specific movie/tv show.</li>
                <li>2. Search movie/tv show by title.</li>
                <li>
                  3. Search for actor and then list every movie and tv show that
                  actor has played in.
                </li>
              </ul>
            </p>
          </div>

          <TechnologiesUsed
            technologies={[
              "Next.js",
              "React",
              "Tailwind",
              "TMDB API",
              "Recoil",
              "React Player",
            ]}
          />
        </div>
      </div>
    </>
  );
}

export default Movies;
