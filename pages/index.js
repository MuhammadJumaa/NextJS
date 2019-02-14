import Link from 'next/link';
const index =()=>(
    <div>
        <h1>Server side Render</h1>
        <a  href="/about">About</a>
        <Link href='/about'>
            <button>About</button>
        </Link>
        <Link href='/robots'>
            <button>Robots</button>
        </Link>
    </div>
);
export default index;