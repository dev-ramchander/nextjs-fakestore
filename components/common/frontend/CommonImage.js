import Image from "next/image";

export default function CommonImage(props){
    return (
        <Image src={props.src} width={props.width} height={props.height} />
    )
}