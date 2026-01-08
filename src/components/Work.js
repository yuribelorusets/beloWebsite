import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const WorkContainer = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 0.5rem;
    max-width: 100%;
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  background: linear-gradient(45deg, #007bff, #00bcd4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 2rem;
  margin-top: 4rem;
  color: var(--text-primary);
  transition: color 0.3s ease;
`;

const ExperienceList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 4rem;
`;

const ExperienceCard = styled(motion.div)`
  background: var(--bg-card);
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 4px 6px var(--shadow-light);
  transition: transform 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }

  &:hover {
    transform: translateY(-5px);
  }
`;

const ExperienceHeader = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: baseline;
  }
`;

const JobTitle = styled.h3`
  font-size: 1.5rem;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
  transition: color 0.3s ease;
`;

const Company = styled.h4`
  font-size: 1.2rem;
  color: var(--accent-color);
  margin-bottom: 0.5rem;
`;

const DateRange = styled.span`
  color: var(--text-secondary);
  font-size: 0.9rem;
  font-style: italic;
  transition: color 0.3s ease;
`;

const Responsibilities = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 1rem;
`;

const Responsibility = styled.li`
  color: var(--text-secondary);
  line-height: 1.8;
  margin-bottom: 0.75rem;
  padding-left: 1.5rem;
  position: relative;
  transition: color 0.3s ease;
  font-size: 1rem;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }

  &:before {
    content: "▹";
    position: absolute;
    left: 0;
    color: var(--accent-color);
    font-weight: bold;
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const ProjectCard = styled(motion.div)`
  background: var(--bg-card);
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px var(--shadow-light);
  transition: transform 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease;

  @media (max-width: 768px) {
    padding: 1.25rem;
  }

  &:hover {
    transform: translateY(-5px);
  }
`;

const ProjectTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: var(--text-primary);
  transition: color 0.3s ease;
`;

const ProjectDescription = styled.p`
  color: var(--text-secondary);
  margin-bottom: 1rem;
  line-height: 1.6;
  transition: color 0.3s ease;
  font-size: 1rem;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const TechTag = styled.span`
  background: var(--bg-tertiary);
  padding: 0.25rem 0.75rem;
  border-radius: 15px;
  font-size: 0.875rem;
  color: var(--text-secondary);
  transition: background-color 0.3s ease, color 0.3s ease;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const ProjectLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #007bff;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;

  &:hover {
    color: #0056b3;
  }
`;

function Work() {
    const experiences = [
        {
            title: "Full Stack Software Engineer",
            company: "Accenture X Google",
            location: "San Jose, CA",
            dateRange: "Jan 2024 – Present",
            responsibilities: [
                "Developed workflows using search engine giant's proprietary tools and JavaScript for dynamic front-end manipulation",
                "Automated support for multiple Google products including failed transaction workflows, saving $2M+ and achieving 80% process automation",
                "Queried API data with SQL, ensuring accurate and efficient data integration",
                "Designed and tested APIs and workflows, ensuring seamless deployments and robust functionality",
                "Resolved user-reported bugs and improved code quality through peer reviews"
            ]
        },
        {
            title: "Data Engineer",
            company: "Accenture X Google",
            location: "San Jose, CA",
            dateRange: "Oct 2022 – Jan 2024",
            responsibilities: [
                "Analyzed and monitored the performance of leading search engine's multilingual Natural Language Understanding (NLU) models, trained in 30+ languages, ensuring accuracy across diverse datasets",
                "Utilized TensorFlow to optimize machine learning pipelines, fine-tuning models for improved performance",
                "Identified and resolved data drifts, mitigating confusion between commands and intents to enhance model accuracy",
                "Designed and implemented presubmit checks, improving the reliability and stability of model deployments",
                "Created Tableau dashboards to visualize trends in the model, enabling stakeholders to make data-driven decisions",
                "Developed workflows for monitoring key performance indicators (KPIs) and addressing technical challenges",
                "Delivered insights into model performance outputs, contributing to advancements in multilingual intent recognition"
            ]
        },
        {
            title: "Software Engineer Intern",
            company: "Foqal",
            location: "San Francisco, CA",
            dateRange: "May 2022 – June 2022",
            responsibilities: [
                "Developed responsive admin dashboards using Apollo, TypeScript, and React",
                "Built scalable UI components and implemented design updates using Bootstrap and CSS",
                "Diagnosed and resolved issues with GraphQL mutations and object types, ensuring robust data flows",
                "Added unit and end-to-end tests using Jest and Cypress to ensure application quality"
            ]
        }
    ];

    const projects = [
        {
            title: "ShareBnB",
            description: "A full-stack web application for sharing and discovering unique accommodations. Users can list their properties, search for places to stay, and manage bookings.",
            technologies: ["React", "Node.js", "Express", "PostgreSQL", "AWS S3"],
            github: "https://github.com/yuribelorusets/shareBnB",
            live: "https://sharebnb.surge.sh/",
        },
        {
            title: "Jobly",
            description: "A job search platform where users can create profiles, search for jobs, and apply to positions. Companies can post job listings and manage applications.",
            technologies: ["React", "Node.js", "Express", "PostgreSQL", "JWT"],
            github: "https://github.com/yuribelorusets/jobly",
            live: "https://jobly-yuri.surge.sh/",
        },
        {
            title: "Warbler",
            description: "A Twitter clone built with Python and Flask. Users can post messages, follow other users, and interact with posts through likes and comments.",
            technologies: ["Python", "Flask", "SQLAlchemy", "PostgreSQL", "Jinja2"],
            github: "https://github.com/yuribelorusets/flask-warbler",
            live: null,
        }
    ];

    return (
        <WorkContainer>
            <Title>Work Experience</Title>
            <ExperienceList>
                {experiences.map((experience, index) => (
                    <ExperienceCard
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2 }}
                        whileHover={{ scale: 1.01 }}
                    >
                        <ExperienceHeader>
                            <div>
                                <JobTitle>{experience.title}</JobTitle>
                                <Company>{experience.company}</Company>
                            </div>
                            <DateRange>{experience.dateRange}</DateRange>
                        </ExperienceHeader>
                        <Responsibilities>
                            {experience.responsibilities.map((responsibility, i) => (
                                <Responsibility key={i}>{responsibility}</Responsibility>
                            ))}
                        </Responsibilities>
                    </ExperienceCard>
                ))}
            </ExperienceList>

            <SectionTitle>My Projects</SectionTitle>
            <ProjectsGrid>
                {projects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2 }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <ProjectTitle>{project.title}</ProjectTitle>
                        <ProjectDescription>{project.description}</ProjectDescription>
                        <TechStack>
                            {project.technologies.map((tech, i) => (
                                <TechTag key={i}>{tech}</TechTag>
                            ))}
                        </TechStack>
                        <ProjectLinks>
                            <ProjectLink href={project.github} target="_blank" rel="noopener noreferrer">
                                <FaGithub /> GitHub
                            </ProjectLink>
                            {project.live && (
                                <ProjectLink href={project.live} target="_blank" rel="noopener noreferrer">
                                    <FaExternalLinkAlt /> Live Demo
                                </ProjectLink>
                            )}
                        </ProjectLinks>
                    </ProjectCard>
                ))}
            </ProjectsGrid>
        </WorkContainer>
    );
}

export default Work;
