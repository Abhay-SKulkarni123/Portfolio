function Skills() {
    return (
        <section
            id="skills"
            className="relative z-10 mx-auto max-w-[1920px] px-margin-page py-stack-section"
        >
            {/* Ambient Glow */}
            <div className="ambient-glow-magenta absolute bottom-0 right-0 translate-x-[20%] translate-y-[20%]" />

            <div className="flex flex-col items-center gap-12">
                {/* Heading */}
                <div className="flex flex-col items-center gap-4 text-center">
                    <h2 className="text-headline-lg-mobile md:text-headline-lg font-headline-lg text-on-surface">
                        Skills Arsenal
                    </h2>

                    <div className="mt-2 h-1 w-24 rounded-full bg-gradient-to-r from-tertiary-container to-transparent" />
                </div>

                {/* Skills */}
                <div className="relative flex max-w-4xl flex-wrap justify-center gap-6">

                    {/* Decorative Network */}
                    <svg
                        className="pointer-events-none absolute inset-0 z-0 h-full w-full opacity-20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <line
                            x1="20%"
                            y1="20%"
                            x2="80%"
                            y2="80%"
                            stroke="#22D3EE"
                            strokeWidth="1"
                        />

                        <line
                            x1="80%"
                            y1="20%"
                            x2="20%"
                            y2="80%"
                            stroke="#e14ef6"
                            strokeWidth="1"
                        />

                        <line
                            x1="50%"
                            y1="10%"
                            x2="50%"
                            y2="90%"
                            stroke="#adc6ff"
                            strokeWidth="1"
                        />
                    </svg>

                    {[
                        ["Python", "electric-cyan"],
                        ["Distributed Systems", "tertiary-container"],
                        ["Go", "primary"],
                        ["Kubernetes", "electric-cyan"],
                        ["PyTorch", "tertiary-container"],
                        ["React / TypeScript", "primary"],
                        ["Docker", "electric-cyan"],
                    ].map(([skill, color]) => (
                        <div
                            key={skill}
                            className={`glass-panel hover-lift relative z-10 flex items-center gap-3 rounded-full border border-${color}/30 bg-surface-container/80 p-4`}
                        >
                            <div
                                className={`h-2 w-2 rounded-full bg-${color}`}
                            />

                            <span className="font-label-code text-label-code text-on-surface">
                                {skill}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Skills;