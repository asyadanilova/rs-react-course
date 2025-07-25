import { Link } from 'react-router-dom';
import './about.css';
import rsLogo from '../../assets/rss-logo.svg';

const teamMembers = [
  {
    name: 'Asya Danilova',
    role: 'Frontend Developer',
    bio: 'I’m a 27-year-old Front-End Developer who discovered a passion for coding while working on project activities. Since completing the Rolling Scopes School Front-End course, I’ve been building my skills in JavaScript, React, Bootstrap, Node.js, and SCSS. I’m excited to keep learning, improving, and gaining hands-on experience.',
    photo:
      'https://static.cdn.epam.com/uploads/6063a76d512075b73de2f360a19d6f5e/Asya.jpg',
    github: 'https://github.com/AsyaDanilova',
    contributions: [
      'Developed the catalog page with the possibility to search by country.',
      'Created the Not Found page, learning Bootstrap and enhancing my SCSS skills in the process.',
      'Introduced universities as the site idea and found proper API for that.',
      'Built the very page you’re currently reading!',
    ],
  },
];

const About = (): JSX.Element => {
  return (
    <div className="about-us">
      <header className="page-header">
        <h1>About</h1>
        <Link to={'https://rs.school/'}>
          <img src={rsLogo} style={{ width: '50px' }} />
        </Link>
      </header>

      <section className="team-members scroll-area">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member fade-in">
            <img
              src={member.photo}
              alt={`${member.name}'s photo`}
              className="member-photo"
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
            <p className="member-contributions">
              <strong>
                <i className="bi bi-trophy" style={{ fontSize: '1.5rem' }}></i>{' '}
                Contributions:
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
            </p>
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

export { About };
