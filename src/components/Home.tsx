import { Header } from "./Header";
import { Post,PostType } from "./Post";
import { Sidebar } from "./Sidebar";
import styles from './Home.module.css';
import './global.css' 

const posts: PostType[] = [{
  id: 1,
  author:{
    avatarUrl: 'https://github.com/dclaumanndeveloper.png',
    name: 'Diego Ramos',
    role: 'CTO Inventiva',
  },
  content:[
    {type: 'paragraph', content:'Fala Galera'},
    {type: 'paragraph', content:'Trunks?'},
    {type: 'link', content: 'jane.design/doctorcare'},
  ],
  publishedAt: new Date('2022-05-03 20:00:00')


},
{
  id: 2,
  author:{
    avatarUrl: 'https://github.com/dclaumanndeveloper.png',
    name: 'Diogo Ramos',
    role: ' Inventiva',
  },
  content:[
    {type: 'paragraph', content:'Fala Galera'},
    {type: 'paragraph', content:'Trunks?'},
    {type: 'link', content: 'jane.design/doctorcare'},
  ],
  publishedAt: new Date(),


},]
export function Home(){
    return (
        <div>
      <Header/>

      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
        {posts.map(post =>{
          return (<Post
           key={post.id}
           post={post}
          />)
        })}
        </main>
      </div>
     
    </div>
    );
}
