import MyCard from "./MyCard";
import SideMenu from "./SideMenu";

export default function PageTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-black min-h-screen flex items-center justify-center">

      {/* MAIN FRAME */}
      <div
        className="
          bg-[#1d1c1d]
          w-[1525px]
          h-[895px]
          rounded-3xl
          p-8
          grid
          grid-cols-[395px_1fr_60px]
          gap-8
          overflow-hidden
        "
      >
        {/* LEFT : MY CARD */}
        <div className="flex items-center justify-center">
          <MyCard />
        </div>

        {/* CENTER : PAGE CONTENT */}
        <div className="w-full h-full">
          {children}
        </div>

        {/* RIGHT : SIDE MENU */}
        <div className="flex items-center justify-center">
          <SideMenu />
        </div>
      </div>
    </div>
  );
}