const Section = (props) => {
    return ( 
    <article>
            <p>{props.myTtitle}</p>
            <p>{props.year}</p>
            <p>{props.director}</p>
            <p>{props.duration}</p>
            <p>{props.rate}</p>
            <div>{props.genre.map((elt)=> {
                return (
                <p>{elt}</p>)})
            }
            </div>
            
        </article>
    );
}

export default Section;