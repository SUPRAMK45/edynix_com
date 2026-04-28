export const ContactPage = () => {
    return (
        <section id="contact" className="min-h-screen flex flex-col items-center justify-center p-16">
            <h2 className="font-heading italic text-7xl text-white mb-12 tracking-[-2px]">Let's collaborate.</h2>
            <div className="flex flex-col md:flex-row gap-12 text-center text-xl font-body">
                <a href="tel:+918736023212" className="liquid-glass-strong px-8 py-4 rounded-full">+91 8736023212</a>
                <a href="mailto:contact@edynix.com" className="liquid-glass-strong px-8 py-4 rounded-full">contact@edynix.com</a>
            </div>
        </section>
    )
}
