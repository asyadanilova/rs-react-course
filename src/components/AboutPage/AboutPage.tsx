'use client';
import Link from 'next/link';
import './AboutPage.css';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

const About = (): JSX.Element => {
  const t = useTranslations();
  const teamMembers = [
    {
      name: t('about.name', { defaultValue: 'Asya Danilova' }),
      role: t('about.role', { defaultValue: 'Frontend Developer' }),
      bio: t('about.bio', {
        defaultValue:
          'I’m a 27-year-old Front-End Developer who discovered a passion for coding while working on project activities. Since completing the Rolling Scopes School Front-End course, I’ve been building my skills in JavaScript, React, Bootstrap, Node.js, and SCSS. I’m excited to keep learning, improving, and gaining hands-on experience.',
      }),
      photo: '/Asya.jpg',
      github: 'https://github.com/AsyaDanilova',
      contributions: [
        t('about.contributions.0', {
          defaultValue:
            'Developed the user interface for the university search feature.',
        }),
        t('about.contributions.1', {
          defaultValue:
            'Implemented responsive design for mobile and tablet devices.',
        }),
        t('about.contributions.2', {
          defaultValue:
            'Collaborated with backend developers to integrate APIs.',
        }),
      ],
    },
  ];
  return (
    <div className="about-us">
      <header className="page-header">
        <Link href={'https://rs.school/'}>
          <Image
            src="/rss-logo.svg"
            alt="RS School Logo"
            style={{ width: '50px' }}
            width={50}
            height={50}
          />
        </Link>
      </header>

      <section className="team-members scroll-area">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member fade-in">
            <Image
              src={member.photo}
              alt={`${member.name}'s photo`}
              className="member-photo"
              width={200}
              height={200}
            />
            <h2 className="member-name">{member.name}</h2>
            <h3 className="member-role">{member.role}</h3>
            <p className="member-bio">
              <strong>
                <i
                  className="bi bi-person-heart"
                  style={{ fontSize: '1.5rem' }}
                ></i>
                :
              </strong>{' '}
              {member.bio}
            </p>
            <div className="member-contributions">
              <strong>
                <i className="bi bi-trophy" style={{ fontSize: '1.5rem' }}></i>{' '}
                {t('about.contributionHeader', {
                  defaultValue: 'Contributions:',
                })}
              </strong>
              {Array.isArray(member.contributions) ? (
                <ul>
                  {member.contributions.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              ) : (
                <span> {member.contributions}</span>
              )}
            </div>
            <a
              href={member.github}
              target="_blank"
              rel="noopener noreferrer"
              className="github-link"
            >
              GitHub Profile <i className="bi bi-github"></i>
            </a>
          </div>
        ))}
      </section>
    </div>
  );
};

export default About;
