import "@/components/layout/footer.scss";
export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <img src="./rimac.svg" alt="rimac" className="footer__logo" />
        <div className="footer__line"></div>
        <p className="footer__text">@2023 RIMAC Seguros y Reaseguros.</p>
      </div>
    </footer>
  );
};
