
const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCT4A8JkHEoz8vXXTwwsSpZg&part=snippet%2Cid&order=date&maxResults=7'

const content = null || document.getElementById('content'); //Referencia al html

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '958654ba0bmsh2d94a5ad5cb075ep1527bfjsn13be849df6b9', //Esta Key no se debe mostrar a nadie!
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

async function fetchData(urlAPI) {
    const response = await fetch(urlAPI, options);
    const data = await response.json();
    return data;
}

(async () => {
    try {
        const videos = await fetchData(API);
        let view = `
        ${videos.items.map(video => `
            <div class="group relative">
                <div
                    class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                    <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
                </div>
                <div class="mt-4 flex justify-between">
                    <h3 class="text-sm text-gray-700">
                        <span aria-hidden="true" class="absolute inset-0"></span>
                        ${video.snippet.title}
                    </h3>
                </div>
            </div>
        `).slice(0,4).join('')} <!-- Me muesrta solo 4 elementos inicialmente -->
        `;
        content.innerHTML = view;
    }catch (error){
        console.log(error); //Estos errores estarian solo disponibles en la consola.

    }
})(); //(); Permite automaticamente cuando esta cargando el archivo a cargar la funcion. 