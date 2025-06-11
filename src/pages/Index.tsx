
import React, { useState, useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { GalleryHorizontal, Volume2, VolumeX } from "lucide-react";
import Hero from '../components/Hero';
import Timeline, { TimelineEntry } from '../components/Timeline';
import Login from '../components/Login';
import img00 from "/public/timeline/00.jpg";

// Sample timeline entries
const timelineEntries: TimelineEntry[] = [
  {
    id: 0,
    date: "April 25th 2024",
    title: "Love at first message",
    description: "",
    imageSrc: img00
  },
  {
    id: 1,
    date: "May 2nd 2024",
    title: "One week later, digits secured",
    description: "The concept of 519 was so foreign I save your number twice in case you didn't answer me..... again",
    imageSrc: "public/timeline/1.jpg"
  },
  {
    id: 2,
    date: "May 4th 2024",
    title: "The texting began and never stopped",
    description: "Spent the day pretending to be cool but was actually babysitting the dogs and making a playlist to try and impress you with",
    imageSrc: "public/timeline/2.jpg"
  },
  {
    id: 3,
    date: "May 8th 2024",
    title: "I finally ask you out",
    description: "And you didn't even have to threaten anything. 6 !",
    imageSrc: "public/timeline/3.jpg"
  },
  {
    id: 4,
    date: "May 10th 2024",
    title: "Staring at the Henry Moore",
    description: "Can't wait to do it again every year for the rest of our lives (Screenshot at 1:39... imagine being so nervous you're running through contingencies like oh uh make sure I have screenshot of the tickets instead of them being online in case something happens)",
    imageSrc: "public/timeline/4.jpg"
  },
  {
    id: 5,
    date: "May 10th 2024",
    title: "Taken at 8:15PM this was the sky under which we had our first kiss :)",
    description: "",
    imageSrc: "public/timeline/5.jpg"
  },
  {
    id: 6,
    date: "May 14th 2024",
    title: "Chickpea stew",
    description: "Trying to impress you with my cooking prowess while you were in Windsor, I made my signature dish for the first time",
    imageSrc: "public/timeline/6.jpg"
  },
  {
    id: 7,
    date: "May 21st 2024",
    title: "I cancelled...",
    description: "On the only day you were available all week I decided to work instead of seeing you.. At least we both stared at the same beautiful sunset",
    imageSrc: "public/timeline/7.jpg"
  },
  {
    id: 8,
    date: "May 22nd 2024",
    title: "Second date",
    description: "You just wanted my air conditioning",
    imageSrc: "public/timeline/8.jpg"
  },
    {
    id: 11,
    date: "May 24th 2024",
    title: "We lied in the grass staring up at the stars",
    description: "The night ended there",
    imageSrc: "public/timeline/11.jpg"
  },
  {
    id: 9,
    date: "May 26th 2024",
    title: "Showing off my nice jeans",
    description: "You only acknowledged the car",
    imageSrc: "public/timeline/9.jpg"
  },
  {
    id: 10,
    date: "May 30th 2024",
    title: "Civil war.. yea we were in one",
    description: "You didn't like me.. I didn't finish my popcorn.. we both felt better after a nice drive. Thanksfully I had the car parked nearby even though it did make me late",
    imageSrc: "public/timeline/10.jpg"
  },
  {
    id: 12,
    date: "June 13th 2024",
    title: "Happpy anniversary my little perfect angel baby girl love",
    description: "We didn't even kiss",
    imageSrc: "public/timeline/12.jpg"
  },
  {
    id: 13,
    date: "June 21st 2024",
    title: "You liked me",
    description: "My biggest regret is leaving that night",
    imageSrc: "public/timeline/13.jpg"
  },
  {
    id: 14,
    date: "June 24th 2024",
    title: "We're booked !",
    description: "Guess we really did like each other",
    imageSrc: "public/timeline/14.jpg"
  },
  {
    id: 15,
    date: "June 26th 2024",
    title: "Markham",
    description: "",
    imageSrc: "public/timeline/15.jpg"
  },
  {
    id: 16,
    date: "June 27th 2024",
    title: "Ducky",
    description: "",
    imageSrc: "public/timeline/16.jpg"
  },
  {
    id: 18,
    date: "June 27th 2024",
    title: "Kisses in the car",
    description: "Already... he just wants to hang out up front with us",
    imageSrc: "public/timeline/18.jpg"
  },
  {
    id: 17,
    date: "June 27th 2024",
    title: "Who let Ducky drive ?",
    description: "He can't see !!!",
    imageSrc: "public/timeline/17.jpg"
  },
  {
    id: 19,
    date: "June 27th 2024",
    title: "The big apple",
    description: "Everything must be big when you're as little as Duck",
    imageSrc: "public/timeline/19.jpg"
  },
  {
    id: 20,
    date: "June 27th 2024",
    title: "Home and dancing",
    description: "He loves Cupcakke",
    imageSrc: "public/timeline/20.jpg"
  },
  {
    id: 21,
    date: "June 27th 2024",
    title: "Sleepy guys",
    description: "It was a big day",
    imageSrc: "public/timeline/21.jpg"
  },
  {
    id: 22,
    date: "June 28th 2024",
    title: "Balcony in the day time",
    description: "We proceeded to be together for over a week straight",
    imageSrc: "public/timeline/22.jpg"
  },
  {
    id: 23,
    date: "June 28th 2024",
    title: "Duck in the sack",
    description: "Got the backpack before the dog",
    imageSrc: "public/timeline/23.jpg"
  },
  {
    id: 24,
    date: "June 30th 2024",
    title: "Ferocious",
    description: "He gets a haircut and shows his true colours",
    imageSrc: "public/timeline/24.jpg"
  },
  {
    id: 25,
    date: "June 30th 2024",
    title: "Tarot with Miranda",
    description: "Some pretty good spreads. We talked mad shit on the balcony when you went to the bathroom",
    imageSrc: "public/timeline/25.jpg"
  },
  {
    id: 26,
    date: "July 2nd 2024",
    title: "Colouring in the park",
    description: "Picked you up in the Porsche then we proceeded to talk about our feelings together",
    imageSrc: "public/timeline/26.jpg"
  },
  {
    id: 27,
    date: "July 3rd 2024",
    title: "You basically move in",
    description: "Workdays with leaves cafe and a nice view",
    imageSrc: "public/timeline/27.jpg"
  },
  {
    id: 28,
    date: "July 4th 2024",
    title: "Kinds of Kindness",
    description: "First time leaving Duck alone and our first movie date where we didn't hate each other",
    imageSrc: "public/timeline/28.jpg"
  },
  {
    id: 29,
    date: "July 5th 2024",
    title: "In the dead of night",
    description: "I watch Duck while you and Summer go see Orville Peck",
    imageSrc: "public/timeline/29.jpg"
  },
  {
    id: 198,
    date: "July 6th 2024",
    title: "Kiss me my dear",
    description: "I got you your favourite wine and your favourite sushi. I made you wait outside while I prepared a balloon drop of 66 balloons in green, blue, and purple, counting the days we've been together, each one as special as the last. The 67th balloon was white and asked a simple question on it. It symbolized our future together forever :)<3",
    imageSrc: "public/timeline/198.jpg"
  },
  {
    id: 30,
    date: "July 10th 2024",
    title: "Gamer girl",
    description: "You drive like that and hit like that in real life too",
    imageSrc: "public/timeline/30.jpg"
  },
  {
    id: 31,
    date: "July 13th 2024",
    title: "Don't die",
    description: "Day at the skatepark",
    imageSrc: "public/timeline/31.jpg"
  },
  {
    id: 32,
    date: "July 14th 2024",
    title: "Pool party sandwiches",
    description: "Duck swims for the first time and we eat tomato lemon pasta leftovers after ice cream",
    imageSrc: "public/timeline/32.jpg"
  },
  {
    id: 196,
    date: "July 15th 2024",
    title: "Rawdon falls",
    description: "You said I love you for the first time. I should've said it before I left for my flight. One of the most beautiful days of my entire life",
    imageSrc: "public/timeline/196.jpg"
  },
  {
    id: 33,
    date: "July 18th 2024",
    title: "Happy 1st birthday!!!",
    description: "He looks thrilled",
    imageSrc: "public/timeline/33.jpg"
  },
  {
    id: 34,
    date: "July 20th 2024",
    title: "Checking in on baby from Florida",
    description: "It was a scorcher !",
    imageSrc: "public/timeline/34.jpg"
  },
  {
    id: 35,
    date: "July 24th 2024",
    title: "Driving to Levis to get a table",
    description: "Fake it by Seether and lightning storms",
    imageSrc: "public/timeline/35.jpg"
  },
  {
    id: 36,
    date: "July 27th 2024",
    title: "Our first and only fight",
    description: "You slept on the couch",
    imageSrc: "public/timeline/36.jpg"
  },
  {
    id: 37,
    date: "July 30th 2024",
    title: "First ikea trip",
    description: "You give me haircuts",
    imageSrc: "public/timeline/37.jpg"
  },
  {
    id: 38,
    date: "August 6th 2024",
    title: "Another perfect day",
    description: "We just can't stop winning",
    imageSrc: "public/timeline/38.jpg"
  },
  {
    id: 39,
    date: "August 7th 2024",
    title: "I beat you at scrabble",
    description: "",
    imageSrc: "public/timeline/39.jpg"
  },
  {
    id: 40,
    date: "August 10th 2024",
    title: "The green alley",
    description: "First time walking through and we kiss on our way home from the metro",
    imageSrc: "public/timeline/40.jpg"
  },
  {
    id: 41,
    date: "August 20th 2024",
    title: "Date night !!!",
    description: "My first time eating Ethiopian food",
    imageSrc: "public/timeline/41.jpg"
  },
  {
    id: 42,
    date: "August 23rd 2024",
    title: "Taco night",
    description: "That poor elevator",
    imageSrc: "public/timeline/42.jpg"
  },
  {
    id: 43,
    date: "August 30th 2024",
    title: "First date crawl",
    description: "We're the sexiest couple at this warehouse. Painted nails, kiss marks and all",
    imageSrc: "public/timeline/43.jpg"
  },
  {
    id: 45,
    date: "September 7th 2024",
    title: "Quebec City Festival",
    description: "The beginnings ",
    imageSrc: "public/timeline/45.jpg"
  },
  {
    id: 44,
    date: "September 7th 2024",
    title: "Okayyy, serving milk",
    description: "Pass the olive oil ?",
    imageSrc: "public/timeline/44.jpg"
  },
  {
    id: 46,
    date: "September 7th 2024",
    title: "Put her next to the cheese !",
    description: "",
    imageSrc: "public/timeline/46.jpg"
  },
  {
    id: 47,
    date: "September 7th 2024",
    title: "Liberty leading the people",
    description: "We leave him alone for a single day...",
    imageSrc: "public/timeline/47.jpg"
  },
  {
    id: 48,
    date: "September 13th 2024",
    title: "Another and another perfect day",
    description: "Cheese from the cheese store, bread from the bread store, and wine from the wine store. Back in our spot",
    imageSrc: "public/timeline/48.jpg"
  },
  {
    id: 49,
    date: "September 15th 2024",
    title: "Chanel Beads",
    description: "But more importantly... the FIRST night at club pow pow",
    imageSrc: "public/timeline/49.jpg"
  },
  {
    id: 50,
    date: "September 17th 2024",
    title: "The National",
    description: "<3",
    imageSrc: "public/timeline/50.jpg"
  },
  {
    id: 51,
    date: "September 20th 2024",
    title: "Our first bixi ride together",
    description: "You're so small",
    imageSrc: "public/timeline/51.jpg"
  },
  {
    id: 52,
    date: "September 20th 2024",
    title: "If I Beg You party",
    description: "",
    imageSrc: "public/timeline/52.jpg"
  },
  {
    id: 53,
    date: "September 22nd 2024",
    title: "You wore 2 different shoes",
    description: "On your 2 little feet",
    imageSrc: "public/timeline/53.jpg"
  },
  {
    id: 54,
    date: "September 22nd 2024",
    title: "Night out",
    description: "We walked home with Duck",
    imageSrc: "public/timeline/54.jpg"
  },
  {
    id: 55,
    date: "September 28th 2024",
    title: "Americana party",
    description: "We had the best costume, and probably the best after party too",
    imageSrc: "public/timeline/55.jpg"
  },
  {
    id: 56,
    date: "September 29th 2024",
    title: "Farewell Summer",
    description: "Parking's full and your dog isn't allowed here, but you can go to this much nicer park and have lovely walk",
    imageSrc: "public/timeline/56.jpg"
  },
  {
    id: 57,
    date: "September 29th 2024",
    title: "Swaggg",
    description: "",
    imageSrc: "public/timeline/57.jpg"
  },
  {
    id: 58,
    date: "October 5th 2024",
    title: "We go to our rock",
    description: "R + S",
    imageSrc: "public/timeline/58.jpg"
  },
  {
    id: 59,
    date: "October 5th 2024",
    title: "When mom's away...",
    description: "The boys can play",
    imageSrc: "public/timeline/59.jpg"
  },
  {
    id: 60,
    date: "October 6th 2024",
    title: "I went on this beautiful morning after drive",
    description: "And all I got was this perfect alcove by a river and a quaint town",
    imageSrc: "public/timeline/60.jpg"
  },
  {
    id: 61,
    date: "October 10th 2024",
    title: "First time at Momo",
    description: "We forgot the leftovers though",
    imageSrc: "public/timeline/61.jpg"
  },
  {
    id: 62,
    date: "October 11th 2024",
    title: "Another trip to the SAQ",
    description: "You and Duck have matching ears, it's getting chilly",
    imageSrc: "public/timeline/62.jpg"
  },
  {
    id: 63,
    date: "October 12th 2024",
    title: "A chilly picnic",
    description: "Still a perfect day",
    imageSrc: "public/timeline/63.jpg"
  },
  {
    id: 64,
    date: "October 12th 2024",
    title: "You must admit",
    description: "He has leaf on mouth :D",
    imageSrc: "public/timeline/64.jpg"
  },
  {
    id: 65,
    date: "October 12th 2024",
    title: "Finally watching Hannibal",
    description: "Already mastering my cosplay",
    imageSrc: "public/timeline/65.jpg"
  },
  {
    id: 66,
    date: "October 12th 2024",
    title: "We arrive in Woodstock",
    description: "There was a shift after this photo was taken",
    imageSrc: "public/timeline/66.jpg"
  },
  {
    id: 67,
    date: "October 17th 2024",
    title: "Love knot",
    description: "Represents our infinitely intertwined hearts",
    imageSrc: "public/timeline/67.jpg"
  },
  {
    id: 68,
    date: "October 17th 2024",
    title: "Best meal we've ever had",
    description: "LOOK HOW CUTE YOU ARE",
    imageSrc: "public/timeline/68.jpg"
  },
  {
    id: 69,
    date: "October 17th 2024",
    title: "Still chasing the salad",
    description: "But oh my god the ragout...",
    imageSrc: "public/timeline/69.jpg"
  },
  {
    id: 70,
    date: "October 17th 2024",
    title: "That's little you",
    description: "Looking at big you",
    imageSrc: "public/timeline/70.jpg"
  },
  {
    id: 71,
    date: "October 17th 2024",
    title: "That's little us",
    description: "",
    imageSrc: "public/timeline/71.jpg"
  },
  {
    id: 72,
    date: "October 17th 2024",
    title: "That's big us",
    description: "",
    imageSrc: "public/timeline/72.jpg"
  },
  {
    id: 73,
    date: "October 18th 2024",
    title: "I need thee every hour",
    description: "The beginning of the best day of my life",
    imageSrc: "public/timeline/73.jpg"
  },
  {
    id: 74,
    date: "October 18th 2024",
    title: "The world's largest kaleidoscope",
    description: "We laid on the floor holding hands and staring up at it. And then we found a zester :)",
    imageSrc: "public/timeline/74.jpg"
  },
  {
    id: 75,
    date: "October 18th 2024",
    title: "I wish there were infinite yous",
    description: "",
    imageSrc: "public/timeline/75.jpg"
  },
  {
    id: 76,
    date: "October 18th 2024",
    title: "The love of my life. The woman I'm going to spend eternity with",
    description: "And you didn't even want to hop the fence to go see the falls",
    imageSrc: "public/timeline/76.jpg"
  },
  {
    id: 77,
    date: "October 18th 2024",
    title: "Summiting another mountain",
    description: "And a nice walk through the woods",
    imageSrc: "public/timeline/77.jpg"
  },
  {
    id: 78,
    date: "October 18th 2024",
    title: "Cows <3",
    description: "A pitstop to say hi to our little firend with a heart on his head",
    imageSrc: "public/timeline/78.jpg"
  },
  {
    id: 79,
    date: "October 18th 2024",
    title: "Climax",
    description: "And a little drive up the road to see some trees",
    imageSrc: "public/timeline/79.jpg"
  },
  {
    id: 80,
    date: "October 18th 2024",
    title: "Zaratoga Zprings with Zabrina",
    description: "You see this?? Never lose this..",
    imageSrc: "public/timeline/80.jpg"
  },
  {
    id: 81,
    date: "October 18th 2024",
    title: "Omg she's crazyyy",
    description: "Can't take her anywhere and especially not a victorian bed",
    imageSrc: "public/timeline/81.jpg"
  },
  {
    id: 82,
    date: "October 22nd 2024",
    title: "Back home",
    description: "Duck is looking daper",
    imageSrc: "public/timeline/82.jpg"
  },
  {
    id: 83,
    date: "October 25th 2024",
    title: "And back to work",
    description: "My little superstar",
    imageSrc: "public/timeline/83.jpg"
  },
  {
    id: 84,
    date: "October 28th 2024",
    title: "The vinyl arrives !",
    description: "In the right colour too",
    imageSrc: "public/timeline/84.jpg"
  },
  {
    id: 85,
    date: "October 29th 2024",
    title: "More studio",
    description: "Gives me rehearsal time for my roadie skills as well",
    imageSrc: "public/timeline/85.jpg"
  },
  {
    id: 86,
    date: "October 30th 2024",
    title: "The photobooth is coming together",
    description: "Duck still has the duck",
    imageSrc: "public/timeline/86.jpg"
  },
  {
    id: 87,
    date: "October 30th 2024",
    title: "Best show I've ever seen in my life",
    description: "Surrounded by friends and family too :)",
    imageSrc: "public/timeline/87.jpg"
  },
  {
    id: 88,
    date: "October 31st 2024",
    title: "It was a big day for baby",
    description: "Duck's nonetheless pleased with more cuddle time",
    imageSrc: "public/timeline/88.jpg"
  },
  {
    id: 89,
    date: "October 31st 2024",
    title: "Handed out a whole bucket of treats to the kids",
    description: "With our little pikachu",
    imageSrc: "public/timeline/89.jpg"
  },
  {
    id: 91,
    date: "October 31st 2024",
    title: "Our rock",
    description: "Now forever",
    imageSrc: "public/timeline/91.jpg"
  },
  {
    id: 90,
    date: "November 1st 2024",
    title: "Album release treasure hunt",
    description: "And all you cared about was the little snail",
    imageSrc: "public/timeline/90.jpg"
  },
  {
    id: 92,
    date: "November 1st 2024",
    title: "Mekong dinner to celebrate",
    description: "Congratulations my love. You are incredible, I am continuously amazed by you and your ability to exceed even my wildest expectations.",
    imageSrc: "public/timeline/92.jpg"
  },
  {
    id: 93,
    date: "November 1st 2024",
    title: "This is my design",
    description: "Happy halloween love",
    imageSrc: "public/timeline/93.jpg"
  },
  {
    id: 94,
    date: "November 1st 2024",
    title: "Matching ears again",
    description: "A nice chilly walk with Duck, until he ripped his puffer jacket",
    imageSrc: "public/timeline/94.jpg"
  },
  {
    id: 95,
    date: "November 7th 2024",
    title: "Ouchie !",
    description: "I read you a little life as you fell asleep in my arms",
    imageSrc: "public/timeline/95.jpg"
  },
  {
    id: 96,
    date: "November 15th 2024",
    title: "Experimenting with the moustache",
    description: "Lookin good !",
    imageSrc: "public/timeline/96.jpg"
  },
  {
    id: 97,
    date: "November 15th 2024",
    title: "Lots and lots of cuddles",
    description: "As the weather got colder we only got cozier",
    imageSrc: "public/timeline/97.jpg"
  },
  {
    id: 98,
    date: "November 22nd 2024",
    title: "It was make your own pizza night !!!",
    description: "The club and karaoke was fun too",
    imageSrc: "public/timeline/98.jpg"
  },
  {
    id: 99,
    date: "November 23rd 2024",
    title: "Duck hug",
    description: "He was happy when we got home",
    imageSrc: "public/timeline/99.jpg"
  },
  {
    id: 100,
    date: "November 26th 2024",
    title: "Painting with Francis",
    description: "Women's burden to bear moment",
    imageSrc: "public/timeline/100.jpg"
  },
  {
    id: 101,
    date: "November 29th 2024",
    title: "Ferocious",
    description: "You're cute",
    imageSrc: "public/timeline/101.jpg"
  },
  {
    id: 102,
    date: "December 1st 2024",
    title: "Burlington Christmas Market",
    description: "Everyone loved Duck in the sack",
    imageSrc: "public/timeline/102.jpg"
  },
  {
    id: 103,
    date: "December 1st 2024",
    title: "Applebee's make your own margarita",
    description: "Duck tried to make his great escape",
    imageSrc: "public/timeline/103.jpg"
  },
  {
    id: 104,
    date: "December 4th 2024",
    title: "Lauren's show",
    description: "You had a crush, we had a crazy night",
    imageSrc: "public/timeline/104.jpg"
  },
  {
    id: 105,
    date: "December 6th 2024",
    title: "Fresh bagels from Saint-Viateur's",
    description: "Maybe it was too warm for little baby",
    imageSrc: "public/timeline/105.jpg"
  },
  {
    id: 106,
    date: "December 6th 2024",
    title: "Work Christmas party",
    description: "Holy shit we are.....",
    imageSrc: "public/timeline/106.jpg"
  },
  {
    id: 107,
    date: "December 8th 2024",
    title: "Boots the boyfriend down",
    description: "",
    imageSrc: "public/timeline/107.jpg"
  },
  {
    id: 116,
    date: "December 15th 2024",
    title: "Traversing the layers of hell",
    description: "To arrive in paradise :D",
    imageSrc: "public/timeline/116.jpg"
  },
  {
    id: 108,
    date: "December 12th 2024",
    title: "Windsor official",
    description: "",
    imageSrc: "public/timeline/108.jpg"
  },
  {
    id: 110,
    date: "December 13th 2024",
    title: "My first time in Detroit",
    description: "At the DIA",
    imageSrc: "public/timeline/110.jpg"
  },
  {
    id: 111,
    date: "December 13th 2024",
    title: ":p",
    description: "",
    imageSrc: "public/timeline/111.jpg"
  },
  {
    id: 113,
    date: "December 13th 2024",
    title: "Little pit stop for some olives with pits",
    description: "Wish the jukebox worked though",
    imageSrc: "public/timeline/113.jpg"
  },
  {
    id: 109,
    date: "December 13th 2024",
    title: "Smoked you nerds at bowling",
    description: "Ate some delicious pizza",
    imageSrc: "public/timeline/109.jpg"
  },
  {
    id: 112,
    date: "December 13th 2024",
    title: "Kildare !",
    description: "Everyone was there.. minus the people in the car out front",
    imageSrc: "public/timeline/112.jpg"
  },
  {
    id: 114,
    date: "December 15th 2024",
    title: "Wineology",
    description: "First time we had Villa Maria, can't wait to taste it in New Zealand",
    imageSrc: "public/timeline/114.jpg"
  },
  {
    id: 115,
    date: "December 15th 2024",
    title: "London, Ontario",
    description: "A weather zone entirely its own",
    imageSrc: "public/timeline/115.jpg"
  },
  {
    id: 117,
    date: "December 16th 2024",
    title: "Phog",
    description: "Image not available, it shut down :(",
    imageSrc: "public/timeline/x.jpg"
  },
  {
    id: 118,
    date: "December 17th 2024",
    title: "Karaoke at undisclosed location",
    description: "One day you'll make it big",
    imageSrc: "public/timeline/118.jpg"
  },
  {
    id: 119,
    date: "December 17th 2024",
    title: "Ceasars",
    description: "Anora vibes",
    imageSrc: "public/timeline/119.jpg"
  },
  {
    id: 120,
    date: "December ~25th 2024",
    title: "Happy early Christmas my love",
    description: "In our matching jammies",
    imageSrc: "public/timeline/120.jpg"
  },
  {
    id: 121,
    date: "December 22nd 2024",
    title: "Our first Christmas tree",
    description: "Welcome home Charlie",
    imageSrc: "public/timeline/121.jpg"
  },
  {
    id: 122,
    date: "December 22nd 2024",
    title: "Atwater Christmas market",
    description: "Brrrrr",
    imageSrc: "public/timeline/122.jpg"
  },
  {
    id: 123,
    date: "December 25th 2024",
    title: "Merry Christmas to all",
    description: "And to Duck.. a good night :)",
    imageSrc: "public/timeline/123.jpg"
  },
  {
    id: 124,
    date: "December 29th 2024",
    title: "Foggy visit to the cemetary",
    description: "Saying hey to Leonard",
    imageSrc: "public/timeline/124.jpg"
  },
  {
    id: 125,
    date: "January 1st 2025",
    title: "Happy New Years !!!!!",
    description: "Singing starburtser in our star shirts",
    imageSrc: "public/timeline/125.jpg"
  },
  {
    id: 126,
    date: "January 2nd 2025",
    title: "He's",
    description: "",
    imageSrc: "public/timeline/126.jpg"
  },
  {
    id: 127,
    date: "January 2nd 2025",
    title: "She's",
    description: "",
    imageSrc: "public/timeline/127.jpg"
  },
  {
    id: 128,
    date: "January 4th 2025",
    title: "Date night at Tuck",
    description: "Baby's first truffle",
    imageSrc: "public/timeline/128.jpg"
  },
  {
    id: 129,
    date: "January 2nd 2025",
    title: "Cafe Orr",
    description: "#grindset",
    imageSrc: "public/timeline/129.jpg"
  },
  {
    id: 130,
    date: "January 11th 2025",
    title: "Ruby Lou Who",
    description: "Who is no more than two",
    imageSrc: "public/timeline/130.jpg"
  },
  {
    id: 131,
    date: "January 11th 2025",
    title: "India Rosa date night",
    description: "In the hanging chair, look at that smile #cheezin",
    imageSrc: "public/timeline/131.jpg"
  },
  {
    id: 132,
    date: "January 17th 2025",
    title: "Little baby gets her big food processor",
    description: "For make your own dumplings night",
    imageSrc: "public/timeline/132.jpg"
  },
  {
    id: 133,
    date: "January 23rd 2025",
    title: "Holy fuck bladeeeeeee",
    description: "Was nice kicking it with him the night before",
    imageSrc: "public/timeline/133.jpg"
  },
  {
    id: 134,
    date: "January 23rd 2025",
    title: "Sasha K",
    description: "And maybe another trip to club pow pow",
    imageSrc: "public/timeline/134.jpg"
  },
  {
    id: 135,
    date: "January 24th 2025",
    title: "Ouchie..",
    description: "Nothing like a cold towel and some orange gatorade",
    imageSrc: "public/timeline/135.jpg"
  },
  {
    id: 136,
    date: "February 4th 2025",
    title: "Oh no...",
    description: "You fell asleep on my arm in the waiting room",
    imageSrc: "public/timeline/136.jpg"
  },
  {
    id: 137,
    date: "February 9th 2025",
    title: "Ice skating :)",
    description: "On the little baby rink",
    imageSrc: "public/timeline/137.jpg"
  },
  {
    id: 138,
    date: "February 14th 2025",
    title: "My valentine for every Valentine's for the rest of my life",
    description: "Nom nom nom",
    imageSrc: "public/timeline/138.jpg"
  },
  {
    id: 139,
    date: "February 14th 2025",
    title: "A lovely board",
    description: "So romantic",
    imageSrc: "public/timeline/139.jpg"
  },
  {
    id: 140,
    date: "February 14th 2025",
    title: "The apartment hunting intensifies",
    description: "Not even a snow storm can stop us",
    imageSrc: "public/timeline/140.jpg"
  },
  {
    id: 142,
    date: "March 1st 2025",
    title: "Moments before disaster",
    description: "Taken the morning you became sick and we spent 2 weeks reeling",
    imageSrc: "public/timeline/142.jpg"
  },
  {
    id: 141,
    date: "March 1st 2025",
    title: "We emerge to find THE lamp",
    description: "Spotted hiding in the corner",
    imageSrc: "public/timeline/141.jpg"
  },
  {
    id: 143,
    date: "March 8th 2025",
    title: "Happy birthday my love",
    description: "Just don't drop the cake",
    imageSrc: "public/timeline/143.jpg"
  },
  {
    id: 144,
    date: "March 8th 2025",
    title: "What a beautiful cake",
    description: "So yummy even Ducky should have some",
    imageSrc: "public/timeline/144.jpg"
  },
  {
    id: 145,
    date: "March 16th 2025",
    title: "Another ikea trip",
    description: "",
    imageSrc: "public/timeline/145.jpg"
  },
  {
    id: 146,
    date: "March 16th 2025",
    title: "Winners?",
    description: "Uh yea they sure are",
    imageSrc: "public/timeline/146.jpg"
  },
  {
    id: 147,
    date: "March 18th 2025",
    title: "The best birthday of my entire life",
    description: "Courtesy of my perfect elf queen",
    imageSrc: "public/timeline/147.jpg"
  },
  {
    id: 148,
    date: "March 18th 2025",
    title: "Eva b",
    description: "Looking as little as ever after a samosa",
    imageSrc: "public/timeline/148.jpg"
  },
  {
    id: 149,
    date: "March 23rd 2025",
    title: "Candlelight concert",
    description: "Lord of the Rings AND Game of thrones.. and my first time at Rialto",
    imageSrc: "public/timeline/149.jpg"
  },
 {
    id: 150,
    date: "March 28th 2025",
    title: "First in line for Wild at Heart",
    description: "Chill keeners but they're lowkey us",
    imageSrc: "public/timeline/150.jpg"
  },
  {
    id: 151,
    date: "March 29th 2025",
    title: "A pho date",
    description: "The real standout was the vietnamese coffee drink",
    imageSrc: "public/timeline/151.jpg"
  },
  {
    id: 152,
    date: "March 31st 2025",
    title: "We sign our dream apartment",
    description: "Life comes at you fast, after months of searching and hours of stressfully awaiting a response from Sabrina, its confirmed and we run out to buy our bottle of bubbly to celebrate (you couldn't pop it because you're so little)",
    imageSrc: "public/timeline/152.jpg"
  },
  {
    id: 153,
    date: "April 14th 2025",
    title: "We come back for the lamp",
    description: "And the move officially begins (because of course we got the keys early)",
    imageSrc: "public/timeline/153.jpg"
  },
  {
    id: 155,
    date: "April 20th 2025",
    title: "Happy easter my love",
    description: "A little egg hunt around the apartment with your little basket",
    imageSrc: "public/timeline/155.jpg"
  },
  {
    id: 156,
    date: "April 20th 2025",
    title: "My little egg with a little egg",
    description: "",
    imageSrc: "public/timeline/156.jpg"
  },
  {
    id: 157,
    date: "April 26th 2025",
    title: "The furniture hunt intensifies",
    description: "Good thing you're puny so we can fit it all",
    imageSrc: "public/timeline/157.jpg"
  },
  {
    id: 158,
    date: "April 26th 2025",
    title: "Unreal dead wife material",
    description: "(fingers crossed that never happens) Hard at work, worth every single second, you truly create a home out of our house",
    imageSrc: "public/timeline/158.jpg"
  },
  {
    id: 159,
    date: "April 29th 2025",
    title: "Ceviche and margarita break",
    description: "Tin Tan happy hour with a side of thunderstorm",
    imageSrc: "public/timeline/159.jpg"
  },
  {
    id: 160,
    date: "April 29th 2025",
    title: "Youth Lagoon",
    description: "I'm a speeeeed freaaaaak",
    imageSrc: "public/timeline/160.jpg"
  },
  {
    id: 161,
    date: "April 30th 2025",
    title: "Hardest working little girl on the planet",
    description: "I love the green cabinets. I love our kitchen. I love you.",
    imageSrc: "public/timeline/161.jpg"
  },
  {
    id: 162,
    date: "May 1st 2025",
    title: "Officially moved in",
    description: "Our happy family in our happy home",
    imageSrc: "public/timeline/162.jpg"
  },
  {
    id: 163,
    date: "May 2nd 2025",
    title: "Lookin good",
    description: "First dinner and TV in the new home, looks like we're all done !",
    imageSrc: "public/timeline/163.jpg"
  },
  {
    id: 164,
    date: "May 3rd 2025",
    title: "Terrasse seasons slowly begins",
    description: "A couple spots left to check out near your apartment",
    imageSrc: "public/timeline/164.jpg"
  },
  {
    id: 165,
    date: "May 3rd 2025",
    title: "Jean-Talon Market",
    description: "Getting our little guys for our little garden",
    imageSrc: "public/timeline/165.jpg"
  },
  {
    id: 166,
    date: "May 4th 2025",
    title: "Fresh cilantro smash",
    description: "With our new Oli and our fallen tomato plant",
    imageSrc: "public/timeline/166.jpg"
  },
  {
    id: 167,
    date: "May 5th 2025",
    title: "Dragon flowers",
    description: "You're so beautiful my love",
    imageSrc: "public/timeline/167.jpg"
  },
  {
    id: 168,
    date: "May 9th 2025",
    title: "The magnolia tree in front of our apartment blooms",
    description: "I love our apartment",
    imageSrc: "public/timeline/168.jpg"
  },
  {
    id: 169,
    date: "May 10th 2025",
    title: "Ducky candle",
    description: "First trip to the church basement",
    imageSrc: "public/timeline/169.jpg"
  },
  {
    id: 170,
    date: "May 10th 2025",
    title: "Happy first date-iversary my love",
    description: "I see you :)",
    imageSrc: "public/timeline/170.jpg"
  },
 {
    id: 171,
    date: "May 10th 2025",
    title: "They played Who Knew at the sandwich shop",
    description: "Any dietary restrictions? Would you prefer if I got a veggy one too?",
    imageSrc: "public/timeline/171.jpg"
  },
 {
    id: 172,
    date: "May 10th 2025",
    title: "Beaver lake",
    description: "",
    imageSrc: "public/timeline/172.jpg"
  },
 {
    id: 173,
    date: "May 15th 2025",
    title: "Terrasse season rolls on",
    description: "The margarita slushie..",
    imageSrc: "public/timeline/173.jpg"
  },
 {
    id: 174,
    date: "May 17th 2025",
    title: "Farewell party",
    description: "Ohhh I feel a little sick",
    imageSrc: "public/timeline/174.jpg"
  },
  {
    id: 175,
    date: "May 20th 2025",
    title: "I hold you",
    description: "Amongst the tulips",
    imageSrc: "public/timeline/175.jpg"
  },
  {
    id: 176,
    date: "May 23rd 2025",
    title: "Slowly emptying out",
    description: "You're just a little girl putting all your little things into big boxes",
    imageSrc: "public/timeline/176.jpg"
  },
  {
    id: 177,
    date: "May 24th 2025",
    title: "A final morning on the balcony",
    description: "We fell in love out here",
    imageSrc: "public/timeline/177.jpg"
  },
  {
    id: 178,
    date: "May 24th 2025",
    title: "Samia",
    description: "After a delicious Ethiopian meal",
    imageSrc: "public/timeline/178.jpg"
  },
  {
    id: 179,
    date: "May 25th 2025",
    title: "Ducky goes to the doggy bar, everyone loves Ducky",
    description: "My shoulder still hurts from when Matt bumped into it",
    imageSrc: "public/timeline/179.jpg"
  },
  {
    id: 180,
    date: "May 26th 2025",
    title: "Little Duck sees the big CN tower",
    description: "With a puppicino in the park",
    imageSrc: "public/timeline/180.jpg"
  },
  {
    id: 181,
    date: "May 26th 2025",
    title: "You are an ethereal angel and the most beautiful girl I've ever seen in my life",
    description: "Shopped and read books at Kensington market (we also found the nuggets..)",
    imageSrc: "public/timeline/181.jpg"
  },
  {
    id: 182,
    date: "May 26th 2025",
    title: "Matt Berninger show",
    description: "Balcony view after a lovely terrasse meal",
    imageSrc: "public/timeline/182.jpg"
  },
  {
    id: 183,
    date: "May 27th 2025",
    title: "Who let baby drive!!!",
    description: "She can't see!!! I love Paris, Ontario",
    imageSrc: "public/timeline/183.jpg"
  },
  {
    id: 184,
    date: "May 27th 2025",
    title: "Back in Windsor",
    description: "A lovely spread in the garden with the whole family, after some dinner and hoops, a perfect evening",
    imageSrc: "public/timeline/184.jpg"
  },
  {
    id: 185,
    date: "June 2nd 2025",
    title: "Back home with your mom",
    description: "Flower shopping and hanging amongst them with wine",
    imageSrc: "public/timeline/185.jpg"
  },
  {
    id: 186,
    date: "June 2nd 2025",
    title: "Mekong with your mom",
    description: "Outside on a pedestrian Mont-Royal",
    imageSrc: "public/timeline/186.jpg"
  },
  {
    id: 187,
    date: "June 3rd 2025",
    title: "Ducky seems to be settling in nicely",
    description: "So small",
    imageSrc: "public/timeline/187.jpg"
  },
  {
    id: 188,
    date: "June 5th 2025",
    title: "Repot your plants day",
    description: "Our little jungle",
    imageSrc: "public/timeline/188.jpg"
  },
  {
    id: 189,
    date: "June 3rd 2025",
    title: "Beautiful sunset over beautiful baby",
    description: "",
    imageSrc: "public/timeline/189.jpg"
  },
  {
    id: 190,
    date: "June 6th 2025",
    title: "Sunflower blooms some friends",
    description: "Before a pesky little critter got a little snack",
    imageSrc: "public/timeline/190.jpg"
  },
  {
    id: 191,
    date: "June 7th 2025",
    title: "Ducky goes to ikea",
    description: "In his little sack, he was such a good shopper",
    imageSrc: "public/timeline/191.jpg"
  },
  {
    id: 192,
    date: "June 7th 2025",
    title: "Lemonade stand !",
    description: "",
    imageSrc: "public/timeline/192.jpg"
  },
  {
    id: 193,
    date: "June 7th 2025",
    title: "A trip through the garden at the pottery sale",
    description: "And some more lemonade :)",
    imageSrc: "public/timeline/193.jpg"
  },
  {
    id: 194,
    date: "June 8th 2025",
    title: "Bixi through the Old Port towards Atwater Market",
    description: "We got some carniverous plants and of course ",
    imageSrc: "public/timeline/194.jpg"
  },
  {
    id: 195,
    date: "June 10th 2025",
    title: "Ducky has his first Bo-bec",
    description: "We got some carniverous plants and of course ",
    imageSrc: "public/timeline/195.jpg"
  },
  {
    id: 197,
    date: "",
    title: "Which brings us to now",
    description: "My baby love perfect angel little girl. You are the love of my life. I'm so happy I get to spend eternity with you, but everything starts somewhere. For us it started this year and I've done my best to immortalize what has been the happiest and most love-filled time of my entire existence. I've assembled here around 200 photos so we can relive and remember all the seminal moments of our life together. It barely scratches the surface of all the amazing things we've done. However, at our 1 year mark I'm looking more towards the future and how many more incredible moments, days and cuddles we will have. I love you more than anything in this world. P.S. you will notice however I omitted one important aspect of our happy lives together.. don't worry I've made a collection of them in the gallery below. Click to see :)",
    imageSrc: "public/timeline/197.jpg"
  },




];

const Index = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [heroImage, setHeroImage] = useState(timelineEntries[0].imageSrc);
  const [isFading, setIsFading] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
    
    // Start playing background music after login
    setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.volume = 0.2;
        audioRef.current.play().catch(console.log);
      }
    }, 500);
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

    // Once authenticated, cycle through a random Hero image every 5 seconds.
    // Fade transition logic
  useEffect(() => {
    if (isAuthenticated) {
      const interval = setInterval(() => {
        setIsFading(true);
        setTimeout(() => {
          const randomEntry = timelineEntries[Math.floor(Math.random() * timelineEntries.length)];
          setHeroImage(randomEntry.imageSrc);
          setIsFading(false);
        }, 700); // Fade out duration
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isAuthenticated]);

  if (!isAuthenticated) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <div className="min-h-screen romantic-bg">
      {/* Background Music */}
      <audio
        ref={audioRef}
        loop
        preload="auto"
        className="hidden"
      >
        <source src="public/Who Knew.mp3" type="audio/wav" />
      
      </audio>

      {/* Music Control Button */}
      <div className="fixed top-4 right-4 z-50">
        <Button
          onClick={toggleMute}
          size="sm"
          variant="outline"
          className="bg-white/80 backdrop-blur-sm border-blue-200 text-cornflower-blue hover:bg-blue-50 transition-all duration-300"
        >
          {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
        </Button>
      </div>

      {/* Enhanced background overlay */}
      {/* Black overlay for fade effect */}
      <div className="relative">
      {/* Black overlay for fade effect */}
      <div
        className={`absolute inset-0 bg-black `}
      />
      <div className={`transition-opacity duration-500 ${isFading ? 'opacity-0' : 'opacity-100'}`}>
      {/* Hero Section */}
      <Hero 
        title="Happy anniversary Ruby" 
        subtitle="The year me and my perfect little angel baby love girl fell in love and began eternity together"
        imageSrc={heroImage}
      />
      </div>
      </div>
      {/* Timeline Section */}
      <Timeline entries={timelineEntries} />
      
      {/* Gallery Button Section */}
      <div className="py-20 flex justify-center relative z-10">
        <Button 
          size="lg" 
          className="group bg-gradient-to-r from-cornflower-blue via-blue-400 to-indigo-500 hover:from-cornflower-dark hover:via-blue-500 hover:to-indigo-600 text-white border-0 shadow-lg hover:shadow-xl transform hover:scale-102 transition-all duration-300 px-8 py-4 text-lg font-medium animate-romantic-glow"
          asChild
        >
          <Link to="/gallery" className="flex items-center gap-3">
            <span className="font-script text-xl">View Full Gallery</span>
            <GalleryHorizontal className="group-hover:translate-x-1 transition-transform duration-300" size={24} />
          </Link>
        </Button>
      </div>
      
      {/* Footer */}
      <footer className="py-12 text-center relative z-10">
        <p className="font-sans text-blue-300/60 text-lg">
          © {new Date().getFullYear()} Year in Review Timeline
        </p>
      </footer>
    </div>
  );
};

export default Index;
