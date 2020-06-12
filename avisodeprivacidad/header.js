import React from 'react'

class Hello extends React.Component {
    compruebaAceptaCookies = () => {
    if(localStorage.getItem("micookie")=="cocinada"){
      return true;
    }else{
      localStorage.setItem("micookie", "no cocinada");
      return false;
    }
  }

  state = {
    isActive: true
  };

  handleHide = () => {
    localStorage.setItem("micookie", "cocinada");
    this.setState({
      isActive: false
    });
  };

  render() {
    this.cookiexist = this.compruebaAceptaCookies();
    if (this.state.isActive && this.cookiexist === false) {
      return (
        <div id="cajacookies">
          <div className="wrap">
          <p>Éste sitio web usa cookies, si permanece aquí acepta su uso. Puede leer más sobre el uso de cookies en nuestra  <a href="politica.html">política de privacidad</a>.</p>
          <button onClick={this.handleHide}>Aceptar y cerrar</button>
          </div>
        </div>
      );
    }else{
      return (
        <div>
        </div>
      );
    }
  }
}


const Header = ({ location }) => {
  return (
      <Hello/>
  )
}

export default Header
