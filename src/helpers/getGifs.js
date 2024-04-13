export const getGifs = async (category) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=hQ66U0H21i24Dk9OY4GS27nM2Ma0DvDe&q=${category}&limit=5`;

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
