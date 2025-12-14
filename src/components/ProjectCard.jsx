import React from 'react';

const ProjectCard = ({ project, layout }) => {
    const isPersonal = layout === 'personal';
    const labelText = isPersonal ? '🎮 Playable Demo' : (project.demoLabel || '🎮 Demo Reel');

    // Desktop label column class
    const desktopLabelColClass = "col-md-6 d-none d-md-flex justify-content-end";

    // Embed height: Itch.io widgets are usually shorter (167px) than YouTube videos.
    // We can pass a prop or determine it.
    const embedHeight = project.embedHeight || (isPersonal ? '167' : null);

    return (
        <div className="project-card">
            {/* Header section */}
            <div className="row mb-4 align-items-end">
                <div className="col-md-6">
                    <h2 className="text-accent mb-1">{project.title}</h2>
                    <h6 className="text-white-50">{project.subtitle}</h6>
                </div>
                <div className={desktopLabelColClass}>
                    <h5 className="text-accent mb-0">{labelText}</h5>
                </div>
            </div>

            <div className="row">
                {/* Left column: Project details */}
                <div className="col-md-6 mb-4 mb-md-0">
                    <div className="info-panel variant-surface mb-4">
                        {project.role && (
                            <div className="mb-2"><strong>Role:</strong> <span className="text-white">{project.role}</span></div>
                        )}
                        {project.company && (
                            <div className="mb-2"><strong>Company:</strong> <span className="text-white">{project.company}</span></div>
                        )}
                        {project.teamSize && (
                            <div className="mb-2"><strong>Team Size:</strong> <span className="text-white">{project.teamSize}</span></div>
                        )}
                        {project.focus && (
                            <div className="mb-2"><strong>Focus:</strong> <span className="text-white">{project.focus}</span></div>
                        )}

                        <div className="mb-2"><strong>Tech:</strong></div>
                        <div>
                            {project.tech.map((tech, index) => (
                                <span key={index} className="tech-badge">{tech}</span>
                            ))}
                        </div>
                    </div>

                    <h5 className="text-accent mb-3">{project.keyFeaturesTitle || 'Key Contributions'}</h5>
                    <ul className="text-muted pl-3">
                        {project.keyPoints.map((point, index) => (
                            <li key={index} className="mb-2">
                                {point.strong && <strong>{point.strong}</strong>} {point.text}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Right column: Video/Embed */}
                <div className="col-md-6">
                    <h5 className="text-accent mb-3 d-md-none">{labelText}</h5>

                    {isPersonal ? (
                        <div className="mb-3 embed-container">
                            <iframe
                                width="100%"
                                height={embedHeight}
                                frameBorder="0"
                                src={project.embedSrc}
                                title={project.title}
                                loading="lazy"
                                sandbox="allow-scripts allow-same-origin allow-popups allow-pointer-lock allow-forms"
                            >
                                {project.embedLinkText && <a href={project.embedLinkUrl}>{project.embedLinkText}</a>}
                            </iframe>
                        </div>
                    ) : (
                        <div className="media-wrapper">
                            <iframe
                                src={project.embedSrc}
                                title={project.title}
                                loading="lazy"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            >
                            </iframe>
                        </div>
                    )}

                    {project.mediaDescription && (
                        <div className={`mt-3 text-muted small ${isPersonal ? 'mb-3' : ''}`}>
                            {project.mediaDescription}
                        </div>
                    )}

                    {project.result && (
                        <div className={`info-panel variant-primary ${!isPersonal ? 'mt-3' : ''}`}>
                            <i className="fas fa-check-circle text-accent mr-2"></i>
                            {project.result.strong && <strong>{project.result.strong}</strong>} {project.result.text}
                        </div>
                    )}

                    {project.footerNote && (
                        <p className="mt-3 text-white-50 font-italic small">
                            {project.footerNote}
                        </p>
                    )}

                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
