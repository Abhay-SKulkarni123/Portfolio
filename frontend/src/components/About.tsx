function About() {
    return (
        <section
            id="about"
            className="relative mx-auto max-w-[1920px] px-margin-page py-stack-section"
        >
            {/* Ambient Glow */}
            <div className="ambient-glow-cyan absolute left-0 top-0 -translate-x-[20%] -translate-y-[20%]" />

            <div className="grid grid-cols-1 gap-gutter-grid md:grid-cols-12">
                {/* Header */}
                <div className="flex flex-col gap-4 md:col-span-4">
                    <h2 className="text-headline-lg-mobile font-headline-lg text-primary md:text-headline-lg">
                        Architecture
                        <br />
                        <span className="text-on-surface">&amp; Philosophy</span>
                    </h2>

                    <div className="mt-2 h-1 w-24 rounded-full bg-gradient-to-r from-electric-cyan to-transparent" />
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 gap-stack-card md:col-span-8 md:grid-cols-2">

                    {/* Card 1 */}

                    <div className="glass-panel hover-lift flex h-full flex-col gap-4 rounded-xl p-8">
                        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg border border-glass-border bg-surface-container-high">
                            <span
                                className="material-symbols-outlined text-electric-cyan"
                                style={{ fontVariationSettings: "'FILL' 1" }}
                            >
                                architecture
                            </span>
                        </div>

                        <h3 className="text-headline-md font-headline-md text-on-surface">
                            Engineering Philosophy
                        </h3>

                        <p className="text-body-md leading-7 text-on-surface-variant">
                            Robust systems require elegant foundations. I prioritize clean,
                            maintainable code structures that scale effortlessly while
                            remaining intelligible to future developers.
                        </p>
                    </div>

                    {/* Card 2 */}

                    <div className="glass-panel hover-lift flex h-full flex-col gap-4 rounded-xl bg-gradient-to-br from-space-navy to-surface-container-high p-8">
                        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg border border-glass-border bg-surface-container-high">
                            <span
                                className="material-symbols-outlined text-tertiary-container"
                                style={{ fontVariationSettings: "'FILL' 1" }}
                            >
                                neurology
                            </span>
                        </div>

                        <h3 className="text-headline-md font-headline-md text-on-surface">
                            Current Interests
                        </h3>

                        <p className="text-body-md leading-7 text-on-surface-variant">
                            Exploring the intersection of Distributed Systems and applied
                            Artificial Intelligence to create context-aware, autonomous
                            digital environments.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default About;