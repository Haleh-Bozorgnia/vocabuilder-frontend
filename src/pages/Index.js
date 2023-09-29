import { useLoaderData, Form, Link } from "react-router-dom"
import Post from '../components/Post'
import Header from "../components/Header";
function Index(props){
  
    const vocabs = useLoaderData()
    return (
      <>
        <div>
          <Header/>
        </div>
        {vocabs.map((vocab) => (
          <Post key={vocab.id} post={vocab} />
        ))}
      </>
    );

}
export default Index