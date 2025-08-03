import { Col, Row } from "react-bootstrap";
import AnimationLottie from "@/components/share/animation-lottie";
import codingJSON from "assets/lottie/coding.json";
import { DEVELOPMENT_LOTTIE } from "assets/lottie/string/development";
import { CONTACT_LOTTIE } from "assets/lottie/string/contact";

import GlowCard from "@/components/share/glow-card";
import { FaGraduationCap } from "react-icons/fa6";
import Divider from "components/sections/divider";
import { APP_DATA } from "@/helpers/data.ts";
import SocialMedia from "components/sections/social.media";
import { NavLink } from "react-router-dom";
import { useTranslation, Trans } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  const activities = t("aboutSection.activities.list", { returnObjects: true }) as string[];

  return (
    <>
      <Row>
        <Col md={6} xs={12}>
          <h3 className="text-center mb-md-5 mb-2">
            <Trans i18nKey="aboutSection.heading">
              WHO <span className="brand-red">I'M</span>
            </Trans>
          </h3>
          <div>
            <p>{t("aboutSection.intro.line1")}</p>
            <p>{t("aboutSection.intro.line2")}</p>
            <p>{t("aboutSection.intro.line3")}</p>
          </div>

          <div>
            <p>{t("aboutSection.activities.intro")}</p>
            <ul>
              {activities.map((activity, index) => (
                <li key={index}>{activity}</li>
              ))}
            </ul>


          </div>

          <div>
            <p className="text-center brand-red">{t("aboutSection.quote.text")}</p>
            <p className="text-center brand-red">{t("aboutSection.quote.author")}</p>
          </div>
        </Col>

        <Col md={6} xs={12} className="d-flex align-items-center justify-content-center">
          <AnimationLottie width="80%" animationPath={codingJSON} />
        </Col>
      </Row>

      <Row>
        <Col md={6} xs={12} className="d-none d-md-flex align-items-center justify-content-center mt-md-5 mt-3">
          <AnimationLottie width="50%" animationPath={JSON.parse(DEVELOPMENT_LOTTIE)} />
        </Col>

        <Col md={6} xs={12} className="mt-md-5 mt-3">
          <div className="d-flex flex-column align-items-center gap-3">
            <h4 className="text-center brand-red">{t("aboutSection.education.title")}</h4>

            <GlowCard identifier="experience-5">
              <div className="p-3 relative">
                <div className="experience-container">
                  <div className="duration-text">
                    <p>{t("aboutSection.education.duration")}</p>
                  </div>
                  <div className="details">
                    <div className="icon">
                      <FaGraduationCap size={36} />
                    </div>
                    <div className="info">
                      <p className="title">{t("aboutSection.education.degree")}</p>
                      <p className="company">{t("aboutSection.education.school")}</p>
                    </div>
                  </div>
                </div>
              </div>
            </GlowCard>
          </div>
        </Col>
      </Row>

      <Divider />

      <Row>
        <Col md={6} xs={12} className="mt-md-5 mt-3">
          <h3 className="mb-md-5 mb-2">{t("aboutSection.contact.title")}</h3>
          <SocialMedia
            linkedin={APP_DATA.LINKEDIN_URL}
            gmail={APP_DATA.GMAIL_URL}
            facebook={APP_DATA.FACEBOOK_URL}
            tiktok={APP_DATA.TIKTOK_URL}
          />
        </Col>

        <Col md={6} xs={12} className="d-flex flex-column align-items-center justify-content-center">
          <AnimationLottie width="50%" animationPath={JSON.parse(CONTACT_LOTTIE)} />
          <NavLink to="https://mail.google.com/mail/?view=cm&to=vuviet2804@gmail.com" style={{ textDecoration: "none" }}>
            <h4 className="text-center">{t("aboutSection.contact.cta")}</h4>
          </NavLink>
        </Col>
      </Row>
      <div className="mb-5"></div>
    </>
  );
};

export default About;
