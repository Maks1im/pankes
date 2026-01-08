import styles from "./Header.module.scss"

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.mobileHeader}>
                <p className={styles.logo}>🥞 pankes</p>
                <form action="" className={styles.formSearch}>
                    <div className={styles.formGroup}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" fill="currentColor"
                             className={styles.formIcon} viewBox="0 0 16 16">
                            <path
                                d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                        </svg>
                        <input className={styles.formInput} placeholder="найдем" type="search"/>
                    </div>
                </form>
            </div>
        </header>
    );
};

export default Header;