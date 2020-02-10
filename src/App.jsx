import React from "react";
import ResearchExperience from "./components/ResearchExperience";
import Education from "./components/Education";
import GeneralInformation from "./components/GeneralInformation";
import Activity from "./components/Activity";
import Project from "./components/Project";
import WorkExperience from "./components/WorkExperience";
import styles from "./App.module.scss";

export default function App() {
  const generalInformation = {
    name: "Tan Vo",
    image: "https://images.app.goo.gl/VV2yWSekcmWad2Ns9",
    description: "Design Engineer",
    email: "vonambinhtan@gmail.com",
    phone: "036-4543-054",
    address: "This is the address",
    facebook: "https://www.facebook.com/vonambinhtan",
    instagram: "",
    twitter: "",
    git: "",
    linkedin: "",
    greating: "Hello!",
    greatingDescription:
      "My name is Tan, a Mechanical Design Engineer, a vegan guy, and a forever learner."
  };
  const education = [
    {
      link: "",
      school: "Ho Chi Minh City University Technology and Education",
      year: "2014-2018",
      major: "Mechanical Engineering Technology",
      note:
        ""
    }
  ];

  const researchs = [
    {
      type: "",
      title:
        "",
      author: "",
      note: "",
      time: "",
      link: ""
    }
  ];

  const workExperience = [
    {
      time: "08/2018 - Present",
      companyName: "Sun Times JSC",
      projects: [
        {
          link: "",
          position: "Leader Design Department",
          name: "",
          description:
            "Working on each of project for solar energy system, main duty is making the best system mounting for safety of installing and during the using time."
          // responsibilities: "This is the responsibilities "
        }
      ]
    },
  ];

  const petProjects = [
    {
      name: "",
      link: "",
      time: "",
      description:
        ""
    },
    {
      name: "",
      link: "",
      time: "",
      description: ""
    }
  ];

  const activities = [
    {
      time: "",
      link: "",
      name:
        "",
      position: "",
      description:
        ""
    },
    {
      time: "",
      link: "",
      name: "",
      position: "",
      description:
        ""
    },
    {
      time: "",
      link: "",
      name: "",
      position: "",
      description:
        ""
    }
  ];

  return (
    <div className={styles.content}>
      <div className={styles.section}>
        <GeneralInformation
          name={generalInformation.name}
          image={generalInformation.image}
          description={generalInformation.description}
          email={generalInformation.email}
          phone={generalInformation.phone}
          address={generalInformation.address}
          facebook={generalInformation.facebook}
          instagram={generalInformation.instagram}
          twitter={generalInformation.twitter}
          git={generalInformation.git}
          linkedin={generalInformation.linkedin}
          greating={generalInformation.greating}
          greatingDescription={generalInformation.greatingDescription}
        />
      </div>

      <div className="divider"></div>

      <div className={styles.section}>
        <h3 className={styles.topic}>Education</h3>
        {education.map(edu => (
          <Education
            school={edu.school}
            year={edu.year}
            major={edu.major}
            note={edu.note}
          />
        ))}
      </div>

      <div className="small-divider"></div>

      <div className={styles.section}>
        <h3 className={styles.topic}>Work Experience</h3>
        {workExperience.map(work => (
          <WorkExperience
            time={work.time}
            companyName={work.companyName}
            projects={work.projects}
          />
        ))}
      </div>

    </div>
  );
}
