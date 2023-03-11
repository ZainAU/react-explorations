export default function ProfilePic (props) {
    // props.img_id = 200
    // https://picsum.photos/id/238/200/200
    const src_url = "https://picsum.photos/id/" + props.id + "/200/200/"
    const img = <img src={src_url} alt="some random photograph"/>
    return <>
        {img}
    </>
}