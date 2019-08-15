import React from 'react';
import Weather from './Weather';
import Button from '@material-ui/core/Button';


class Home extends React.Component {
  constructor(props) {
    super(props);
    this.switchHeaders = this.switchHeaders.bind(this);
    this.state = {
        topHeader: 'Bienvenido',
        bottomHeader: 'Weather App'
    }
  };

  switchHeaders() {
    this.setState( { topHeader: this.state.bottomHeader, bottomHeader: this.state.topHeader });
  };

  render() {
    return (
        <div>
            <h1> {this.state.topHeader} </h1>
            <h1>  {this.state.bottomHeader} </h1>
            <Button variant="contained" onClick={this.switchHeaders} >
                Intercalar
            </Button>
            <div></div>
            <Button variant="contained" color="primary">
                Weather for May 20
            </Button>
            <div>
                <Weather weatherMonth='May' weatherDay='20' />
            </div>
            <div></div>
            <Button variant="contained" color="primary">
                Weather for May 21
            </Button>
            <div>
                <Weather weatherMonth='May' weatherDay='21' />
            </div>
            <div></div>
            <Button variant="contained" color="primary">
                Weather for May 22
            </Button>
            <div>
                <Weather weatherMonth='May' weatherDay='22' />
            </div>
            <div></div>
            <Button variant="contained" color="primary">
                Weather for May 23
            </Button>
            <div>
                <Weather weatherMonth='May' weatherDay='23' />
            </div>
        </div>
    );
  }
}

export default Home;