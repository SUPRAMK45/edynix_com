import { FadingVideo } from '../components/FadingVideo';
import { services } from '../constants';

export const ServicesPage = () => {
    return (
        <section id="services" className="relative w-full flex flex-col px-8 md:px-16 lg:px-20 pt-24 pb-10">
        <FadingVideo 
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260418_094631_d30ab262-45ee-4b7d-99f3-5d5848c8ef13.mp4"
            className="absolute inset-0 w-full h-full object-cover z-0"
        />

        <div className="relative z-10 flex flex-col h-full"> 
            <div className="mb-auto">
                <p className="text-sm font-body text-white/80 mb-6">// Capabilities</p>
                <h2 className="font-heading italic text-white text-6xl md:text-7xl lg:text-[6rem] leading-[0.9] tracking-[-3px]">Edynix<br/>Services</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
                {services.map((card, i) => (
                    <div key={i} className="liquid-glass rounded-[1.25rem] p-6 min-h-[360px] flex flex-col">
                        <div className="flex items-start justify-between gap-4">
                            <div className="liquid-glass rounded-[0.75rem] w-11 h-11 flex items-center justify-center">
                                <card.icon className="h-6 w-6 text-white" />
                            </div>
                            <div className="flex flex-wrap justify-end gap-1.5 max-w-[70%]">
                                {card.tags.map(tag => <div key={tag} className="liquid-glass rounded-full px-3 py-1 text-[11px] text-white/90 font-body whitespace-nowrap">{tag}</div>)}
                            </div>
                        </div>
                        <div className="flex-1"></div>
                        <h3 className="font-heading italic text-white text-3xl mt-6 tracking-[-1px] leading-none">{card.title}</h3>
                        <p className="mt-3 text-sm text-white/90 font-body font-light leading-snug max-w-[32ch]">{card.description}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>
    )
}
