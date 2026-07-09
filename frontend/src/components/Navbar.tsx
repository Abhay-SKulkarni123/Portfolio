function Navbar() {
    return (
        <nav className="fixed top-0 z-50 w-full border-b border-glass-border bg-surface/10 shadow-md shadow-primary/20 backdrop-blur-md transition-all duration-500 ease-out">
            <div className="mx-auto flex w-full max-w-[1920px] items-center justify-between px-margin-page py-6">
                {/* Brand */}
                <a
                    href="#"
                    className="font-extrabold tracking-tighter text-on-surface transition-colors duration-300 hover:text-electric-cyan text-2xl"
                >
                    Abhay S Kulkarni
                </a>

                {/* Desktop Links */}
                <ul className="hidden items-center gap-8 md:flex">
                    <li>
                        <a
                            href="#experience"
                            className="rounded-lg px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-on-surface-variant transition-all duration-300 hover:scale-105 hover:bg-surface-variant/20 hover:text-primary"
                        >
                            Experience
                        </a>
                    </li>

                    <li>
                        <a
                            href="#projects"
                            className="rounded-lg px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-on-surface-variant transition-all duration-300 hover:scale-105 hover:bg-surface-variant/20 hover:text-primary"
                        >
                            Projects
                        </a>
                    </li>

                    <li>
                        <a
                            href="#skills"
                            className="rounded-lg px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-on-surface-variant transition-all duration-300 hover:scale-105 hover:bg-surface-variant/20 hover:text-primary"
                        >
                            Skills
                        </a>
                    </li>

                    <li>
                        <a
                            href="#contact"
                            className="rounded-lg px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-on-surface-variant transition-all duration-300 hover:scale-105 hover:bg-surface-variant/20 hover:text-primary"
                        >
                            Contact
                        </a>
                    </li>
                </ul>

                {/* CTA */}
                <a
                    href="#contact"
                    className="hidden items-center justify-center rounded-full border border-primary px-6 py-2 text-xs font-bold uppercase tracking-[0.12em] text-primary transition-colors duration-300 hover:bg-primary/10 md:inline-flex"
                >
                    Connect
                </a>

                {/* Mobile */}
                <button className="text-on-surface md:hidden">
                    <span className="material-symbols-outlined">menu</span>
                </button>
            </div>
        </nav>
    );
}

export default Navbar;