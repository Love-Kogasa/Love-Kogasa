document.addEventListener("DOMContentLoaded", async () => {
  l10n.renderAll()
  new Rain()
  Danmaku.rawplay( {wait: 1000}, await (await fetch( "danmaku.json" )).json() )
  var projPanel = document.getElementById( "projects" )
  var translate = document.getElementById( "translate" )
  var projRender
  var projects = await (await fetch( "https://api.github.com/users/Love-Kogasa/repos" )).json()
  projects = projects.sort(( a, b ) => new Date(b.updated_at) - new Date(a.updated_at) ).slice( 0, 5 )
  projPanel.innerHTML = ""
  projects.forEach(( projRender = ( repo ) => {
    var card = document.createElement( "div" )
    card.className = "card"
    card.onclick = () => window.location.href = `https://github.com/${repo.full_name}`
    var title = document.createElement( "div" )
    title.className = "title"
    title.textContent = repo.name
    var description = document.createTextNode( repo.description || "No Description" )
    card.appendChild( title )
    card.appendChild( description )
    projPanel.appendChild( card )
  }))
  translate.onclick = () => {
    l10n.renderAll( "en" )
    projPanel = document.getElementById( "projects" )
    projPanel.innerHTML = ""
    projects.forEach(projRender)
  }
})
