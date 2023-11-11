import translatorImg from "@/public/assets/translator/translator.png";
import TitleAndIcons from "@/src/components/TitleAndIcons";
import DemoCodeProject from "@/src/components/project/DemoCodeProject";
import TechnologiesUsed from "@/src/components/project/TechnologiesUsed";

export default function Translator() {
  return (
    <>
      <TitleAndIcons title="Language Translating app" />

      <div className="space-y-20">
        <DemoCodeProject
          image={translatorImg}
          demo="https://language-learning-app-milosdjurica.vercel.app/"
          code="https://github.com/milosdjurica/language-learning-app"
        />

        <div className="space-y-10 flex flex-col justify-around">
          <div className="space-y-5 w-full">
            <h4 className="text-2xl green-underline font-bold inline-block">
              ABOUT PROJECT
            </h4>
            <p>
              Since I am actively learning Spanish with native speakers, I
              created this website to help us translate messages in Serbian,
              Spanish and English.
            </p>
            <p>
              I added authentication using NextAuth. Users can log in with
              Google OAuth, or with credentials.
            </p>
            <p>
              I am planning to improve this app in the future by adding all
              useful resources for learning Spanish in one place.
            </p>
            <p>
              There is also an idea to add option for user to insert a specific
              word, and then another api would be called and give back the
              examples of this word used in different contexts.
            </p>
            <p>
              Creating a chat that automatically translates message from one
              language to another is another option that I am exploring.
            </p>
          </div>

          <TechnologiesUsed
            technologies={[
              "Next.js",
              "React",
              "NextAuth",
              "Microsoft Translation API",
              "Tailwind",
              "ShadCN",
            ]}
          />
        </div>
      </div>
    </>
  );
}
