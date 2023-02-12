import React from "react";

const MyProfile = () => {
    React.useEffect(() => {
        document.title = "My Profile"
    },[])

    return (
        <div>
            My Profile
        </div>
    )
}

export default MyProfile;