import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

const robots= (props)=>(
        <div>
            <h1>robots</h1>
            <Link href="/">
            <button>Home</button>
            </Link>
            <div>
                {
                    props.robots.map(robot=>(
                        <li key={robot.id}>
                        
                        <Link href={`robots/${robot.id}`}><a >{robot.name}</a></Link>
                        </li>
                    ))
                }
            </div>
        </div>
        );
        robots.getInitialProps= async function(){
            const res= await fetch('https://jsonplaceholder.typicode.com/users');
            const data = await res.json();
            console.log(data);
            return {robots:data};
        }
        export default robots;