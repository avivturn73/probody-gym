"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

export default function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1400);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-ink"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-28 h-28 md:w-36 md:h-36"
          >
            <Image
              src="/images/logo.jpg"
              alt="PRO BODY GYM"
              fill
              className="object-contain rounded-xl"
              priority
            />
          </motion.div>
          <div className="mt-8 h-[3px] w-40 md:w-56 bg-line rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-l from-red-400 via-red-600 to-red-800"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
            />
          </div>
          <motion.p
            className="mt-5 text-xs tracking-[0.4em] text-muted section-label"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            PRO BODY GYM
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
