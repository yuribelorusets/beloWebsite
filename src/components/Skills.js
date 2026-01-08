import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaPython, FaDatabase, FaGitAlt, FaAws, FaJava, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { SiJavascript, SiTypescript, SiPostgresql, SiExpress, SiFlask, SiGraphql, SiRedux, SiJest, SiApollographql, SiBootstrap, SiTensorflow, SiTableau, SiGooglecloud, SiNextdotjs, SiTailwindcss, SiMui, SiMongodb, SiRedis, SiMysql, SiPrisma, SiWebpack, SiVite, SiReactrouter, SiPytorch, SiPandas, SiJupyter, SiScikitlearn, SiNumpy, SiCypress, SiDocker, SiKubernetes, SiPostman, SiNpm } from 'react-icons/si';

const SkillsContainer = styled.div`
  padding: 2rem;

  @media (max-width: 768px) {
    padding: 0.5rem;
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  background: linear-gradient(45deg, #007bff, #00bcd4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const SkillCategory = styled(motion.div)`
  background: var(--bg-card);
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px var(--shadow-light);
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
`;

const CategoryTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  color: var(--text-primary);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: color 0.3s ease;
`;

const SkillsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

const SkillItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: var(--bg-tertiary);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  color: var(--text-secondary);
  transition: transform 0.3s ease, background-color 0.3s ease, color 0.3s ease;

  &:hover {
    transform: translateY(-2px);
  }
`;

const Skills = () => {
    const skillCategories = [
        {
            title: "Languages",
            icon: <SiJavascript />,
            skills: [
                { name: "JavaScript", icon: <SiJavascript /> },
                { name: "TypeScript", icon: <SiTypescript /> },
                { name: "Python", icon: <FaPython /> },
                { name: "Java", icon: <FaJava /> },
                { name: "GraphQL", icon: <SiGraphql /> },
                { name: "SQL", icon: <FaDatabase /> },
                { name: "HTML", icon: <FaHtml5 /> },
                { name: "CSS", icon: <FaCss3Alt /> },
            ]
        },
        {
            title: "Frontend",
            icon: <FaReact />,
            skills: [
                { name: "React", icon: <FaReact /> },
                { name: "Next.js", icon: <SiNextdotjs /> },
                { name: "Redux", icon: <SiRedux /> },
                { name: "Apollo", icon: <SiApollographql /> },
                { name: "Tailwind CSS", icon: <SiTailwindcss /> },
                { name: "Material-UI", icon: <SiMui /> },
                { name: "Bootstrap", icon: <SiBootstrap /> },
            ]
        },
        {
            title: "Backend",
            icon: <FaNodeJs />,
            skills: [
                { name: "Node.js", icon: <FaNodeJs /> },
                { name: "Express", icon: <SiExpress /> },
                { name: "Flask", icon: <SiFlask /> },
                { name: "JWT", icon: <FaNodeJs /> },
                { name: "REST", icon: <FaNodeJs /> },
            ]
        },
        {
            title: "Database & ORM",
            icon: <FaDatabase />,
            skills: [
                { name: "PostgreSQL", icon: <SiPostgresql /> },
                { name: "MongoDB", icon: <SiMongodb /> },
                { name: "MySQL", icon: <SiMysql /> },
                { name: "Redis", icon: <SiRedis /> },
                { name: "SQLAlchemy", icon: <FaDatabase /> },
                { name: "Prisma", icon: <SiPrisma /> },
            ]
        },
        {
            title: "Testing & Tools",
            icon: <FaGitAlt />,
            skills: [
                { name: "Jest", icon: <SiJest /> },
                { name: "Cypress", icon: <SiCypress /> },
                { name: "Git", icon: <FaGitAlt /> },
                { name: "Docker", icon: <SiDocker /> },
                { name: "Kubernetes", icon: <SiKubernetes /> },
                { name: "Postman", icon: <SiPostman /> },
                { name: "AWS S3", icon: <FaAws /> },
                { name: "Google Cloud", icon: <SiGooglecloud /> },
            ]
        },
        {
            title: "Data Science & ML",
            icon: <SiTensorflow />,
            skills: [
                { name: "TensorFlow", icon: <SiTensorflow /> },
                { name: "PyTorch", icon: <SiPytorch /> },
                { name: "Pandas", icon: <SiPandas /> },
                { name: "NumPy", icon: <SiNumpy /> },
                { name: "Scikit-learn", icon: <SiScikitlearn /> },
                { name: "Jupyter", icon: <SiJupyter /> },
                { name: "Matplotlib", icon: <FaPython /> },
                { name: "Tableau", icon: <SiTableau /> },
            ]
        },
        {
            title: "Spoken Languages",
            icon: <FaReact />,
            skills: [
                { name: "English" },
                { name: "Russian" },
                { name: "French" },
                { name: "Ukrainian" },
                { name: "Spanish" },
            ]
        }
    ];

    return (
        <SkillsContainer>
            <Title>Skills & Technologies</Title>
            <SkillsGrid>
                {skillCategories.map((category, index) => (
                    <SkillCategory
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2 }}
                    >
                        <CategoryTitle>
                            {category.icon} {category.title}
                        </CategoryTitle>
                        <SkillsList>
                            {category.skills.map((skill, i) => (
                                <SkillItem key={i}>
                                    {skill.icon && skill.icon} {skill.name}
                                </SkillItem>
                            ))}
                        </SkillsList>
                    </SkillCategory>
                ))}
            </SkillsGrid>
        </SkillsContainer>
    );
};

export default Skills;
