import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";

export default function MyCard() {
  return (
    <div className="
      bg-[#1d1c1d] border border-[#757575]
      rounded-2xl
      w-[395px] h-[695px]
      px-10 py-12
      flex flex-col justify-between items-center
    ">

      {/* NAME */}
      <h2 className="text-[32px] font-semibold mb-6">
        <span className="text-orange-500">A</span>nothai
      </h2>

      {/* AVATAR */}
      <div className="w-[325px] h-[500px] rounded-xl overflow-hidden mb-6">
  <Image
  src="/ano.jpg"
  alt="ano"
  width={325}
  height={500}
  className="rounded-xl object-cover"
/>
</div>

      {/* STU ID */}
      <p className="text-[24px] text-gray-300">
        STU ID: 6619N10001
      </p>

      {/* ROLE */}
      <p className="text-[20px] text-gray-500 mb-6">
        Fullstack Web Developer
      </p>

      {/* SOCIAL */}
      <div className="flex gap-6 mb-10 text-gray-300">
        <Facebook size={40} />
        <Twitter size={40} />
        <Instagram size={40} />
        <Linkedin size={40} />
      </div>

      {/* BUTTON */}
      <button className="
        w-[312px] h-[58px]
        bg-orange-500
        rounded-xl
        text-[29px] font-semibold
        text-black
        flex items-center justify-center
      ">
        HIRE ME !
      </button>

    </div>
  );
}