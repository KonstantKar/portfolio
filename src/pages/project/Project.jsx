import React from "react";
import { useParams } from "react-router-dom";
import "./Project.css";
import ReactVideoPlayer from "../../components/ReactVideoPlayer/ReactVideoPlayer";
import { portfolio } from "../../Data";
import Divider from "@mui/material/Divider";
const Project = () => {
  const { projectId } = useParams();
  const projectData = portfolio.find((item) => item.id == projectId);
  const selectedDetail = projectData.details.find((detail) => detail.video);
  return (
    <>
      <header className="project__footer">
        <h3 className="project__title">
          ©2023 Egor Petrov. All rights reserved.
        </h3>
      </header>
      <main className="section container">
        <section className="project">
          <div className="project__video">
            <ReactVideoPlayer video={selectedDetail.video} />
          </div>
          <div className="project__description-title ">
            <h2>{projectData.title}</h2>
            <div className="project__description">
              {projectData.details.map((detail, index) => (
                <div key={index}>
                  {detail.icon} {detail.title} {detail.desc}
                  <Divider />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Project;
