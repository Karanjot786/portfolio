import React from "react";
import userData from "@/constants/data";
import Container from "@/components/Container";

export default function AboutMe() {
  return (
    <Container>

      <section className="bg-white dark:bg-black">
      {/* <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16"> */}
        <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-black">
        <h1 className=" text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
        About Me.
        </h1>
        </div>

        <div className="bg-white -mt-10 dark:bg-black">
          <div className="text-container max-w-6xl mx-auto pt-20">
            <p
              className="leading-loose text-2xl md:text-4xl font-semibold  mx-4"
              style={{ lineHeight: "3rem" }}
            >
              {userData.about.title}

            </p>
          </div>
        </div>
        <div className="bg-white dark:bg-black px-4">
          <div className="pt-20 grid grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto gap-y-20 gap-x-20">
            {/* Social Buttons */}

            {/* Text area */}
            <div className="col-span-1 md:col-span-2">
              <div className="mb-8">
                {userData.about.description?.map((desc, idx) => (
                  <p className="text-gray-600 dark:text-gray-400 mb-4"
                    key={idx}

                  >
                    {desc}
                  </p>

                ))}
              </div>
              <h1 className="bg-red-500 text-3xl rounded-md px-2 py-1 inline-block font-bold text-gray-50">
                Tech Stack
              </h1>
              <div className="flex flex-row flex-wrap mt-8">
                <img
                  src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/python/python.png"
                  className="h-20 w-20 mx-4 my-4"
                />
                <img
                  src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png"
                  className="h-20 w-20 mx-4 my-4"
                />
                <img
                  src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/cpp/cpp.png"
                  className="h-20 w-20 mx-4 my-4"
                />
                <img
                  src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png"
                  className="h-20 w-20 mx-4 my-4"
                />
                <img
                  src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png"
                  className="h-20 w-20 mx-4 my-4"
                />
                <img
                  src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png"
                  className="h-20 w-20 mx-4 my-4"
                />
                <img
                  src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/tailwind/tailwind.png"
                  className="h-20 w-20 mx-4 my-4"
                />
                <img
                  src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/bootstrap/bootstrap.png"
                  className="h-20 w-20 mx-4 my-4"
                />
                <img
                  src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/django/django.png"
                  className="h-20 w-20 mx-4 my-4"
                />
                {/* <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/flask/flask.png"
                className="h-20 w-20 mx-4 my-4"
              /> */}
                <img
                  src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/php/php.png"
                  className="h-20 w-20 mx-4 my-4"
                />
                <img
                  src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/git/git.png"
                  className="h-20 w-20 mx-4 my-4"
                />
                <img
                  src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png"
                  className="h-20 w-20 mx-4 my-4"
                />

                <img
                  src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mysql/mysql.png"
                  className="h-20 w-20 mx-4 my-4"
                />
                <img
                  src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mongodb/mongodb.png"
                  className="h-20 w-20 mx-4 my-4"
                />
              </div>
            </div>
          </div>
        </div>
      {/* </div> */}
      </section>
    </Container>
  );
}
