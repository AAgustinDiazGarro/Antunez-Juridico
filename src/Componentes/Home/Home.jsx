import Card from "../Card/Card.jsx";
import style from './Home.module.css'

const information = [
    {
        img: "https://img.freepik.com/foto-gratis/captura-pantalla-persona-que-escribe-libro-mazo-sobre-mesa_181624-57173.jpg?t=st=1692324436~exp=1692325036~hmac=4a81080f2e7dd80e6578214f4edcaf1b6fcd95e184c3a934aacb28f8aeb2901e",
        title: 'Penal',
        description: 'Lo hacemos a nuestara manera'
    },
    {
        img: 'https://img.freepik.com/fotos-premium/abogado-o-notario-trabajando-documentos-e-informe-caso-importante-firma-abogados_122498-41.jpg',
        title: 'Civil',
        description: 'Lo hacemos como queremos asinsdflmascsbdnvjkc ajksdcnalskxmcalck ajcbaklsjcna,lsc jsdcknalkscnsd vksdcv a,c vkajv asdnmv kjadnfclakcm a,c acm ajkcnlamc '
    },
    {
        img: 'https://img.freepik.com/fotos-premium/abogado-o-notario-trabajando-documentos-e-informe-caso-importante-firma-abogados_122498-41.jpg',
        title: 'Civil',
        description: 'Lo hacemos como queremos'
    }
]

const abogados = [
    {
        img: "https://img.freepik.com/foto-gratis/captura-pantalla-persona-que-escribe-libro-mazo-sobre-mesa_181624-57173.jpg?t=st=1692324436~exp=1692325036~hmac=4a81080f2e7dd80e6578214f4edcaf1b6fcd95e184c3a934aacb28f8aeb2901e",
        title: 'Penal',
        description: 'Lo hacemos a nuestara manera'
    },
    {
        img: 'https://img.freepik.com/fotos-premium/abogado-o-notario-trabajando-documentos-e-informe-caso-importante-firma-abogados_122498-41.jpg',
        title: 'Civil',
        description: 'Lo hacemos como queremos asinsdflmascsbdnvjkc ajksdcnalskxmcalck ajcbaklsjcna,lsc jsdcknalkscnsd vksdcv a,c vkajv asdnmv kjadnfclakcm a,c acm ajkcnlamc '
    },
    {
        img: 'https://img.freepik.com/fotos-premium/abogado-o-notario-trabajando-documentos-e-informe-caso-importante-firma-abogados_122498-41.jpg',
        title: 'Civil',
        description: 'Lo hacemos como queremos'
    }
]

const Home = () => {


    return (
        <>
            <section className={style.home} >
                <article className={style.heroImage}>
                    <aside className={style.heroImageOpacity}>
                        <h1 className={style.title}>Estudio Juridico Antunez & Asociados</h1>
                        <p className={style.heroImageTitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi ipsum repellendus natus nobis quam possimus quas impedit laudantium ullam officiis deleniti mollitia iste, voluptatem dolores dolorem architecto earum! Assumenda, quo?</p>



                    </aside>
                </article>
            </section>
            <section>

            </section>


            <section  className={style.cardsCont}>
            <h2 className={style.titleh2}>Nos especializamos en:</h2>
                <article className={style.cards}>
                    {information?.map(info => { return <Card information={info} /> })}

                </article>
            </section>


            <section  className={style.cardsCont}>
            <h2 className={style.titleh2}>Nuestros SOCIOS</h2>
                <article className={style.cards}>
                    {abogados?.map(info => { return <Card information={info} /> })}
                </article>
            </section>
        </>
    )
}

export default Home;