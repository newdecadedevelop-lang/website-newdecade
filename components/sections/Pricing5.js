import Link from "next/link"

export default function Pricing5() {
    return (
        <>

            <div className="pricing-plan-starts section-padding8">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="pricing-plan-header1 text-center margin-b60">
                                <span className="font-16 font-ks lineh-16 weight-500 colorhp9 d-inline-block margin-b24 insurance">How It Works</span>
                                <h1 className="font-lora font-44 lineh-54 weight-600 colorh9">Get Covered in 3 Simple Steps</h1>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                            <div className="process_box type_one">
                                <div className="image_box" style={{marginBottom: '20px'}}>
                                    <img src="/assets/images/newdecade/newdecade_1.jpg" className="img-fluid" alt="Get a Free Insurance Quote" style={{width: '100%', borderRadius: '8px'}} />
                                </div>
                                <div className="content">
                                    <div className="icon trans" style={{marginBottom: '15px'}}>
                                        <i className="flaticon-insurance" style={{fontSize: '48px', color: '#0066CC'}} />
                                    </div>
                                    <div className="title_22" style={{marginBottom: '15px'}}>
                                        <Link href="#" className="font-lora font-24 weight-600 color-h9">
                                            Get a Free Quote
                                        </Link>
                                    </div>
                                    <p className="font-ks font-16 lineh-26 weight-500 colorhp1">Tell us about your insurance needs. We work with multiple carriers to find you the best coverage at competitive rates.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                            <div className="process_box type_one">
                                <div className="image_box" style={{marginBottom: '20px'}}>
                                    <img src="/assets/images/newdecade/newdecade_16.jpg" className="img-fluid" alt="Review Insurance Options" style={{width: '100%', borderRadius: '8px'}} />
                                </div>
                                <div className="content">
                                    <div className="icon trans" style={{marginBottom: '15px'}}>
                                        <i className="flaticon-interview" style={{fontSize: '48px', color: '#0066CC'}} />
                                    </div>
                                    <div className="title_22" style={{marginBottom: '15px'}}>
                                        <Link href="#" className="font-lora font-24 weight-600 color-h9">
                                            Review Your Options
                                        </Link>
                                    </div>
                                    <p className="font-ks font-16 lineh-26 weight-500 colorhp1">Our bilingual team will walk you through your coverage options and answer all your questions in English or Spanish.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                            <div className="process_box type_one">
                                <div className="image_box" style={{marginBottom: '20px'}}>
                                    <img src="/assets/images/newdecade/newdecade_26.jpg" className="img-fluid" alt="Secure Your Insurance Coverage" style={{width: '100%', borderRadius: '8px'}} />
                                </div>
                                <div className="content">
                                    <div className="icon trans" style={{marginBottom: '15px'}}>
                                        <i className="flaticon-piggy-bank" style={{fontSize: '48px', color: '#0066CC'}} />
                                    </div>
                                    <div className="title_22" style={{marginBottom: '15px'}}>
                                        <Link href="#" className="font-lora font-24 weight-600 color-h9">
                                            Secure Your Coverage
                                        </Link>
                                    </div>
                                    <p className="font-ks font-16 lineh-26 weight-500 colorhp1">Once you choose the right policy, we'll handle the paperwork and get you protected quickly. Same-day coverage available.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
