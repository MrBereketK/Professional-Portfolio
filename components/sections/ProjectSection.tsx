"use client"

import { useEffect, useRef } from "react"
import useOnScreen from "@/hooks/useOnScreen"
import useScrollActive from "@/hooks/useScrollActive"
import { useSectionStore } from "@/store/section"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import Link from "next/link"
import { RoughNotation } from "react-rough-notation"
import ProjectCard from "../ProjectCard"

export default function ProjectSection() {
  gsap.registerPlugin(ScrollTrigger)

  const sectionRef = useRef(null)

  const elementRef = useRef<HTMLDivElement>(null)
  const isOnScreen = useOnScreen(elementRef)

  useEffect(() => {
    const q = gsap.utils.selector(sectionRef)

    gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        scrub: true,
        onEnter: () => {
          gsap.fromTo(
            q(".qoutes-animation"),
            {
              y: "-200%",
            },
            {
              y: 0,
            }
          )
        },
      },
    })
  }, [])

  // Set Active Session
  const projectSectionOnView = useScrollActive(sectionRef)
  const { setSection } = useSectionStore()

  useEffect(() => {
    projectSectionOnView && setSection("#project")
  }, [projectSectionOnView, setSection])

  return (
    <section
      ref={sectionRef}
      id="project"
      className="relative h-full bg-gray-50 dark:bg-gray-100 overflow-hidden py-14 px-10 lg:px-[5%]"
    >
      <div className="w-full max-w-[1100px] h-full m-auto flex flex-col items-center gap-14">
        <div className="w-full flex flex-col gap-8 items-center">
          <RoughNotation
            type="underline"
            strokeWidth={2}
            color="hsl(157, 87%, 41%)"
            order={1}
            show={isOnScreen}
          >
            <div className="text-xl md:text-4xl tracking-tight font-medium w-fit dark:text-accentColor">
              Featured Projects
            </div>
          </RoughNotation>
          <div ref={elementRef} className="overflow-hidden">
            <div className="qoutes-animation w-full text-center font-medium flex flex-col items-center">
              <div>Good design is obvious. Great design is transparent.</div>
              <div>Secure systems are invisible when they work right.</div>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col gap-16">
          {groupedProjects.map(({ category, items }) => (
            <div
              key={category}
              className="w-full flex flex-col items-center gap-6"
            >
              <h3 className="flex items-center gap-3 text-lg md:text-2xl font-medium text-accentColor">
                {category}
                <span className="text-sm text-gray-400 dark:text-white/50">
                  {items.length}
                </span>
              </h3>
              <div
                className={`w-full grid grid-cols-1 md:grid-cols-2 gap-10 ${
                  items.length > 2 ? "lg:grid-cols-3" : "md:max-w-[70%]"
                }`}
              >
                {items.map((project) => (
                  <ProjectCard key={project.id} item={project} />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="font-medium">
          Explore more projects in{" "}
          <Link
            href="https://github.com/MrBereketK"
            target="_blank"
            aria-label="Explore more in my github profile"
            rel="noopener noreferrer"
            className="text-accentColor navlink dark:hover:text-black"
          >
            my github profile
          </Link>
        </div>
      </div>
    </section>
  )
}

export interface Project {
  id: number
  title: string
  description: string
  techStacks: string[]
  image: string
  category: string
  badge?: string
  githubURL: string
  githubApi: string
  liveURL: string
}

const projects: Project[] = [
  {
    id: 1,
    title: "Eunoia Techmart",
    description:
      "A peer-to-peer marketplace for buying and selling used goods — robust authentication, product image handling, dynamic search filtering, and secure transaction workflows.",
    techStacks: ["React", "Node.js", "Express", "MongoDB", "RESTful APIs"],
    image: "/assets/projects/eunoia-techmart.png",
    category: "Full-Stack",
    githubURL: "https://github.com/MrBereketK",
    githubApi: "",
    liveURL: "",
  },
  {
    id: 2,
    title: "Lihqest Book Store",
    description:
      "A digital e-commerce platform for book sales featuring cart state management, secure checkout, and a dedicated admin dashboard for inventory and orders.",
    techStacks: ["React", "Node.js", "Express", "MongoDB", "Redux/Zustand"],
    image: "/assets/projects/lihqest-book-store.png",
    category: "Full-Stack",
    githubURL: "https://github.com/MrBereketK",
    githubApi: "",
    liveURL: "",
  },
  {
    id: 3,
    title: "Smart Clinic EMR",
    description:
      "A secure electronic medical records application with zero-trust middleware. Keycloak authentication manages complex role-based access for providers and patients.",
    techStacks: ["React", "Node.js", "Express", "MongoDB", "Keycloak"],
    image: "/assets/projects/smart-clinic-emr.png",
    category: "Full-Stack",
    githubURL: "https://github.com/MrBereketK",
    githubApi: "",
    liveURL: "",
  },
  {
    id: 4,
    title: "Android APK Security RL Agent",
    description:
      "A Dueling Double Deep Q-Network agent that automates Android security assessments — experience replay buffers and action masking simulate evasion and detection.",
    techStacks: ["PyTorch", "Python", "Reinforcement Learning"],
    image: "/assets/projects/android-apk-security-rl.png",
    category: "Security & ML",
    badge: "Enterprise Internship: INSA",
    githubURL: "https://github.com/MrBereketK",
    githubApi: "",
    liveURL: "",
  },
  {
    id: 5,
    title: "Gasha Mapper",
    description:
      "A Keycloak SPI plugin that evaluates real-time dynamic risk with an Isolation Forest model and securely modifies token claims — bypassing static security bottlenecks.",
    techStacks: ["Java", "Keycloak SPI", "Python", "Isolation Forest"],
    image: "/assets/projects/gasha-mapper.png",
    category: "Security & ML",
    badge: "Enterprise Internship: INSA",
    githubURL: "https://github.com/MrBereketK",
    githubApi: "",
    liveURL: "",
  },
  {
    id: 6,
    title: "ZEB Identity Provider",
    description:
      "A machine-to-machine identity provider architecture built on strict OAuth2 specifications, managing cryptographic tokens for secure microservice communication.",
    techStacks: ["OAuth2", "Cryptography", "Backend Architecture"],
    image: "/assets/projects/zeb-identity-provider.png",
    category: "Security & ML",
    githubURL: "https://github.com/MrBereketK",
    githubApi: "",
    liveURL: "",
  },
  {
    id: 7,
    title: "Apple Landing Page Clone",
    description:
      "A pixel-perfect recreation of Apple's product pages — high-performance scroll animations, 3D elements, and minimalist responsive design.",
    techStacks: ["React", "Next.js", "Tailwind CSS", "GSAP", "Three.js"],
    image: "/assets/projects/apple-landing-page.png",
    category: "UI / UX",
    githubURL: "https://github.com/MrBereketK",
    githubApi: "",
    liveURL: "",
  },
  {
    id: 8,
    title: "Netflix Clone",
    description:
      "A replica of the Netflix browsing experience — horizontal scrolling carousels, TMDB API data fetching, trailer modals, and profile state management.",
    techStacks: ["React", "Tailwind CSS", "REST APIs", "Firebase"],
    image: "/assets/projects/netflix-clone.png",
    category: "UI / UX",
    githubURL: "https://github.com/MrBereketK",
    githubApi: "",
    liveURL: "",
  },
  {
    id: 9,
    title: "Amazon Clone",
    description:
      "A full-scale e-commerce architecture clone with deep nested navigation, complex global basket state, and mock Stripe payment integration.",
    techStacks: ["React", "Next.js", "Redux", "Stripe", "Firebase"],
    image: "/assets/projects/amazon-clone.png",
    category: "UI / UX",
    githubURL: "https://github.com/MrBereketK",
    githubApi: "",
    liveURL: "",
  },
  {
    id: 10,
    title: "semgit-ai-engine",
    description:
      "An AI-powered CLI that turns messy thoughts into conventional git commits. Published and maintained on the PyPI package registry and npm.",
    techStacks: ["Python", "PyPI", "LLM APIs", "CLI"],
    image: "/assets/projects/semgit-ai-engine.png",
    category: "Developer Tools",
    githubURL: "https://github.com/MrBereketK",
    githubApi: "",
    liveURL: "https://pypi.org/project/semgit-ai-engine/",
  },
  {
    id: 11,
    title: "context-tree-cli",
    description:
      "An AI-optimized directory scanner CLI that generates visual repository context trees for easier codebase onboarding. Published on npm.",
    techStacks: ["Node.js", "npm", "CLI Architecture"],
    image: "/assets/projects/context-tree-cli.png",
    category: "Developer Tools",
    githubURL: "https://github.com/MrBereketK",
    githubApi: "",
    liveURL: "https://www.npmjs.com/package/context-tree-cli",
  },
]

const groupedProjects = projects.reduce<
  { category: string; items: Project[] }[]
>((acc, project) => {
  const existing = acc.find((group) => group.category === project.category)
  if (existing) {
    existing.items.push(project)
  } else {
    acc.push({ category: project.category, items: [project] })
  }
  return acc
}, [])
