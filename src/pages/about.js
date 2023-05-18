import "../allcss/aboutus.css";
import Aboutcontact from "./About/aboutcontact";
import Aboutslide from "./About/aboutslide";
import Navabout from "./About/navabout";

export const About = () => {
  return (
    <div className="ABoutBox">
      <div className="imageback"></div>
      <div className="aboutcontainer">
        <h1>ABOUTUS</h1>
        <div class="containerA">
          <div class="a-Vv0wr-0">
            Welcome to our recipe sharing website! Our site is dedicated to
            bringing together food enthusiasts from around the world who love to
            cook and share their favorite recipes. Whether you're a beginner
            cook looking for easy-to-follow recipes or an experienced chef
            searching for new ideas and inspiration, our site has something for
            everyone. Our community of passionate cooks and food lovers share
            their best recipes, tips, and tricks, creating a vibrant hub of
            culinary creativity. Join us on this delicious journey and explore
            our vast collection of recipes from around the globe. From classic
            comfort foods to exotic and innovative dishes, we have it all. So
            come on in, grab a cup of coffee, and let's get cooking!
            <span>Introduction</span>
          </div>
          <div class="header-1">
            <Aboutslide />
          </div>
          <div class="a-BrRVp-0">
            As the sole designer behind this website, I bring a unique set of
            skills and expertise to the table. From concept to launch, I have
            been involved in every step of the process, from designing the user
            interface to coding the website. As a result, I have a deep
            understanding of the website's features, functionality, and overall
            design. I am passionate about creating a platform that is
            user-friendly, visually appealing, and enjoyable for everyone.
            Although I worked alone, I am grateful for the support of my family
            and friends who have encouraged me throughout this journey.
          </div>
          <div class="a-Vv0wr-2">
            Our MISSION is to make cooking and sharing recipes an enjoyable and
            accessible experience for everyone.
          </div>
          <div class="right">
            <Navabout />
          </div>
          <div class="a-Eq6Yv-3"><span>USERS</span>
            Our website is designed to cater to all levels of culinary
            experience, from beginners to seasoned chefs. We believe that
            everyone has something to offer when it comes to food, and our
            platform encourages users to share their own unique perspectives and
            experiences with the community.
            <li>Whether you are looking for inspiration for your next meal,</li>
            <li>Want to learn new cooking techniques,</li>
            <li>Or Simply want to connect with other food enthusiasts,</li>
          </div>
          <div class="a-36Kzv-0">
            <div className="contactformAbout"><Aboutcontact/></div>
          </div>
          <div class="a-36Kzv-2"></div>
        </div>
      </div>
    </div>
  );
};
