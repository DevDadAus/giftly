import React from "react";

const Dashboard = () => {
    React.useEffect(() => {
        document.title = "Welcome to giftly!"
    },[])

    return (
        <div>
            Dashboard
        </div>
    )
}

export default Dashboard;