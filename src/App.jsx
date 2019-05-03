import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  dense: {
    marginTop: 16,
  },
  menu: {
    width: 200,
  },
});

class OutlinedTextFields extends React.Component {
  state = {
    name: 'Cat in the Hat',
    age: '',
    multiline: 'Controlled',
    currency: 'EUR',
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <h1>Registro</h1>
        <p>Acabas de crear la empresa <b>Casa Ferretera</b> para <b>comprar</b> </p>
        <ShoppingCartOutlinedIcon className="Icons" />
        <h3>Tus datos personales</h3>
        <form className={classes.container} noValidate autoComplete="off">
          
          <TextField
            required
            id="outlined-required"
            label="Tipo de documento"
            defaultValue="Cédula"
            className={classes.textField}
            margin="normal"
            variant="outlined"
          />

          <TextField
            required
            id="outlined-required"
            label="Número de identidad"
            defaultValue="123"
            className={classes.textField}
            margin="normal"
            variant="outlined"
          />

          <TextField
            required
            id="outlined-required"
            label="Nombres"
            defaultValue="Tu nombre"
            className={classes.textField}
            onChange={this.handleChange('name')}
            margin="normal"
            variant="outlined"
          />

          <TextField
            required
            id="outlined-required"
            label="Apellidos"
            defaultValue="Tu apellido"
            className={classes.textField}
            margin="normal"
            variant="outlined"
          />

          <TextField
            required
            id="outlined-required"
            label="Correo empresarial"
            defaultValue="Email"
            className={classes.textField}
            margin="normal"
            variant="outlined"
          />

          <TextField
            id="outlined-name"
            label="Teléfono de contacto"
            className={classes.textField}
            value={this.state.name}
            onChange={this.handleChange('name')}
            margin="normal"
            variant="outlined"
          />

          <TextField
            id="outlined-name"
            label="ext"
            className={classes.textField}
            value={this.state.name}
            onChange={this.handleChange('name')}
            margin="normal"
            variant="outlined"
          />

          <TextField
            id="outlined-name"
            label="Celular"
            className={classes.textField}
            value={this.state.name}
            onChange={this.handleChange('name')}
            margin="normal"
            variant="outlined"
          />

          <TextField
            required
            id="outlined-required"
            label="Cargo"
            defaultValue="Cédula"
            className={classes.textField}
            margin="normal"
            variant="outlined"
          />

        </form>
      </div>
    );
  }
}

OutlinedTextFields.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(OutlinedTextFields);