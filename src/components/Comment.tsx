import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';
import { Avatar } from './Avatar';
import { useState } from 'react';

interface CommentProps{
  content: string;
  onDeleteComment: (comment:string)=>void;
}
export function Comment({content, onDeleteComment}: CommentProps){
  const [likeCount,setLikeCount] = useState(0);

  function handleDeleteComment(){
      onDeleteComment(content);
  }

  function handleLikeComment(){
    setLikeCount(likeCount+1);
  }
   return(
      <div className={styles.comment}>
        <Avatar hasBorder={false} src="https://github.com/dclaumanndeveloper.png" alt=""/>
        <div className={styles.commentBox}>
            <div className={styles.commentContent}>
             <header>
                <div className={styles.authorAndTime}>
                    <strong>Diego Claumann</strong>
                    <time title="11 de maio as 08:13h" dateTime="2022-05-11 08:13:30">Cerca dce 1 h atrás</time>
                </div>
                <button onClick={handleDeleteComment} title="Deletar Comentário">
                  <Trash size={20}></Trash>
                </button>
             </header>
             <p>{content}</p>
            </div>
            <footer>
                <button onClick={handleLikeComment}>
                    <ThumbsUp size={20}/>
                    aplaudir <span>{likeCount}</span>
            </button>
        </footer>
        </div>
      
      </div>

   );
    

}