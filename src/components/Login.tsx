import styles from './Login.module.css';
export function Login(){

    return (
        <>
         <div className={styles.page}>
            <form method="POST" className={styles.formLogin}>
                <h1>Login</h1>
                <p>Digite os seus dados de acesso no campo abaixo.</p>
                <input type="email" placeholder="Digite seu e-mail" />
                <input type="password" placeholder="Digite seu e-mail" />
                <a href="/">Esqueci minha senha</a>
                <input type="submit" value="Acessar" className={styles.btn} />
            </form>
        </div>
        </>
    );
}