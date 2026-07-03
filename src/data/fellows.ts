import akankshyaImg from "@/assets/fellows/akankshya.webp";
import nthabisengImg from "@/assets/fellows/nthabiseng.webp";
import tiaImg from "@/assets/fellows/tia.webp";
import gnanImg from "@/assets/fellows/gnan.webp";
import vedikaImg from "@/assets/fellows/vedika.webp";
import bhuvanashreeImg from "@/assets/fellows/bhuvanashree.webp";
import suzanneImg from "@/assets/fellows/suzanne.webp";
import purvaImg from "@/assets/fellows/purva.webp";
import samriddhiImg from "@/assets/fellows/samriddhi.webp";
import vaishnaviImg from "@/assets/fellows/vaishnavi.webp";
import khairunImg from "@/assets/fellows/khairun.webp";
import unaysahImg from "@/assets/fellows/unaysah.webp";

export type Fellow = {
  name: string;
  city: string;
  state: string;
  country: string;
  college: string;
  year: string;
  linkedin: string;
  image?: string;
  idea?: string;
};

export const FELLOWS: Fellow[] = [
  {
    name: "Akankshya Jena",
    city: "Bhubaneswar",
    state: "Odisha",
    country: "India",
    college: "Siksha 'O' Anusandhan",
    year: "3rd year",
    linkedin: "https://www.linkedin.com/in/akankshya-jena-80971b338",
    image: akankshyaImg,
    idea: "AWAAZ — a free, multilingual, voice-first grievance platform that turns any citizen's complaint into a properly formatted letter, finds the right officer, and guides follow-up.",
  },
  {
    name: "Nthabiseng Hlongwane",
    city: "Durban",
    state: "KwaZulu Natal",
    country: "South Africa",
    college: "University of KwaZulu Natal",
    year: "2nd year",
    linkedin: "https://www.linkedin.com/in/NthabisengHlongwane",
    image: nthabisengImg,
    idea: "A platform to translate easily and accurately between the native local languages of Africa.",
  },
  {
    name: "Tia Sharma",
    city: "Bangalore",
    state: "Karnataka",
    country: "India",
    college: "Sambhram Institute of Technology",
    year: "2nd year",
    linkedin: "https://www.linkedin.com/in/tia-sharma-001879331/",
    image: tiaImg,
    idea: "A neutral, AI-driven transparency engine that tracks what politicians say versus what they actually do, giving citizens the facts to decide the truth for themselves.",
  },
  {
    name: "Gnan Sruthi R",
    city: "Coimbatore",
    state: "Tamil Nadu",
    country: "India",
    college: "Sri Eshwar College of Engineering",
    year: "2nd year",
    linkedin: "https://www.linkedin.com/in/gnan-sruthi-r-1a99492b3",
    image: gnanImg,
    idea: "A data-driven tool that helps junior PMs prioritize features and build roadmaps by cutting through competing stakeholder demands.",
  },
  {
    name: "Vedika Sharma",
    city: "Aligarh",
    state: "Uttar Pradesh",
    country: "India",
    college: "ZHCET, Aligarh Muslim University",
    year: "1st year",
    linkedin: "https://www.linkedin.com/in/vedika-sharma-286b793a1",
    image: vedikaImg,
    idea: "An AI-powered pitch deck coach that helps early-stage founders turn unclear ideas into investor-ready narratives with honest feedback on what's weak.",
  },
  {
    name: "Bhuvanashree S",
    city: "Bangalore",
    state: "Karnataka",
    country: "India",
    college: "Don Bosco Institute of Technology",
    year: "4th year",
    linkedin: "https://www.linkedin.com/in/bhuvanashree-s-5525a9258/",
    image: bhuvanashreeImg,
    idea: "Veda — an AI-powered learning assistant.",
  },
  {
    name: "Suzanne Daniel Thomas",
    city: "Pune",
    state: "Maharashtra",
    country: "India",
    college: "AISSMS Institute of Information Technology",
    year: "1st year",
    linkedin: "https://www.linkedin.com/in/suzanne-daniel-thomas-313ba4371/",
    image: suzanneImg,
    idea: "TimeMax — an AI planning assistant that turns your tasks, deadlines and energy level into a realistic daily timetable, evolving into an adaptive productivity copilot.",
  },
  {
    name: "Purva Upadhyay",
    city: "Pune",
    state: "Maharashtra",
    country: "India",
    college: "SPPU",
    year: "2nd year",
    linkedin: "https://www.linkedin.com/in/purva-upadhyay-abab2b338",
    image: purvaImg,
  },
  {
    name: "Samriddhi Dua",
    city: "Chandigarh",
    state: "Punjab",
    country: "India",
    college: "Chandigarh Engineering College",
    year: "2nd year",
    linkedin: "https://www.linkedin.com/in/samriddhi-dua-55862a322",
    image: samriddhiImg,
    idea: "Praedicta — an AI-powered geo-spatial civic intelligence system that predicts potholes, waterlogging and garbage overflow so authorities can act proactively.",
  },
  {
    name: "Vaishnavi Desale",
    city: "Nashik",
    state: "Maharashtra",
    country: "India",
    college: "K. K. Wagh College of Engineering",
    year: "2nd year",
    linkedin: "https://www.linkedin.com/in/vaishnavidesale27",
    image: vaishnaviImg,
    idea: "Skill Gap Analyzer — a career guidance system that maps a student's resume against real job descriptions and turns the gap into an actionable learning roadmap.",
  },
  {
    name: "Khairun Nissa",
    city: "Ladakh",
    state: "Ladakh",
    country: "India",
    college: "NIT Srinagar",
    year: "3rd year",
    linkedin: "https://www.linkedin.com/in/khairun-nissa-62956b2b9",
    image: khairunImg,
    idea: "SnapFind — helps photographers find and segregate the photos clicked at an event, automating hours of manual sorting.",
  },
  {
    name: "Unaysah (Humera)",
    city: "San Jose",
    state: "California",
    country: "USA",
    college: "Mission College",
    year: "Class of 2028",
    linkedin: "https://www.linkedin.com/in/unaysah-ron",
    image: unaysahImg,
  },

];

export const FELLOWS_STATS = {
  fellows: FELLOWS.length, // 12
  countries: 3,
  states: 9,
};

export function fellowInitials(name: string) {
  return name
    .replace(/\(.*?\)/g, "")
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((n) => n[0]?.toUpperCase() ?? "")
    .join("");
}
