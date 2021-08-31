import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import Navigation from '../components/navigation/navBar'
import logoImage from '../public/favicon.png'
import axios from 'axios'
import { reject } from 'lodash'

export default function Home() {
    const [data, setData] = useState([])
    const [keyPressCount, setKeyPressCount] = useState(0)
    const [mouseCount, setMouseCount] = useState(0)
    const [productiveTime, setProductiveTime] = useState(0)
    useEffect(()=>{
        loadData()
    },[])

    const loadData = ()=>{
        fetch("http://127.0.0.1:2000/api/tasks",
        {
            method:'GET',
            mode: 'cors',
            headers: {
              'Access-Control-Allow-Origin':'*'
            }
        }
        )
        .then(res=> res.json())
        .then(data => {
            let pTime = 0
            data.data.forEach(element => {
                const event = element.events
                if(event){
                    setMouseCount(Math.round((event.mousemove+event.mouseclick)/2,2))
                    setKeyPressCount(event.keypress) 
                }
                if(element.cpuTime){
                    pTime += Number(element.cpuTime)
                }
            });
            setProductiveTime(pTime)
        })
        .catch(reject=>{
            console.log(reject)
        })
    }

    const myLoader = ({ src }) => {
      return {src}
    }

    const chart = ()=>{
      return 0
    }
  return (
    <div>
      <Head>
      <meta charSet="UTF-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <meta httpEquiv="X-UA-Compatible" content="ie=edge"/>
      <title>Task Time</title>
      <meta name="description" content="description here"/>
      <meta name="keywords" content="keywords,here"/>
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossOrigin="anonymous"/>
      <link href="https://unpkg.com/tailwindcss/dist/tailwind.min.css" rel="stylesheet"/> 
      {/* <script async src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.2/Chart.bundle.min.js" integrity="sha256-XF29CBwU1MWLaGEnsELogU6Y6rcc5nCkhhx89nFMIDQ=" crossOrigin="anonymous"/> */}
      </Head>
      <div id="header" className="bg-gray-900 fixed w-full z-10 top-0 shadow">
        <div className="w-full container mx-auto flex flex-wrap items-center mt-0 pt-3 pb-3 md:pb-0">
          <div className="w-1/2 pl-2 md:pl-0">
            <a className="text-gray-100 text-base xl:text-xl no-underline hover:no-underline font-bold"  href="#"> 
              <i className="fas fa-tachometer-alt text-green-400 pr-3"></i> Task Time
            </a>
                </div>
          <div className="w-1/2 pr-0">
            <div className="flex relative inline-block float-right">
            
              <div className="relative text-sm text-gray-100">
                <button id="userButton" className="flex items-center focus:outline-none mr-3">
                {/* <Image className="w-8 h-8 rounded-full mr-4" width={100} height={100} loader={myLoader} src={`https://i.pravatar.cc/152`} alt="Avatar of User" layout="responsive"/>*/} <span className="hidden md:inline-block text-gray-100">Hi, User</span> 
                {/* <svg className="pl-2 h-2 fill-current text-gray-100" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 129 129" xmlns:xlink="http://www.w3.org/1999/xlink" enableBackground="new 0 0 129 129"><g><path d="m121.3,34.6c-1.6-1.6-4.2-1.6-5.8,0l-51,51.1-51.1-51.1c-1.6-1.6-4.2-1.6-5.8,0-1.6,1.6-1.6,4.2 0,5.8l53.9,53.9c0.8,0.8 1.8,1.2 2.9,1.2 1,0 2.1-0.4 2.9-1.2l53.9-53.9c1.7-1.6 1.7-4.2 0.1-5.8z"/></g></svg> */}
                </button>
                <div id="userMenu" className="bg-gray-900 rounded shadow-md mt-2 absolute mt-12 top-0 right-0 min-w-full overflow-auto z-30 invisible">
                  <ul className="list-reset">
                    <li><a href="#" className="px-4 py-2 block text-gray-100 hover:bg-gray-800 no-underline hover:no-underline">My account</a></li>
                    <li><a href="#" className="px-4 py-2 block text-gray-100 hover:bg-gray-800 no-underline hover:no-underline">Notifications</a></li>
                    <li><hr className="border-t mx-2 border-gray-400"/></li>
                    <li><a href="#" className="px-4 py-2 block text-gray-100 hover:bg-gray-800 no-underline hover:no-underline">Logout</a></li>
                  </ul>
                </div>
              </div>


              <div className="block lg:hidden pr-4">
              <button id="nav-toggle" className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-gray-100 hover:border-teal-500 appearance-none focus:outline-none">
                <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
              </button>
            </div>
            </div>

          </div>


          <div className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block mt-2 lg:mt-0 bg-gray-900 z-20" id="nav-content">
            <ul className="list-reset lg:flex flex-1 items-center px-4 md:px-0">
              <li className="mr-6 my-2 md:my-0">
                            <a href="#" className="block py-1 md:py-3 pl-1 align-middle text-blue-400 no-underline hover:text-gray-100 border-b-2 border-blue-400 hover:border-blue-400">
                                <i className="fas fa-home fa-fw mr-3 text-blue-400"></i><span className="pb-1 md:pb-0 text-sm">Home</span>
                            </a>
                        </li>
              <li className="mr-6 my-2 md:my-0">
                            <a href="#" className="block py-1 md:py-3 pl-1 align-middle text-gray-500 no-underline hover:text-gray-100 border-b-2 border-gray-900  hover:border-pink-400">
                                <i className="fas fa-tasks fa-fw mr-3"></i><span className="pb-1 md:pb-0 text-sm">Tasks</span>
                            </a>
                        </li>
                        <li className="mr-6 my-2 md:my-0">
                            <a href="#" className="block py-1 md:py-3 pl-1 align-middle text-gray-500 no-underline hover:text-gray-100 border-b-2 border-gray-900  hover:border-purple-400">
                                <i className="fa fa-envelope fa-fw mr-3"></i><span className="pb-1 md:pb-0 text-sm">Messages</span>
                            </a>
                        </li>
                        <li className="mr-6 my-2 md:my-0">
                            <a href="#" className="block py-1 md:py-3 pl-1 align-middle text-gray-500 no-underline hover:text-gray-100 border-b-2 border-gray-900  hover:border-green-400">
                                <i className="fas fa-chart-area fa-fw mr-3"></i><span className="pb-1 md:pb-0 text-sm">Analytics</span>
                            </a>
                        </li>
            </ul>
            
            <div className="relative pull-right pl-4 pr-4 md:pr-0">
                <input type="search" placeholder="Search" className="w-full bg-gray-900 text-sm text-gray-400 transition border border-gray-800 focus:outline-none focus:border-gray-600 rounded py-1 px-2 pl-10 appearance-none leading-normal"/>
                <div className="absolute search-icon" style={{top: "0.375rem",left: "1.75rem"}}>
                    <svg className="fill-current pointer-events-none text-gray-500 w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"></path>
                    </svg>
                </div>
            </div>
            
          </div>
          
        </div>
      </div>

      <div className="container w-full mx-auto pt-20">
		
        <div className="w-full px-4 md:px-0 md:mt-8 mb-16 text-gray-800 leading-normal">
          
          <div className="flex flex-wrap">
                    <div className="w-full md:w-1/2 xl:w-1/3 p-3">
                        {/* <!--Metric Card--> */}
                        <div className="bg-gray-900 border border-gray-800 rounded shadow p-2">
                            <div className="flex flex-row items-center">
                                <div className="flex-shrink pr-4">
                                    <div className="rounded p-3 bg-green-600"><i className="fas fa-clock fa-2x fa-fw fa-inverse"></i></div>
                                </div>
                                <div className="flex-1 text-right md:text-center">
                                    <h5 className="font-bold uppercase text-gray-400">Total Working Hours</h5>
                                    <h3 className="font-bold text-3xl text-gray-600">240 Hours <span className="text-green-500"><i className="fas fa-caret-up"></i></span></h3>
                                </div>
                            </div>
                        </div>
                        {/* <!--/Metric Card--> */}
                    </div>
                    <div className="w-full md:w-1/2 xl:w-1/3 p-3">
                        {/* <!--Metric Card--> */}
                        <div className="bg-gray-900 border border-gray-800 rounded shadow p-2">
                            <div className="flex flex-row items-center">
                                <div className="flex-shrink pr-4">
                                    <div className="rounded p-3 bg-pink-600"><i className="far fa-clock fa-2x fa-fw fa-inverse" aria-hidden="true"></i></div>
                                </div>
                                <div className="flex-1 text-right md:text-center">
                                    <h5 className="font-bold uppercase text-gray-400">current working hours</h5>
                                    <h3 className="font-bold text-3xl text-gray-600">7 Hours <span className="text-pink-500"><i className="fas fa-exchange-alt"></i></span></h3>
                                </div>
                            </div>
                        </div>
                        {/* <!--/Metric Card--> */}
                    </div>
                    <div className="w-full md:w-1/2 xl:w-1/3 p-3">
                        {/* <!--Metric Card--> */}
                        <div className="bg-gray-900 border border-gray-800 rounded shadow p-2">
                            <div className="flex flex-row items-center">
                                <div className="flex-shrink pr-4">
                                    <div className="rounded p-3 bg-yellow-600"><i className=" fa-2x fa-fw fa-inverse"></i></div>
                                </div>
                                <div className="flex-1 text-right md:text-center">
                                    <h5 className="font-bold uppercase text-gray-400">Productive Hours</h5>
                                    <h3 className="font-bold text-3xl text-gray-600">{Math.round(productiveTime/3600,0)} Hours </h3>
                                </div>
                            </div>
                        </div>
                        {/* <!--/Metric Card--> */}
                    </div>
                    <div className="w-full md:w-1/2 xl:w-1/3 p-3">
                        {/* <!--Metric Card--> */}
                        <div className="bg-gray-900 border border-gray-800 rounded shadow p-2">
                            <div className="flex flex-row items-center">
                                <div className="flex-shrink pr-4">
                                    <div className="rounded p-3 bg-blue-600"><i className="far fa-calendar-alt fa-2x fa-fw fa-inverse"></i></div>
                                </div>
                                <div className="flex-1 text-right md:text-center">
                                    <h5 className="font-bold uppercase text-gray-400">August - Attendance</h5>
                                    <h3 className="font-bold text-3xl text-gray-600">21 days</h3>
                                </div>
                            </div>
                        </div>
                        {/* <!--/Metric Card--> */}
                    </div>
                    <div className="w-full md:w-1/2 xl:w-1/3 p-3">
                        {/* <!--Metric Card--> */}
                        <div className="bg-gray-900 border border-gray-800 rounded shadow p-2">
                            <div className="flex flex-row items-center">
                                <div className="flex-shrink pr-4">
                                    <div className="rounded p-3 bg-indigo-600"><i className="fas fa-tasks fa-2x fa-fw fa-inverse"></i></div>
                                </div>
                                <div className="flex-1 text-right md:text-center">
                                    <h5 className="font-bold uppercase text-gray-400">Productivity</h5>
                                    <h3 className="font-bold text-3xl text-gray-600">75%</h3>
                                </div>
                            </div>
                        </div>
                        {/* <!--/Metric Card--> */}
                    </div>
                    <div className="w-full md:w-1/2 xl:w-1/3 p-3">
                        {/* <!--Metric Card--> */}
                        <div className="bg-gray-900 border border-gray-800 rounded shadow p-2">
                            <div className="flex flex-row items-center">
                                <div className="flex-shrink pr-4">
                                    <div className="rounded p-3 bg-red-600"><i className=" fa-2x fa-fw fa-inverse"></i></div>
                                </div>
                                <div className="flex-1 text-right md:text-center">
                                    <h5 className="font-bold uppercase text-gray-400">Mouse, keyboard</h5>
                                    <h3 className="font-bold text-3xl text-gray-600">{mouseCount} % , {keyPressCount} % <span className="text-red-500"><i className="fas fa-caret-up"></i></span></h3>
                                </div>
                            </div>
                        </div>
                        {/* <!--/Metric Card--> */}
                    </div>
                </div>

          {/* <!--Divider--> */}
          <hr className="border-b-2 border-gray-600 my-8 mx-4" />

                <div className="flex flex-row flex-wrap flex-grow mt-2">

                    <div className="w-full md:w-1/2 p-3">
                        {/* <!--Graph Card--> */}
                        <div className="bg-gray-900 border border-gray-800 rounded shadow">
                            <div className="border-b border-gray-800 p-3">
                                <h5 className="font-bold uppercase text-gray-600">Mouse Click Graph</h5>
                            </div>
                            <div className="p-5">
                                <canvas id="chartjs-7" className="chartjs" width="undefined" height="undefined"></canvas>
                                <script>
                                    {/* new Chart(document.getElementById("chartjs-7"), {
                                        "type": "bar",
                                        "data": {
                                            "labels": ["January", "February", "March", "April"],
                                            "datasets": [{
                                                "label": "Page Impressions",
                                                "data": [10, 20, 30, 40],
                                                "borderColor": "rgb(255, 99, 132)",
                                                "backgroundColor": "rgba(255, 99, 132, 0.2)"
                                            }, {
                                                "label": "Adsense Clicks",
                                                "data": [5, 15, 10, 30],
                                                "type": "line",
                                                "fill": false,
                                                "borderColor": "rgb(54, 162, 235)"
                                            }]
                                        },
                                        "options": {
                                            "scales": {
                                                "yAxes": [{
                                                    "ticks": {
                                                        "beginAtZero": true
                                                    }
                                                }]
                                            }
                                        }
                                    }); */}
                                </script>
                            </div>
                        </div>
                        {/* <!--/Graph Card--> */}
                    </div>

                    <div className="w-full md:w-1/2 p-3">
                        {/* <!--Graph Card--> */}
                        <div className="bg-gray-900 border border-gray-800 rounded shadow">
                            <div className="border-b border-gray-800 p-3">
                                <h5 className="font-bold uppercase text-gray-600">Keyboard Keypress Graph</h5>
                            </div>
                            <div className="p-5">
                                <canvas id="chartjs-0" className="chartjs" width="undefined" height="undefined"></canvas>
                                <script>
                                    {/* new Chart(document.getElementById("chartjs-0"), {
                                        "type": "line",
                                        "data": {
                                            "labels": ["January", "February", "March", "April", "May", "June", "July"],
                                            "datasets": [{
                                                "label": "Views",
                                                "data": [65, 59, 80, 81, 56, 55, 40],
                                                "fill": false,
                                                "borderColor": "rgb(75, 192, 192)",
                                                "lineTension": 0.1
                                            }]
                                        },
                                        "options": {}
                                    }); */}
                                </script>
                            </div>
                        </div>
                        {/* <!--/Graph Card--> */}
                    </div>

                    <div className="w-full md:w-1/2 xl:w-1/3 p-3">
                        {/* <!--Graph Card--> */}
                        <div className="bg-gray-900 border border-gray-800 rounded shadow">
                            <div className="border-b border-gray-800 p-3">
                                <h5 className="font-bold uppercase text-gray-600">Productivity</h5>
                            </div>
                            <div className="p-5">
                                <canvas id="chartjs-1" className="chartjs" width="undefined" height="undefined"></canvas>
                                <script>
                                    {/* new Chart(document.getElementById("chartjs-1"), {
                                        "type": "bar",
                                        "data": {
                                            "labels": ["January", "February", "March", "April", "May", "June", "July"],
                                            "datasets": [{
                                                "label": "Likes",
                                                "data": [65, 59, 80, 81, 56, 55, 40],
                                                "fill": false,
                                                "backgroundColor": ["rgba(255, 99, 132, 0.2)", "rgba(255, 159, 64, 0.2)", "rgba(255, 205, 86, 0.2)", "rgba(75, 192, 192, 0.2)", "rgba(54, 162, 235, 0.2)", "rgba(153, 102, 255, 0.2)", "rgba(201, 203, 207, 0.2)"],
                                                "borderColor": ["rgb(255, 99, 132)", "rgb(255, 159, 64)", "rgb(255, 205, 86)", "rgb(75, 192, 192)", "rgb(54, 162, 235)", "rgb(153, 102, 255)", "rgb(201, 203, 207)"],
                                                "borderWidth": 1
                                            }]
                                        },
                                        "options": {
                                            "scales": {
                                                "yAxes": [{
                                                    "ticks": {
                                                        "beginAtZero": true
                                                    }
                                                }]
                                            }
                                        }
                                    }); */}
                                </script>
                            </div>
                        </div>
                        {/* <!--/Graph Card--> */}
                    </div>

                    <div className="w-full md:w-1/2 xl:w-1/3 p-3">
                        {/* <!--Graph Card--> */}
                        <div className="bg-gray-900 border border-gray-800 rounded shadow">
                            <div className="border-b border-gray-800 p-3">
                                <h5 className="font-bold uppercase text-gray-600">Graph</h5>
                            </div>
                            <div className="p-5"><canvas id="chartjs-4" className="chartjs" width="undefined" height="undefined"></canvas>
                                <script>
                                    {/* new Chart(document.getElementById("chartjs-4"), {
                                        "type": "doughnut",
                                        "data": {
                                            "labels": ["P1", "P2", "P3"],
                                            "datasets": [{
                                                "label": "Issues",
                                                "data": [300, 50, 100],
                                                "backgroundColor": ["rgb(255, 99, 132)", "rgb(54, 162, 235)", "rgb(255, 205, 86)"]
                                            }]
                                        }
                                    }); */}
                                </script>
                            </div>
                        </div>
                        {/* <!--/Graph Card--> */}
                    </div>

                    <div className="w-full md:w-1/2 xl:w-1/3 p-3">
                        {/* <!--Template Card--> */}
                        <div className="bg-gray-900 border border-gray-800 rounded shadow">
                            <div className="border-b border-gray-800 p-3">
                                <h5 className="font-bold uppercase text-gray-600">Template</h5>
                            </div>
                            <div className="p-5">
                
                            </div>
                        </div>
                        {/* <!--/Template Card--> */}
                    </div>

                    <div className="w-full p-3">
                        {/* <!--Table Card--> */}
                        <div className="bg-gray-900 border border-gray-800 rounded shadow">
                            <div className="border-b border-gray-800 p-3">
                                <h5 className="font-bold uppercase text-gray-600">Table</h5>
                            </div>
                            <div className="p-5">
                                <table className="w-full p-5 text-gray-700">
                                    <thead>
                                        <tr>
                                            <th className="text-left text-gray-600">Name</th>
                                            <th className="text-left text-gray-600">Side</th>
                                            <th className="text-left text-gray-600">Role</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        <tr>
                                            <td>Obi Wan Kenobi</td>
                                            <td>Light</td>
                                            <td>Jedi</td>
                                        </tr>
                                        <tr>
                                            <td>Greedo</td>
                                            <td>South</td>
                                            <td>Scumbag</td>
                                        </tr>
                                        <tr>
                                            <td>Darth Vader</td>
                                            <td>Dark</td>
                                            <td>Sith</td>
                                        </tr>                                   
                                    </tbody>
                                </table>

                                <p className="py-2"><a href="#" className="text-white">See More issues...</a></p>

                            </div>
                        </div>
                        {/* <!--/table Card--> */}
                    </div>


                </div>
                    
          {/* <!--/ Console Content--> */}
              
        </div>
        

      </div> 


    </div>
  )
}
