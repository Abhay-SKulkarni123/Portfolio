function Experience() {
    return (
        <section
            id="experience"
            className="relative z-10 mx-auto max-w-[1920px] px-margin-page py-stack-section"
        >
            <div className="flex flex-col gap-12">
                {/* Heading */}
                <div className="flex flex-col gap-4">
                    <h2 className="font-headline-lg text-headline-lg-mobile text-on-surface md:text-headline-lg">
                        Experience
                        <br />
                        <span className="text-tertiary-container">Timeline</span>
                    </h2>

                    <div className="mt-2 h-1 w-24 rounded-full bg-gradient-to-r from-tertiary-container to-transparent" />
                </div>

                {/* Timeline */}
                <div className="relative ml-4 flex flex-col gap-12 border-l-2 border-surface-variant pl-8 md:ml-8 md:pl-12">

                    {/* Item 1 */}

                    <div className="relative">

                        <div className="absolute -left-[41px] top-1 z-10 h-6 w-6 rounded-full border-4 border-electric-cyan bg-surface shadow-[0_0_15px_rgba(34,211,238,0.5)] md:-left-[57px]" />

                        <div className="glass-panel hover-lift rounded-xl border-l-2 border-l-electric-cyan p-6 md:p-8">

                            <span className="mb-2 block font-label-caps text-label-caps text-electric-cyan">
                                2022 - Present
                            </span>

                            <h3 className="font-headline-md text-headline-md text-on-surface">
                                Senior Software Engineer
                            </h3>

                            <h4 className="mb-4 font-body-lg text-body-lg text-on-surface-variant">
                                Tech Innovators Inc.
                            </h4>

                            <p className="font-body-md text-body-md text-on-surface-variant">
                                Led the architecture and development of a scalable
                                microservices platform handling millions of daily requests.
                                Mentored junior engineers and established best practices
                                for CI/CD pipelines.
                            </p>

                        </div>

                    </div>

                    {/* Item 2 */}

                    <div className="relative">

                        <div className="absolute -left-[41px] top-1 z-10 h-6 w-6 rounded-full border-4 border-tertiary-container bg-surface md:-left-[57px]" />

                        <div className="glass-panel hover-lift rounded-xl border-l-2 border-l-tertiary-container p-6 md:p-8">

                            <span className="mb-2 block font-label-caps text-label-caps text-tertiary-container">
                                2020 - 2022
                            </span>

                            <h3 className="font-headline-md text-headline-md text-on-surface">
                                Software Engineer
                            </h3>

                            <h4 className="mb-4 font-body-lg text-body-lg text-on-surface-variant">
                                Data Systems LLC
                            </h4>

                            <p className="font-body-md text-body-md text-on-surface-variant">
                                Developed robust backend APIs and optimized database
                                queries to reduce load times by 40%. Collaborated with
                                cross-functional teams to deliver features on tight
                                deadlines.
                            </p>

                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
}

export default Experience;