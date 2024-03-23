import "../styles/chiefMarketingDashboard.css";
import DashboardSide from "../components/DashboardSide";
const bell = require("../assets/bell.png");
const message = require("../assets/message.png");
const exit = require("../assets/exit.png");

const ChiefMarketingDashboard = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="dashboard w-3/4 h-max rounded-3xl flex flex-row">
                <DashboardSide />
                <div className="w-2/3">
                    <div className="flex flex-row pt-4 pr-8 items-end justify-end">
                        <img src={bell} alt="" className="h-6" />
                        <img src={message} alt="" className="h-6 ml-7"/>
                        <img src={exit} alt="" className="h-6 ml-7"/>
                    </div>
                    <p className="main-font text-[#3D5AA1] font-bold text-2xl ml-12 mt-8">
                        Hello Ediola! <br />
                        What do you need today?
                    </p>
                    <input type="search" className="rounded-3xl ml-12 mt-8 search-bar pl-4 h-7 flex items-center" placeholder="Search"/>
                </div>
            </div>
        </div>

    );
}

export default ChiefMarketingDashboard;