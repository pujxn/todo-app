import styles from "@/styles/Header.module.css"

const Header = ({ children }) => {
    return (
        <header style={{
            padding: '20px 0',
            lineHeight: '1.5em',
            color: '#aeadad',
            textAlign: 'center',
        }} className={styles.header}>
            {children}
        </header>
    )
}

export default Header;