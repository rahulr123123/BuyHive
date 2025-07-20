import productImg01 from "../assets/double-sofa-01.png";

import productImg02 from "../assets/double-sofa-02.png";
import productImg03 from "../assets/double-sofa-03.png";

import productImg04 from "../assets/single-sofa-01.jpg";
import productImg05 from "../assets/single-sofa-02.jpg";
import productImg06 from "../assets/single-sofa-03.jpg";
import productImg007 from "../assets/single-sofa-04.png";

import productImg07 from "../assets/arm-chair-01.jpg";
import productImg08 from "../assets/arm-chair-02.jpg";
import productImg09 from "../assets/arm-chair-03.jpg";
import productImg10 from "../assets/arm-chair-01.jpg";

import phone01 from "../assets/phone-01.jpg";
import phone02 from "../assets/phone-02.jpg";
import phone03 from "../assets/phone-03.png";
import phone04 from "../assets/phone-04.jpg";
import phone05 from "../assets/phone-05.jpg";
import phone06 from "../assets/phone-06.jpg";
import phone08 from "../assets/phone-08.png";

import watch01 from "../assets/watch-01.jpg";
import watch02 from "../assets/watch-02.jpg";
import watch03 from "../assets/watch-03.jpg";
import watch04 from "../assets/watch-04.jpg";

import wireless01 from "../assets/wireless-01.png";
import wireless02 from "../assets/wireless-02.png";
import wireless03 from "../assets/wireless-03.png";
import wireless04 from "../assets/wireless-04.png";

import sofaSlide from "../assets/hero-img.png";
import watchSlide from "../assets/watch-07.png";

import { IoCarSportOutline, IoCardOutline, IoShieldHalfOutline, IoHeadsetOutline } from "react-icons/io5";


export const SliderData = [
  {
      id: 1,
      title: "50% Off For Your First Shopping",
      desc: "Revamp your living space with stylish sofas, ergonomic chairs, and space-saving furniture. Enjoy comfort, quality, and exclusive discounts with fast delivery.",
      cover: sofaSlide,
  },
  {
      id: 2,
      title: "50% Off For Your First Shopping",
      desc: "Upgrade your tech game with top smartphones from Samsung, Apple, OnePlus, and more, now with exclusive BuyHive discounts and free shipping.",
      cover: phone08,
  },
  {
      id: 3,
      title: "50% Off For Your First Shopping",
      desc: "Shop the latest wireless earphones and earbuds with noise cancellation and long battery life. Enjoy music like never before with special offers.",
      cover: wireless01,
  },
  {
      id: 4,
      title: "50% Off For Your First Shopping",
      desc: "Discover stylish smartwatches and fitness bands with advanced features at the best prices. Track your fitness while staying connected on the go.",
      cover: watchSlide,
  },
];

export const serviceData = [
  {
    icon: <IoCarSportOutline size={30} />,
    title: "Free Shipping",
    subtitle: "Enjoy Free Shipping on All Orders Across India!",
    bg: "#fdefe6",
  },
  {
    icon: <IoCardOutline size={30} />,
    title: "Safe Payment",
    subtitle: "Shop confidently with our secure, encrypted payment gateway.",
    bg: "#ceebe9",
  },
  {
    icon: <IoShieldHalfOutline size={30} />,
    title: "Secure product",
    subtitle: "Genuine products, safely packed, delivered with care.",
    bg: "#e2f2b2",
  },
  {
    icon: <IoHeadsetOutline size={30} />,
    title: " Guarantee",
    subtitle: " Easy returns and replacements for your peace of mind.",
    bg: "#d6e5fb",
  },
];


