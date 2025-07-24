import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { About } from './about';

describe('About Component', () => {
  it('renders the page header correctly', () => {
    render(<About />);

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'About'
    );
  });

  it('renders the list of team members with correct information', () => {
    render(<About />);

    const teamMember = screen.getByText(/Asya Danilova/i);
    expect(teamMember).toBeInTheDocument();

    const teamMemberRole = screen.getByText(/Frontend Developer/i);
    expect(teamMemberRole).toBeInTheDocument();

    const teamMemberBio = screen.getByText(
      /I’m a 27-year-old Front-End Developer who discovered a passion for coding/i
    );
    expect(teamMemberBio).toBeInTheDocument();

    const contributionItem = screen.getByText(
      /Developed the catalog page with sorting and filtering using API query parameters/i
    );
    expect(contributionItem).toBeInTheDocument();
  });

  it('renders the GitHub profile link correctly', () => {
    render(<About />);

    const githubLink = screen.getByRole('link', { name: /GitHub Profile/i });
    expect(githubLink).toBeInTheDocument();

    expect(githubLink).toHaveAttribute(
      'href',
      'https://github.com/AsyaDanilova'
    );

    expect(githubLink).toHaveAttribute('target', '_blank');
    expect(githubLink).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('renders the team member images correctly', () => {
    render(<About />);
    const memberPhoto = screen.getByAltText("Asya Danilova's photo");
    expect(memberPhoto).toBeInTheDocument();

    expect(memberPhoto).toHaveAttribute(
      'src',
      'https://static.cdn.epam.com/uploads/6063a76d512075b73de2f360a19d6f5e/Asya.jpg'
    );
  });

  it('renders contributions as a list', () => {
    render(<About />);

    const contributionsList = screen.getByRole('list');
    expect(contributionsList).toBeInTheDocument();

    const contributionsItems = screen.getAllByRole('listitem');
    expect(contributionsItems).toHaveLength(4);
  });
});
