"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import Image from "next/image";
import Swal from "sweetalert2";

interface Offering {
  name: string;
  paybill: string;
  account: string;
  description: string;
  // qrCode?: string;
}

interface GiveModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const offerings: Offering[] = [
  {
    name: "Offerings/Tithe",
    paybill: "599058",
    account: "specify your giving, eg. Tithe / Offering",
    description: "Giving to support church operations",
    // qrCode: "/qr-placeholder.svg",
  },
  {
    name: "RVTv",
    paybill: "247247",
    account: "358835",
    description: "Support towards our church media",
    // qrCode: "/qr-placeholder.svg",
  },
  {
    name: "Family Sacrifice",
    paybill: "247247",
    account: "308689",
    description: "Dedicating our family's altar",
    // qrCode: "/qr-placeholder.svg",
  },
  {
    name: "Kisumu Big Crusade",
    paybill: "247247",
    account: "628870",
    description: "In support of our upcoming big crusade with papa Lai",
    // qrCode: "/qr-placeholder.svg",
  },
  {
    name: "30th Anniversary",
    paybill: "247247",
    account: "166990",
    description: "Celebrating 30 years of ministry",
    // qrCode: "/qr-placeholder.svg",
  },
  // {
  //   name: "Missions",
  //   paybill: "247247",
  //   account: "004",
  //   description: "Supporting Missions and Outreach",
  // },
];

const backdrop = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const modal = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 50 },
};

export default function GiveModal({ isOpen, onClose }: GiveModalProps) {
  const copyToClipboard = async (text: string) => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
      } else {
        // fallback for mobile Safari
        const textarea = document.createElement("textarea");
        textarea.value = text;
        textarea.style.position = "fixed";
        document.body.appendChild(textarea);
        textarea.focus();
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
      }

      Swal.fire({
        icon: "success",
        title: "Copied!",
        text: `${text} copied to clipboard.`,
        timer: 1500,
        showConfirmButton: false,
      });
    } catch {
      Swal.fire({
        icon: "error",
        title: "Oops!",
        text: "Could not copy, please copy manually.",
      });
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/50 flex items-start justify-center z-50 pt-20"
          variants={backdrop}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={onClose} // close when clicking outside
        >
          <motion.div
            className="bg-white rounded-xl shadow-xl max-w-3xl w-full mx-4 p-6 overflow-y-auto max-h-[90vh]"
            variants={modal}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
          >
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Ways to Give</h2>
              <Button variant="ghost" onClick={onClose}>
                <X size={24} />
              </Button>
            </div>

            {/* Offerings Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {offerings.map((offering) => (
                <div
                  key={offering.name}
                  className="border rounded-xl p-4 flex flex-col items-center"
                >
                  <h3 className="text-lg font-semibold mb-2">
                    {offering.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2 text-center">
                    {offering.description}
                  </p>

                  <p className="text-sm font-medium mb-2 flex items-center gap-2">
                    Paybill:{" "}
                    <span className="font-bold">{offering.paybill}</span>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => copyToClipboard(offering.paybill)}
                    >
                      Copy
                    </Button>
                  </p>

                  <p className="text-sm font-medium mb-2 flex items-center gap-2">
                    Account:{" "}
                    <span className="font-bold">{offering.account}</span>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => copyToClipboard(offering.account)}
                    >
                      Copy
                    </Button>
                  </p>

                  {/* {offering.qrCode && (
                    <div className="mt-2 w-32 h-32 relative">
                      <Image
                        src={offering.qrCode}
                        alt={`${offering.name} QR`}
                        fill
                        className="object-contain"
                      />
                    </div>
                  )} */}
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="mt-6 flex justify-end">
              <Button variant="secondary" onClick={onClose}>
                Close
              </Button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
