import styles from "./Card.module.scss"

const Card = ({name, source}) => {
    return (
        <div className={styles.card}>
            <img loading="lazy" className={styles.image} src={source} alt={name || "ничего не найдено"}/>
            <h5>{name || "ничего не найдено"}</h5>
        </div>
    );
};

export default Card;