import Link from "next/link";

function EpisodeList({index, item}) {
    return ( <li>
        <div className="text-teal-600">Episode {index+1}</div>
        <div className="text-gray-500 text-xs">
            <Link href={{
                pathname:item
            }}>
                <a target="_blank">
                {item}
                </a>
            </Link>    
        </div>
    </li>)
}

export default EpisodeList;