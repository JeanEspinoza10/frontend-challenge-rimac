import Family from "@/assets/family_home.png";
import Modal from "@/components/loaders/Modal";
import { fetchUserData, NRO_DOC_BASE } from "@/services/serviceUser";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useData } from "@/components/provider/DataProvider";
import "@/pages/home/home.scss";


interface FormData {
  tipoDoc: string;
  nroDoc: string;
  phone: string;
  privacy: boolean;
  communications: boolean;
}

export const Home = () => {
  const [form, setForm] = useState<FormData>({
    tipoDoc: "DNI",
    nroDoc: "",
    phone: "",
    privacy: false,
    communications: false,
  });

  const [isTermsOpen, setIsTermsOpen] = useState(false);
  const [isErrorOpen, setisErrorOpen] = useState(false);

  const { setUser } = useData();
  const navigate = useNavigate();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      const target = e.target as HTMLInputElement;
      setForm((prev) => ({
        ...prev,
        [name]: target.checked,
      }));
    } else {
      if (name === "nroDoc") {
        const numericValue = value.replace(/\D/g, "").slice(0, 8);
        setForm((prev) => ({
          ...prev,
          [name]: numericValue,
        }));
      } else if (name === "phone") {
        const numericValue = value.replace(/\D/g, "").slice(0, 9);
        setForm((prev) => ({
          ...prev,
          [name]: numericValue,
        }));
      } else {
        setForm((prev) => ({
          ...prev,
          [name]: value,
        }));
      }
    }
  };

  const quoteHere = async (e: React.FormEvent) => {
    e.preventDefault();
    const dataUser = await fetchUserData({ fields: form });
    if (!dataUser) {
      setisErrorOpen(true);
      return;
    }
    setUser((prevUser) => ({
                        ...prevUser, 
                        ...dataUser,
                        phone: form.phone,
                        nroDoc: form.nroDoc
                      }));
    navigate("/planes");
    
  };

  return (
    <main className="home">
      <div className="home__container">
        <section className="home__view">
          <div className="home__view-img">
            <img src={Family} alt="family" className="home__view-img-image" />
          </div>
        </section>

        <article className="home__content">
          <div className="home__content-header">
            <div className="home__content-header-subtitleWrapper">
              <h3 className="home__content-header-subtitleWrapper-subtitle">
                Seguro Salud Flexible
              </h3>
            </div>

            <div className="home__content-header-text">
              <h1 className="home__content-header-text-title">
                Creado para tí y tu familia
              </h1>

              <p className="home__content-header-text-description">
                Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe
                nuestra asesoria. 100% online.
              </p>
            </div>
          </div>

          <form className="home__content_group_inline" onSubmit={quoteHere}>
            <div className="home__content-form-group-inline">
              <select
                name="tipoDoc"
                value={form.tipoDoc}
                onChange={handleChange}
                className="home__content-input home__content-select"
                required
              >
                <option value="DNI">DNI</option>
              </select>

              <input
                type="text"
                name="nroDoc"
                value={form.nroDoc}
                onChange={handleChange}
                placeholder="Nro. de documento"
                className="home__content-input home__content-input--doc"
                minLength={8}
                maxLength={8}
                required
              />
            </div>

            <input
              type="text"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Celular"
              className="home__content-input home__content-input--full"
              minLength={9}
              maxLength={9}
              required
            />

            <div className="home__content-checkbox-group">
              <label className="home__content-checkbox">
                <input
                  type="checkbox"
                  name="privacy"
                  checked={form.privacy}
                  onChange={handleChange}
                  className="home__content-checkbox-input"
                  required
                />
                <span className="home__content-checkbox-label">
                  Acepto la Política de Privacidad
                </span>
              </label>

              <label className="home__content-checkbox">
                <input
                  type="checkbox"
                  name="communications"
                  checked={form.communications}
                  onChange={handleChange}
                  className="home__content-checkbox-input"
                  required
                />
                <span className="home__content-checkbox-label">
                  Acepto la Política Comunicaciones Comerciales
                </span>
              </label>

              <p className="home__content-terms">
                <a
                  href="#"
                  className="home__content-link"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsTermsOpen(true);
                  }}
                >
                  Aplican Términos y Condiciones.
                </a>
              </p>
            </div>

            <button type="submit" className="home__content-button">
              Cotiza aquí
            </button>
          </form>
        </article>
      </div>
      <Modal
        isOpen={isTermsOpen}
        onClose={() => setIsTermsOpen(false)}
        title="Términos y Condiciones"
      >
        <p>
          Términos y Condiciones 1. Aceptación de los Términos Al acceder y
          utilizar este sitio web y los servicios ofrecidos, usted acepta
          cumplir y estar sujeto a estos Términos y Condiciones, así como a
          nuestra Política de Privacidad. Si no está de acuerdo con alguno de
          estos términos, le recomendamos no utilizar nuestros servicios. 2. Uso
          de los Servicios El usuario se compromete a utilizar los servicios de
          manera responsable, legal y conforme a las instrucciones
          proporcionadas. Queda prohibido el uso indebido o fraudulento de la
          plataforma. 3. Información Personal Toda información personal que
          usted proporcione será tratada de acuerdo con nuestra Política de
          Privacidad. Usted garantiza que los datos ingresados son correctos y
          completos.
        </p>
      </Modal>

      <Modal
        isOpen={isErrorOpen}
        onClose={() => setisErrorOpen(false)}
        title="¡Error!"
      >
        Ocurrió un problema al enviar el formulario. Por favor verifica los
        datos. Para modo de prueba ingresar : {NRO_DOC_BASE}
      </Modal>
    </main>
  );
};
