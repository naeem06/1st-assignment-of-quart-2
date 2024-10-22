import Link from "next/link";

export default function Dev(){
    return(
    <div>
        <h1>This page is app development</h1>
         <Link href={"../Service"}>Go to home page</Link>
    </div>
    )
}