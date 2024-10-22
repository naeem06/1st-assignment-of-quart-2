import Link from "next/link";
export default function Service(){
return(
    <div>
        <h1>Service</h1>
        <Link href={"/"}>return</Link>
        <br/>
        <Link href={"/Service/appdev"}>APP DEVELOPMENT</Link><br />
        <Link href={"/Service/webDev"}>WEB DEVELOPMENT</Link>
    </div>
)
}