import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const EducationContainer = styled.div`
  padding: 2rem;
  max-width: 1000px;
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

const EducationList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const EducationCard = styled(motion.div)`
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

const EducationHeader = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: baseline;
    gap: 2rem;
  }
`;

const SchoolName = styled.h2`
  font-size: 1.5rem;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
  transition: color 0.3s ease;

  @media (min-width: 768px) {
    font-size: 1.6rem;
  }
`;

const Degree = styled.h3`
  font-size: 1.3rem;
  color: var(--accent-color);
  margin-bottom: 0.5rem;
`;

const DateLocation = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  flex-shrink: 0;

  @media (min-width: 768px) {
    align-items: flex-end;
    text-align: right;
    min-width: 180px;
  }
`;

const DateRange = styled.span`
  color: var(--text-secondary);
  font-size: 0.9rem;
  font-style: italic;
  transition: color 0.3s ease;
`;

const Location = styled.span`
  color: var(--text-secondary);
  font-size: 0.9rem;
  transition: color 0.3s ease;
`;

const Education = () => {
  const education = [
    {
      school: "Rithm School",
      degree: "Full Stack Web Development Bootcamp",
      dateRange: "Mar 2022 – Jun 2022",
      location: "San Francisco, CA"
    },
    {
      school: "University of British Columbia",
      degree: "Computer Science / Cognitive Systems",
      dateRange: "Aug 2016 – Jun 2020",
      location: "Vancouver, BC"
    }
  ];

  return (
    <EducationContainer>
      <Title>Education</Title>
      <EducationList>
        {education.map((edu, index) => (
          <EducationCard
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            whileHover={{ scale: 1.01 }}
          >
            <EducationHeader>
              <div>
                <SchoolName>{edu.school}</SchoolName>
                <Degree>{edu.degree}</Degree>
              </div>
              <DateLocation>
                <DateRange>{edu.dateRange}</DateRange>
                <Location>{edu.location}</Location>
              </DateLocation>
            </EducationHeader>
          </EducationCard>
        ))}
      </EducationList>
    </EducationContainer>
  );
};

export default Education;
