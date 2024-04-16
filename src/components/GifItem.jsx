import PropTyes from 'prop-types';

export const GifItem = ({ title, url }) => {
    return (

        <div className="card">
            <img src={url} alt={title} ></img>
            <p> {title} </p>

        </div>

    )
}



GifItem.PropTyes = {
    title: PropTyes.string.isRequired,
    url: PropTyes.string.isRequired,
}