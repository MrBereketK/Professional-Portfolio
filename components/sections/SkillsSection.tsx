"use client"

import { useEffect, useRef } from "react"
import useOnScreen from "@/hooks/useOnScreen"
import useScrollActive from "@/hooks/useScrollActive"
import { useSectionStore } from "@/store/section"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import { RoughNotation } from "react-rough-notation"

export default function SkillsSection() {
  gsap.registerPlugin(ScrollTrigger)

  const sectionRef = useRef(null)
  const elementRef = useRef<HTMLDivElement>(null)
  const isOnScreen = useOnScreen(elementRef)

  useEffect(() => {
    const q = gsap.utils.selector(sectionRef)

    gsap.fromTo(
      q(".skills-col"),
      {
        opacity: 0,
        y: 60,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      }
    )
  }, [])

  // Set Active Session
  const skillsSectionOnView = useScrollActive(sectionRef)
  const { setSection } = useSectionStore()

  useEffect(() => {
    skillsSectionOnView && setSection("#skills")
  }, [skillsSectionOnView, setSection])

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="relative h-full bg-gray-100 dark:bg-[#161D1F] overflow-hidden py-14 px-10 lg:px-[5%]"
    >
      <div className="w-full max-w-[1100px] h-full m-auto flex flex-col items-center gap-14">
        <div ref={elementRef} className="overflow-hidden">
          <RoughNotation
            type="underline"
            strokeWidth={2}
            color="hsl(157, 87%, 41%)"
            order={1}
            show={isOnScreen}
          >
            <div className="text-xl md:text-4xl tracking-tight font-medium w-fit dark:text-accentColor">
              Skills
            </div>
          </RoughNotation>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <div className="skills-col flex flex-col gap-8">
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-8 bg-accentColor" />
              <h3 className="text-lg md:text-xl font-medium dark:text-accentColor">
                Technical Skills
              </h3>
            </div>

            <div className="flex flex-col gap-6">
              {technicalSkills.map((group) => (
                <div key={group.label} className="flex flex-col gap-3">
                  <p className="text-sm font-medium uppercase tracking-wider dark:text-white/70">
                    {group.label}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="text-sm px-4 py-1.5 rounded-xl border border-accentColor text-accentColor dark:bg-accentColor/10 hover:bg-accentColor hover:text-white transition-colors cursor-default"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div className="skills-col flex flex-col gap-8">
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-8 bg-accentColor" />
              <h3 className="text-lg md:text-xl font-medium dark:text-accentColor">
                Soft Skills
              </h3>
            </div>

            <div className="flex flex-col gap-4">
              {softSkills.map((skill) => (
                <div
                  key={skill.title}
                  className="flex items-start gap-3 rounded-lg bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 p-4"
                >
                  <svg
                    className="w-5 h-5 mt-0.5 shrink-0 text-accentColor"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <div className="flex flex-col gap-1">
                    <p className="font-medium dark:text-white">{skill.title}</p>
                    <p className="text-sm dark:text-white/60">
                      {skill.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const technicalSkills = [
  {
    label: "Languages",
    items: ["JavaScript", "TypeScript", "Python", "Java"],
  },
  {
    label: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS"],
  },
  {
    label: "Backend & Identity",
    items: ["Node.js", "Express", "MongoDB", "OAuth2", "Keycloak SPI"],
  },
  {
    label: "AI & Security",
    items: [
      "PyTorch",
      "Reinforcement Learning",
      "Isolation Forest",
      "Android APK Security",
    ],
  },
  {
    label: "Tools",
    items: ["Git CLI", "npm", "PyPI", "Docker"],
  },
]

const softSkills = [
  {
    title: "Cross-Functional Coordination",
    description:
      "Managing operations and communication across 10+ campus sectors as Student Union President.",
  },
  {
    title: "Strategic Partnerships",
    description:
      "Securing collaborations and organizing events as the Aurax Tech Community Lead.",
  },
  {
    title: "Community Advocacy",
    description:
      "Representing student feedback, negotiating resource allocations, and serving as a Class Representative.",
  },
  {
    title: "Technical Mentorship",
    description:
      "Leading the codeAfar initiative to drive digital literacy and mentor junior developers.",
  },
  {
    title: "Logistics & Event Management",
    description:
      "Executing large-scale campus events from charity initiatives to sports tournaments.",
  },
]