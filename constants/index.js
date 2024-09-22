import Chair from "@/assets/chair.jpeg";
import ViceChair from "@/assets/vicechair.jpeg";

export const NavItems = [
    {
        title: "Home",
        link: "/"
    },
    {
        title: "About",
        link: "/#about"
    },
    // {
    //     title: "Speakers",
    //     link: "/#speakers"
    // },
    // {
    //     title: "Sponsors",
    //     link: "/#sponsors"
    // },
    {
        title: "Become A Sponsor",
        link: "/becomeasponsor"
    },
    {
        title: "Contacts",
        link: "/#contacts"
    }
]

export const contactData = [
  { 
    name: 'Nikhil M', 
    title: 'Chairperson', 
    phone: '+91 81295 74473',
    image: Chair
  },
  { 
    name: 'K V Varun Krishnan', 
    title: 'Vice Chairperson', 
    phone: '+91 94978 07759',
    image: ViceChair
  }
];

export const BecomeSponsorTableHeadData = ["", "Platinum", "Gold", "Silver", "Bronze", "Supporter"]

export const BecomeSponsorRowData = [
    {
      title:"Contribution in INR",
      values:["₹50k", "₹30k", "₹15k", "₹10k", "₹6k "],
    },
    {
      title:"Contribution in USD",
      values:["$364.86", "$304.5", "$182.43", "$121.62", "$72.97"],
    },
    {
      title:"Logo on sponsor webpage",
      values:["✓", "✓", "✓", "✓", "✓"],
    },
    {
  
      title:"Logo on Delegate Kit",
      values:["✓", "✓", "✓", "✓", "✓"],
      startColumn: 1
    },
    {
  
      title:"Logo on 10 min presentation",
      values:["✓", "✓", "✓", "✓", ""],
      startColumn:2
      
    },
    {
      title:"Logo on stage backdrop",
      values:["✓", "✓", "✓", "", ""],
      startColumn: 3,
      
    },
    {
      title:"Complimentary tickets",
      values: ["✓", "✓", "", "", ""],
      startColumn:4,
      
    },
    {
      title:"Logo on promotional materials",
      values: ["✓", "✓", "", "", ""],
      startColumn: 4
      
    },
    {
      title:"Standees/Banners at venue",
      values: ["✓", "✓", "", "", ""],
      startColumn:5,
      
    },
    {
      title:"Mention in social media release",
      values:["✓", "✓", "", "", ""],
      startColumn: 5
      
    },
    {
      title:"Brochures/Flyers can be distributed",
      values: ["✓", "", "", "", ""],
      startColumn: 5
      
    },
    {
      title:"Stall can be set up",
      values:["✓", "", "", "", ""],
      startColumn: 5
      
    },
    {
      title:"Promotion in pre-event session ",
      values:["✓", "", "", "", ""],
      startColumn: 5
      
    },
    {
      title: "Logo on speaker's kit",
      values: ["✓", "", "", "", ""],
      startColumn: 5
      
    },
    {
      title:"Product promotion in upcoming events by FOSS MEC",
      values: ["✓", "", "", "", ""],
      startColumn: 5
      
    }
]

export const speakersList = [
  {
    name: "Andrew Bastin",
    designation: "CTO, Hoppscotch",
    img: "https://cloud.disroot.org/apps/files_sharing/publicpreview/tkPPNJbggKnygor?file=/&fileId=256717046&x=3360&y=2100&a=true",
    url: "https://andrewbast.in/"
  },
  {
    name: "Athul Cyriac Ajay",
    designation: "Platform Engineer, Frappe",
    img: "https://avatars.githubusercontent.com/u/40897573?v=4",
    url: "https://athulcyriac.in/"
  },
  {
    name: "Sahil Dhiman",
    designation: "Debian Developer",
    img: "https://cloud.disroot.org/apps/files_sharing/publicpreview/fFmgrDfHzWNBN8R?file=/&fileId=256716670&x=3360&y=2100&a=true",
    url: "https://blog.sahilister.in/"
  },
  {
    name: "Kurian Benoy",
    designation: "Volunteer, SMC",
    img: "https://kurianbenoy.com/posts/images/fossasia_summit_2019/my_lighting_talk.jpg",
    url: "https://kurianbenoy.com"
  },
  {
    name: "Abraham Raji",
    designation: "Debian Developer",
    img: "https://avatars.githubusercontent.com/u/32333507?v=4",
    url: "https://abrahamraji.in"
  },
]