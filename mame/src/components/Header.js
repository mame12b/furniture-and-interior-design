// import React, { useState, useEffect } from "react";
// import Logo from "../assets/images/logo.svg";
// import { CgMenuRight, CgClose } from "react-icons/cg";
// import { navigation } from "../data";
// import NavMobile from "./NavMobile";

// const Header = ({
//   heroRef,
//   featuresRef,
//   productsRef,
//   testimonialRef,
//   statsRef,
//   featuresSecondRef,
//   newItemsRef,
// }) => {
//   const [bg, setBg] = useState(false);
//   const [mobileNav, setMobileNav] = useState(false);

//   const bgStyle = bg ? "bg-primary py-4 lg:py-6" : "bg-none";
//   const mobileNavMenu = mobileNav ? <CgClose /> : <CgMenuRight />;
//   const mobileNavMenuStyle = mobileNav ? "left-0" : "-left-full";

//   const scrollToSection = (ref) => {
//     if (ref.current) {
//       ref.current.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   const navItems = navigation.map((item, index) => (
//     <li key={index}>
//       <a
//         href={item.path}
//         onClick={(e) => {
//           e.preventDefault();
//           switch (item.name) {
//             case "Home":
//               scrollToSection(heroRef);
//               break;
//             case "Features":
//               scrollToSection(featuresRef);
//               break;
//             case "Products":
//               scrollToSection(productsRef);
//               break;
//             case "Testimonial":
//               scrollToSection(testimonialRef);
//               break;
//             case "Stats":
//               scrollToSection(statsRef);
//               break;
//             case "Features Second":
//               scrollToSection(featuresSecondRef);
//               break;
//             case "New Items":
//               scrollToSection(newItemsRef);
//               break;
//             default:
//               break;
//           }
//         }}
//         className="text-white capitalize transition-all"
//       >
//         {item.name}
//       </a>
//     </li>
//   ));

//   useEffect(() => {
//     const handleScroll = () => {
//       setBg(window.scrollY > 50);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <section
//       className={`${bgStyle} fixed w-full left-0 py-8 z-10 transition-all duration-200`}
//     >
//       <div className="container mx-auto">
//         <div className="flex justify-between items-center">
//           <a href="#">
//             <img src={Logo} alt="Brand Logo" className="h-6 lg:h-8" />
//           </a>
//           <div
//             onClick={() => setMobileNav(!mobileNav)}
//             className="text-2xl text-white md:hidden lg:text-3xl cursor-pointer"
//           >
//             {mobileNavMenu}
//           </div>
//           <nav className="hidden md:flex">
//             <ul className="flex md:gap-x-12">{navItems}</ul>
//           </nav>
//           <section
//             className={`${mobileNavMenuStyle} md:hidden fixed bottom-0 w-full max-w-xs h-screen transition-all`}
//           >
//             <NavMobile />
//           </section>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Header;
import React, { useState, useEffect } from "react";
import Logo from "../assets/images/logof.jpg";
import { CgMenuRight, CgClose } from "react-icons/cg";
import { navigation } from "../data";
import NavMobile from "./NavMobile";

const Header = ({
  heroRef,
  featuresRef,
  productsRef,
  testimonialRef,
  statsRef,
  featuresSecondRef,
  newItemsRef,
}) => {
  const [bg, setBg] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");

  const bgStyle = bg ? "bg-primary py-4 lg:py-6" : "bg-none";
  const mobileNavMenu = mobileNav ? <CgClose /> : <CgMenuRight />;
  const mobileNavMenuStyle = mobileNav ? "left-0" : "-left-full";

  const scrollToSection = (ref, sectionName) => {
    if (ref?.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionName);
    }
  };

  const navItems = navigation.map((item, index) => (
    <li key={index}>
      <a
        href={item.path}
        onClick={(e) => {
          e.preventDefault();
          switch (item.name) {
            case "Home":
              scrollToSection(heroRef, "Home");
              break;
            case "About Us":
              scrollToSection(featuresRef, "About Us");
              break;
            case "Products":
              scrollToSection(productsRef, "Products");
              break;
            case "Testimonial":
              scrollToSection(testimonialRef, "Testimonial");
              break;
            case "Stats":
              scrollToSection(statsRef, "Stats");
              break;
            case "Features Second":
              scrollToSection(featuresSecondRef, "Features Second");
              break;
            case "New Items":
              scrollToSection(newItemsRef, "New Items");
              break;
            default:
              break;
          }
        }}
        className={`${
          activeSection === item.name ? "text-yellow-500" : "text-white"
        } capitalize transition-all`}
      >
        {item.name}
      </a>
    </li>
  ));

  useEffect(() => {
    const handleScroll = () => {
      setBg(window.scrollY > 50);

      // Determine the active section based on scroll position
      const sections = [
        { ref: heroRef, name: "Home" },
        { ref: featuresRef, name: "Features" },
        { ref: productsRef, name: "Products" },
        { ref: testimonialRef, name: "Testimonial" },
        { ref: statsRef, name: "Stats" },
        { ref: featuresSecondRef, name: "Features Second" },
        { ref: newItemsRef, name: "New Items" },
      ];

      const scrollPosition = window.scrollY + window.innerHeight / 2;

      sections.forEach((section) => {
        if (
          section.ref.current &&
          section.ref.current.offsetTop <= scrollPosition &&
          section.ref.current.offsetTop + section.ref.current.offsetHeight >
            scrollPosition
        ) {
          setActiveSection(section.name);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [
    heroRef,
    featuresRef,
    productsRef,
    testimonialRef,
    statsRef,
    featuresSecondRef,
    newItemsRef,
  ]);

  return (
    <section
      className={`${bgStyle} fixed w-full left-0 py-8 z-10 transition-all duration-200`}
    >
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <a href="#">
            <img src={Logo} alt="Brand Logo"  style={{width:200, height:90, borderRadius:"15px"}} />
          </a>
          <div
            onClick={() => setMobileNav(!mobileNav)}
            className="text-2xl text-white md:hidden lg:text-3xl cursor-pointer"
          >
            {mobileNavMenu}
          </div>
          <nav className="hidden md:flex">
            <ul className="flex md:gap-x-12">{navItems}</ul>
          </nav>
          <section
            className={`${mobileNavMenuStyle} md:hidden fixed bottom-0 w-full max-w-xs h-screen transition-all`}
          >
            <NavMobile />
          </section>
        </div>
      </div>
    </section>
  );
};

export default Header;
