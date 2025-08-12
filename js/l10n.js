var l10n = {
  render( node, language = navigator.language ) {
    var langs = Array.from(node.getElementsByTagName( "lang" ))
    langs.forEach( lang => {
      if( has( lang.getAttributeNames(), language ) ) {
        lang.parentElement.innerHTML = lang.innerHTML
        return;
      }
    })
    function has( array, subject ) {
      for( let allowName of array ){
        if( regex( allowName ).test( subject)) return true
      }
    }
    function regex( string ) {
      var regex = ""
      for( let char of string.split("") ){
        if( char == "*" ){
          regex += ".*?"
        } else if( parseInt( char, 36 )){
          regex += char
        } else {
          regex += "\\" + char
        }
      }
      return new RegExp( regex )
    }
  },
  renderAll( language = navigator.language ) {
    this.render( document.body, language )
  }
}