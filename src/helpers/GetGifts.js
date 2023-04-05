export const getGifts = async ( categoria ) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=Hh1CWxMLN8HCAGiPDeAOBiLhZTeY43rD&q=${categoria}&limit=3`;
    const response = await fetch(url);
    const { data } = await response.json();

    const gifts = data.map( imagen => ({
        id: imagen.id,
        title: imagen.title,
        url: imagen.images.downsized_medium.url
    }))
    return gifts;
}