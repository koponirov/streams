
let width = window.innerWidth/3;
//let height = (width*9)/16
let height = window.innerHeight/2

let html5 = true;
let logo = "";
let seeAlsoCameraIDList = []; // [id1, id2]

let streams = [
  [
    {id:3941, title: 'Novosibirsk', address: 'Deputatskaya 1'},
    {id:4012, title: 'Moskva', address: 'Presnenskaya naberezhnaya 2'},
    {id:3945, title: 'Novosibirsk', address: 'Deputatskaya 1'}
  ],
  [
    {id:4146, title: 'Novosibirsk', address: 'Deputatskaya 1'},
    {id: 4166, title: 'Vladivostok', address: 'Uborevicha 10/9'},
    {id: 4014, title: 'Moskva', address: 'Malyy Konyushkovskiy pereulok 2'}
  ]
]

let container = document.getElementById('#container')

streams.forEach((item, j)=> {
  container.insertAdjacentHTML('beforeend', `<div id="parent-${j}" class="parent"></div>`)
  let parent = document.getElementById(`parent-${j}`)

  item.forEach((s, i) => {
    let srcPath = `https://cam.mega-com.ru/site/embed.html?id=${s.id}&html5=${html5}&logo=${logo}&w=${width}&h=${window.innerHeight/2}&ids=${seeAlsoCameraIDList && seeAlsoCameraIDList.length ? JSON.stringify(seeAlsoCameraIDList) : ''}&autostart=true`
    let style = `width: ${width}px; height: ${(window.innerHeight/2)-40}px; border: 0px;`

    parent.insertAdjacentHTML('beforeend', `
      <div class="item">
        <iframe id=${s.id+i} scrolling="no" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true"></iframe>
        <span class="title">${s.title}</span>
        <span class="subtitle">${s.address}</span>
      </div>
    `)

    const stream = document.getElementById(`${s.id+i}`)
    stream.id = s.id
    stream.src = srcPath
    stream.style = style
  })
})
