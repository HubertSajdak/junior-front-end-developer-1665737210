import styles from "./Footer.module.css";
const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.footerInfo}>
				<p>Terms of service</p>
				<div className={styles.dot}></div>
				<p>Privacy policy</p>
				<div className={styles.dot}></div>
				<p>Copyright</p>
			</div>
			<div className={styles.footerInfo}>
				<p>nerds.family Version 1.2</p>
				<div className={styles.dot}></div>
				<p>Last update 10/09/2022</p>
			</div>
		</footer>
	);
};

export default Footer;
