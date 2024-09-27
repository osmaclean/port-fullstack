'use client'

import { motion } from 'framer-motion'
import React from 'react'

export default function Template({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <motion.div
      initial={{ y: 40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ease: 'easeInOut' }}
      className="flex flex-col items-center justify-center"
    >
      {children}
    </motion.div>
  )
}
