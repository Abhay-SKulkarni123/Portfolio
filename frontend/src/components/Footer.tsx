function Footer() {
    return (
        <footer className="relative z-10 mt-stack-section w-full border-t border-glass-border bg-surface bg-gradient-to-t from-deep-indigo/20 to-transparent shadow-[0_-20px_50px_rgba(124,58,237,0.1)]">

            <div className="mx-auto flex max-w-[1920px] flex-col items-center justify-between gap-gutter-grid px-margin-page py-12 md:flex-row">

                <div className="font-headline-md text-headline-md text-tertiary">
                    Abhay S Kulkarni
                </div>

                <div className="font-label-caps text-label-caps text-tertiary">
                    © 2024 Abhay S Kulkarni • Engineered for the Future
                </div>

                <ul className="flex gap-6">

                    <li>
                        <a
                            href="#"
                            className="text-on-surface-variant transition-all duration-500 hover:text-tertiary"
                        >
                            GitHub
                        </a>
                    </li>

                    <li>
                        <a
                            href="#"
                            className="text-on-surface-variant transition-all duration-500 hover:text-tertiary"
                        >
                            LinkedIn
                        </a>
                    </li>

                    <li>
                        <a
                            href="#"
                            className="text-on-surface-variant transition-all duration-500 hover:text-tertiary"
                        >
                            Twitter
                        </a>
                    </li>

                    <li>
                        <a
                            href="#"
                            className="text-on-surface-variant transition-all duration-500 hover:text-tertiary"
                        >
                            Email
                        </a>
                    </li>

                </ul>

            </div>

        </footer>
    );
}

export default Footer;