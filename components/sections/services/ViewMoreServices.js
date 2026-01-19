'use client'
import Link from "next/link"

const services = [
    {
        title: "Personal Auto Insurance",
        description: "Full coverage and liability options for all drivers. We welcome everyone, including those with tickets or accidents.",
        link: "/services/personal-auto",
        image: "/assets/images/sectionimg/servicev1img1.png"
    },
    {
        title: "Motorcycle Insurance",
        description: "Comprehensive coverage for your two-wheeled adventures. Protect your bike and yourself on California roads.",
        link: "/services/motorcycle",
        image: "/assets/images/sectionimg/servicev1img2.png"
    },
    {
        title: "Commercial Insurance",
        description: "Protection for restaurants, bars, retail shops, offices, and other businesses.",
        link: "/services/commercial",
        image: "/assets/images/sectionimg/servicev1img3.png"
    },
    {
        title: "SR-22 & High Risk",
        description: "Specialized coverage for drivers who need SR-22 filing. We help you get back on the road legally.",
        link: "/services/sr22",
        image: "/assets/images/sectionimg/servicev1img4.png"
    }
]

export default function ViewMoreServices({ currentService }) {
    // Filter out the current service
    const filteredServices = currentService
        ? services.filter(service => service.link !== currentService)
        : services

    // Show only first 4 services
    const displayServices = filteredServices.slice(0, 4)

    return (
        <div className="serviceleftblog-section-area section-padding8">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 m-auto">
                        <div className="sericeleft text-center margin-b60">
                            <h1 className="font-lora font-40 lineh-50 weight-600 color-29">View Our More Services</h1>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {displayServices.map((service, index) => (
                        <div key={index} className="col-lg-6 col-md-6">
                            <div className="service3-boxarea margin-b30 bgservice2">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="service3-text2">
                                            <Link href={service.link}>
                                                <h1 className="font-lora font-22 lineh-24 color-29 weight-600 margin-b">
                                                    {service.title}
                                                </h1>
                                            </Link>
                                            <p className="font-ks font-16 lineh-26 weight-500 color-30">
                                                {service.description}
                                            </p>
                                            <Link
                                                href={service.link}
                                                className="font-ks font-16 lineh-16 color-29 weight-700 margin-t d-inline-block laearnmore2"
                                            >
                                                Learn More <span><i className="fa-solid fa-arrow-right" /></span>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="service3-imag1">
                                            <img src={service.image} alt={service.title} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
