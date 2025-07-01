import styles from "../components_styles/Button.module.css";

function Button({ children, onClick, type = "button", style, className = "", ...props }) {
  return (
    <button
      type={type}
      className={`${styles.bubblyButton} ${className}`}
      onClick={onClick}
      style={style}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;