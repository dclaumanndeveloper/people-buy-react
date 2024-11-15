import styles from './Login.module.css';
export function Login(){
 
    return (
        <>
         <div className={styles.page}>
            <form className={styles.formLogin}>
                <h1>Bem vindo ao People Buy</h1>
                <p>Digite os seus dados de acesso no campo abaixo.</p>
                <input type="email" placeholder="Digite seu e-mail" />
                <input type="password" placeholder="Digite sua senha" />
                <a href="/">Esqueci minha senha</a>
                <button type="submit" className={styles.btn}>
                    Entrar
                </button>
            </form>
        </div>
        </>
    );
}