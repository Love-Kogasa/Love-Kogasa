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
      if( this.y >= result ) {
        clearInterval( inv )
        ok()
      }
    }, 30)
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

class ACloud {
  x = 0
  y = 0
  element = (() => {
    var img = new Image()
    img.className = "cloud"
    img.src = "imgs/cloud.png"
    return img
  })()
  constructor( x, y, size ) {
    this.setX( x )
      .setY( y )
      .setSize( size )
      .show()
  }
  show() {
    this.element.style.display = "block"
    return this
  }
  remove() {
    this.element.remove()
  }
  setSize( size ) {
    this.element.width = this.element.width * size
    return this
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
  move( x, ok ) {
    var speed = 0.5
    var inv = setInterval(() => {
      this.set( this.x + speed )
      if( this.x >= x ){
        clearInterval( inv )
        ok( this )
      }
    }, 50)
  }
}

class Rain {
  constructor() {
    this.start()
  }
  start() {
    this.loop = setInterval(() => {
      this.drop()
    }, 50)
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
    })
    return this
  }
}

class Cloud {
  constructor() {
    this.start()
  }
  start() {
    this.loop = setInterval(() => {
      this.move()
    }, 100)
    return this
  }
  stop() {
    clearInterval( this.loop )
    return this
  }
  move() {
    var cloud = new ACloud(
      -100, Math.random() * 50, Math.random()
    )
    cloud.move( 100, () => cloud.remove() )
  }
}