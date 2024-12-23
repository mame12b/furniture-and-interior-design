// import icons
import {
  IoLogoYoutube,
  IoLogoFacebook,
  IoLogoGithub,
  IoLogoInstagram,
  IoMdAddCircle,
  IoIosCheckmarkCircle,
  IoIosArrowRoundForward,
} from "react-icons/io";

// import images
import Homep from "./assets/images/about4.jpg";
import Best1 from "./assets/images/best1.jpg";
import Pro from "./assets/images/pro.jpg";
import Pro3 from "./assets/images/pro3.jpg";
import Pro4 from "./assets/images/pro4.png";
import Lighing from "./assets/images/lighting.png";
import Our from "./assets/images/our.jpg";
import Our5 from "./assets/images/our5.jpg";
import Our6 from "./assets/images/our6.jpg";
import Our8 from "./assets/images/our8.jpg";
import Our7 from "./assets/images/our7.jpg";
import Our9 from "./assets/images/our9.jpg";
import Our2 from "./assets/images/our2.jpg";
import Our1 from "./assets/images/our1.jpg";
import Our3 from "./assets/images/our3.png";
import Our4 from "./assets/images/our4.jpg";
import Testi from "./assets/images/testi.jpg";
import Avatar1Img from "./assets/images/avatar-1.png";
import Avatar2Img from "./assets/images/avatar-2.png";
import Avatar3Img from "./assets/images/avatar-3.png";


export const navigation = [
  { name: "Home", path: "/hero" },
  { name: "About Us", path: "/features" },
  { name: "Products", path: "/products" },
  { name: "Testimonial", path: "/testimonial" },
];

export const hero = {
  // title: "Creative Home Simplify your Furniture",
  
  title: "LYAN Furniture And Interior Design",
 

};

export const heroData = {
  title: "Creative Home Simplify your Furniture",
  // ... other data
};



export const stats = [
  {
    value: "5",
    text: "Year Experience",
  
 
  },
  {
    value: "2",
    text: "Opened in the country",
    
  },
  {
    value: "10k+",
    text: "Furniture sold",
    
  },
  {
    value: "260+",
    text: "Variant Furniture",
    
  },
];



export const features = {
  image: <Homep />,
  title: "About Us",
  subtitle:
    <p>Welcome to Shubbak Technical Services LLC, your partner for innovative and reliable technical solutions.
       With five years of experience, we've built a reputation for excellence in the industry.<br/>
       <b> Our mission </b> We're committed to delivering exceptional customer service, timely solutions, and results that exceed expectations.
        Our team of skilled professionals brings a wealth of expertise to every project. 
      </p>,
 
  items: [

  ],
  feature2: {
    image: <Best1 />,
    title: "The Best what we will do",
     items: [
      {
        icon: <IoIosCheckmarkCircle />,
        title: "ALUMINUM & GLASS FABRICATION",
        subtitle:
          "Description: WE CRAFT ALL TYPES OF ART WORK IN HOUSE WITH OUR SPECIALIST IN PERTICULAR FIELD."
              },
      {
        icon: <IoIosCheckmarkCircle />,
        title: "STAINGLASS, SANDBLASTING GLASS, FIBERGLASS, STEEL RALLINGS",
        subtitle:
          "Description: WE UNDER TAKE ALL TYPE OF GYPSON PARTITON AND PAINTING WORK AND TILES WORK,INTERLOCK AND CARPENTORY WORKS",
      },
      {
        icon: <IoIosCheckmarkCircle />,
        title: "FOUNDATION ,FOOTING , MACHINE BASE , HOLDING FOUNDATION",
        subtitle:
          "Description: We undertake all type of concert work , steel structures ",
      },
    ],
}};

export const newInStore = {
  title: "New In Store Now",
  subtitle: "Get the latest items immediately with promo prices",
  link: "Check all",
  icon: <IoIosArrowRoundForward />,
  products: [
    {
      name: "chair",
      image: <Pro />,
    },
    {
      name: "bed",
      image: <Pro3 />,
    },
    {
      name: "cupboard",
      image: <Pro4 />,
    },
    {
      name: "lighting",
      image: <Lighing />,
    },
  ],
};

export const products = {
  title: "Our Service And Products",
  subtitle:
    " ",
  pages: [
    {

      productList: [
        {
          image: <Our />,
          icon: <IoMdAddCircle />,
          name: "Ceiling Light",
          price: 75,
          oldPrice: 82,
        },
        {
          image: <Our1 />,
          icon: <IoMdAddCircle />,
          name: "Black Forest Series Wood",
          price: 225,
          oldPrice: 240,
        },
        {
          image: <Our2 />,
          icon: <IoMdAddCircle />,
          name: "XORA corner desk",
          price: 320,
          oldPrice: 325,
        },
        {
          image: <Our3 />,
          icon: <IoMdAddCircle />,
          name: "Papper Cupboard",
          price: 105,
          oldPrice: 120,
        },
        {
          image: <Our4 />,
          icon: <IoMdAddCircle />,
          name: "Ole Gundorse Spring",
          price: 75,
          oldPrice: 82,
        },
        {
          image: <Our5 />,
          icon: <IoMdAddCircle />,
          name: "Wood Chair",
          price: 50,
          oldPrice: 70,
        },
        {
          image: <Our6 />,
          icon: <IoMdAddCircle />,
          name: "Paper Cupboard",
          price: 105,
          oldPrice: 120,
        },
        {
          image: <Our7 />,
          icon: <IoMdAddCircle />,
          name: "Treos Seroes 911",
          price: 200,
          oldPrice: 210,
        },
        {
          image: <Our8 />,
          icon: <IoMdAddCircle />,
          name: "Ole Gundorse Spring",
          price: 75,
          oldPrice: 82,
        },
        {
          image: <Our9 />,
          icon: <IoMdAddCircle />,
          name: "Multi bilderman slibber",
          price: 45,
          oldPrice: 50,
        },
      ],
    },
  ],
};

export const testimonial = {
  title: "What people are saying about us",
  image: <Testi />,
  persons: [
    {
      avatar: <Avatar1Img />,
      name: "Josh Smith",
      occupation: "Manager of The New York Times",
      message:
        "“They are have a perfect touch for make something so professional ,interest and useful for a lot of people .”",
    },
    {
      avatar: <Avatar2Img />,
      name: "Brandi Johns",
      occupation: "Manager of The New York Times",
      message:
        "“They are have a perfect touch for make something so professional ,interest and useful for a lot of people .”",
    },
    {
      avatar: <Avatar3Img />,
      name: "Paula Prefer",
      occupation: "Manager of The New York Times",
      message:
        "“They are have a perfect touch for make something so professional ,interest and useful for a lot of people .”",
    },
  ],
};

export const newsletter = {
  title: "Get more discount Off your order",
  subtitle: "Join our mailing list",
  placeholder: "Your email address",
  buttonText: "Shop Now",
};

export const footer = {
  social: [
    {
      icon: <IoLogoYoutube />,
      href: "https://www.facebook.com/profile.php?id=100016604348507",
    },
    {
      icon: <IoLogoInstagram />,
      href: "https://www.facebook.com/profile.php?id=100016604348507",
    },
    {
      icon: <IoLogoGithub />,
      href: "https://www.facebook.com/profile.php?id=100016604348507",
    },
    {
      icon: <IoLogoFacebook />,
      href: "https://www.facebook.com/profile.php?id=100016604348507",
    },

  ],
  copyright: "LYAN Group 2024 - All Rights Reserved.",
};
