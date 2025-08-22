"use client";

import { motion } from "framer-motion";

interface AvailabilityStatusProps {
  status: "available" | "busy";
  className?: string;
}

export const AvailabilityStatus = ({ status, className = "" }: AvailabilityStatusProps) => {
  const isAvailable = status === "available";
  const statusText = isAvailable ? "Disponible" : "En mission";
  const statusColor = isAvailable ? "bg-green-500" : "bg-red-500";
  const glowColor = isAvailable ? "shadow-green-500/50" : "shadow-red-500/50";

  return (
    <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 ${className}`}>
      <motion.div
        className={`w-2 h-2 rounded-full ${statusColor} shadow-lg ${glowColor}`}
        animate={{
          boxShadow: [
            `0 0 0 0 ${isAvailable ? 'rgba(34, 197, 94, 0.7)' : 'rgba(239, 68, 68, 0.7)'}`,
            `0 0 0 8px ${isAvailable ? 'rgba(34, 197, 94, 0)' : 'rgba(239, 68, 68, 0)'}`,
          ],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
        {statusText}
      </span>
    </div>
  );
};