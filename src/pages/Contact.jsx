import React, { useEffect, useState } from "react";
import Transition from "../utils/TransitionPage";
import PhotoContactTransition from "../assets/png/transition/transition-photo-contact.png";
import PhotoContact from "../assets/png/contact/photo-contact-1.png";
import { gsap } from "gsap";
import instagramIcon from "../assets/svg/instagram-icon.svg";
import twitterIcon from "../assets/svg/twitter-icon.svg";
import tiktokIcon from "../assets/svg/tiktok-icon.png";
import MenuHeader from "../components/MenuHeader";

const Contact = () => {

    const [loading, setLoading] = useState(true);
    const socialMediaData = [
      {
        icon: instagramIcon,
        name: "instagram",
        link: "https://www.instagram.com/leahwilliamsonn/",
      },
      {
        icon: twitterIcon,
        name: "twitter",
        link: "https://twitter.com/leahcwilliamson",
      },
      {
        icon: tiktokIcon,
        name: "tik-tok",
        link: "https://www.tiktok.com/@l6williamson?is_from_webapp=1&sender_device=pc",
      },
    ];

    useEffect(() => {
        const loadingTimer = setTimeout(() => {
            setLoading(false);
        }, 2000);

        return () => clearTimeout(loadingTimer);
    }, []);

    useEffect(() => {
        if (!loading) {
            gsap.to(".loading-screen", {
                opacity: 0,
                duration: 0.5,
                onComplete: () => {
                    gsap.set(".loading-screen", { display: "none" });
                },
            });
        }
    }, [loading]);

    const Render = () => {
        return (
          <div className="w-screen h-full bg-background">
            <div className="flex justify-between items-center ml-16 mt-5">
              <p className="font-urbanist text-font font-extralight text-lg">
                All right reserved. &#169;2024{" "}
              </p>
              <MenuHeader />
            </div>
            <div className="absolute ml-72">
              <div className="flex">
                <h1 className="text-font font-apercu text-12xl -mt-10">LEAH</h1>
                <div className="text-font font-urbanist font-extralight mt-5 -ml-2">
                  +
                </div>
              </div>
              <div className="ml-4">
                <h1 className="text-font font-urbanist font-bold text-2xl mb-5 -mt-16">
                  Socials
                </h1>
                {socialMediaData.map((item, index) => (
                  <div
                    key={index}
                    className="flex text-font font-urbanist text-xl font-extralight mt-2"
                  >
                    <img
                      src={item.icon}
                      alt="Instagram Icon"
                      className="mr-2"
                    />
                    <a href={item.link}>{item.name}</a>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center items-start mt-32">
              <img
                src={PhotoContact}
                alt="photo of Leah Williamson. Official Photoshoot"
              />
              <div className="absolute right-36">
                <div className="font-urbanist text-font w-20rem text-xl font-extralight">
                  <p>
                    For any media, event or sponsorship requests, please contact{" "}
                    <span className="font-bold">
                      Tongue Tied Management at:
                    </span>
                  </p>
                  <div className="mt-3">
                    <a
                      href="mailto:jo@ttmanagement.co.uk"
                      className="font-bold"
                    >
                      info@ttmanagement.co.uk
                    </a>
                  </div>
                </div>
                <div className="w-20rem flex flex-col mt-52 font-urbanist text-font font-extralight text-lg">
                  <p className="font-bold text-xl">Books</p>
                  <a href="https://www.amazon.com/Wonder-Team-Forgotten-Footballers-time-twisting-ebook/dp/B0C7427DVC">
                    &#40;01&#41; The Wonder Team and the Forgotten Footballer
                  </a>
                  <a href="https://www.amazon.co.uk/Wonder-Team-Pharaohs-Fortune-Euro-winning/dp/1035023091">
                    &#40;02&#41; The Wonder Team and the Pharaon's Fortune
                  </a>
                  <a href="https://www.amazon.co.uk/You-Have-Power-Strength-Believe/dp/1035023164/ref=pd_lpo_sccl_2/261-0363989-5618872?pd_rd_w=fsL7i&content-id=amzn1.sym.448aab69-6fff-42b9-9d7a-f6325052a6f6&pf_rd_p=448aab69-6fff-42b9-9d7a-f6325052a6f6&pf_rd_r=GD88NEE24TTGR4RH8H2A&pd_rd_wg=1yerg&pd_rd_r=6ec9c3a1-3b57-41e6-982d-81741d5aff80&pd_rd_i=1035023164&psc=1">
                    &#40;03&#41; You Have the Power: Find Your Strength and
                    Believe You Can
                  </a>
                </div>
                <div className="h-1px bg-font w-96 mt-8 -ml-52"></div>
                <div className="mt-2 -ml-12">
                  <p className="text-font font-urbanist font-extralight text-xl">
                    Stay in touch
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute right-0 -mt-44 mr-36">
              <h1 className="text-font font-apercu text-12xl mix-blend-difference">
                WILLIAMSON
              </h1>
            </div>
          </div>
        );
    };
    
    return (
      <div className="h-screen
       bg-background overflow-hidden">
        <Transition title="Contact" photo={PhotoContactTransition} />
        {!loading && <Render />}
      </div>
    );
};

export default Contact;