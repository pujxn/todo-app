import { useState } from 'react';
import styles from '@/styles/Login.module.css';
import { useAuthContext } from '@/context/AuthContext';
import { useNavigate, useLocation } from 'react-router-dom';
import Header from '@/components/Header';
const Login = () => {
    const location = useLocation();
    // const pathname = location.pathname;
    const from = location.state ? location.state.pathname : "/";
    const [username, setUsername] = useState('');
    const navigate = useNavigate();
    const { login } = useAuthContext();
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!username) return;
        login(username);
        setUsername('');
        navigate(from, { replace: true });

    };
    return (
        <div>
            <Header><h1>login</h1></Header>
            <div className={styles.formWrapper}>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <button>Login</button>
                </form>
            </div>
        </div>
    );
};
export default Login;
