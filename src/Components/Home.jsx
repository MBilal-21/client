import React from "react";
import vector from "../images/Vector-Smart-Object-3-removebg.png";
import { Link } from "react-router-dom";
import Cart from "./cart";
import { HomeSection3Cart } from "./cart";
import mind from "../images/mind.svg";
import mentalHealth from "../images/mental-health.svg";
import body from "../images/body.svg";
import traumaYoga from "../images/Trauma-Yoga.svg";
import yinYoga from "../images/Yin-Yoga.svg";
import vinyasaYoga from "../images/Vinyasa-Yoga.svg";
import hathaYoga from "../images/hatha-yoga.svg";
import calm from "../images/calm.svg";
import dadadsasdad from "../images/dadadsasdad.png";
import routineYoga1 from "../images/routine-yoga-1.png";
import routineYoga2 from "../images/routine-yoga-2.png";
import section51 from "../images/section-5-1.png";
import section52 from "../images/section-5-2.png";
import eventGirl from "../images/Rectangle-17.png";

const cartText = [
  {
    cart: "Mind",
    image: mind,
    text: "Meditation is a mental training practice that teaches you to slow down racing thoughts.",
  },
  {
    cart: "Mental health",
    image: mentalHealth,
    text: "Becoming more aware of the present moment can help us enjoy the world around us.",
  },
  {
    cart: "Body",
    image: body,
    text: "The body is of utmost importance for our holistic health as it is here that the mental and spiritual realms reside.",
  },
];

const cart2Data = [
  {
    title: "Hatha Yoga",
    image: hathaYoga,
    link: "/hatha-yoga"
  },
  {
    title: "Vinyasa Yoga",
    image: vinyasaYoga,
    link: "vinyasa-yoga"
  },
  {
    title: "Yin Yoga",
    image: yinYoga,
    link: "/yin-yoga"
  },
  {
    title: "Trauma Yoga",
    image: traumaYoga,
    link: "/trauma-yoga"
  },
];
const section2Content = {
  head: (
    <h1>
      {" "}
      Our <span>Vision</span>
    </h1>
  ),
  subText:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime optio ipsam sint fugiat natus, architecto obcaecati itaque omnis earerum quas delectus doloremque facere aliquid soluta cum temporeodit perspiciatis.",
  btnText: "About us",
  img1: routineYoga1,
  img2: routineYoga2,
};
const section5Content = {
  head: (
    <h1>
      Join our{" "}
      <span>
        gold-standard <br />
        Teacher
      </span>{" "}
      Training <br />
      Online <span>this fall</span>
    </h1>
  ),
  subText:
    "Lorem ipsum dolor sit amet consectetur. Mi nisl lorem vel velit. Nisi in rhoncus cras vulputate. Commodo a viverra quis nisi tempor etiam. A viverra vestibulum tellus tincidunt facilisis etiam laoreet. Lorem ipsum dolor sit amet consectetur. Mi nisl lorem.",
  btnText: "Reserve Your Seat",
  img1: section51,
  img2: section52,
};
const DirectionRowReverse = { flexDirection: "row-reverse" };


const Section2 = ({ content, dir, link }) => {
  return (
    <>
      <div className="section2 text-center d-flex" style={dir}>
        <div className="text-part">
          {content.head}
          <p>{content.subText}</p>
          <Link to={link}>
            <button>{content.btnText}</button>
          </Link>
        </div>
        <div className="image-part">
          <img src={content.img1} alt="routineYoga1" className="img1" />
          <img src={content.img2} alt="routineYoga2" className="img2" />
        </div>
      </div>
    </>
  );
};
// ----------------------------------------------------------------------------------------------------------------


const Home = () => {

  return (
    <>
      <div className="home-page">
        <main className="main d-flex">
          <div className="home-text">
            <h1 className="small-text">Breath relax and be still</h1>
            <h1 className="big-text">
              BALANCE <br /> YOUR <span>LIFE</span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur. Mi nisl lorem vel velit.
              Nisi in rhoncus cras vulputate. Commodo a viverra quis nisi tempor
              etiam. A viverra vestibulum tellus tincidunt facilisis etiam
              laoreet.
            </p>
            <Link to={"join"}>
              <button>Join Now</button>
            </Link>
          </div>
          <div className="home-image">
            <img src={vector} alt="vector" className="home-vector" />
            <img
              src={dadadsasdad}
              alt="dadadsasdad.png"
              className="dadadsasdad"
            />
          </div>
        </main>
        <section className="section-1 text-center">
          <h1>
            Understanding the{" "}
            <span>
              foundation of <br /> movement
            </span>
          </h1>
          <div className="d-flex">
            {cartText.map((item, index) => {
              return <Cart key={index} item={item} />;
            })}
          </div>
        </section>
        <section>
          <Section2
            content={section2Content}
            dir={DirectionRowReverse}
            link={"about"}
          />
        </section>
        <section className="section-3 text-center">
          <h1>
            Find the <span>right class</span>
            <br /> for <span>you.</span>
          </h1>
          <div className="outer-div d-flex">
            {cart2Data.map((item, index) => {
              return  <HomeSection3Cart key={index} item={item} />;
            })}
          </div>
        </section>

        <section className="section-4">
          <h1 className=" text-center">
            There`s a <span>class for everyone,</span>
            <br /> come and <span>find yours.</span>{" "}
          </h1>
          <div className="outer-div d-flex">
            <img src={eventGirl} alt="event girl" />
            <div className="inner-div-1">
              <h1>Hatha Yoga Class</h1>
              <div className="inner-div-2">
                <div className="inner-div-3 d-flex">
                  <img src={calm} alt="calm-icon" />
                  <h2>Rachel Torres</h2>
                </div>
                <p>
                  Every Monday and Friday &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; -
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                  <span className="e-time">10:00 AM</span>
                </p>
              </div>
              <Link to={"all-events"}>
                <button>All Events </button>{" "}
              </Link>
            </div>
          </div>
        </section>

        <section className="section-5">
          <Section2 content={section5Content} link={"reserve-your-seat"} />
        </section>
        <section className="section-6">
          <h1 className="text-center">
            Practice with <span>confidence</span>
          </h1>
          <p className="text-center">
            Connect and study with 500+ expert teachers across therapy, anatomy,
            meditation <br /> and more. The world`s most diverse yoga site.
          </p>
          <div className="outer-div">
            <div className="inner-div inner-div1">
    


            </div>
            <div className="inner-div inner-div2"></div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
