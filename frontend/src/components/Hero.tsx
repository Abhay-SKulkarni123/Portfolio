function Hero() {
    return (
        <main className="content-layer pt-32">
            <section
                id="hero"
                className="relative mx-auto flex min-h-screen max-w-[1920px] flex-col items-start justify-center px-margin-page reveal"
            >
                <div className="glass-panel bg-[#131313]/60 hover-lift group relative w-full overflow-hidden rounded-3xl border-l-4 border-l-electric-cyan p-12 py-stack-section md:p-20">
                    {/* Background Image */}

                    <div
                        className="pointer-events-none absolute inset-0 z-0 bg-cover bg-center opacity-10 mix-blend-screen"
                        style={{
                            backgroundImage:
                                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCsGb0D-bR2r08O6eqXO5Dt0xZnx9fdu6870YMX-UTSQjmRnCaY9fuMq8sxJA2TFHfs9Dk5EVkDk8vOZYv0kWEqi0tt3TICZLiT4x1CI58qwlq0xfBYQ_8xPcDw1WPozXAm_QGXxMxP3nKh9zLINkDn4zL-Z2h0m3uQx0tPBiqh2iHwCrA64UKWmgPGWr5U0okJm6cpyijPgkg_EfSu8vxSZbNR14IcqqyicRP2RVOSJnKQntNjbMTG4A')",
                        }}
                    />

                    {/* Hover Glow */}

                    <div className="absolute inset-0 z-0 bg-gradient-to-br from-electric-cyan/5 to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

                    <div className="hero-stagger relative z-10 flex flex-col gap-6">

                        {/* Badge */}

                        <div className="inline-flex w-fit items-center gap-2 rounded-full border border-tertiary-container/30 bg-tertiary-container/10 px-4 py-1.5">

                            <span className="h-2 w-2 animate-pulse rounded-full bg-tertiary-container" />

                            <span className="font-label-caps text-label-caps text-tertiary-fixed-dim">
                                Software Engineer
                            </span>

                        </div>

                        {/* Heading */}

                        <h1 className="bg-gradient-to-br from-white via-primary to-tertiary-container bg-clip-text pb-2 font-headline-xl text-headline-lg-mobile tracking-tighter text-transparent md:text-headline-xl">
                            Abhay S Kulkarni
                        </h1>

                        {/* Subtitle */}

                        <p className="mt-4 max-w-2xl font-body-lg text-body-lg text-on-surface-variant">
                            Building scalable software and intelligent AI-powered products.
                        </p>

                        {/* Two Columns */}

                        <div className="mt-8 grid grid-cols-1 gap-12 md:grid-cols-2">

                            {/* Left */}

                            <div className="flex flex-col gap-4">

                                <h3 className="font-label-caps text-label-caps tracking-widest text-electric-cyan">
                                    Core Expertise
                                </h3>

                                <ul className="flex flex-col gap-3">

                                    <li className="flex items-center gap-3 text-on-surface-variant">

                                        <span className="material-symbols-outlined text-body-md text-electric-cyan">
                                            hub
                                        </span>

                                        <span className="font-body-md text-body-md">
                                            Distributed Systems
                                        </span>

                                    </li>

                                    <li className="flex items-center gap-3 text-on-surface-variant">

                                        <span className="material-symbols-outlined text-body-md text-electric-cyan">
                                            cloud_done
                                        </span>

                                        <span className="font-body-md text-body-md">
                                            Cloud Native Architecture
                                        </span>

                                    </li>

                                    <li className="flex items-center gap-3 text-on-surface-variant">

                                        <span className="material-symbols-outlined text-body-md text-electric-cyan">
                                            psychology
                                        </span>

                                        <span className="font-body-md text-body-md">
                                            AI Integration
                                        </span>

                                    </li>

                                </ul>

                            </div>

                            {/* Right */}

                            <div className="flex flex-col gap-4">

                                <h3 className="font-label-caps text-label-caps tracking-widest text-tertiary-container">
                                    Mission Statement
                                </h3>

                                <p className="font-body-md text-body-md leading-relaxed text-on-surface-variant">
                                    Dedicated to architecting resilient digital ecosystems that
                                    bridge the gap between complex backend engineering and
                                    immersive frontend storytelling.
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 opacity-60 transition-opacity hover:opacity-100">
                    <span className="font-label-caps text-[10px] text-on-surface-variant">
                        Scroll
                    </span>

                    <span className="material-symbols-outlined animate-bounce text-on-surface-variant">
                        keyboard_arrow_down
                    </span>
                </div>
            </section>
        </main>
    );
}

export default Hero;