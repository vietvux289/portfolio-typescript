import { Col, Row } from "react-bootstrap";
import ProjectCard from "./project.card";
import { PROJECTS } from "helpers/data.ts";
import { useTranslation } from "react-i18next";

const Project = () => {
  const { t } = useTranslation();
  return (
    <>
      <Row>
        <Col xs={12}>
          <h3 className="text-center">
            {t("projectSection.title.part1")}
            <span className="brand-red">{t("projectSection.title.part2")}</span>
          </h3>
          <h6 className="text-center mb-2">
            {t("projectSection.subtitle")}
          </h6>
        </Col>
      </Row>
      <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
  {PROJECTS?.map((item) => {
    return (
      <Col md={4} className="project-card" key={item.id}>
        <ProjectCard
          imgPath={item.imgPath}
          title={t(item.titleKey)}
          description={t(item.descriptionKey)}
          githubLink={item.githubLink}
          demoLink={item.demoLink}
        />
      </Col>
    );
  })}
</Row>
      <div className="mb-7"></div>
    </>
  );
};

export default Project;
