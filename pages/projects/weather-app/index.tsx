import DemoCodeProject from "@/components/project/DemoCodeProject";
import TechnologiesUsed from "@/components/project/TechnologiesUsed";
import TitleAndIcons from "@/components/TitleAndIcons";
import weatherImg from "@/public/assets/weather-app/weather.png";

function Portfolio() {
  return (
    <>
      <TitleAndIcons title="WEATHER APP" />

      <div className="space-y-20">
        <DemoCodeProject
          image={weatherImg}
          demo="https://weather-app-milosdjurica.vercel.app/"
          code="https://github.com/milosdjurica/weather-app-nextjs"
        />

        <div
          className="space-y-10 md:space-y-0
        flex flex-col md:flex-row justify-around"
        >
          <div className="space-y-5 w-full">
            <h4 className="text-2xl green-underline font-bold inline-block">
              ABOUT PROJECT
            </h4>
            <p className="w-[90%]">
              This is an app which i created using
              <span className="green-text"> WeatherAPI </span>
              from RapidAPI. User can choose city using search box.
            </p>
            <p className="w-[90%]">
              App gives information about{" "}
              <span className="green-text">current weather</span>, and
              information about next 2 days. User can see a weather for all 3
              days, and for <span className="green-text">EVERY HOUR </span>
              he wants in those
              <span className="green-text"> 3 days</span>.
            </p>
          </div>

          <TechnologiesUsed
            technologies={[
              "Next.js",
              "React",
              "Tailwind",
              "Vercel",
              "Zustand",
              "Weather API",
            ]}
          />
        </div>
      </div>
    </>
  );
}

export default Portfolio;
