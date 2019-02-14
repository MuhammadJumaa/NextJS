import Link from 'next/link';
import Image from '../components/image';

const about = () =>{
    return (
        <div style={{fontSize:'20px',color:'blue'}}>
            <h1>about</h1>
            <Link href="/">
            <button>Back</button>
            </Link>
            <Image></Image>
            <p>I was a magicion once</p>
        </div>
    )
}

export default about;