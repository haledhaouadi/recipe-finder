export default function Homeimg({imgSrc,pt}){
    return(
        <div className="foodimg" style={{paddingTop: pt}}>
            <img src={imgSrc} alt="" />
        </div>
    )
}