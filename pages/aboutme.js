import React from "react";
import Container from "@/components/Container";
import Link from "next/link"; 

export default function projects() {
    return (
        <Container
            title="Projects – Manu Arora"
            description="Projects that I've built from scratch, upcoming projects, learned from courses and projects that I'm proud of."
            image="/avatar.jpg"
        >
            <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
                <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
                    Projects
                </h1>
                <h2 className="prose text-gray-600 dark:text-gray-400 mb-16">
                    I’ve developed commercial projects as well as hobby projects. All
                    projects are included (along with course related projects) here.
                    –&nbsp;
                    <Link href="https://huntingcoderblogs.vercel.app">
                        <a className="text-blue-500 hover:underline">
                            checkout my blog&nbsp;
                        </a>
                    </Link>
                    while you are here. <br />I write about technology, learning and memes.
                </h2>
                <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 text-black dark:text-white">
                    Full-Stack
                </h3>
                <div className="bg-white dark:bg-black">
                    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-1 gap-6 py-10 pb-20">
                        <a href="https://huntingcoderblogs.vercel.app" className="w-full block shadow-2xl">
                            <div className="relative overflow-hidden">
                                <div className="h-72 object-cover">
                                <picture>
                                    <img src="https://www.codewithharry.com/img/notes/android.png" alt="portfolio" width="100%" height="100%" layout="responsive" className="transform hover:scale-125 transition duration-2000 ease-out object-cover"
                                    />
                                    </picture>
                                </div>
                                <h1 className="absolute top-10 left-10 text-gray-50 font-bold text-xl bg-red-500 rounded-md px-2">
                                    Blog
                                </h1>
                                <h1 className="absolute bottom-10 left-10 text-black dark:text-white font-bold text-xl">
                                    1
                                </h1>
                            </div>
                        </a>

                    </div>
                </div>
                {/* <ProjectCard
          title="Tailwind Master Kit"
          description="Beautiful, Handcrafted, ready-to-use components and templates for your next Tailwind web app project."
          href="https://tailwindmasterkit.com/"
          icon="tailwindmasterkit"
          tags={["Tailwind", "Next.js", "Freemium"]}
        />
        <ProjectCard
          title="Algochurn"
          description="Practice the most popular algorithmic questions and Front-end interview questions with an interactive IDE and learning environment."
          href="https://algochurn.com"
          icon="algochurn"
          tags={["Next.js", "React", "TailwindCSS", "Monaco", "Algorithms"]}
        /> */}
                {/* <section className="bg-white dark:bg-black">
          <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-black">
            <h1 className=" text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
              Projects
            </h1>
          </div> */}
                {/* Grid starts here */}
                {/* <div className="bg-white dark:bg-black">
                    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-1 gap-6 py-10 pb-20">
                        {userData.projects.map((pro, idx) => (


                            <ProjectCard
                                title={pro.title}
                                link={pro.link}
                                imgUrl={pro.imgUrl}
                                number={`${idx + 1}`}
                            />
                        ))}
                    </div>
                </div> */}
                {/* </section> */}
                {/* <ProjectCard
          title="PlaceholderTech"
          description="We build modern, blazing-fast web applications which helps your business grow and increase sales."
          href="https://placeholdertech.in/"
          icon="placeholdertech"
          tags={["Freelancing", "React", "Node", "Firebase"]}
        />

        <ProjectCard
          title="Covid Rescue"
          description="Get Real-time verified leads on Oxygen, Beds, Remdesivir and more with location and resource filtering"
          href="https://covidrescue.co.in/"
          icon="covidrescue"
          tags={["Open Source", "Next.js", "Twitter"]}
        />

        <ProjectCard
          title="Golden Bells Academy"
          description="✍🏻 An educational portal to watch educational videos, write and submit assignments, view results and more."
          href="https://goldenbellsacademy.com/"
          icon="gba"
          tags={["commercial", "NextJS", "Firebase"]}
        />
        <ProjectCard
          title="Devmedium"
          description="📝 A Blogging application platform like Dev.to and Medium with Image uploads, real-time likes and custom usernames"
          href="https://devmedium.vercel.app/"
          icon="devmedium"
          tags={["NextJS", "Firestore", "Firebase"]}
        />
        <ProjectCard
          title="Playground"
          description="An open-source playground to create HTML, CSS and Javascript components on the go."
          href="https://play.placeholdertech.in/"
          icon="play"
          tags={["NextJS", "Tailwind", "Chakra", "MongoDB"]}
        />
        <ProjectCard
          title="Feedmeback"
          description="The easiest way to add comments or reviews to your static site. Built as part of React 2025."
          href="https://feedmeback-beta.vercel.app/"
          icon="fastfeedback"
          tags={["NextJS", "Jamstack", "Firebase", "OAuth"]}
        />
        <ProjectCard
          title="Music Streaming Application"
          description="🎶 An Open-Source music streaming website (like spotify) with rich features like creating playlist, pause, play and user login/authentication."
          href="https://github.com/manuarora700/music-streaming-project"
          icon="music"
          tags={["PHP", "MySQL", "Spotify-UI", "Minimal"]}
        />
        <ProjectCard
          title="GitHub Lookup"
          description="A minimal application to search for GitHub users with user details using the GitHub API"
          href="https://github-lookup-new.netlify.app/"
          icon="github"
          tags={["React", "Front-end", "Custom-CSS"]}
        />

        <ProjectCard
          title="IPL Statistics"
          description="A bundled web application to get details and statistics of Every player, Team and detailed analysis of each match played in IPL"
          href="https://ipl-statistics.vercel.app/"
          icon="ipl"
          tags={["NextJS", "Vercel", "Dataset", "Real-world"]}
        /> */}

                <a
                    href="https://github.com/Karanjot786"
                    className="border flex flex-row items-center justify-center mx-auto rounded-md dark:text-gray-300 px-4 py-2 text-gray-800"
                >
                    See all at{" "}
                    <span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            className="ml-2"
                            fill="currentColor"
                            stroke="currentColor"
                        >
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                    </span>
                </a>

                {/* <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-black dark:text-white">
          Upcoming Projects
        </h3>

        <ProjectCard
          title="StyledNext"
          description="Professional, modern and beautiful templates built with Next.js and TailwindCSS"
          href="https://stylednext.com"
          icon="vscode"
          tags={["NextJS", "Tailwind", "Hackerearth"]}
        />
        <ProjectCard
          title="VSCode Resume"
          description="A VSCode themed resume for all the web developers out there. A UI which looks exactly like a React file-system based VSCode window with create and update operations."
          href="#"
          icon="vscode"
          tags={["NextJS", "Tailwind", "Hackerearth"]}
        />
        <ProjectCard
          title="More projects coming soon.."
          description="I get ideas all day 🙄, All of them are updated here as soon as I start working on them."
          href="#"
          icon="more"
        />

        🎶 A music streaming website (like spotify) built using PHP, HTML/CSS, AJAX, JS, jQuery, JSON, mySQL and more.
        <Contact /> */}

            </div>
        </Container>
    );
}
// const ProjectCard = ({ title, link, imgUrl, number }) => {
//     return (
//         <a href={link} className="w-full block shadow-2xl">
//             <div className="relative overflow-hidden">
//                 <div className="h-72 object-cover">
//                     <Image
//                         src={imgUrl}
//                         alt="portfolio"
//                         className="transform hover:scale-125 transition duration-2000 ease-out object-cover h-full w-full"
//                     />
//                 </div>
//                 <h1 className="absolute top-10 left-10 text-gray-50 font-bold text-xl bg-red-500 rounded-md px-2">
//                     {title}
//                 </h1>
//                 <h1 className="absolute bottom-10 left-10 text-gray-50 font-bold text-xl">
//                     {number.length === 1 ? "0" + number : number}
//                 </h1>
//             </div>
//         </a>
//     );
// };
