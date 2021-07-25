import {useEffect} from 'react'

export default function navigation() {
    // useEffect(()=>{
    //     console.log("navigation component")
    // })
    return (
        <div className="flex w-40 h-full justify-center items-center bg-green-900">
                <ul className="flex-col">
                    <li className="px-2 py-1 mx-1 font-Qahiri font-bold text-red-500 tracking-wider uppercase hover:bg-blue-700 rounded-md">
                        <a href="#">Home</a>
                    </li>
                    <li className="px-2 py-1 mx-1  font-Qahiri font-bold text-red-500 tracking-wider uppercase hover:bg-blue-700 rounded-md">
                        <a href="#">About</a>
                    </li>
                    <li className="px-2 py-1 mx-1  font-Qahiri font-bold text-red-500 tracking-wider uppercase hover:bg-blue-700 rounded-md">
                        <a href="#">Contact</a>
                    </li>
                    <li className="px-2 py-1 mx-1  font-Qahiri font-bold text-red-500 tracking-wider uppercase hover:bg-blue-700 rounded-md">
                        <a href="#">Blog</a>
                    </li>
                </ul>
        </div>
    );
}