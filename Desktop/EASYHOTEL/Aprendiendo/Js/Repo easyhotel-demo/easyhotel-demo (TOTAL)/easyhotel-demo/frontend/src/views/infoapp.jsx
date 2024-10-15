import style from './infoapp.module.css'

export default function infoapp() {
  return (
    <>
      <section className={style.contentInfo}>
        <h1>Funcionalidad de la aplicación</h1>
        <div>
          <h2>Negocios</h2>
          <img
            src='https://www.svgrepo.com/show/307965/negotiation-buy-sell-money.svg'
            alt='negocios'
          />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae, culpa provident
            fuga necessitatibus vel quam, beatae labore praesentium, tempora quisquam minima
            voluptatibus qui eum. Quibusdam quae est modi unde iure!
          </p>
        </div>
        <div>
          <h2>Dashboard</h2>
          <img src='https://www.svgrepo.com/show/459910/dashboard-alt.svg' alt='dashbord' />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae, culpa provident
            fuga necessitatibus vel quam, beatae labore praesentium, tempora quisquam minima
            voluptatibus qui eum. Quibusdam quae est modi unde iure!
          </p>
        </div>
        <div>
          <h2>Informacion</h2>
          <img
            src='https://www.svgrepo.com/show/307649/authority-owner-decide-chief.svg'
            alt='info'
          />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae, culpa provident
            fuga necessitatibus vel quam, beatae labore praesentium, tempora quisquam minima
            voluptatibus qui eum. Quibusdam quae est modi unde iure!
          </p>
        </div>
        <div>
          <h2>Aplicativo</h2>
          <img src='https://www.svgrepo.com/show/420628/app-car-cloud.svg' alt='app' />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae, culpa provident
            fuga necessitatibus vel quam, beatae labore praesentium, tempora quisquam minima
            voluptatibus qui eum. Quibusdam quae est modi unde iure!
          </p>
        </div>
      </section>
    </>
  )
}
