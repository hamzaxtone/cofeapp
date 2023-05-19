import Head from 'next/head';
import { MyPage } from '@/components/layouts/types';
const About: MyPage = () => {
	return (
	<> 
	<Head>
		<title>Cofeapp | About</title>
	</Head>
    <main
      className={`-flex -min-h-screen -flex-col -items-center -justify-between`}
    >
		<h2>About</h2>
	 </main>
</>
	);
};
export default About;
About.Layout = "Default";