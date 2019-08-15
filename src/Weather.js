import React from 'react';
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';

class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        weatherItems: [
            {month:'May', day:'20', max: '38', min: '18'},
            {month:'May', day:'21', max: '30', min: '20'},
            {month:'May', day:'22', max: '33', min: '17'},
            {month:'May', day:'23', max: '31', min: '19'}
        ]
    }
  };

  render() {
    return (
    <Card>
        <CardContent>
            <Typography color="textSecondary" gutterBottom>
                Weather for {this.props.weatherMonth} {this.props.weatherDay}
            </Typography>
            <Typography variant="h5" component="h2">
                Min:    Max:
            </Typography>
        </CardContent>
    </Card>
    );
  }
}

Weather.propTypes = {
    weatherMonth: PropTypes.string,
    weatherDay: PropTypes.number
}

Weather.defaultProps = {
    weatherMonth: "Default",
    weatherDay: "0"
}

export default Weather;