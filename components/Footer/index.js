import React from "react";
import Socials from "../Socials";
import Link from "next/link";
import Button from "../Button";
import { useI18n } from "../../context/I18nContext";

const Footer = ({}) => {
  const { t } = useI18n();

  return (
    <>
      <div className="mt-5 laptop:mt-40 p-2 laptop:p-0">
        <div>
          <h1 className="text-2xl text-bold">{t("contact.title")}</h1>
          <div className="mt-10">
            <h1 className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl text-bold">
              {t("contact.line1")}
            </h1>
            <h1 className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl text-bold">
              {t("contact.line2")}
            </h1>
            <Button
              type="primary"
              onClick={() => window.open("mailto:13670248572@139.com")}
            >
              {t("contact.button")}
            </Button>
            <div className="mt-10">
              <Socials />
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-sm text-bold mt-2 laptop:mt-10 p-2 laptop:p-0">
        {t("footer.madeBy")}{" "}
        <Link href="https://github.com/provamonijafar-gif">
          <a className="underline underline-offset-1">Yuhao Zhang</a>
        </Link>
      </h1>
    </>
  );
};

export default Footer;
