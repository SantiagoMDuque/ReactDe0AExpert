

const getImage = async () =>{
    try {
        const apiKey = '6ujp0u9anMVq44nhslukapzYwruPd8eC';
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
        const {data} = await resp.json();
        const {url} = data.images.original;
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);
    } catch (error) {
        //manejo del error
        console.error(error);
    }
}

getImage();
