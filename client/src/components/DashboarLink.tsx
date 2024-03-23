import { Link } from "react-router-dom";

const DashboardLink = ({to, src, text}: {to: string, src: string, text: string}) => {
    return (
        <Link to={to} className="flex w-full mt-5">
            <div className="flex justify-end w-1/3">
                <img src={src} alt="" className="w-6 h-6" />
            </div>
            <div className="flex justify-start w-2/3">
                <p className="ml-4 main-font">{text}</p>
            </div>
            
        </Link>
    );
}

export default DashboardLink;