import './ServicesGallery.css';
import { services, formatPrice } from '../data/services';

export default function ServicesGallery() {
  return (
    <section className="services">
      <header className="services__header">
        <h2>Servicios disponibles</h2>
        <p>Explora opciones de forma visual y rápida.</p>
      </header>
      <div className="services__grid" role="list">
        {services.map((s) => (
          <article key={s.id} className="service-card" role="listitem">
            <div className="service-card__image">
              <img src={s.imageUrl} alt={`${s.name} - imagen del servicio`} loading="lazy" />
            </div>
            <div className="service-card__body">
              <div className="service-card__title-row">
                <h3 className="service-card__title">{s.name}</h3>
                <span className="service-card__price" aria-label={`Precio ${formatPrice(s.price)}`}>{formatPrice(s.price)}</span>
              </div>
              <p className="service-card__desc">{s.description}</p>
              <div className="service-card__actions">
                <button className="service-card__btn" type="button" aria-label={`Reservar ${s.name}`}>Ver disponibilidad</button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
