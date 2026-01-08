import Link from "next/link"

export default function Header9({ scroll, isMobileMenu, handleMobileMenu }) {
    return (
        <>
            <header className="header about-bg d-none d-lg-block">
                <div className={`header-area header ${scroll ? "sticky" : ""}`} id="header">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="header-elements">
                                    <div className="site-logo">
                                        <Link href="/"><img src="/assets/images/logo/logo14.png" alt="" /></Link>
                                    </div>
                                    <div className="main-menu-ex homepage5 homepage9">
                                        <ul>
                                            <li><Link href="/" className="font-ks font-16 weight-500 color-1">Home</Link></li>
                                            <li><Link href="/about" className="font-ks font-16 weight-500 color-1">About Us</Link>
                                            </li>
                                            <li><Link href="#" className="font-ks font-16 weight-500 color-1">Our Services <span><i className="fa-solid fa-angle-down" /></span></Link>
                                                <ul className="dropdown-padding">
                                                    <li><Link href="/about" className="font-ks font-16 weight-500 color">Our
                                                        Service <i className="fa-solid fa-angle-right" /></Link>
                                                        <ul>
                                                            <li><Link href="/servicev1" className="font-ks font-16 weight-500 color">Service V1</Link></li>
                                                            <li><Link href="/servicev2" className="font-ks font-16 weight-500 color">Service V2</Link></li>
                                                        </ul>
                                                    </li>
                                                    <li><Link href="/about" className="font-ks font-16 weight-500 color">Service
                                                        Details <i className="fa-solid fa-angle-right" /></Link>
                                                        <ul>
                                                            <li><Link href="/serviceleft" className="font-ks font-16 weight-500 color">Service Details
                                                                Left</Link></li>
                                                            <li><Link href="/serviceright" className="font-ks font-16 weight-500 color">Service Details
                                                                Right</Link></li>
                                                            <li><Link href="/servicemiddle" className="font-ks font-16 weight-500 color">Single Service</Link>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li><Link href="#" className="font-ks font-16 weight-500 color-1">FAQs</Link></li>
                                            <li><Link href="/contact1" className="font-ks font-16 weight-500 color-1">Contact</Link></li>
                                        </ul>
                                    </div>
                                    <div className="contact-3 d-lg-block d-none">
                                        <div className="all-3-btn theme-btn">
                                            <Link href="/contact1" className="font-16 font-ks weight-700 color lineh-16 consulting9">Request
                                                Consultation <span><i className="fa-solid fa-arrow-right" /></span></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

        </>
    )
}
