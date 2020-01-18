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
    name: "Hien Ho",
    image: "https://images.app.goo.gl/VV2yWSekcmWad2Ns9",
    description: "Developer",
    email: "hothaohien96@gmail.com",
    phone: "0964-626-302",
    address: "This is the address",
    facebook: "https://www.facebook.com/hothaohien96/",
    instagram: "",
    twitter: "",
    git: "",
    linkedin: "https://www.linkedin.com/in/ho-hien-510227ab/",
    greating: "Hello!",
    greatingDescription:
      "My name is Hien, a developer, a book worm, a yogi and a forever learner."
  };
  const education = [
    {
      link: "",
      school: "BS of Information Technology - University of Science",
      year: "2014-2018",
      major: "Information system",
      note:
        "3 times received study encouragement scholarships from the university for outstanding performance in studies."
    }
  ];

  const researchs = [
    {
      type: "International conference paper",
      title:
        "Intelligent Assistants in Higher-Education Environments:The FIT-EBot, a Chatbot for Administrative and Learning Support.",
      author: "H.T.Hien, P.N.Cuong, L.N.H.Nam, H.L.T.K.Nhung, L.D.Thang",
      note: "SoICT 2018: 69-76",
      time: "",
      link: "https://dl.acm.org/citation.cfm?id=3287937"
    }
  ];

  const workExperience = [
    {
      time: "02/2019 - Present",
      companyName: "Zamo",
      projects: [
        {
          link: "",
          position: "Team leader",
          name: "KiteAka",
          description:
            "Working on an education system, which helps personalizes student learning and supports teaching."
          // responsibilities: "This is the responsibilities "
        }
      ]
    },
    {
      time: "09/2018 - 01/2018",
      companyName: "DEK Technologies",
      projects: [
        {
          name: "IMS (IP Multimedia Subsystem) application",
          position: "Fresher developer",
          description:
            "Working on IMS (IP Multimedia Subsystem) application software. \n Having the opportunity to learn about network protocols like SIP and DIAMETER."
          // responsibilities: "This is the responsibilities "
        }
      ]
    },
    {
      time: "07/2017 - 10/2017",
      companyName: "SystemEXE VietNam",
      projects: [
        {
          name: "iFoodGo",
          position: "Software developer intern",
          description:
            "Working on an online food ordering system iFoodGo using Angular and Laravel frameworks."
          // responsibilities: "This is the responsibilities "
        }
      ]
    }
  ];

  const petProjects = [
    {
      name: "Chatbot For Adminstrative and Learning Support",
      link: "https://gitlab.com/hothaohien96/chatbot",
      time: "01/2018 - 07/2018",
      description:
        "Conduct a survey to get the main requests from students for the system. Collect, analyze and process data.Research on the common technologies and platforms used to build chatbot. \nUsing DialogFlow to understand query from user and design database for a chatbot to answer the questions."
    },
    {
      name: "My CV",
      link: "https://gitlab.com/hothaohien96/my_cv",
      time: "12/2019",
      description: "Create my single page CV"
    }
  ];

  const activities = [
    {
      time: "12/2019",
      link: "",
      name:
        "The 9th Foundation Alain Carpentier Charity - Crowdfunding and Fundraising",
      position: "Volunteer",
      description:
        "The Foundation Alain Carpentier Charity Gala Dinner presented by International Medical Center (CMI) and Lys Events. The aim of this event is to raise the necessary funds for underprivileged children waiting for heart surgeries in Vietnam. This event has raised a fund up to $960,000 through 9 years of the Gala."
    },
    {
      time: "08/2015 - 08/2017",
      link: "",
      name: "BEE Club - Biggest English Club of University of Science",
      position: "Executive member",
      description:
        "Organizing activities to help students inside and outside the school improve their English proficiency:\n - Planning and finding sponsors for the club's events.\n- Coordinating club's events: \n+ TOEIC Mock Test 2016 (for more than 1000 students).\n+ In Tune 2016 - the singing contest in English (city-level)."
    },
    {
      time: "04/2016 - 05/2016",
      link: "",
      name: "ASEAN Society Science Forum",
      position: "Volunteer",
      description:
        "Assisted organizers with programs that were attended by 130 delegates from ASEAN+3."
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
        <h3 className={styles.topic}>Research Experience</h3>
        {researchs.map(research => (
          <ResearchExperience
            type={research.type}
            title={research.title}
            author={research.author}
            note={research.note}
            time={research.time}
            link={research.link}
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

      <div className="small-divider"></div>

      <div className={styles.section}>
        <h3 className={styles.topic}>Pet Projects</h3>
        {petProjects.map(project => (
          <Project
            name={project.name}
            time={project.time}
            technicalStack={project.technicalStack}
            description={project.description}
            link={project.link}
          />
        ))}
      </div>

      <div className="small-divider"></div>

      <div className={styles.section}>
        <h3 className={styles.topic}>Activities</h3>
        {activities.map(activity => (
          <Activity
            name={activity.name}
            time={activity.time}
            position={activity.position}
            description={activity.description}
            link={activity.link}
          />
        ))}
      </div>
    </div>
  );
}
