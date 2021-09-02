import logo from '../../public/images/logo.png';
import Image from 'next/image';
const Logo = () => {

    return (
        
                        <div className="w-1/2 pl-2 md:pl-0">
                            <a className="text-gray-100 text-base xl:text-xl no-underline hover:no-underline font-bold" href="#">
                            <Image src={logo} height="20" width="20" alt="Picture of the author" /> Task Time
                            </a>
                        </div>
                       
       
    )
}
export default Logo;
