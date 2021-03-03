
let width = window.innerWidth/2;
//let height = (width*9)/16
let height = window.innerHeight/2

let html5 = true;
let logo = "";
let seeAlsoCameraIDList = []; // [id1, id2]


let streams = [
    {id:3941, title: 'Novosibirsk', address: 'Deputatskaya 1'},
    {id:3945, title: 'Novosibirsk', address: 'Deputatskaya 1'},
    {id:3945, title: 'Novosibirsk', address: 'Deputatskaya 1'},
    {id:3945, title: 'Novosibirsk', address: 'Deputatskaya 1'}]

let container = document.getElementById('#container')

console.log(container)

streams.forEach((s, i)=> {
    let srcPath = `https://cam.mega-com.ru/site/embed.html?id=${s.id}&html5=${html5}&logo=${logo}&w=${width}&h=${window.innerHeight/2}&ids=${seeAlsoCameraIDList && seeAlsoCameraIDList.length ? JSON.stringify(seeAlsoCameraIDList) : ''}&autostart=true`

    let style = `width: ${width}px; height: ${(window.innerHeight/2)-40}px; border: 0px;`
    //let srcPath1 = "https://cam.mega-com.ru/site/embed.html?id=3941&html5=true&logo='&w=1140&h=641&ids=&autostart=true"

    //let stream = document.createElement(`<iframe id=${id} scrolling="no" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true"></iframe>`)

    container.insertAdjacentHTML('beforeend', `
        <div class="item">
            
            <iframe id=${s.id+i} scrolling="no" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true"></iframe>
            <span class="title">${s.title}</span>
            <span class="subtitle">${s.address}</span>
        </div>`)

    // document.write(`<iframe id=${id} scrolling="no" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true"></iframe>`);
    //
    const stream = document.getElementById(`${s.id+i}`)
    stream.id = s.id
    stream.src = srcPath
    stream.style = style



})
