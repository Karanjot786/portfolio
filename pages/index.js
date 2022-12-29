import Container from "@/components/Container";
import Link from "next/link";
import { LIGHT_COLORS } from "@/lib/constants";
import { shuffleArray } from "@/lib/shuffleArray";
import { useEffect, useState } from "react";
import { useIsFontReady } from "@/lib/useIsFontReady";
import { LinkPreview } from "@/components/LinkPreview";
import { StaticLinkPreview } from "@/components/StaticLinkPreview";
import { useTheme } from "next-themes";
export default function Home() {

  const [colors, setColors] = useState([]);
  // const [tempInterval, setTempInterval] = useState(null);

  let tempInterval;

  const isFontReady = useIsFontReady();
  const { theme, setTheme } = useTheme();

  const play = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    setColors(shuffleArray(LIGHT_COLORS));
  }, []);

  return (
    <Container>
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <div className="flex flex-col md:flex-row justify-between items-start">
          <div className="flex md:w-3/4 flex-col">
            <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
              Hey, I am Karanjot Singh
            </h1>

            <h2 className="text-gray-600 dark:text-gray-400 mb-16 mt-4 font-light tracking-wide leading-normal">
              🖥 I am a developer, student, and a creator.
              <br />
              🔨 Building{" "}
              <LinkPreview url="https://huntingcoderblogs.vercel.app/">
                <span className="text-black dark:text-white">Blog </span>
              </LinkPreview>
              <br />
              🐥 I{" "}
              <a
                className="font-medium text-gray-700 transition-colors hover:text-gray-900 focus:text-gray-900 focus:outline-none dark:text-gray-300 dark:hover:text-gray-600"
                target="__blank"
              >
                <LinkPreview url="https://twitter.com/Karanjotdulay">
                  <span className=" text-blue-500 dark:text-blue-500">
                    Tweet
                  </span>
                </LinkPreview>
              </a>{" "}
              about technology, learning and{" "}
              <StaticLinkPreview url="https://manuarora.in/radhey-bhaiya.jpeg">
                <span
                  onMouseEnter={play}
                  onMouseLeave={play}
                  className="text-black dark:text-white"
                >
                  memes.
                </span>
              </StaticLinkPreview>
            </h2>
          </div>

          <a  className="md:flex hidden md:w-1/4 flex-col relative" target="__blank">
          

            {/* <div className="absolute w-full h-full rounded-full transform scale-110 shadow-xl bg-gradient-to-r from-blue-300 via-blue-400 to-blue-500" /> */}
            <picture> <img src="karanjot.png" className="rounded-full max-w-[200px] " />
            </picture>
          </a>
        </div>

        <h2 className="text-6xl lg:text-9xl max-w-lg font-bold text-black dark:text-white text-center">
          Favourite Projects
        </h2>
        <br />

        <div className="grid md:grid-cols-3 gap-8  pb-40">
          {/* Single card */}
          <a
            href="https://huntingcoderblogs.vercel.app"
            className="w-full block col-span-3 shadow-2xl"
          >
            <div className="relative overflow-hidden">
            <picture>
              <img
                src="/tmk.png"
                alt="portfolio"
                className="transform hover:scale-125 transition duration-2000 ease-out"
              />
              </picture>
              <h1 className="absolute top-10 left-10 text-gray-50 font-bold text-xl bg-red-500 rounded-md px-2">
                Blog
              </h1>
              <h1 className="absolute bottom-10 left-10 text-gray-50 font-bold text-xl">
                01
              </h1>
            </div>
          </a>
          {/* Single card */}
          <a
            href="https://karanjot.vercel.app/"
            className="w-full block col-span-3  sm:col-span-2 shadow-2xl"
          >
            <div className="relative overflow-hidden">
            <picture>  <img
                src="/portfolio.png"
                alt="portfolio"
                className="transform hover:scale-125 transition duration-2000 ease-out"
              /></picture>
              <h1 className="absolute top-10 left-10 text-gray-50 font-bold text-xl bg-red-500 rounded-md px-2">
                Portfolio
              </h1>
              <h1 className="absolute bottom-10 left-10 text-gray-50 font-bold text-xl">
                02
              </h1>
            </div>
          </a>
 <a
            href="https://news.karanjot786.repl.co"
            className="w-full block col-span-3 sm:col-span-1  object-cover"
          >
            <div className="relative overflow-hidden shadow-2xl">
              {/* <div className="overlay absolute inset-0 bg-black bg-opacity-70 z-10"></div> */}
              <img
                src="/news (1).png"
                alt="portfolio"
                className="transform hover:scale-125 transition duration-2000 ease-out object-cover shadow-2xl"
              />
              <h1 className="absolute top-10 left-10 text-gray-50 font-bold text-xl bg-red-500 rounded-md px-2">
                News Website
              </h1>
              <h1 className="absolute bottom-10 left-10 text-gray-50 font-bold text-xl">
                03
              </h1>
            </div>
          </a>
        </div>
        <Link href="/projects">
          <a className="mb-20 md:mb-0 px-8 py-4 rounded-md bg-white shadow-lg text-xl font-semibold flex flex-row space-x-4 items-center dark:text-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-arrow-up-right-square"
              stroke="4"
              strokeWidth="4"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.854 8.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707l-4.096 4.096z" />
            </svg>
            <p>View all</p>
          </a>
        </Link>

      </div>
    </Container>


  )
}
