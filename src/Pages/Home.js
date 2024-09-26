import React from 'react'
import Slider from "react-slick";
import herosectionimg from "./../Assets/Images/herosectionimg.png";
import Logo1 from "./../Assets/Images/Logo1.png";
import Logo2 from "./../Assets/Images/Logo 2.png";
import { PiHandTap } from "react-icons/pi";
import { BsCreditCard } from "react-icons/bs";
import Logo4ogo3 from "./../Assets/Images/Logo 3.png";
import { PiUsersLight } from "react-icons/pi";
import pana from "./../Assets/Images/pana.png";
import { SiSamsclub } from "react-icons/si";
import { FaLongArrowAltRight } from "react-icons/fa";
import cardimage from "./../Assets/Images/cardimage.png";
import Logo4 from "./../Assets/Images/Logo 4.png";
import Logo5 from "./../Assets/Images/Logo5.png";
import Logo6 from "./../Assets/Images/Logo6.png";
import Logo7 from "./../Assets/Images/Logo7.png";
import Marquee from "react-fast-marquee";
import leaf from "./../Assets/Images/leaf.png";
import thirdimgae from "./../Assets/Images/thirdimgae.png";
import Footer from "./../Component/Footer.js";
function Home() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    };
    return (
        <>
            <div>
                <Slider {...settings}>
                    <div className='hero-carousal-parent'>
                        <div className='hero-carousal-content flex-col flex w-1/2'>
                            <h3>Lessons and insights from 8 years</h3>
                            <h6>Where to grow your business as a photographer: site or social media?</h6>
                            <button>Register</button>
                        </div>
                        <div className='hero-section-image w-1/2'>
                            <img src={herosectionimg} />
                        </div>
                    </div>
                    <div className='hero-carousal-parent'>
                        <div className='hero-carousal-content flex-col flex w-1/2'>
                            <h3>Lessons and insights from 8 years</h3>
                            <h6>Where to grow your business as a photographer: site or social media?</h6>
                            <button>Register</button>
                        </div>
                        <div className='hero-section-image w-1/2'>
                            <img src={herosectionimg} />
                        </div>
                    </div>
                    <div className='hero-carousal-parent'>
                        <div className='hero-carousal-content flex-col flex w-1/2'>
                            <h3>Lessons and insights from 8 years</h3>
                            <h6>Where to grow your business as a photographer: site or social media?</h6>
                            <button>Register</button>
                        </div>
                        <div className='hero-section-image w-1/2'>
                            <img src={herosectionimg} />
                        </div>
                    </div>
                </Slider>

                <div className='Our-client-section'>
                    <h1 className='pb-3' >Our Client</h1>
                    <h6>We have been working with some Fortune 500+ clients</h6>

                </div>


                <div className='community-setion-parent'>


                    <div className='community-section-content'>
                        <div className='community-section-image'>
                            <img src={leaf} />
                        </div>
                        <h1>Membership Organization</h1>
                        <h2>Our membership management software provides full automation of membership renewals and payments</h2>
                    </div>

                    <div className='community-section-content'>
                        <div className='community-section-image'>
                            <img src={leaf} />
                        </div>
                        <h1>Membership Organization</h1>
                        <h2>Our membership management software provides full automation of membership renewals and payments</h2>
                    </div>

                    <div className='community-section-content'>
                        <div className='community-section-image'>
                            <img src={leaf} />
                        </div>
                        <h1>Membership Organization</h1>
                        <h2>Our membership management software provides full automation of membership renewals and payments</h2>
                    </div>

                    <div className='community-section-content'>
                        <div className='community-section-image'>
                            <img src={leaf} />
                        </div>
                        <h1>Membership Organization</h1>
                        <h2>Our membership management software provides full automation of membership renewals and payments</h2>
                    </div>

                </div>


                <div className='third-section-parent flex'>
                    <div className='third-section-image ' >
                        <img src={thirdimgae} />
                    </div>
                    <div className='third-section-content'>
                        <h1 className='my-5' >The unseen of spending three years at Pixelgrade</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
                        <button className='my-5'>Learn More</button>
                    </div>

                </div>
                <div className='forth-section'>
                    <div className='forth-section-parent mx-auto flex items-center'>
                        <div className='forth-section-content w-1/2'>
                            <h1>Helping a local <span className='forth-content-heading-span'> business reinvent itself</span></h1>
                            <p>We reached here with our hard work and dedication</p>
                        </div>
                        <div className='forth-section-component flex w-1/2 flex-wrap items-center justify-center'>

                            <div className='forth-section-component-content'>
                                <div className='forth-section-component-section-icon'>
                                    <PiUsersLight />
                                </div>
                                <h1>2,245,341</h1>
                                <p>Members</p>
                            </div>
                            <div className='forth-section-component-content'>
                                <div className='forth-section-component-section-icon'>
                                    <SiSamsclub />
                                </div>
                                <h1>2,245,341</h1>
                                <p>Members</p>
                            </div>
                            <div className='forth-section-component-content'>
                                <div className='forth-section-component-section-icon'>
                                    <PiHandTap />
                                </div>
                                <h1>2,245,341</h1>
                                <p>Members</p>
                            </div>
                            <div className='forth-section-component-content'>
                                <div className='forth-section-component-section-icon'>
                                    <BsCreditCard />
                                </div>
                                <h1>2,245,341</h1>
                                <p>Members</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='third-section-parent flex'>
                    <div className='third-section-image ' >
                        <img src={pana} />
                    </div>
                    <div className='third-section-content'>
                        <h1 className='my-5' >How to design your site footer like we did</h1>
                        <p>Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.</p>
                        <button className='my-5'>Learn More</button>
                    </div>

                </div>

                <div className='marketing-section mb-8'>
                    <div className='marketing-section-content text-center'>
                        <h1>Caring is the new marketing</h1>
                        <p className='py-5 mx-auto' >The Nextcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.​</p>
                    </div>
                    <div className='marketing-section-card-parent flex justify-evenly'>
                        <div className='marketing-cards relative pt-6'>
                            <img src={cardimage} />
                            <div className='marketing-card-content'>
                                <h6 className="pt-2">Creating Streamlined Safeguarding Processes with OneRen</h6>
                                <button className='my-3'>Learn More <FaLongArrowAltRight /></button>
                            </div>
                        </div>
                        <div className='marketing-cards relative pt-6'>
                            <img src={cardimage} />
                            <div className='marketing-card-content'>
                                <h6 className="pt-2" >What are your safeguarding responsibilities and how can you manage them?</h6>
                                <button className='my-3'>Learn More <FaLongArrowAltRight /></button>
                            </div>
                        </div>
                        <div className='marketing-cards relative pt-6'>
                            <img src={cardimage} />
                            <div className='marketing-card-content'>
                                <h6 className="pt-2" >Revamping the Membership Model with Triathlon Australia</h6>
                                <button className='my-3'>Learn More <FaLongArrowAltRight /></button>
                            </div>
                        </div>
                    </div>
                </div>


            </div>


            <div className='last-section'>
                <div className='last-section-custom text-center py-8'>
                    <h1 className='py-4' >Pellentesque suscipit fringilla libero eu.</h1>
                    <button className='my-5' >Get a Demo<FaLongArrowAltRight /></button>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Home
