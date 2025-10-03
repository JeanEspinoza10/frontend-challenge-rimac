import Phone from "@/assets/phone.svg";
import "@/components/layout/header.scss";

export const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <img src="./rimac.svg" alt="rimac" className="header__logo" />

        <nav className="header__nav">
          <ul className="header__list">
            <li className="header__item header__item--highlight">
              ¡Compra por este medio!
            </li>

            <li className="header__item header__item--contact">
              <img src={Phone} alt="phone" className="header__icon" />
              <p className="header__phone">(01) 411 6001</p>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
