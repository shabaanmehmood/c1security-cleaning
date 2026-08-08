// components/about/TeamCard.tsx
import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaXTwitter, FaLinkedin,FaMailchimp } from "react-icons/fa6";
export interface TeamMember {
  id: number;
  name: string;
  position: string;
  image: string;
  imageWidth?: number;
  imageHeight?: number;
  email?: string;
  facebook?: string;
  twitter?: string;
  linkedin?: string;
}

export interface TeamCardProps {
  member: TeamMember;
}
export default function TeamCard({ member }: { member: TeamMember }) {
  return (
    <div className="group overflow-hidden rounded-2xl bg-white/80 p-4 shadow-md backdrop-blur-sm border border-slate-200 hover:shadow-xl transition-all duration-300">
      {/* Image Wrapper */}
      <div className="relative overflow-hidden rounded-xl">
        <Image
          src={member.image}
          alt={member.name}
          width={member.imageWidth || 400}
          height={member.imageHeight || 500}
          className="h-72 w-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Info Section */}
      <div className="mt-4 text-center">
        <h3 className="text-lg font-bold text-slate-900">{member.name}</h3>
        <p className="text-xs font-semibold text-blue-600 uppercase tracking-wider mt-0.5">
          {member.position}
        </p>

        {/* Social Links */}
        <div className="mt-4 flex items-center justify-center gap-2">
          {member.email && (
            <Link
              href={`mailto:${member.email}`}
              className="p-2 rounded-full bg-slate-100 text-slate-600 hover:bg-blue-600 hover:text-white transition-colors"
              aria-label={`Email ${member.name}`}
            >
              <FaMailchimp className="h-4 w-4" />
            </Link>
          )}

          {member.linkedin && (
            <Link
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-slate-100 text-slate-600 hover:bg-blue-600 hover:text-white transition-colors"
              aria-label={`${member.name}'s LinkedIn`}
            >
              <FaLinkedin className="h-4 w-4" />
            </Link>
          )}

          {member.twitter && (
            <Link
              href={member.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-slate-100 text-slate-600 hover:bg-blue-600 hover:text-white transition-colors"
              aria-label={`${member.name}'s Twitter`}
            >
              <FaXTwitter className="h-4 w-4" />
            </Link>
          )}

          {member.facebook && (
            <Link
              href={member.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-slate-100 text-slate-600 hover:bg-blue-600 hover:text-white transition-colors"
              aria-label={`${member.name}'s Facebook`}
            >
              <FaFacebook className="h-4 w-4" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}