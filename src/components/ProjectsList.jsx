import React from 'react';
import ProjectCard from './ProjectCard';
import { featuredProjects, personalProjects } from '../data/projects';

const SectionDivider = () => (
    <div className="divider-custom divider-light">
        <div className="divider-custom-line"></div>
        <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
        <div className="divider-custom-line"></div>
    </div>
);

const PortfolioSection = ({
    id,
    title,
    projects,
    layout,
    description,
    toggleLabel,
    toggleIcon,
    onToggle,
    theme
}) => (
    <section className="page-section portfolio text-white" id={id}>
        <div className="container">
            {/* Heading */}
            <div className="text-center">
                <h2 className="page-section-heading mb-0 d-inline-block">{title}</h2>
            </div>

            <SectionDivider />

            {/* Optional Description */}
            {description && (
                <div className="text-center mb-5">
                    <p className="lead">{description}</p>
                </div>
            )}

            {/* Project Grid */}
            <div className="portfolio-grid">
                {projects.map(project => (
                    <ProjectCard key={project.id} project={project} layout={layout} theme={theme} />
                ))}
            </div>

            {/* Toggle Link */}
            <div className="text-center pt-1">
                <h3>
                    <i className={`bi ${toggleIcon}`}></i> {layout === 'featured' ? 'Check out my featured' : 'Back to'}
                    <a
                        className="js-scroll-trigger projects-link ml-2"
                        href="#"
                        onClick={(e) => {
                            e.preventDefault();
                            onToggle();
                        }}
                    >
                        {toggleLabel}
                    </a>
                </h3>
            </div>
        </div>
    </section>
);

const ProjectsList = ({ activeSection, onToggleSection, theme }) => {
    return (
        <>
            {activeSection === 'featured' && (
                <PortfolioSection
                    id="games-portfolio"
                    title="Featured Game Projects"
                    projects={featuredProjects}
                    layout="featured"
                    toggleLabel="Personal Projects"
                    toggleIcon="bi-controller"
                    onToggle={() => onToggleSection('personal')}
                    theme={theme}
                />
            )}

            {activeSection === 'personal' && (
                <PortfolioSection
                    id="personal_projects"
                    title="Personal Projects"
                    projects={personalProjects}
                    layout="personal"
                    description="A collection of prototypes and personal experiments."
                    toggleLabel="Featured Projects"
                    toggleIcon="bi-arrow-left-circle"
                    onToggle={() => onToggleSection('featured')}
                    theme={theme}
                />
            )}
        </>
    );
};

export default ProjectsList;
