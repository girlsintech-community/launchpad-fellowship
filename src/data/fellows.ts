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
import anishImg from "@/assets/fellows/anish.webp";

export type Fellow = {
  name: string;
  city: string;
  state: string;
  country: string;
  college: string;
  year: string;
  linkedin: string;
  image?: string;
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
  },
  {
    name: "Anish Kashyap",
    city: "Bangalore",
    state: "Karnataka",
    country: "India",
    college: "Polaris School of Technology",
    year: "1st year",
    linkedin: "https://www.linkedin.com/in/anish-kashyap-534779389",
    image: anishImg,
  },
  {
    name: "Unaysah (Humera)",
    city: "San Jose",
    state: "California",
    country: "USA",
    college: "Mission College",
    year: "Class of 2028",
    linkedin: "https://www.linkedin.com/in/unaysah-ron",
  },
];

export const FELLOWS_STATS = {
  fellows: FELLOWS.length, // 13
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
