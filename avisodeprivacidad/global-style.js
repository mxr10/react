import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
#cajacookies {
  box-shadow: 0px 0px 5px 5px #808080;
  background-color: #999999;
  width: 100%;
}

#cajacookies .wrap{
  width: 100%;
  text-align: center;
  margin: 0 auto;
  padding: 10px 0 10px 0;
}

#cajacookies .wrap p{
  font-family: Arial;
  font-size: 12px;
  text-align: center;
  color: rgb(255, 255, 255);
  margin: 0;
  padding: 0;
}

#cajacookies .wrap p a{
  font-family: Arial;
  font-size: 12px;
  color: rgb(255, 255, 255);
}

#cajacookies .wrap button {
  font-size: 12px;
  cursor: pointer;
}
`