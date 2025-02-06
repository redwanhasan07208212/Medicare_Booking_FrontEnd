import doctorImg01 from "../images/doctor-img01.webp";
import doctorImg02 from "../images/doctor-img02.webp";
import doctorImg03 from "../images/doctor-img03.webp";

export const doctors = [
  {
    id: "01",
    name: "Dr. Imran Hossain",
    specialty: "Cardiologist",
    avgRating: 4.9,
    totalRating: 315,
    photo: doctorImg01,
    totalPatients: 1800,
    hospital: "Apollo Hospital, Dhaka.",
  },
  {
    id: "02",
    name: "Dr. Ayesha Rahman",
    specialty: "Orthopedic Surgeon",
    avgRating: 4.7,
    totalRating: 298,
    photo: doctorImg02,
    totalPatients: 1650,
    hospital: "Square Hospital, Dhaka.",
  },
  {
    id: "03",
    name: "Dr. Nazmul Kabir",
    specialty: "Pediatrician",
    avgRating: 4.6,
    totalRating: 250,
    photo: doctorImg03,
    totalPatients: 1400,
    hospital: "United Hospital, Dhaka.",
  },
];
