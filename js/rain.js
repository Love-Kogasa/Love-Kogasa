class RainDrop {
  x = 0
  y = 0
  constructor( x, y ) {
    this.element = document.createElement( "div" )
    this.element.className = "rain"
    this.setX( x )
    this.setY( y )
    this.show()
    document.body.appendChild( this.element )
  }
  setX( x ) {
    this.x = x
    this.element.style.left = x + "vw"
    return this
  }
  setY( y ) {
    this.y = y
    this.element.style.top = y + "vh"
    return this
  }
  drop( result, ok ) {
    var speed = Math.ceil(Math.random() * 5) + 1
    var inv = setInterval(() => {
      this.setY( this.y + speed )
      if( this.y == result ) {
        clearInterval( inv )
        ok()
      }
    }, 10)
  }
  hide() {
    this.element.style.display = "none"
    return this
  }
  show() {
    this.element.style.display = "block"
    return this
  }
  remove() {
    this.element.remove()
    return this
  }
}

class Rain {
  constructor() {
    this.start()
  }
  start() {
    this.loop = setInterval(() => {
      this.drop()
    }, 100)
    return this
  }
  stop() {
    clearInterval( this.loop )
    return this
  }
  drop() {
    var raindrop = new RainDrop(
      Math.floor(Math.random() * 100),
      Math.floor(Math.random() * 20) - 30
    )
    raindrop.drop( Math.floor(Math.random() * 10) + 175, () => {
      raindrop.remove()
      // delete raindrop
    })
    return this
  }
}