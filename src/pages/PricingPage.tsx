import { services } from '../constants';

export const PricingPage = () => {
    return (
        <section id="pricing" className="py-24 px-8 md:px-16 lg:px-20 min-h-screen">
            <h2 className="font-heading italic text-white text-5xl md:text-6xl mb-16 tracking-[-2px]">Investment Tiers</h2>
            
            {services.map((service) => (
                <div key={service.id} className="mb-20">
                    <h3 className="text-3xl font-heading italic text-cyan-400 mb-8">{service.title}</h3>
                    <div className="grid md:grid-cols-3 gap-6">
                        {service.pricing.map((tier, i) => (
                            <div key={i} className="liquid-glass rounded-[1.25rem] p-8 flex flex-col items-center text-center">
                                <h3 className="text-xl font-heading italic text-white">{tier.name}</h3>
                                <p className="text-4xl font-heading italic text-cyan-400 my-6">{tier.price}</p>
                                <ul className="text-sm text-white/80 space-y-3 mb-8 w-full">
                                    {tier.features.map(f => <li key={f} className="border-t border-white/5 pt-3">{f}</li>)}
                                </ul>
                                <a href="/contact" className="liquid-glass-strong px-6 py-3 rounded-full w-full text-center">Select Plan</a>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </section>
    )
}
