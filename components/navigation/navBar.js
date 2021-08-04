import {useEffect} from 'react';
import Link from 'next/link';
export default function navigation() {
    // useEffect(()=>{
    //     console.log("navigation component")
    // })
    return (
        <div className="flex w-1/8 h-full justify-center items-center bg-myColor-leftSide text-white-light">
            {/* <div className="flex w-1/8 h-full justify-center items-center bg-myColor-leftSide text-white-light"> */}
                <ul className="flex-col w-full">
                    <li className="px-2 py-1 mx-1 font-Qahiri font-bold tracking-wider uppercase hover:bg-a_hover-bg text-center">
                        <a href="#">Home</a>
                    </li>
                    <li className="px-2 py-1 mx-1  font-Qahiri font-bold tracking-wider uppercase hover:bg-a_hover-bg text-center">
                        <a href="#">About</a>
                    </li>
                    <li className="px-2 py-1 mx-1  font-Qahiri font-bold  tracking-wider uppercase hover:bg-a_hover-bg text-center">
                        <a href="#">Contact</a>
                    </li>
                    <li className="px-2 py-1 mx-1  font-Qahiri font-bold tracking-wider uppercase hover:bg-a_hover-bg text-center">
                        <a href="#">Blog</a>
                    </li>
                    <li className="px-2 py-1 mx-1  font-Qahiri font-bold tracking-wider uppercase hover:bg-a_hover-bg text-center">
                        <Link href="/auth/registration">
                            <a >Sign up</a>
                        </Link>
                    </li>
                </ul>
        </div>
    );
}