import { useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { IoChevronBackOutline } from "react-icons/io5";

const megaMenuLinks = {
  Women:       ["Trending", "Leggings", "Products", "Accessories", "Last Chance"],
  Men:         ["Trending", "T-shirts & Tops", "Products", "Accessories", "Last Chance"],
  Accessories: ["Trending", "Bags", "Equipment", "Socks", "Underwear", "Headwear", "Last Chance"],
  Explore:     ["Womens Guides", "Mens Guides", "Womens Clothing", "Mens Clothing", "Find Out More"],
};

const subMenuLinks = {
  Trending:          ["New Arrivals", "Best Sellers", "Form | Now Live", "Everyday Seamless", "Spring Looks", "Pilates"],
  Leggings:          ["All Leggings", "High-Waisted Leggings", "Scrunch Butt Leggings", "Black Leggings", "Flare Leggings", "Seamless Leggings", "Leggings with Pockets", "Tall Leggings"],
  Products:          ["All Products", "Leggings", "T-shirts & Tops", "Sport Bras", "Tank Tops", "Shorts", "Matching Sets", "Loungewear", "Tracksuits", "Hoodies & Sweatshirts", "Jackets", "Joggers & Sweatpants"],
  Accessories:       ["All Accessories", "All Socks"],
  "Last Chance":     ["For Less"],
  "T-shirts & Tops": ["Compression Fit T-shirts", "Muscle Fit Shirts", "Tank Tops", "Oversized T-Shirts", "Long Sleeve Tops", "Stringers", "Black T-Shirts"],
  Bags:              ["All Bags", "Gym Bags", "Backpacks"],
  Equipment:         ["All Equipment", "Gym Gloves", "Resistance Bands"],
  Socks:             ["All Socks", "Trainer Socks", "Crew Socks"],
  Underwear:         ["All Underwear", "Boxers", "Briefs"],
  Headwear:          ["All Headwear", "Caps", "Beanies"],
  "Womens Guides":   ["Beginner Guide", "Workout Plans"],
  "Mens Guides":     ["Beginner Guide", "Workout Plans"],
  "Womens Clothing": ["Shop All", "New Arrivals"],
  "Mens Clothing":   ["Shop All", "New Arrivals"],
  "Find Out More":   ["About Us", "Careers"],
};
// ────────────────────────────────────────────────────────────────────────────

export default function MobileDrawer({ links }) {
  const [level, setLevel] = useState(1); // 1 | 2 | 3
  const [activeCategory, setActiveCategory] = useState("Women"); // e.g. "Women"
  const [activeMegaLink, setActiveMegaLink] = useState(null); // e.g. "Trending"

  const goToLevel2 = (category) => {
    setActiveCategory(category);
    setLevel(2);
  };

  const goToLevel3 = (megaLink) => {
    setActiveMegaLink(megaLink);
    setLevel(3);
  };

  const goBack = () => {
    if (level === 3) setLevel(2);
    else if (level === 2) setLevel(1);
  };

  return (
    <div>
      {/* ── LEVEL 1 — top nav links ── */}
      {level === 1 && (
        <ul className="list-unstyled mb-0 d-flex align-items-center justify-content-start gap-3 px-4 py-3">
          {links.map((link) => (
            <li
              key={link}
              className=""
              onClick={() => goToLevel2(link)}
             >
                <span>{link}</span>
            </li>
          ))}
        </ul>
      )}

      {/* ── LEVEL 2 — mega menu links ── */}
      {level === 2 && activeCategory && (
        <div>
          {/* Back button */}
          <div
            className="d-flex align-items-center gap-2 px-4 py-3"
            onClick={goBack}
            style={{ cursor: "pointer" }}
          >
            <IoChevronBackOutline size={18} />
            <span className="fw-semibold">{activeCategory}</span>
          </div>

          {/* Mega links */}
          <ul className="list-unstyled mb-0">
            {megaMenuLinks[activeCategory].map((megaLink) => (
              <li
                key={megaLink}
                className=""
                onClick={() => goToLevel3(megaLink)}
              >
                <div className="d-flex align-items-center justify-content-between px-4 py-3" style={{ cursor: "pointer" }}>
                  <span>{megaLink}</span>
                  <MdKeyboardArrowRight size={22} />
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* ── LEVEL 3 — sub menu links ── */}
      {level === 3 && activeMegaLink && (
        <div>
          {/* Back button */}
          <div
            className="d-flex align-items-center gap-2 px-4 py-3 "
            onClick={goBack}
            style={{ cursor: "pointer" }}
          >
            <IoChevronBackOutline size={18} />
            <span className="fw-semibold">{activeMegaLink}</span>
          </div>

          {/* Sub links */}
          <ul className="list-unstyled mb-0">
            {(subMenuLinks[activeMegaLink] || []).map((subLink) => (
              <li key={subLink} className="">
                <a
                  href="#"
                  className="d-block px-4 py-3 text-dark text-decoration-none"
                >
                  {subLink}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

    </div>
  );
}