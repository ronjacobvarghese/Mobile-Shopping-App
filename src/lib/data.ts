import React from 'react';

import regSlogan from '/images/Regular-fit-slogan.png';
import regPolo from '/images/Regular-fit-polo.png';
import regV from '/images/Regular-fit-v.png';
import regFull from '/images/Regular-full.png';
import regPink from '/images/Regular-fit-color-pink.png';
import regBlack from '/images/Regular-fit-color-block.png';

import heart from '/svg/heart.svg';
import home from '/svg/home.svg';
import settings from '/svg/settings-02.svg';
import bag from '/svg/shopping-bag-03.svg';

export const categoryData =["All","Men","Women","Kids","T-shirts"]

export const navData = [{
  id:"#home",
  name:"Home",
  icon:home
},{
  id:"#saved",
  name:"Saved",
  icon: heart
},{
  id:"#cart",
  name:"Cart",
  icon: bag
},{
  id:"#settings",
  name:"Settings",
  icon: settings
}] as const;

export const storeData = [{
  title:"Regular fit color black",
  imageUrl:regBlack,
  price:"1,690",
  discount:0,
  review:45,
  rating:4.5,
  description:"The name says it all, the right size slightly snugs the body leaving enough room for comfort in the sleeves and waist.",
},{
  title:"Regular fit polo",
  price:"1,100",
  review:45,
  discount:52,  
  rating:4.5,
  imageUrl:regPolo,
  description:"The name says it all, the right size slightly snugs the body leaving enough room for comfort in the sleeves and waist.",
},
{
  title:"Regular fit slogan",
  discount:0,
  price:"1,190",  
  review:45,
  rating:4.5,
  imageUrl:regSlogan,
  description:"The name says it all, the right size slightly snugs the body leaving enough room for comfort in the sleeves and waist.",

},{
  title:"Regular fit v-neck",
  discount:0,
  price:"1,290",  
  review:45,
  rating:4.5,
  imageUrl:regV,
  description:"The name says it all, the right size slightly snugs the body leaving enough room for comfort in the sleeves and waist.",
},{
  title:"Regular fit color pink",
  discount:0,
  price:"1,690",  
  review:45,
  rating:4.5,
  imageUrl:regPink,
  description:"The name says it all, the right size slightly snugs the body leaving enough room for comfort in the sleeves and waist.",
},{
  title:"Regular fit full sleeve",
  discount:0,
  price:"1,290", 
  review:45,
  rating:4.5,
  imageUrl:regFull,
  description:"The name says it all, the right size slightly snugs the body leaving enough room for comfort in the sleeves and waist.",
}] as const

