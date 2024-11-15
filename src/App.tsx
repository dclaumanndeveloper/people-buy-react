import styles from "./App.module.css"
import './global.css' 
import { Login } from './components/Login'


/*const posts: PostType[] = [{
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


},]*/
function App() {
  //<Header/>
  //<Sidebar/>
  //<main>
  //{posts.map(post =>{
  //  return (<Post
  //   key={post.id}
  //   post={post}
  //  />)
  //})}
  return (
   <div>
      <div className={styles.wrapper}>
      
       <main>
          <Login/>
        </main>
      </div>
     
    </div>
  )
}

export default App
