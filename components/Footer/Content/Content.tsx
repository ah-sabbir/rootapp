// flex flex-row items-center

const content = (props:any) => {
    if(props.headline && props.description){
        return (
            <div className="w-full md:w-1/2 xl:w-1/2 p-3">
            <div className="bg-gray-900 border border-gray-800 rounded shadow p-2">
                <div className="text-gray-700">
                    <h1 className="uppercase text-red-100">{props.headline}</h1>
                    <p className="text-gray-400">{props.description}</p>
                </div>
            </div>
        </div>
        )
    }
    if(props.fb){
        return (
            <div className="w-full md:w-1/2 xl:w-1/2 p-3">
            <div className="bg-gray-900 border border-gray-800 rounded shadow p-2">
                <div className="text-gray-400">
                    <ul>
                        <li><a href="http://fb.com">Facebook</a></li>
                        <li><a href="http://instagram.com">Instagram</a></li>
                        <li><a href="http://twitter.com">Twitter</a></li>
                        <li><a href="http://youtube.com">Youtube</a></li>
                    </ul>
                </div>
            </div>
        </div>
        )
    }else{
        return (
            <div></div>
        )
    }

}
export default content;