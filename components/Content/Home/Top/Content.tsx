import SubContent from "./SubContent";

const Content = () => {

    const ave = <span className="text-green-500"><i className="fa fa-clock-o"></i></span>
    const user = <span className="text-pink-500"><i className="fas fa-exchange-alt"></i></span>
    const nUser = <span className="text-yellow-600"><i className="fas fa-caret-up"></i></span>
    const essue = <span className="text-red-500"><i className="fas fa-caret-up"></i></span>

    const aveLogu = <div className="rounded p-3 bg-green-600"><i className="fa fa-wallet fa-2x fa-fw fa-inverse"></i></div>
    const userLogu = <div className="rounded p-3 bg-pink-600"><i className="fas fa-users fa-2x fa-fw fa-inverse"></i></div>
    const nUserLogu = <div className="rounded p-3 bg-yellow-600"><i className="fas fa-user-plus fa-2x fa-fw fa-inverse"></i></div>
    const serUptiem = <div className="rounded p-3 bg-blue-600"><i className="fas fa-server fa-2x fa-fw fa-inverse"></i></div>
    const toDoLis = <div className="rounded p-3 bg-indigo-600"><i className="fas fa-tasks fa-2x fa-fw fa-inverse"></i></div>
    const essus = <div className="rounded p-3 bg-red-600"><i className="fas fa-inbox fa-2x fa-fw fa-inverse"></i></div>

    return (
        <div className="flex flex-wrap">
            {/* <SubContent logo={aveLogu} name="TOTAL WORKING HOURS" amount="240 Hours" icon={ave} />
            <SubContent logo={userLogu} name="Total Users" amount="222" icon={user} />
            <SubContent logo={nUserLogu} name="Total Users" amount="222" icon={nUser} />
            <SubContent logo={serUptiem} name="Server Uptime" amount="14" icon="days" />
            <SubContent logo={toDoLis} name="To To List" amount="7" icon="tasks" />
            <SubContent logo={essus} name="Essuse" amount="3" icon={essue} /> */}

            <SubContent name="TOTAL WORKING HOURS" amount="240 Hours" />
            <SubContent name="Productivity" amount="85%" />
            <SubContent name="Productive Time" amount="7 Hours" />
            <SubContent name="Total Productive Time" amount="180 Hours" />
            <SubContent name="Keystrokes" amount="75%" />
            <SubContent name="Essuse" amount="3" />
        </div>
    )
}
export default Content;