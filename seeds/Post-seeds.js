const { Post } = require('../models');

const postData = [
{
    title: "New UK regulator set to curb big tech's power over news publishers",
    post_content:" Britain's news regulator for tech giants Facebook and Google launches on Wednesday with the initial remit to see if a code of conduct could improve the balance of power between the platforms and the news publishers.",
    user_id: 3
},
{
    title: "NHS Covid-19 contact tracing app to share QR code venue check-ins",
    post_content:"In England and Wales contact tracing app will soon ask users to share details of venues they have check into, if they test positive for the coronavirus. The update to the NHS Covid-19 app will be delployed ahead of shops reopening in both nations on 12 April, as well as outdoor hospitality in England.",
    user_id: 1
},
{
    title: "Pretty Little Thing ad by TikTok creator house banned",
    post_content:"An advert for High Street clothing brand Pretty Little Thing, filmed by TikTok creator house, has been banned by the Advertising Standards Authority. The video was made by The Wave House, a collection of six social media influencers who live in a mansion together. It failed to make clear the post was 'a marketing communication', the ASA said.",
    user_id: 2
},
{
    title: "Tool checks phone numbers from Facebook data breach",
    post_content:"People can now enter their phone numbers into a website to see if they appear in a recent Facebook data breach. Details of more than 530 million people were leaked in a database online, l;argely consisting of mobile numbers.",
    user_id: 3
},
{
    title: "Cryptocurrency inflows hit all-time high of $4.5 billion in first-quarter: Coinshares",
    post_content:" Inflows into cryptocurrency funds and products hit a record $4.5 billion in the first quarter, suggesting increased institutional participation in the once- maligned sector, data from...",
    user_id: 5
},
{
    title: "Sonos Roam Review: Portable Tunes for the Outdoors, Alexa for the Shower",
    post_content:"The $169 Sonos Roam can play music over Airplay 2 or Bluetooth, with Alexa or Google Assistant voice control. It's battery powered and water resistant. And it weighs less than a pound!",
    user_id: 4
},
]


const postSeeds = () => Post.bulkCreate(postData); 

module.exports = postSeeds;



