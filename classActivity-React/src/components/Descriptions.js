import './Descriptions.css';
export default function Descriptions(props) {
    let classColor = props.classLevel === "Freshman" ? "green": "black";
    return <>
    {/* <link href="Descriptions.css" type="text/css" rel="stylesheet" /> */}
    <ul>
        <li><span>Full Name:</span> {props.firstName + " " + props.lastName} </li> 
        <li><span>Class Level:</span> <year style={{color: classColor}}>{props.classLevel}</year></li>
        <li><span>School:</span> {props.school}</li>
        <li><span>Email:</span> {props.email}</li>
    </ul>
    </>
}