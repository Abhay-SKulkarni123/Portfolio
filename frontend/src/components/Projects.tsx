function Projects() {
    return (
        <section
            id="projects"
            className="relative z-10 mx-auto max-w-[1920px] px-margin-page py-stack-section"
        >
            <div className="flex flex-col gap-12">
                {/* Heading */}

                <div className="flex flex-col items-center gap-4 text-center">
                    <h2 className="text-headline-lg-mobile md:text-headline-lg text-on-surface font-headline-lg">
                        Projects
                    </h2>

                    <div className="mt-2 h-1 w-24 rounded-full bg-gradient-to-r from-electric-cyan via-tertiary-container to-transparent" />
                </div>

                {/* Cards */}

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">

                    {/* Project 1 */}

                    <div className="glass-panel hover-lift group relative overflow-hidden rounded-2xl border border-electric-cyan/20 bg-gradient-to-br from-surface-container/50 to-space-navy/50 p-6">

                        <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-electric-cyan/10 blur-2xl transition-all group-hover:bg-electric-cyan/20" />

                        <div className="relative z-10 mb-6 flex items-start justify-between">

                            <div className="rounded-lg border border-glass-border bg-surface-container-high p-3">
                                <span className="material-symbols-outlined text-electric-cyan">
                                    language
                                </span>
                            </div>

                            <div className="flex gap-2">

                                <a
                                    href="#"
                                    className="text-on-surface-variant transition-colors hover:text-electric-cyan"
                                >
                                    <span className="material-symbols-outlined">
                                        open_in_new
                                    </span>
                                </a>

                                <a
                                    href="#"
                                    className="text-on-surface-variant transition-colors hover:text-electric-cyan"
                                >
                                    <span className="material-symbols-outlined">
                                        code
                                    </span>
                                </a>

                            </div>

                        </div>

                        <h3 className="relative z-10 mb-3 text-headline-md font-headline-md text-on-surface">
                            Nexus Platform
                        </h3>

                        <p className="relative z-10 mb-6 text-body-md text-on-surface-variant">
                            A distributed microservices architecture for real-time data
                            processing and visualization.
                        </p>

                        <div className="relative z-10 flex flex-wrap gap-2">

                            <span className="rounded-full border border-glass-border bg-surface-container-high px-3 py-1 font-label-code text-label-code text-electric-cyan">
                                Go
                            </span>

                            <span className="rounded-full border border-glass-border bg-surface-container-high px-3 py-1 font-label-code text-label-code text-electric-cyan">
                                Kubernetes
                            </span>

                        </div>

                    </div>

                    {/* Project 2 */}

                    <div className="glass-panel hover-lift group relative overflow-hidden rounded-2xl border border-tertiary-container/20 bg-gradient-to-br from-surface-container/50 to-space-navy/50 p-6">

                        <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-tertiary-container/10 blur-2xl transition-all group-hover:bg-tertiary-container/20" />

                        <div className="relative z-10 mb-6 flex items-start justify-between">

                            <div className="rounded-lg border border-glass-border bg-surface-container-high p-3">
                                <span className="material-symbols-outlined text-tertiary-container">
                                    model_training
                                </span>
                            </div>

                            <a
                                href="#"
                                className="text-on-surface-variant transition-colors hover:text-tertiary-container"
                            >
                                <span className="material-symbols-outlined">
                                    code
                                </span>
                            </a>

                        </div>

                        <h3 className="relative z-10 mb-3 text-headline-md font-headline-md text-on-surface">
                            Cognitive Agent
                        </h3>

                        <p className="relative z-10 mb-6 text-body-md text-on-surface-variant">
                            An LLM-powered autonomous agent for code refactoring and
                            automated test generation.
                        </p>

                        <div className="relative z-10 flex flex-wrap gap-2">

                            <span className="rounded-full border border-glass-border bg-surface-container-high px-3 py-1 font-label-code text-label-code text-tertiary-container">
                                Python
                            </span>

                            <span className="rounded-full border border-glass-border bg-surface-container-high px-3 py-1 font-label-code text-label-code text-tertiary-container">
                                PyTorch
                            </span>

                        </div>

                    </div>

                    {/* Project 3 */}

                    <div className="glass-panel hover-lift group relative overflow-hidden rounded-2xl border border-primary/20 bg-gradient-to-br from-surface-container/50 to-space-navy/50 p-6">

                        <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/10 blur-2xl transition-all group-hover:bg-primary/20" />

                        <div className="relative z-10 mb-6 flex items-start justify-between">

                            <div className="rounded-lg border border-glass-border bg-surface-container-high p-3">
                                <span className="material-symbols-outlined text-primary">
                                    data_object
                                </span>
                            </div>

                            <a
                                href="#"
                                className="text-on-surface-variant transition-colors hover:text-primary"
                            >
                                <span className="material-symbols-outlined">
                                    code
                                </span>
                            </a>

                        </div>

                        <h3 className="relative z-10 mb-3 text-headline-md font-headline-md text-on-surface">
                            Neural DB
                        </h3>

                        <p className="relative z-10 mb-6 text-body-md text-on-surface-variant">
                            Experimental vector database optimized for extremely
                            high-dimensional embeddings.
                        </p>

                        <div className="relative z-10 flex flex-wrap gap-2">

                            <span className="rounded-full border border-glass-border bg-surface-container-high px-3 py-1 font-label-code text-label-code text-primary">
                                Rust
                            </span>

                            <span className="rounded-full border border-glass-border bg-surface-container-high px-3 py-1 font-label-code text-label-code text-primary">
                                C++
                            </span>

                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
}

export default Projects;