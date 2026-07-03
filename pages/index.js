import { useRef } from "react";
import Header from "../components/Header";
import ServiceCard from "../components/ServiceCard";
import WorkCard from "../components/WorkCard";
import { useIsomorphicLayoutEffect } from "../utils";
import { stagger } from "../animations";
import Footer from "../components/Footer";
import Head from "next/head";
import Button from "../components/Button";
import Link from "next/link";
import Cursor from "../components/Cursor";
import { useI18n } from "../context/I18nContext";

import data from "../data/portfolio.json";

export default function Home() {
  const workRef = useRef();
  const aboutRef = useRef();
  const textOne = useRef();
  const textTwo = useRef();
  const textThree = useRef();
  const textFour = useRef();

  const { t } = useI18n();

  const handleWorkScroll = () => {
    window.scrollTo({
      top: workRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleAboutScroll = () => {
    window.scrollTo({
      top: aboutRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  useIsomorphicLayoutEffect(() => {
    stagger(
      [textOne.current, textTwo.current, textThree.current, textFour.current],
      { y: 40, x: -10, transform: "scale(0.95) skew(10deg)" },
      { y: 0, x: 0, transform: "scale(1)" }
    );
  }, []);

  const engineeringItems = t("engineering.items");

  return (
    <div className={`relative ${data.showCursor && "cursor-none"}`}>
      {data.showCursor && <Cursor />}
      <Head>
        <title>Yuhao Zhang | Java Full Stack Developer</title>
        <meta name="description" content="Yuhao Zhang — Java Full Stack Developer exploring AI Coding. Building production-grade applications with Java, Spring Boot, React and AI-powered development tools." />
        <meta name="keywords" content="Yuhao Zhang, Java, Full Stack Developer, Spring Boot, React, AI Coding, Portfolio, TypeScript, MySQL, Redis" />
        <meta name="author" content="Yuhao Zhang" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#000000" />
        <link rel="canonical" href="https://github.com/provamonijafar-gif" />
        <link rel="icon" href="/favicon.ico" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Yuhao Zhang | Java Full Stack Developer" />
        <meta property="og:description" content="Java Full Stack Developer exploring AI Coding. Building applications with Spring Boot, React and AI tools." />
        <meta property="og:site_name" content="Yuhao Zhang Portfolio" />
        <meta property="og:locale" content="en_US" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Yuhao Zhang | Java Full Stack Developer" />
        <meta name="twitter:description" content="Java Full Stack Developer exploring AI Coding. Building applications with Spring Boot, React and AI tools." />
      </Head>

      <div className="gradient-circle"></div>
      <div className="gradient-circle-bottom"></div>

      <div className="container mx-auto mb-10">
        <Header
          handleWorkScroll={handleWorkScroll}
          handleAboutScroll={handleAboutScroll}
        />

        {/* Hero Section */}
        <div className="laptop:mt-20 mt-10">
          <div className="mt-5">
            <h1
              ref={textOne}
              className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-4/5 mob:w-full laptop:w-4/5"
            >
              {t("hero.greeting")}
            </h1>
            <h1
              ref={textTwo}
              className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-full laptop:w-4/5"
            >
              {t("hero.intro")}
            </h1>
            <h1
              ref={textThree}
              className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-full laptop:w-4/5"
            >
              {t("hero.role")}
            </h1>
            <h1
              ref={textFour}
              className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-full laptop:w-4/5"
            >
              {t("hero.direction")}
            </h1>
          </div>

          <p className="mt-3 p-1 tablet:p-2 text-sm tablet:text-base laptop:text-lg opacity-60 w-full laptop:w-3/5">
            {t("hero.subtitle")}
          </p>

          <div className="mt-2 laptop:mt-5 flex flex-wrap mob:flex-nowrap link">
            <Button onClick={handleWorkScroll}>{t("hero.viewProjects")}</Button>
            <Button onClick={() => window.open("https://github.com/provamonijafar-gif")}>
              GitHub
            </Button>
          </div>
        </div>

        {/* Projects Section */}
        <div className="mt-10 laptop:mt-30 p-2 laptop:p-0" ref={workRef}>
          <h1 className="text-2xl text-bold">{t("projects.title")}</h1>
          <p className="mt-2 opacity-50 text-sm laptop:text-base">
            {t("projects.subtitle")}
          </p>

          <div className="mt-5 laptop:mt-10 grid grid-cols-1 tablet:grid-cols-2 gap-6">
            {data.projects.map((project) => (
              <WorkCard
                key={project.id}
                img={project.imageSrc}
                name={project.title}
                description={project.description}
                problem={project.problem}
                solution={project.solution}
                implementation={project.implementation}
                techStack={project.techStack}
                learning={project.learning}
                impact={project.impact}
                onClick={() => window.open(project.url)}
              />
            ))}
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-10 laptop:mt-30 p-2 laptop:p-0">
          <h1 className="tablet:m-10 text-2xl text-bold">{t("skills.title")}</h1>
          <p className="tablet:m-10 mt-2 opacity-50 text-sm laptop:text-base">
            {t("skills.subtitle")}
          </p>
          <div className="mt-5 tablet:m-10 grid grid-cols-1 laptop:grid-cols-2 gap-6">
            {data.services.map((service, index) => (
              <ServiceCard
                key={index}
                name={service.title}
                description={service.description}
                category={service.category}
              />
            ))}
          </div>
        </div>

        {/* Engineering Section */}
        <div className="mt-10 laptop:mt-30 p-2 laptop:p-0">
          <h1 className="tablet:m-10 text-2xl text-bold">{t("engineering.title")}</h1>
          <p className="tablet:m-10 mt-2 opacity-50 text-sm laptop:text-base">
            {t("engineering.subtitle")}
          </p>
          <div className="mt-5 tablet:m-10 grid grid-cols-1 laptop:grid-cols-2 gap-6">
            {Array.isArray(engineeringItems) &&
              engineeringItems.map((item, index) => (
                <ServiceCard
                  key={index}
                  name={item.title}
                  description={item.description}
                />
              ))}
          </div>
        </div>

        {process.env.NODE_ENV === "development" && (
          <div className="fixed bottom-5 right-5">
            <Link href="/edit">
              <Button type="primary">Edit Data</Button>
            </Link>
          </div>
        )}

        {/* About Section */}
        <div className="mt-10 laptop:mt-40 p-2 laptop:p-0" ref={aboutRef}>
          <h1 className="tablet:m-10 text-2xl text-bold">{t("about.title")}</h1>
          <div className="tablet:m-10 mt-2 w-full laptop:w-3/5 space-y-6">
            <p className="text-xl laptop:text-2xl leading-relaxed">
              {t("about.motivation")}
            </p>
            <p className="text-xl laptop:text-2xl leading-relaxed">
              {t("about.direction")}
            </p>
            <p className="text-xl laptop:text-2xl leading-relaxed opacity-80 italic">
              {t("about.mindset")}
            </p>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}
