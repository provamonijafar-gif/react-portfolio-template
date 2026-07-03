import { Popover } from "@headlessui/react";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Button from "../Button";
import { useI18n } from "../../context/I18nContext";
import data from "../../data/portfolio.json";

const Header = ({ handleWorkScroll, handleAboutScroll, isBlog }) => {
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const { locale, switchLocale, t } = useI18n();

  const { name, showBlog, showResume } = data;

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <Popover className="block tablet:hidden mt-5">
        {({ open }) => (
          <>
            <div className="flex items-center justify-between p-2 laptop:p-0">
              <h1
                onClick={() => router.push("/")}
                className="font-medium p-2 laptop:p-0 link"
              >
                {name}.
              </h1>

              <div className="flex items-center">
                {data.darkMode && (
                  <Button
                    onClick={() =>
                      setTheme(theme === "dark" ? "light" : "dark")
                    }
                  >
                    <img
                      className="h-6"
                      src={`/images/${
                        theme === "dark" ? "moon.svg" : "sun.svg"
                      }`}
                      alt="theme toggle"
                    ></img>
                  </Button>
                )}

                <Popover.Button>
                  <img
                    className="h-5"
                    src={`/images/${
                      !open
                        ? theme === "dark"
                          ? "menu-white.svg"
                          : "menu.svg"
                        : theme === "light"
                        ? "cancel.svg"
                        : "cancel-white.svg"
                    }`}
                    alt="menu"
                  ></img>
                </Popover.Button>
              </div>
            </div>
            <Popover.Panel
              className={`absolute right-0 z-10 w-11/12 p-4 ${
                theme === "dark" ? "bg-slate-800" : "bg-white"
              } shadow-md rounded-md`}
            >
              {!isBlog ? (
                <div className="grid grid-cols-1">
                  <Button onClick={handleWorkScroll}>{t("nav.work")}</Button>
                  <Button onClick={handleAboutScroll}>{t("nav.about")}</Button>
                  {showBlog && (
                    <Button onClick={() => router.push("/blog")}>{t("nav.blog")}</Button>
                  )}
                  {showResume && (
                    <Button onClick={() => router.push("/resume")}>
                      {t("nav.resume")}
                    </Button>
                  )}
                  <Button
                    onClick={() => window.open("mailto:13670248572@139.com")}
                  >
                    {t("nav.contact")}
                  </Button>
                  <Button
                    onClick={() => switchLocale(locale === "en" ? "zh" : "en")}
                  >
                    {locale === "en" ? "中文" : "EN"}
                  </Button>
                </div>
              ) : (
                <div className="grid grid-cols-1">
                  <Button onClick={() => router.push("/")} classes="first:ml-1">
                    {t("nav.home")}
                  </Button>
                  {showBlog && (
                    <Button onClick={() => router.push("/blog")}>{t("nav.blog")}</Button>
                  )}
                  {showResume && (
                    <Button
                      onClick={() => router.push("/resume")}
                      classes="first:ml-1"
                    >
                      {t("nav.resume")}
                    </Button>
                  )}
                  <Button
                    onClick={() => window.open("mailto:13670248572@139.com")}
                  >
                    {t("nav.contact")}
                  </Button>
                  <Button
                    onClick={() => switchLocale(locale === "en" ? "zh" : "en")}
                  >
                    {locale === "en" ? "中文" : "EN"}
                  </Button>
                </div>
              )}
            </Popover.Panel>
          </>
        )}
      </Popover>
      <div
        className={`mt-10 hidden flex-row items-center justify-between sticky ${
          theme === "light" && "bg-white"
        } dark:text-white top-0 z-10 tablet:flex`}
      >
        <h1
          onClick={() => router.push("/")}
          className="font-medium cursor-pointer mob:p-2 laptop:p-0"
        >
          {name}.
        </h1>
        {!isBlog ? (
          <div className="flex">
            <Button onClick={handleWorkScroll}>{t("nav.work")}</Button>
            <Button onClick={handleAboutScroll}>{t("nav.about")}</Button>
            {showBlog && (
              <Button onClick={() => router.push("/blog")}>{t("nav.blog")}</Button>
            )}
            {showResume && (
              <Button
                onClick={() => router.push("/resume")}
                classes="first:ml-1"
              >
                {t("nav.resume")}
              </Button>
            )}
            <Button onClick={() => window.open("mailto:13670248572@139.com")}>
              {t("nav.contact")}
            </Button>
            <Button
              onClick={() => switchLocale(locale === "en" ? "zh" : "en")}
            >
              {locale === "en" ? "中文" : "EN"}
            </Button>
            {mounted && theme && data.darkMode && (
              <Button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                <img
                  className="h-6"
                  src={`/images/${theme === "dark" ? "moon.svg" : "sun.svg"}`}
                  alt="theme toggle"
                ></img>
              </Button>
            )}
          </div>
        ) : (
          <div className="flex">
            <Button onClick={() => router.push("/")}>{t("nav.home")}</Button>
            {showBlog && (
              <Button onClick={() => router.push("/blog")}>{t("nav.blog")}</Button>
            )}
            {showResume && (
              <Button
                onClick={() => router.push("/resume")}
                classes="first:ml-1"
              >
                {t("nav.resume")}
              </Button>
            )}
            <Button onClick={() => window.open("mailto:13670248572@139.com")}>
              {t("nav.contact")}
            </Button>
            <Button
              onClick={() => switchLocale(locale === "en" ? "zh" : "en")}
            >
              {locale === "en" ? "中文" : "EN"}
            </Button>
            {mounted && theme && data.darkMode && (
              <Button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                <img
                  className="h-6"
                  src={`/images/${theme === "dark" ? "moon.svg" : "sun.svg"}`}
                  alt="theme toggle"
                ></img>
              </Button>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
