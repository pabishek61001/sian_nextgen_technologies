export default function AboutSection() {
    return (
        <section className="max-w-7xl mx-auto py-20 px-6 md:px-12">

            <div className="grid md:grid-cols-2 gap-12 items-center">

                {/* TEXT CONTENT */}
                <div>

                    <p className="text-blue-600 font-semibold tracking-[3px] uppercase text-sm mb-3">
                        About Our Company
                    </p>

                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                        Driving Innovation Through Technology & Intelligence
                    </h2>

                    <p className="text-gray-600 leading-relaxed mb-4">
                        SIAN Next Gen Technologies is a forward-thinking technology company focused on building modern digital solutions powered by software engineering, artificial intelligence, and data-driven systems. Our team combines technical expertise with innovative thinking to create scalable platforms that help businesses grow and adapt in a fast-changing digital world.
                    </p>

                    <p className="text-gray-600 leading-relaxed mb-6">
                        We specialize in high-performance web applications, cloud platforms, mobile apps, and AI-powered solutions that improve efficiency and user experience. From product design to deployment, we deliver intelligent technology solutions that support long-term business success.
                    </p>

                    {/* STATS */}
                    <div className="grid grid-cols-3 gap-6 mt-8">

                        <div>
                            <h3 className="text-3xl font-bold text-blue-600">10+</h3>
                            <p className="text-sm text-gray-500">Digital Platforms</p>
                        </div>

                        <div>
                            <h3 className="text-3xl font-bold text-blue-600">AI</h3>
                            <p className="text-sm text-gray-500">Powered Solutions</p>
                        </div>

                        <div>
                            <h3 className="text-3xl font-bold text-blue-600">Global</h3>
                            <p className="text-sm text-gray-500">Technology Services</p>
                        </div>

                    </div>

                </div>

                {/* IMAGE */}
                <div className="relative">

                    <div className="absolute -top-6 -left-6 w-40 h-40 bg-blue-100 rounded-full blur-2xl opacity-40"></div>

                    <img
                        src="https://images.pexels.com/photos/115655/pexels-photo-115655.jpeg"
                        alt="Technology Team"
                        className="w-full h-[380px] object-cover rounded-2xl"
                    />

                </div>

            </div>

        </section>
    );
}