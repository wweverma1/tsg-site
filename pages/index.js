import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";

import facilitiesData from "../public/facilities";
import ImageModal from "../components/imageModal";
import Card from "../components/societyCard";
import societiesData from "../public/societiesData";
import festData from "../public/festData";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import "react-awesome-slider/dist/custom-animations/open-animation.css";

export default function Home() {
  return (
    <>
      <Layout>
        <Head>
          <title>{siteTitle}</title>
        </Head>

        <section className="intro">
          <section className="home">
            <div className="logo">
              <img src="IIT_Kharagpur_Logo.svg" />
            </div>
            <div className="headings">
              <h1>Technology Students' Gymkhana</h1>
              <h2>Indian Institute of Technology Kharagpur</h2>
            </div>
          </section>
        </section>

        <section className="m-content">
          <section className="events-slider">
            <h2> Upcoming Events</h2>
            <AwesomeSlider>
              <div data-src="upcomingEvents/swg.png" />
              <div data-src="upcomingEvents/tls.jpg" />
              <div data-src="upcomingEvents/case_study.jpg" />
            </AwesomeSlider>
          </section>

          <section className="facilities">
            <h2>Facilities and Events</h2>
            <div className="image-modals">
              <div className="column">
                {facilitiesData.data.slice(0, 3).map((facility) => (
                  <ImageModal images={facility.images} description={facility.description} title={facility.title} />
                ))}
              </div>
              <div className="column">
                {facilitiesData.data.slice(4, 7).map((facility) => (
                  <ImageModal images={facility.images} description={facility.description} title={facility.title} />
                ))}
              </div>
            </div>
          </section>
        </section>
      </Layout>
    </>
  );
}
