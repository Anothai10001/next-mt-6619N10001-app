import { FaReact, FaFigma, FaGithub, FaJs } from "react-icons/fa";
import { SiNextdotjs, SiHtml5 } from "react-icons/si";
 
export default function SkillsPage() {
  return (
    <div className="pt-6 pl-6">
 
      {/* TITLE */}
      <h1 className="text-[40px] font-semibold">
        My <span className="text-[#ff6a00]">Skills</span>
      </h1>
 
      {/* SKILL GRID */}
      <div className="grid grid-cols-4 gap-x-16 gap-y-14 mt-14">
 
        {/* React */}
        <div className="flex flex-col items-center">
          <div className="w-[150px] h-[190px] rounded-[999px]
            border border-[#ff6a00]
            flex flex-col items-center justify-center gap-3">
            <FaReact size={52} />
            <p className="text-[#ff6a00] text-[22px]">60%</p>
          </div>
          <p className="mt-4 text-[20px]">React</p>
        </div>
 
        {/* Figma */}
        <div className="flex flex-col items-center">
          <div className="w-[150px] h-[190px] rounded-[999px]
            border border-[#555]
            flex flex-col items-center justify-center gap-3">
            <FaFigma size={52} />
            <p className="text-[#ff6a00] text-[22px]">85%</p>
          </div>
          <p className="mt-4 text-[20px]">Figma</p>
        </div>
 
        {/* HTML/CSS */}
        <div className="flex flex-col items-center">
          <div className="w-[150px] h-[190px] rounded-[999px]
            border border-[#555]
            flex flex-col items-center justify-center gap-3">
            <SiHtml5 size={52} />
            <p className="text-[#ff6a00] text-[22px]">80%</p>
          </div>
          <p className="mt-4 text-[20px]">HTML/CSS</p>
        </div>
 
        {/* Next.js */}
        <div className="flex flex-col items-center">
          <div className="w-[150px] h-[190px] rounded-[999px]
            border border-[#555]
            flex flex-col items-center justify-center gap-3">
            <SiNextdotjs size={52} />
            <p className="text-[#ff6a00] text-[22px]">80%</p>
          </div>
          <p className="mt-4 text-[20px]">Next.js</p>
        </div>
 
        {/* JavaScript */}
        <div className="flex flex-col items-center">
          <div className="w-[150px] h-[190px] rounded-[999px]
            border border-[#555]
            flex flex-col items-center justify-center gap-3">
            <FaJs size={52} />
            <p className="text-[#ff6a00] text-[22px]">60%</p>
          </div>
          <p className="mt-4 text-[20px] text-center leading-tight">
            Java<br />Script
          </p>
        </div>
 
        {/* GitHub */}
        <div className="flex flex-col items-center">
          <div className="w-[150px] h-[190px] rounded-[999px]
            border border-[#555]
            flex flex-col items-center justify-center gap-3">
            <FaGithub size={52} />
            <p className="text-[#ff6a00] text-[22px]">90%</p>
          </div>
          <p className="mt-4 text-[20px]">GitHub</p>
        </div>
 
      </div>
    </div>
  );
}