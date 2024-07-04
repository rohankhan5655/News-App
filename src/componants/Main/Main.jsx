import React from "react";
import video from "./video.mp4";
import "./Main.css";
import { useRef, useEffect } from "react";
import Scroll from "../Scroll-animation/Scroll";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Contact from "../Contact";
import Section3 from "./Section3";
import { Link } from "react-router-dom";

const Main = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    video.play();
  }, []); // Run once on component mount to start playing

  return (
    <>
      <Scroll name="main">
        <main>
          <section className="py-10 w-full bg-black ">
            <div className="container mx-auto px-4 text-white">
              <div className="flex flex-wrap items-center">
                <div className="w-full lg:w-1/2 mb-8 lg:mb-0 pr-0 lg:pr-12">
                  <h1 className="text-4xl sm:text-5xl text-white font-bold mb-2">
                    <span className="text-red-800">DailyFeed</span> News App :-
                  </h1>

                  <br />
                  <p className="text-sm lg:text-2xl mb-5 text-gray-400">
                    Welcome to DailyFeed, your go-to source for staying informed
                    about the latest developments from around the world. Whether
                    you're interested in breaking news, technology advancements
                    npm run.
                  </p>
                  <Link
                    to="/News"
                    className="bg-red-800 text-white py-4 px-12 rounded-lg inline-block"
                  >
                    Check News!
                  </Link>
                </div>
                <div className="w-full lg:w-1/2 lg:pl-0">
                  {/* Replace with your video component */}
                  <video ref={videoRef} className="w-full" loop muted autoPlay>
                    <source src={video} type="video/mp4" />
                  </video>
                </div>
              </div>
            </div>
          </section>
          <hr />
        </main>

        <Section1
          card1={"Read Articles"}
          para1={
            " Browse through our diverse collection of articles covering a wide range of topics in the automotive industry"
          }
          card2={"Interact"}
          para2={
            "  Share your thoughts and opinions by commenting on articles and joining discussions with fellow enthusiasts."
          }
          card3={"Stay Informed"}
          para3={
            " Subscribe to our newsletter to receive the latest updates directly in your inbox."
          }
          card4={"Connect"}
          para4={
            "Follow us on social media platforms to stay connected and join our community of car lovers."
          }
        />

        <Section2
          heading={" What do we have to offer?"}
          para1={"Customized News Experience"}
          para2={"Responsive Applications"}
          para3={"Reliable Content"}
          para4={"Passion for Innovation"}
          para5={" Commitment to Quality and Performance"}
          para6={"Community Collaboration"}
        />

        <hr />
        <Section3
          id="section3"
          para1={
            "DailyFeed provides the latest news from around the globe. Stay informed with breaking stories, in-depth articles, and diverse coverage on topics that matter most to you."
          }
          para2={
            "Our dedicated team ensures accurate, timely updates on politics, technology, entertainment, and more. Trust DailyFeed to keep you connected with the world, one story at a time."
          }
        />

        <hr />
        <Contact
          para={"Fill in the Form to start a conversation"}
          address={"Acme Inc, Street, State, Postal Code"}
          ph={"+44 1234567890"}
          exgmail={"info@gmail.com"}
          button={"Submit"}
        />

        <hr />
      </Scroll>
    </>
  );
};

export default Main;
