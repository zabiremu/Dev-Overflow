import SignIn from '../../(auth)/sign-in/[[...sign-in]]/page'
import { UserButton } from "@clerk/nextjs";
const Home = () =>{
  return (
    <main>
      {/* <SignIn/> */}
      <UserButton afterSignOutUrl="/"/>
    </main>
    
  )
}

export default Home;    
