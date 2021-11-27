function Cards(props) {
   return(

        <div className="card">
            <div className="card-img">
             <img src={props.img} className="card-image" alt="car"  />
            </div>
            <div className="card-content">
            <h1 className="card-title">{props.title}</h1>
            <h3 className="card-subtitle">{props.subtitle}</h3>
            <p className="card-desc">{props.desc}</p>
            <div className="btn"><button className="card-btn">See More</button></div>
            </div>
        </div>








   );







}
export default Cards;