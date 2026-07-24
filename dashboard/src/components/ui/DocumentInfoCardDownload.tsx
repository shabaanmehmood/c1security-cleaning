"use client";

import React from "react";
import SpotlightCard from "../SpotlightCard";
import { Download, FileText } from "lucide-react";
import SpecularButton from "../SpecularButton";

interface DocumentInfoCardDownloadProps {
  pdfUrl?: string;
  fileName?: string;
}

function DocumentInfoCardDownload({
  pdfUrl = "/documents/our-document.pdf",
  fileName = "Document-Info.pdf",
}: DocumentInfoCardDownloadProps) {
  const handleDownload = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    const link = document.createElement("a");
    link.href = pdfUrl;
    link.setAttribute("download", fileName);

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <SpotlightCard
      className="custom-spotlight-card p-6 sm:p-8 rounded-3xl bg-slate-900 border border-slate-800 text-white max-w-md w-full shadow-xl flex justify-center items-center"
      spotlightColor="rgba(41, 52, 212, 0.72)"
    >
      <div className="flex flex-col items-start gap-4 w-full">
        {/* Header Icon & Title */}
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
            <FileText className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">
              Resources
            </span>
            <h3 className="text-xl font-bold text-white tracking-tight">
              Our Docs Download Info
            </h3>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-slate-400 leading-relaxed">
          Access our complete official documentation and specifications in PDF format for offline reading and records.
        </p>

        {/* Action Link & SpecularButton */}
        <a
          href={pdfUrl}
          onClick={handleDownload}
          className="w-full mt-2 block cursor-pointer"
        >
          <SpecularButton
            size="lg"
            radius={18}
            tint="#ffffff"
            tintOpacity={0}
            blur={0}
            textColor="#f5f5f5"
            lineColor="#ffffff"
            baseColor="#525252"
            intensity={1}
            shineSize={10}
            shineFade={40}
            thickness={1}
            speed={0.35}
            followMouse
            proximity={250}
            autoAnimate={false}
            className="w-full flex items-center justify-center gap-2"
          >
            <Download className="w-4 h-4 inline-block" />
            <span> Download PDF</span>
          </SpecularButton>
        </a>
      </div>
    </SpotlightCard>
  );
}

export default DocumentInfoCardDownload;