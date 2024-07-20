"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: 'Phone',
    description: '(+1) 413 949 3383'
  },
  {
    icon: <FaEnvelope />,
    title: 'Email',
    description: 'amar.master.work@gmail.com'
  },
  {
    icon: <FaMapMarkerAlt />,
    title: 'Address',
    description: 'Washington Hall - UMass, 181 Fearing Street, Amherst, MA'
  }
]

export const Contact = () => {
  return <motion.section>contact page</motion.section>;
};

export default Contact;
