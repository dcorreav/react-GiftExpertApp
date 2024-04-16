export const getGifs = async (category) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=48sQrXw6dTE6RrTJhG4Mc3whZNvUB1Yn&q=${category}&limit=5`;

    const resp = await fetch(url);

    const { data } = await resp.json();

    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url

    }));
    console.log(gifs);

    return gifs;

    //console.log(gifs);

    //console.log(data);

}
