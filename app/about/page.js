import CounterUp from "@/components/elements/CounterUp";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
export default function Home() {
    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="About US">
                <div>
                    {/*===== ABOUT STARTS=======*/}
                    <div className="about3-section-area section-padding5">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="about3-images1">
                                        <img src="/assets/images/sectionimg/about3-img1.png" alt="" />
                                        <img src="/assets/images/elementor/elementor17.png" alt="" className="elementor-9 keyframe3" />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="about3-textarea1">
                                        <span className="about3span font-ks lineh-16 font-16 weight-600 color-29 d-inline-block margin-b24">About Us</span>
                                        <h1 className="font-lora font-48 lineh-56 weight-600 color-29 margin-b20">Mission Values Of Your Law Consult Firm</h1>
                                        <p className="font-ks font-16 lineh-26 weight-500 color-30 ">Provide professional advice and guidance on legal matters, helping clients understand their rights, obligations, and potential courses.</p>
                                        <div className="counter3-area3">
                                            <div className="row">
                                                <div className="col-lg-6 col-md-6">
                                                    <div className="counter3-boxarea4 text-center margin-b20 margin-t32">
                                                        <div className="counter4-boxarea4">
                                                            <h1 className="font-lora font-40 lineh-40 color-29 margin-b weight-600">
                                                                <CounterUp count={959} />+
                                                            </h1>
                                                            <p className="font-ks font-16 lineh-16 weight-500 color-30">Case Settlement</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6">
                                                    <div className="counter3-boxarea4 text-center margin-b20 margin-t32">
                                                        <div className="counter4-boxarea4">
                                                            <h1 className="font-lora font-40 lineh-40 color-29 margin-b weight-600">
                                                                <CounterUp count={250} />+
                                                            </h1>
                                                            <p className="font-ks font-16 lineh-16 weight-500 color-30">Insurance Settlment</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6">
                                                    <div className="counter3-boxarea4 text-center">
                                                        <div className="counter4-boxarea4">
                                                            <h1 className="font-lora font-40 lineh-40 color-29 margin-b weight-600">
                                                                <CounterUp count={388} />+
                                                            </h1>
                                                            <p className="font-ks font-16 lineh-16 weight-500 color-30">Personal Injury</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6">
                                                    <div className="counter3-boxarea4 text-center">
                                                        <div className="counter4-boxarea4">
                                                            <h1 className="font-lora font-40 lineh-40 color-29 margin-b weight-600">
                                                                <CounterUp count={400} />+
                                                            </h1>
                                                            <p className="font-ks font-16 lineh-16 weight-500 color-30">Divorce Case</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <Link href="/about" className="theme6-btn6 font-ks lineh-16 weight-700 color font-16 margin-t32">
                                            About Us{" "}
                                            <span>
                                                <i className="fa-solid fa-arrow-right" />
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*===== ABOUT END=======*/}
                    {/*===== LAW PROVIDE STARTS =======*/}
                    <div className="lawprovide-section-area section-padding5">
                        <img src="/assets/images/elementor/elementor23.png" alt="" className="elementor24" />
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="lawprovide-textarea">
                                        <h1 className="font-lora font-48 lineh-56 weight-600 color-29 margin-b20">Our Team Provide Customer Centric Advice to Corporations</h1>
                                        <p className="font-ks font-16 weight-500 lineh-26 margin-b20 color-30">Business Law Consulting: Detailed information about your business law services, including entity formation, contracts, mergers, acquisitions, and more. ntellectual Property.</p>
                                        <p className="font-ks font-16 weight-500 lineh-26 color-30">Our team of seasoned legal professionals brings a wealth of experience across various practice areas. You can trust us to provide accurate, up-to-date, and effective legal advice.</p>
                                        <Link href="/team" className="theme6-btn6 font-ks lineh-16 weight-700 color font-16 margin-t32">
                                            Meet Our Attorneys
                                            <span>
                                                <i className="fa-solid fa-arrow-right" />
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="lawprovide-boaxrea margin-b30">
                                        <div className="guidiance-boxarea">
                                            <img src="/assets/images/icons/gudeiance1.svg" alt="" className="ts" />
                                        </div>
                                        <div className="lax-conultingprovide">
                                            <Link href="/servicemiddle" className="color-29">
                                                <h1 className="font-lora font-24 lineh-24 weight-600 color-29 margin-b14 ts">Personal Legal Guidance</h1>
                                            </Link>
                                            <p className="font-ks lineh-26 weight-500 color-30 font-16 ts">The first and most crucial step is understanding your unique financial aspirations and challenges.</p>
                                        </div>
                                    </div>
                                    <div className="lawprovide-boaxrea margin-b30">
                                        <div className="guidiance-boxarea">
                                            <img src="/assets/images/icons/consulting1.svg" alt="" className="ts" />
                                        </div>
                                        <div className="lax-conultingprovide">
                                            <Link href="/servicemiddle" className="color-29">
                                                <h1 className="font-lora font-24 lineh-24 weight-600 color-29 margin-b14 ts">Business Strategy Consulting</h1>
                                            </Link>
                                            <p className="font-ks lineh-26 weight-500 color-30 font-16 ts">The first and most crucial step is understanding your unique financial aspirations and challenges.</p>
                                        </div>
                                    </div>
                                    <div className="lawprovide-boaxrea">
                                        <div className="guidiance-boxarea">
                                            <img src="/assets/images/icons/support1.svg" alt="" className="ts" />
                                        </div>
                                        <div className="lax-conultingprovide">
                                            <Link href="/servicemiddle" className="color-29">
                                                <h1 className="font-lora font-24 lineh-24 weight-600 color-29 margin-b14 ts">Litigation Support</h1>
                                            </Link>
                                            <p className="font-ks lineh-26 weight-500 color-30 font-16 ts">The first and most crucial step is understanding your unique financial aspirations and challenges.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <img src="/assets/images/elementor/elementor23.png" alt="" className="elementor25" />
                    </div>
                    {/*===== LAW PROVIDE END=======*/}
                    {/*===== MISSION STARTS=======*/}
                    <div className="mission-area-starts section-padding5">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="missionimg">
                                        <img src="/assets/images/sectionimg/missionimg1.png" alt="" className="missionimg2" />
                                        <img src="/assets/images/elementor/elementor17.png" alt="" className="elementor-9 keyframe3" />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="missiontextarea">
                                        <h1 className="font-lora font-48 lineh-56 weight-600 color-29 margin-b20">Our Mission</h1>
                                        <p className="font-ks font-16 lineh-26 weight-500 color-30 margin-b">Business Consulting: Detailed information about your business law services, including entity formation, contracts, mergers, acquisitions, and more. ntellectual Property.</p>
                                        <p className="font-ks font-16 lineh-26 weight-500 color-30 margin-b">We are dedicated to achieving favorable results for our clients. Whether it's a business deal, personal matter, or legal dispute, we strive for excellence in all aspects of our work.</p>
                                        <ul>
                                            <li className="font-ks font-16 lineh-16 weight-600 color-17 margin-b20">
                                                <span>
                                                    <img src="/assets/images/icons/check1.png" alt="" />
                                                </span>
                                                Client-Focused Solutions and Results
                                            </li>
                                            <li className="font-ks font-16 lineh-16 weight-600 color-17 margin-b20">
                                                <span>
                                                    <img src="/assets/images/icons/check1.png" alt="" />
                                                </span>
                                                Flexible, Value Driven Approach
                                            </li>
                                            <li className="font-ks font-16 lineh-16 weight-600 color-17 margin-b20">
                                                <span>
                                                    <img src="/assets/images/icons/check1.png" alt="" />
                                                </span>
                                                Warning of updated legal risks for customers
                                            </li>
                                            <li className="font-ks font-16 lineh-16 weight-600 color-17">
                                                <span>
                                                    <img src="/assets/images/icons/check1.png" alt="" />
                                                </span>
                                                A team of experienced and highly specialized
                                            </li>
                                        </ul>
                                        <Link href="/servicev1" className="theme6-btn6 font-ks lineh-16 weight-700 color font-16 margin-t32">
                                            Learn More{" "}
                                            <span>
                                                <i className="fa-solid fa-arrow-right" />
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*===== MISSION END=======*/}
                    {/*===== VISSION STARTS=======*/}
                    <div className="vission-section-area section-padding5">
                        <img src="/assets/images/elementor/elementor23.png" alt="" className="elementor24" />
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="vission-textarea">
                                        <h1 className="font-48 lineh-56 font-lora weight-600 color-29 margin-b20">The First Choice For Your Problem</h1>
                                        <p className="font-16 lineh-26 weight-500 color-30 margin-b24">We understand that every case is unique. That's why we take the time to listen to your concerns and tailor our services to your specific situation, ensuring the best possible outcomes.</p>
                                        <div className="border7 margin-b20" />
                                        <div className="nav-section-area">
                                            <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                                                <li className="nav-item" role="presentation">
                                                    <button className="nav-link active nav-btn1" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">
                                                        Our Vission
                                                    </button>
                                                </li>
                                                <li className="nav-item" role="presentation">
                                                    <button className="nav-link nav-btn1" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">
                                                        Our History
                                                    </button>
                                                </li>
                                                <li className="nav-item" role="presentation">
                                                    <button className="nav-link nav-btn1" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">
                                                        Why Choose Us
                                                    </button>
                                                </li>
                                            </ul>
                                            <div className="tab-content" id="pills-tabContent">
                                                <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabIndex={0}>
                                                    <p className="font-ks font-16 weight-500 lineh-26 margin-b20 color-30">
                                                        <span className="weight-700 color-29">Personalized Approach:</span> We understand that every case unique. That's why we take the time to listen to your concerns and tailor our services to your specific situation.
                                                    </p>
                                                    <p className="font-ks font-16 weight-500 lineh-26 color-30">
                                                        <span className="weight-700 color-29">Client-Centric:</span> Your satisfaction is our priority. We maintain to open communication, keeping you informed at every step of the process. Your questions and feedback are always welcome.
                                                    </p>
                                                </div>
                                                <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabIndex={0}>
                                                    <p className="font-ks font-16 weight-500 lineh-26 margin-b20 color-30">
                                                        <span className="weight-700 color-29">Personalized Approach:</span> We understand that every case unique. That's why we take the time to listen to your concerns and tailor our services to your specific situation.
                                                    </p>
                                                    <p className="font-ks font-16 weight-500 lineh-26 color-30">
                                                        <span className="weight-700 color-29">Client-Centric:</span> Your satisfaction is our priority. We maintain to open communication, keeping you informed at every step of the process. Your questions and feedback are always welcome.
                                                    </p>
                                                </div>
                                                <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab" tabIndex={0}>
                                                    <p className="font-ks font-16 weight-500 lineh-26 margin-b20 color-30">
                                                        <span className="weight-700 color-29">Personalized Approach:</span> We understand that every case unique. That's why we take the time to listen to your concerns and tailor our services to your specific situation.
                                                    </p>
                                                    <p className="font-ks font-16 weight-500 lineh-26 color-30">
                                                        <span className="weight-700 color-29">Client-Centric:</span> Your satisfaction is our priority. We maintain to open communication, keeping you informed at every step of the process. Your questions and feedback are always welcome.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <Link href="/servicev1" className="theme6-btn6 font-ks lineh-16 weight-700 color font-16 margin-t32">
                                            Get Started Now
                                            <span>
                                                <i className="fa-solid fa-arrow-right" />
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="vissionimages">
                                        <img src="/assets/images/sectionimg/vissionimg.png" alt="" />
                                        <img src="/assets/images/elementor/elementor17.png" alt="" className="elementor-23 keyframe3" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <img src="/assets/images/elementor/elementor23.png" alt="" className="elementor25" />
                    </div>
                    {/*===== VISSION END=======*/}
                    {/*===== TEAM STARTS=======*/}
                    <div className="team1-section-area section-padding8">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="team-section-textarea text-center margin-b60">
                                        <span className="about3span font-ks lineh-16 font-16 weight-600 color-29 d-inline-block margin-b24">Our Expert Attorneys</span>
                                        <h1 className="font-lora font-48 lineh-56 weight-600 color-29 margin-b20 clienth2">
                                            Meet Our Expert Law <br /> Consulting Team
                                        </h1>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-3 margin-b30 col-md-6">
                                    <div className="project-item-two">
                                        <div className="project-thumb-two">
                                            <img src="/assets/images/sectionimg/team1.png" alt="" />
                                        </div>
                                        <div className="project-content-two">
                                            <ul>
                                                <li>
                                                    <Link href="#">
                                                        <i className="fa-brands fa-x-twitter" />
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="#">
                                                        <i className="fa-brands fa-facebook" />
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="#">
                                                        <i className="fa-brands fa-instagram" />
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="#">
                                                        <i className="fa-brands fa-linkedin" />
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="team-pera text-center margin-t">
                                            <h1 className="font-lora font-24 lineh-24 color-29 weight-600 margin-b12">
                                                <Link href="/team" className="color-29">
                                                    Johnathan Stehr
                                                </Link>
                                            </h1>
                                            <p className="font-16 lineh-16 weight-500 color-30 font-ks">Subject Matter Experts</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 margin-b30 col-md-6">
                                    <div className="project-item-two">
                                        <div className="project-thumb-two">
                                            <img src="/assets/images/sectionimg/team2.png" alt="" />
                                        </div>
                                        <div className="project-content-two">
                                            <ul>
                                                <li>
                                                    <Link href="#">
                                                        <i className="fa-brands fa-x-twitter" />
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="#">
                                                        <i className="fa-brands fa-facebook" />
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="#">
                                                        <i className="fa-brands fa-instagram" />
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="#">
                                                        <i className="fa-brands fa-linkedin" />
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="team-pera text-center margin-t">
                                            <h1 className="font-lora font-24 lineh-24 color-29 weight-600 margin-b12">
                                                <Link href="/team" className="color-29">
                                                    Brian Ebert DVM
                                                </Link>
                                            </h1>
                                            <p className="font-16 lineh-16 weight-500 color-30 font-ks">Educational Consultantst</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 margin-b30 col-md-6">
                                    <div className="project-item-two">
                                        <div className="project-thumb-two">
                                            <img src="/assets/images/sectionimg/team1.png" alt="" />
                                        </div>
                                        <div className="project-content-two">
                                            <ul>
                                                <li>
                                                    <Link href="#">
                                                        <i className="fa-brands fa-x-twitter" />
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="#">
                                                        <i className="fa-brands fa-facebook" />
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="#">
                                                        <i className="fa-brands fa-instagram" />
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="#">
                                                        <i className="fa-brands fa-linkedin" />
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="team-pera text-center margin-t">
                                            <h1 className="font-lora font-24 lineh-24 color-29 weight-600 margin-b12">
                                                <Link href="/team" className="color-29">
                                                    Marion Blanda PhD
                                                </Link>
                                            </h1>
                                            <p className="font-16 lineh-16 weight-500 color-30 font-ks">Nonprofit Consultants</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 margin-b30 col-md-6">
                                    <div className="project-item-two">
                                        <div className="project-thumb-two">
                                            <img src="/assets/images/sectionimg/team3.png" alt="" />
                                        </div>
                                        <div className="project-content-two">
                                            <ul>
                                                <li>
                                                    <Link href="#">
                                                        <i className="fa-brands fa-x-twitter" />
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="#">
                                                        <i className="fa-brands fa-facebook" />
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="#">
                                                        <i className="fa-brands fa-instagram" />
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="#">
                                                        <i className="fa-brands fa-linkedin" />
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="team-pera text-center margin-t">
                                            <h1 className="font-lora font-24 lineh-24 color-29 weight-600 margin-b12">
                                                <Link href="/team" className="color-29">
                                                    Warren Predovic
                                                </Link>
                                            </h1>
                                            <p className="font-16 lineh-16 weight-500 color-30 font-ks">Technology Consultantst</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*===== TEAM END=======*/}
                    {/*===== CTA STARST=======*/}
                    <div className="cta5-section-area section-padding4">
                        <img src="/assets/images/elementor/elementor72.png" alt="" className="elementors72" />
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="cta5-auhtor6-area">
                                        <h1 className="font-lora font-48 lineh-52 color weight-600 margin-b text-capitalize">Get expert Law advice on criminal strategies</h1>
                                        <p className="font-ks font-16 lineh-26 weight-500 color-21">We believe that informed clients make better Law decisions. As part of our service, we'll provide educational resources and workshops to help.</p>
                                    </div>
                                </div>
                                <div className="col-lg-2" />
                                <div className="col-lg-4">
                                    <div className="cta5-btn5-sexction">
                                        <Link href="/contact1" className="theme6-btn6 bakgrnd5 font-ks lineh-16 weight-700 color font-16">
                                            Get Law Advice
                                            <span>
                                                <i className="fa-solid fa-arrow-right" />
                                            </span>
                                        </Link>
                                        <Link href="/contact2" className="theme6-btn6 backgrnd6 font-ks lineh-16 weight-700 color-29 font-16">
                                            Contact Us
                                            <span>
                                                <i className="fa-solid fa-arrow-right" />
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <img src="/assets/images/elementor/elementor72.png" alt="" className="elementors73" />
                    </div>
                    {/*===== CTA END=======*/}
                </div>
            </Layout>
        </>
    );
}
