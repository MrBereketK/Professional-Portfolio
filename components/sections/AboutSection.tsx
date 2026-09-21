"use client"

import { useEffect, useRef } from "react"
import useScrollActive from "@/hooks/useScrollActive"
import Circle from "@/public/assets/about/circle.svg"
import Signs from "@/public/assets/about/signs.svg"
import Star from "@/public/assets/about/star.svg"
import Triangle from "@/public/assets/about/triangle.svg"
import ProfileImage from "@/public/me-5.jpg"
import { useSectionStore } from "@/store/section"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import Image from "next/image"
import Link from "next/link"
import SplitType from "split-type"

export default function AboutSection() {
  gsap.registerPlugin(ScrollTrigger)

  const sectionRef = useRef(null)

  useEffect(() => {
    const q = gsap.utils.selector(sectionRef)

    new SplitType(q(".title"), {
      types: "chars",
      tagName: "span",
    })

    gsap.from(q(".title .char"), {
      opacity: 0.3,
      duration: 0.5,
      ease: "power1.out",
      stagger: 0.1,

      scrollTrigger: {
        trigger: q(".title"),
        start: "top center",
        scrub: true,
      },
    })

    gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        scrub: true,
        onEnter: () => {
          const tl = gsap.timeline({
            defaults: {
              stagger: 0.2,
              duration: 0.3,
            },
          })

          tl.fromTo(
            q(".image-animation"),
            {
              x: 200,
            },
            {
              x: 0,
            }
          )

          tl.fromTo(
            q(".text-animation"),
            {
              y: 100,
            },
            {
              y: 0,
            }
          )

          tl.to(q(".experience-count"), {
            innerText: 2,
            duration: 0.5,
            snap: {
              innerText: 1,
            },
          })

          tl.to(
            q(".project-count"),
            {
              innerText: 11,
              duration: 0.5,
              snap: {
                innerText: 1,
              },
            },
            "-=0.3"
          )

          tl.to(
            q(".user-count"),
            {
              innerText: 2,
              duration: 0.5,
              snap: {
                innerText: 1,
              },
            },
            "-=0.3"
          )
        },
      },
    })
  }, [])

  // Set Active Session
  const aboutSectionOnView = useScrollActive(sectionRef)
  const { setSection } = useSectionStore()

  useEffect(() => {
    aboutSectionOnView ? setSection("#about") : setSection("#home")
  }, [aboutSectionOnView, setSection])

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative h-full bg-gray-100 dark:bg-[#161D1F] overflow-hidden py-14 px-10 lg:px-[5%]"
    >
      <div className="w-full max-w-[1100px] h-full m-auto flex flex-col items-center gap-24">
        <div className="relative title text-xl md:text-4xl tracking-tight font-medium w-fit dark:text-white">
          Secure software is simple software — and build systems with both.
          <div className="absolute -right-[10px] top-2">
            <Image
              className="w-14 pointer-events-none select-none"
              src={Signs}
              alt="signs"
            />
          </div>
        </div>
        <div className="w-full flex flex-col-reverse md:flex-row items-center gap-20 md:gap-2 lg:gap-10">
          <div className="w-full flex flex-col items-start gap-7 md:gap-9">
            <div className="relative">
              <div className="overflow-hidden">
                <div className="text-animation dark:text-accentColor text-3xl md:text-4xl font-medium">
                  About me
                </div>
              </div>

              <div className="absolute -top-6 -left-8">
                <svg
                  width="45"
                  height="37"
                  viewBox="0 0 45 37"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M25.807 19.086c-.485-.764-.744-1.319-1.136-1.76a815.404 815.404 0 00-7.627-8.56 4.462 4.462 0 00-1.429-1.06c-.352-.16-1.016-.182-1.22.033-.3.32-.508.962-.396 1.37.165.624.57 1.226.99 1.737 2.52 3.07 5.081 6.113 7.626 9.161.143.17.302.337.475.48.6.508 1.352.985 1.995.37.447-.429.524-1.245.722-1.771zM36.215 9.964c.25 1.018.476 2.041.759 3.053.232.816.832 1.255 1.674 1.21.847-.046 1.371-.582 1.568-1.378.105-.425.176-.914.07-1.328-.645-2.533-1.341-5.05-2.03-7.57-.056-.212-.147-.491-.309-.587-.54-.323-1.14-.827-1.688-.8-.86.045-1.203.871-1.13 1.67.104 1.114.322 2.221.534 3.322.155.806.384 1.601.577 2.404l-.027.009.002-.005zM7.28 28.081c-.22.298-.737.71-.825 1.2-.072.394.287.96.603 1.313.28.309.746.487 1.164.633 1.967.697 3.947 1.363 5.921 2.04.21.071.43.13.65.167.981.166 1.984.278 2.601-.72.457-.732-.07-1.93-1.239-2.553-2.395-1.274-4.98-1.97-7.69-2.171-.295-.021-.595.046-1.183.095l-.001-.004z"
                    fill="#ffffff"
                  ></path>
                </svg>
              </div>
            </div>

            <div className="flex flex-col items-start gap-5">
              <div className="overflow-hidden">
                <div className="dark:text-white text-animation">
                  I am a 4th-year Software Engineering student and full-stack
                  developer focused on backend architecture, cybersecurity, and
                  reinforcement learning. During my recent internship at the
                  Information Network Security Agency (INSA), I engineered
                  dynamic security solutions and machine learning models to
                  automate threat analysis.
                </div>
              </div>

              <div className="overflow-hidden">
                <div className="dark:text-white text-animation">
                  Beyond the codebase, I serve as a leader for the{" "}
                  <Link
                    href="https://t.me/MUSU_main_campus"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accentColor hover:underline"
                  >
                    Campus Student Union
                  </Link>{" "}
                  and as the Partnership Team Lead for the{" "}
                  <Link
                    href="https://t.me/AuraX_Hub"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accentColor hover:underline"
                  >
                    Aurax Campus Tech Community
                  </Link>
                  . I believe the best systems are built when strong technical
                  execution is paired with clear communication and community
                  collaboration.
                </div>
              </div>
            </div>

            <div className="w-full border-t-accentColor py-5 border-b-accentColor border-t-[0.01px] border-b-[0.01px] flex items-center gap-6 md:gap-6 lg:gap-20">
              <div className="flex flex-col items-center">
                <div className="text-3xl md:text-4xl font-medium dark:text-white">
                  <span className="experience-count">0</span>{" "}
                  <span className="text-accentColor">+</span>
                </div>
                <div className="dark:text-white text-sm">
                  Experiences
                </div>
              </div>

              <div className="flex flex-col font-medium items-center">
                <div className="text-3xl md:text-4xl dark:text-white">
                  <span className="project-count">0</span>{" "}
                  <span className="text-accentColor">+</span>
                </div>
                <div className="dark:text-white text-sm">
                  Projects
                </div>
              </div>

              <div className="flex flex-col font-medium items-center">
                <div className="text-3xl md:text-4xl dark:text-white">
                  <span className="user-count">0</span>{" "}
                  <span className="text-accentColor">+</span>
                </div>
                <div className="dark:text-white text-sm">
                  Open-source Tools
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-full flex justify-center items-center image-animation ">
            <div className="relative w-[180px] h-[170px] lg:w-[300px] lg:h-[290px]">
              <div className="w-full h-full bg-accentColor shadow-md rounded-sm absolute -right-3 -bottom-3" />
              <Image
                className="absolute z-10 object-contain  w-full h-full shadow-sm rounded-sm"
                width={300}
                height={300}
                priority
                alt="bereket's profile"
                src={ProfileImage}
              />

              <div className="absolute hidden lg:block -top-12 -right-12">
                <Image
                  className="pointer-events-auto select-none"
                  width={26}
                  height={26}
                  alt="triangle background"
                  src={Triangle}
                />
              </div>

              <div className="absolute hidden lg:block -bottom-14 -right-10">
                <Image
                  className="pointer-events-auto select-none"
                  width={22}
                  height={22}
                  alt="circle background"
                  src={Circle}
                />
              </div>

              <div className="absolute hidden lg:block -bottom-16 -left-10">
                <Image
                  className="pointer-events-auto select-none"
                  width={34}
                  height={34}
                  alt="star background"
                  src={Star}
                />
              </div>
            </div>
          </div>
        </div>

        <TechStack />
      </div>
    </section>
  )
}

