import styles from "../components_styles/Footer.module.css";

const socials = [
	{
		name: "GitHub",
		url: "#",
		icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/github.svg",
	},
	{
		name: "Discord",
		url: "#",
		icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/discord.svg",
	},
	{
		name: "Instagram",
		url: "https://www.instagram.com/learning_at_muntor/", // updated link
		icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/instagram.svg",
	},
];

function Footer() {
	return (
		<footer className={styles.footer}>
			<div className={styles["footer-socials"]}>
				{socials.map((s) => (
					<a
						key={s.name}
						href={s.url}
						className={styles["footer-social-btn"]}
						target="_blank"
						rel="noopener noreferrer"
						aria-label={s.name}
					>
						<img
							src={s.icon}
							alt={s.name}
							className={styles["footer-social-icon"]}
						/>
					</a>
				))}
			</div>
			<p style={{ margin: 0 }}>
				&copy; {new Date().getFullYear()} MUNTOR. All rights reserved.
			</p>
		</footer>
	);
}

export default Footer;