export const discoutProducts = [
  {
    id: "01",
    productName: "Stone and Beam Westview ",
    imgUrl: productImg01,
    category: "sofa",
    price: 193,
    discount:30,
    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
    reviews: [
      {
        rating: 4.7,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.5,
  },
  {
    id: "02",
    productName: "Rivet Bigelow Modern ",
    imgUrl: productImg02,
    category: "sofa",
    price: 253,
    discount:20,
    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
    reviews: [
      {
        rating: 4.8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.7,
  },
  {
    id: "08",
    productName: "Baltsar Chair",
    imgUrl: productImg08,
    category: "chair",
    price: 89,
    discount:15,
    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
    reviews: [
      {
        rating: 4.6,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.7,
  },
  {
    id: "09",
    productName: "Helmar Chair",
    imgUrl: productImg09,
    category: "chair",
    price: 112,
    discount:35,
    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
    reviews: [
      {
        rating: 4.6,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.7,
  },
  {
    id: "12",
    productName: "Realme 8",
    imgUrl: phone03,
    category: "mobile",
    price: 599,
    discount:10,
    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
    reviews: [
      {
        rating: 4.8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.8,
  },
  {
    id: "13",
    productName: "One Plus Nord",
    imgUrl: phone04,
    category: "mobile",
    price: 799,
    discount:5,
    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
    reviews: [
      {
        rating: 4.8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.8,
  },

]

export const products = [
  {
    id: "01",
    productName: "Stone and Beam Westview ",
    imgUrl: productImg01,
    category: "sofa",
    price: 193,
    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
    reviews: [
      {
        rating: 4.7,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.5,
  },

  {
    id: "02",
    productName: "Rivet Bigelow Modern ",
    imgUrl: productImg02,
    category: "sofa",
    price: 253,
    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
    reviews: [
      {
        rating: 4.8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.7,
  },

  {
    id: "03",
    productName: "Amazon Brand Modern Sofa",
    imgUrl: productImg03,
    category: "sofa",
    price: 173,
    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
    reviews: [
      {
        rating: 4.6,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.7,
  },
  {
    id: "26",
    productName: "Rivet Bigelow Modern ",
    imgUrl: productImg02,
    category: "sofa",
    price: 253,
    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
    reviews: [
      {
        rating: 4.8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.7,
  },
  {
    id: "04",
    productName: "Fllufy Sheep Sofa",
    imgUrl: productImg04,
    category: "sofa",
    price: 163,
    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
    reviews: [
      {
        rating: 4.6,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.7,
  },

  {
    id: "05",
    productName: "Faux Velvet Sofa",
    imgUrl: productImg05,
    category: "sofa",
    price: 163,
    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
    reviews: [
      {
        rating: 4.6,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.7,
  },

  {
    id: "06",
    productName: "Fllufy Sheep Sofa",
    imgUrl: productImg06,
    category: "sofa",
    price: 163,
    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
    reviews: [
      {
        rating: 4.6,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.7,
  },
  {
    id: "07",
    productName: "Sakarias Armchair",
    imgUrl: productImg07,
    category: "chair",
    price: 99,
    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
    reviews: [
      {
        rating: 4.6,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.7,
  },

  {
    id: "27",
    productName: "Modern Arm Sofa",
    imgUrl: productImg007,
    category: "sofa",
    price: 173,
    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
    reviews: [
      {
        rating: 4.6,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.7,
  },

  {
    id: "08",
    productName: "Baltsar Chair",
    imgUrl: productImg08,
    category: "chair",
    price: 89,
    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
    reviews: [
      {
        rating: 4.6,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.7,
  },

  {
    id: "09",
    productName: "Helmar Chair",
    imgUrl: productImg09,
    category: "chair",
    price: 112,
    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
    reviews: [
      {
        rating: 4.6,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.7,
  },

  {
    id: "10",
    productName: "Apple iPhone 12 Pro",
    imgUrl: phone01,
    category: "mobile",
    price: 799,
    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
    reviews: [
      {
        rating: 4.8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.8,
  },
  {
    id: "25",
    productName: "Sakarias Armchair",
    imgUrl: productImg10,
    category: "chair",
    price: 99,
    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
    reviews: [
      {
        rating: 4.6,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.7,
  },
  {
    id: "11",
    productName: "Apple iPhone 12 Max",
    imgUrl: phone02,
    category: "mobile",
    price: 799,
    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
    reviews: [
      {
        rating: 4.8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.8,
  },

  {
    id: "12",
    productName: "Realme 8",
    imgUrl: phone03,
    category: "mobile",
    price: 599,
    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
    reviews: [
      {
        rating: 4.8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.8,
  },

  {
    id: "13",
    productName: "One Plus Nord",
    imgUrl: phone04,
    category: "mobile",
    price: 799,
    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
    reviews: [
      {
        rating: 4.8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.8,
  },

  {
    id: "14",
    productName: "Apple iPhone 13 Pro",
    imgUrl: phone05,
    category: "mobile",
    price: 899,
    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
    reviews: [
      {
        rating: 4.8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.8,
  },

  {
    id: "15",
    productName: "Samsung Galaxy S22",
    imgUrl: phone06,
    category: "mobile",
    price: 699,
    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
    reviews: [
      {
        rating: 4.8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.8,
  },

  {
    id: "16",
    productName: "Rolex Watch",
    imgUrl: watch01,
    category: "watch",
    price: 299,
    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
    reviews: [
      {
        rating: 4.8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.8,
  },

  {
    id: "17",
    productName: "Timex Easy Reader Watch",
    imgUrl: watch02,
    category: "watch",
    price: 299,
    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
    reviews: [
      {
        rating: 4.8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.8,
  },

  {
    id: "18",
    productName: "Rolex Watch",
    imgUrl: watch03,
    category: "watch",
    price: 299,
    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
    reviews: [
      {
        rating: 4.8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.8,
  },

  {
    id: "19",
    productName: "Apple Watch",
    imgUrl: watch04,
    category: "watch",
    price: 399,
    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
    reviews: [
      {
        rating: 4.8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.8,
  },

  {
    id: "20",
    productName: "Beat Studio Wireless",
    imgUrl: wireless01,
    category: "wireless",
    price: 199,
    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
    reviews: [
      {
        rating: 4.8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.8,
  },

  {
    id: "21",
    productName: "Beat EP Headphones",
    imgUrl: wireless03,
    category: "wireless",
    price: 199,
    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
    reviews: [
      {
        rating: 4.8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.8,
  },
  {
    id: "22",
    productName: "Black Headphones",
    imgUrl: wireless02,
    category: "wireless",
    price: 169,
    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
    reviews: [
      {
        rating: 4.8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.8,
  },
  {
    id: "23",
    productName: "Bluetooth Headphones",
    imgUrl: wireless04,
    category: "wireless",
    price: 139,
    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
    reviews: [
      {
        rating: 4.8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.8,
  },

];

const features = [
  {
    icon: <IoCarSportOutline size={40} color="#000" />,
    title: "Free Shipping",
    subtitle: "Lorem ipsum dolor sit amet.",
    bg: "#fdefe6",
  },
  {
    icon: <IoCardOutline size={40} color="#000" />,
    title: "Safe Payment",
    subtitle: "Lorem ipsum dolor sit amet.",
    bg: "#ceebe9",
  },
  {
    icon: <IoShieldHalfOutline size={40} color="#000" />,
    title: "Secure Payment",
    subtitle: "Lorem ipsum dolor sit amet.",
    bg: "#e2f2b2",
  },
  {
    icon: <IoHeadsetOutline size={40} color="#000" />,
    title: "Back Guarantee",
    subtitle: "Lorem ipsum dolor sit amet.",
    bg: "#d6e5fb",
  },
];

export default features;