const TechStack = () => {
  return (
    <div className="w-full inline-flex flex-nowrap overflow-hidden">
      <div className="flex items-center gap-20 animate-infinite-scroll">
        {techItems.map((tech) => (
          <div
            key={tech.id}
            className="flex items-center gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              className="stroke-black dark:stroke-white"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {tech.paths.map((path, i) => (
                <path key={i} d={path} />
              ))}
            </svg>
            <div className="dark:text-white text-lg font-medium">
              {tech.label}
            </div>
          </div>
        ))}
      </div>

      <div
        className="flex items-center gap-20 animate-infinite-scroll"
        aria-hidden="true"
      >
        {techItems.map((tech) => (
          <div
            key={`dup-${tech.id}`}
            className="flex items-center gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              className="stroke-black dark:stroke-white"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {tech.paths.map((path, i) => (
                <path key={i} d={path} />
              ))}
            </svg>
            <div className="dark:text-white text-lg font-medium">
              {tech.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

const techItems = [
  {
    id: 1,
    label: "TypeScript",
    paths: [
      "M15 17.5c.32 .32 .754 .5 1.207 .5h.543c.69 0 1.25 -.56 1.25 -1.25v-.25a1.5 1.5 0 0 0 -1.5 -1.5a1.5 1.5 0 0 1 -1.5 -1.5v-.25c0 -.69 .56 -1.25 1.25 -1.25h.543c.453 0 .887 .18 1.207 .5",
      "M9 12h4",
      "M11 12v6",
      "M21 19v-14a2 2 0 0 0 -2 -2h-14a2 2 0 0 0 -2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2 -2z",
    ],
  },
  {
    id: 2,
    label: "React",
    paths: [
      "M6.306 8.711c-2.602 .723 -4.306 1.926 -4.306 3.289c0 2.21 4.477 4 10 4c.773 0 1.526 -.035 2.248 -.102",
      "M17.692 15.289c2.603 -.722 4.308 -1.926 4.308 -3.289c0 -2.21 -4.477 -4 -10 -4c-.773 0 -1.526 .035 -2.25 .102",
      "M6.305 15.287c-.676 2.615 -.485 4.693 .695 5.373c1.913 1.105 5.703 -1.877 8.464 -6.66c.387 -.67 .733 -1.339 1.036 -2",
      "M17.694 8.716c.677 -2.616 .487 -4.696 -.694 -5.376c-1.913 -1.105 -5.703 1.877 -8.464 6.66c-.387 .67 -.733 1.34 -1.037 2",
      "M12 5.424c-1.925 -1.892 -3.82 -2.766 -5 -2.084c-1.913 1.104 -1.226 5.877 1.536 10.66c.386 .67 .793 1.304 1.212 1.896",
      "M12 18.574c1.926 1.893 3.821 2.768 5 2.086c1.913 -1.104 1.226 -5.877 -1.536 -10.66c-.375 -.65 -.78 -1.283 -1.212 -1.897",
      "M11.5 12.866a1 1 0 1 0 1 -1.732a1 1 0 0 0 -1 1.732z",
    ],
  },
  {
    id: 3,
    label: "Next.js",
    paths: [
      "M9 15v-6l7.745 10.65a9 9 0 1 1 2.255 -1.993",
      "M15 12v-3",
    ],
  },
  {
    id: 4,
    label: "Node.js",
    paths: [
      "M12 3l7.5 4.33v8.66L12 20.33 4.5 16V7.33L12 3z",
      "M8 12a1 1 0 1 0 1 -1.732a1 1 0 0 0 -1 1.732z",
      "M13.2 10.6a1.2 1.2 0 1 0 1.2 -.7",
    ],
  },
  {
    id: 5,
    label: "MongoDB",
    paths: [
      "M12 21c-3.6 -1.4 -5.5 -4.6 -5 -8.5C7.4 8.6 9 6 12 4c3 2 4.5 4.6 5 8.5.5 3.9 -1.5 7 -5 8.5z",
      "M12 4v17",
    ],
  },
  {
    id: 6,
    label: "PyTorch",
    paths: [
      "M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",
    ],
  },
  {
    id: 7,
    label: "Docker",
    paths: [
      "M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",
      "M3.3 7l8.7 5 8.7-5",
      "M12 22V12",
    ],
  },
  {
    id: 8,
    label: "Keycloak",
    paths: [
      "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      "M12 8.5v.5",
      "M12 13.5v5",
    ],
  },
  {
    id: 9,
    label: "Java",
    paths: [
      "M17 8h1a4 4 0 1 1 0 8h-1",
      "M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z",
      "M6 2v2",
      "M10 2v2",
      "M14 2v2",
    ],
  },
  {
    id: 10,
    label: "OAuth2",
    paths: [
      "m21 2-2 2m-7.6 7.6a5.5 5.5 0 1 1-7.78 7.78 5.5 5.5 0 0 1 7.78-7.78Z",
      "m15.5 7.5 3 3L22 7l-3-3",
      "m17 5 2 2",
    ],
  },
]
