import ProfilePic from "./ProfilePic"
import Descriptions from "./Descriptions"

export default function Profile (props) {
    return <>
        {<ProfilePic id={props.id} />}
        {<Descriptions firstName={props.firstName} classLevel={props.classLevel} lastName={props.lastName} email={props.email} school={props.school} />}
        {<hr style={{margin:'0px'}}></hr>}
    </>
}