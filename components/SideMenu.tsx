import Link from "next/link";

export default function SideMenu() {
  return (
    <div style={{
      width: "200px",
      padding: "20px",
      backgroundColor: "#f4f4f4",
      height: "100vh"
    }}>
      <h2>Menu</h2>

      <ul style={{ listStyle: "none", padding: 0 }}>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/aboutme">About Me</Link></li>
        <li><Link href="/eduexp">Education</Link></li>
        <li><Link href="/projects">Projects</Link></li>
        <li><Link href="/skills">Skills</Link></li>
        <li><Link href="/contactme">Contact</Link></li>
      </ul>
    </div>
  );
}