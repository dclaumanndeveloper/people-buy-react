import styles from './Login.module.css';
export function Login(){

    return (
        <>
         <div className={styles.page}>
            <form method="POST" className={styles.formLogin}>
                <h1>Bem vindo ao People Buy</h1>
                <p>Digite os seus dados de acesso no campo abaixo.</p>
                <label>E-mail:</label>
                <input type="email" placeholder="Digite seu e-mail" />
                <label>Password:</label>
                <input type="password" placeholder="Digite sua senha" />
                <a href="/">Esqueci minha senha</a>
                <input type="submit" value="Acessar" className={styles.btn} />
            </form>
        </div>
        </>
    );
}