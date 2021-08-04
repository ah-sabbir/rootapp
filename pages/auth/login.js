import Head from "next/head";

export default function Login() {
  return (
    <>
      <Head>
        <title>task time - login</title>
      </Head>
    <div className="w-screen h-screen flex justify-center">
        <div className=" w-1/2 h-screen/2 bg-gray-light flex justify-center items-center">
            <div className="w-1/2 h-1/2">
                    <h1 className=" w-full text-center font-bold text-5xl uppercase placeholder-myColor-leftSide">Task Time</h1>
                    <h2 className=" w-full text-center my-5">track the tasks to be faster.</h2>
                    <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0 justify-center">
                      <div className="inline-flex rounded-md shadow w-2/4 justify-center bg-blue-light">
                        <a href="/auth/registration" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                          Registration
                        </a>
                      </div>
                    </div>
            </div>
        </div>
        <div className=" w-1/2 h-full items-center bg-blue-light flex">
                <div className="w-full bg-white rounded shadow-lg p-8 m-4 md:max-w-sm md:mx-auto">
                <span className="block w-full text-xl uppercase font-bold mb-4">Welcome back.</span>      
                <form className="mb-4" action="/" method="post">
                <div className="mb-4 md:w-full">
                    <input className="w-full border rounded p-2 outline-none focus:shadow-outline" type="email" name="email" id="email" placeholder="Email"/>
                </div>
                <div className="mb-6 md:w-full">
                    <input className="w-full border rounded p-2 outline-none focus:shadow-outline" type="password" name="password" id="password" placeholder="Password"/>
                </div>
                <button className="  bg-blue-dark hover:bg-green-700 text-white uppercase text-sm font-semibold px-4 py-2 inline-flex rounded-md shadow">Login</button>
                </form>
                <a className="text-blue-700 text-center text-sm" href="/login">Forgot password?</a>
                </div>
        </div>
    </div>
    </>
  )
}
