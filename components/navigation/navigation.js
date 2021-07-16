import {useEffect} from 'react'

export default function navigation() {
    useEffect(()=>{
        console.log("navigation component")
    })
    return (
        <nav>
            <p className="text-2xl font-bold text-grey-800">Navigation bar</p>
            <div className="flex">
                <a href="#"
                    className=" rounded bg-blue-500 hover:bg-blue-600 
                    text-white py-2 px-4">Logout</a>
            </div>
        </nav>
    );
}