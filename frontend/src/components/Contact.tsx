function Contact() {
    return (
        <section
            id="contact"
            className="relative z-10 mx-auto max-w-[1920px] px-margin-page py-stack-section"
        >
            <div className="glass-panel relative overflow-hidden rounded-3xl border border-primary/20 bg-gradient-to-b from-surface/50 to-space-navy/80 p-12 text-center shadow-[0_0_50px_rgba(10,14,26,0.8)] md:p-20">

                {/* Background Pattern */}

                <div className="absolute inset-0 opacity-20">
                    <div className="h-full w-full bg-[radial-gradient(circle,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[length:24px_24px]" />
                </div>

                <div className="relative z-10 flex flex-col items-center gap-8">

                    <h2 className="font-headline-xl text-headline-lg-mobile text-on-surface md:text-headline-xl">
                        Initiate Protocol
                    </h2>

                    <p className="max-w-2xl font-body-lg text-body-lg text-on-surface-variant">
                        Currently open for new opportunities. Whether you have a
                        question or just want to say hi, I'll try my best to get back
                        to you!
                    </p>

                    <a
                        href="mailto:hello@example.com"
                        className="btn-primary mt-4 inline-flex items-center gap-3 rounded-full px-10 py-5 font-label-caps text-label-caps text-white"
                    >
                        <span className="material-symbols-outlined">
                            mail
                        </span>

                        Transmit Message
                    </a>

                </div>

            </div>
        </section>
    );
}

export default Contact;