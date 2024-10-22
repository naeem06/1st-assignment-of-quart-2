import Link from "next/link";

export default function Home() {

  return (
    <div> 
      <h1 className="bg-blue-500 text-white font-serif ">HOME PAGE</h1>
      <Link href={"/about"}>about</Link>
      <br/>
      <Link href={"/contacts"}>Contact Us</Link>
      <br/>
      <Link href={"/Service"}>Service</Link>
      <br/>
    </div>
  );
}
