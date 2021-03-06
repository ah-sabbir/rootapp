import Head from "next/head";
import React from "react";
import Header from "../components/Header/Header";
import app_icon from "../public/app_icon.png";
interface Props {
   
}
    
const AppLayout:React.FC<Props> = ({children}) =>{
    // state = { :  }
    
        return ( 
            <React.Fragment>
                        <Head>
                            <title>TaskTime - track the tasks to be faster.</title>
                            <link rel="icon" href="/app_icon.png"></link>
                            <meta name="description" content="TaskTime - track the tasks to be faster. Generate high Productivity" />
                            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossOrigin="anonymous"></link>
                            <link href="https://unpkg.com/tailwindcss/dist/tailwind.min.css" rel="stylesheet"></link>
                        </Head>
                        <div className="bg-black-alt font-sans leading-normal tracking-normal">
                            
                                <Header/>

                                {children} 
                                
                        </div>
            </React.Fragment> 
         );
    
}
 
export default AppLayout;