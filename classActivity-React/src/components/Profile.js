import ProfilePic from "./ProfilePic"
import Descriptions from "./Descriptions"

export default function Profile ({user}) {
    return <>
        {<ProfilePic id={user.profilePicture} />}
        {<Descriptions firstName={user.firstName} classLevel={user.classLevel} lastName={user.lastName} email={user.email} school={user.school} />}
        {<hr style={{margin:'0px'}}></hr>}
    </>
}