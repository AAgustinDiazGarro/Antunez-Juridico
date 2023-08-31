import style from './Card.module.css'

const Card = ({information}) =>{

    return(
        <div className={style.container}>
            <h3>{information.title}</h3>
            <img src={information.img} alt={`imagen de ${information.title}`} />
            <p>{information.description}</p>
        </div>
    )

}

export default Card;