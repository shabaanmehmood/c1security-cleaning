import Image from "next/image";
import React from "react";

interface TestimonialProps {
  name: string;
  role: string;
  text: string;
  avatar: string;
}

const Testimonial: React.FC<TestimonialProps> = ({
  name,
  role,
  text,
  avatar,
}) => {
  return (
    <>
      <div className="bg-gray-50 border rounded-2xl p-6 max-w-md mx-auto text-center shadow">
        <Image
          src={avatar}
          alt={name}
          width={64}
          height={64}
          className="rounded-full mx-auto mb-4 object-cover"
        />
        <p className="text-gray-700 italic mb-4">“{text}”</p>
        <h4 className="font-semibold o-outfit text-gray-900">{name}</h4>
        <p className="text-sm text-gray-500">{role}</p>
      </div>
    </>
  );
};

export default Testimonial;
