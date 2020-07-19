import React from 'react';
import Classes from './OurStory.css';
import Paragraph from '../../Components/UI/Paragraph/Paragraph';

const OurStory = () => (
  <div className={Classes.OurStory}>
    <Paragraph 
      imgURL=""
      headerContent="Who we are"
      alt=""
      float="right"
      content="We are Dr. Elizabeth Kingshott Cary and Tavish Kingshott Cary. Elizabeth is a travelling Physical Therapist and Tavish is a novice Front End web Developer working independently and gaining his skills."/>
    <Paragraph 
      imgURL="https://firebasestorage.googleapis.com/v0/b/adventure-blog-286e8.appspot.com/o/OurStory%2FPic-01.jpg?alt=media&token=8bea4bc5-eb7d-4d01-bac6-7291a4a18be5"
      headerContent="Our Story"
      alt=""
      float="left"
      content="Let’s just say when we got married in October of 2018, we were planning on being in Nashville for several years, at least until Tavish graduated from a local college with a degree in Biblical Studies in May 2020, but things changed. After two years of bible school, Tavish chose to leave that education behind and teach himself a whole new skill set. A close friend of Elizabeth’s, Crystal, was an Occupational Therapist who was moving to California to start her travelling career and we decided to follow with a desire to see the United States while growing closer together."/>
    <Paragraph 
      imgURL="https://firebasestorage.googleapis.com/v0/b/adventure-blog-286e8.appspot.com/o/OurStory%2Fall-packed-up.jpg?alt=media&token=f2d2e28d-b627-4431-a7d1-cea71af49893"
      headerContent=""
      alt=""
      float="right"
      content="So we packed up the car with a decreased version of our stuff and our two cats and started driving across the country from Nashville to Central Valley California. After 6 months of travelling through California, we were missing a sense of home and decided to buy a used 5th wheel RV and diesel truck to travel. It was stressful at first but we (mostly Tavish) learned quickly on our feet with towing, hook-ups and repairs (which up to this point we have done all on our own). Now with this Pandemic and much job uncertainty it is calming to know that we will always have our home."/>
    <Paragraph 
      imgURL="https://firebasestorage.googleapis.com/v0/b/adventure-blog-286e8.appspot.com/o/OurStory%2FPic-03.jpg?alt=media&token=8d2aab18-b60f-4b60-81d5-3fb7c0a9c267"
      headerContent="Current Situation"
      alt=""
      float="left"
      content="At the End of February, we moved out of California and drove to southern Louisiana, just outside of New Orleans. It was our first long haul with the camper which was not shy of its own lessons, see our RV cross country blog post for more information. Due to the Pandemic we only got a short experience of New Orleans culture before everything shut down. We have been using this time to renovate our camper on the inside to look brighter and more modern complete with painting all walls and cabinets, changing the countertops, installing a new AC unit and hanging new blinds to match. We plan to be in this location through the middle of July, after which we plan to start travelling back north for the summer and Fall."/>
  </div>
)

export default OurStory;