"use client"

import { motion } from "framer-motion"
import { toast } from "sonner"

export default function SecondaryButton({children, classname, onclick}) {
  return (
    <motion.button
    transition={{ duration: 0.4, bounce: "spring" }}
    className={`font-bold xl:text-lg tracking-wide border border-[--yellow] px-4 py-2 text-[--yellow] hover:bg-[--yellow] hover:text-[--black] transition-all rounded-full ${classname}`}
    onClick={onclick}
    >
        {children}
    </motion.button>
  )
}