import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import './App.css';

const url = 'http://localhost:9000/api/v1/auth/signup';
const currencies = [
  {
    value: 'CC',
    label: 'CC'
  },
  {
    value: 'CE',
    label: 'CE'
  },
  {
    value: 'NIT',
    label: 'NIT'
  }
];

class OutlinedTextFields extends React.Component {

  state = {
    docType: 'CC',
    docNum: '',
    name: '',
    lastName: '',
    officePhone: '',
    ext: '',
    cellphone: '',
    companyMail: '',
    position: '',
    loading: false,
    success: false
  };

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value,
    });
  };

  hadleSubmit = event => {
    this.setState({
      docType: 'CC',
      docNum: '',
      name: '',
      lastName: '',
      officePhone: '',
      ext: '',
      cellphone: '',
      companyMail: '',
      position: ''
    });
    event.preventDefault();
    console.log(this.state);
    axios.post(url, this.state)
    .then()
    .catch();
  }

  handleButtonClick = () => {
    if (!this.state.loading) {
      this.setState(
        {
          success: false,
          loading: true,
        },
        () => {
          this.timer = setTimeout(() => {
            this.setState({
              loading: false,
              success: true,
            });
          }, 2000);
        },
      );
    }
  };

  render() {
    return (

      <div className="container">

        <div>
          <h1 className="headers title">Registro</h1>
          <h3 className="headers text">Tus datos personales</h3>
          <p className="headers text">Te estas registrando como usuario en la empresa <b>Casa Ferretera SAS</b></p>
        </div>
        
        <form onSubmit={this.hadleSubmit} noValidate autoComplete="off">

          <TextField
            required
            id="docType"
            value={ this.state.docType }
            select
            label="Tipo de documento"
            className="long"
            onChange={this.handleChange}
            SelectProps={{
              native: true
            }}
            helperText="Please select your currency"
            margin="normal"
            variant="outlined"
          >
            {currencies.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </TextField>
          <TextField
            required
            id="docNum"
            value={ this.state.docNum }
            label="Número de documento"
            className="long"
            onChange={this.handleChange}
            margin="normal"
            variant="outlined"
          />
          <TextField
            required
            id="name"
            value={ this.state.name }
            label="Nombres"
            className="long"
            onChange={this.handleChange}
            margin="normal"
            variant="outlined"
          />
          <TextField
            required
            id="lastName"
            value={ this.state.lastName }
            label="Apellidos"
            className="long"
            onChange={this.handleChange}
            margin="normal"
            variant="outlined"
          />
          <TextField
            required
            id="companyMail"
            value={ this.state.companyMail }
            label="Correo empresarial"
            className="long"
            onChange={this.handleChange}
            margin="normal"
            variant="outlined"
          />
          <div className="contact">
            <TextField
              id="officePhone"
              value={ this.state.officePhone }
              label="Teléfono"
              className="small"
              onChange={this.handleChange}
              margin="normal"
              variant="outlined"
            />
            <TextField
              id="ext"
              value={ this.state.ext }
              label="ext"
              className="small"
              onChange={this.handleChange}
              margin="normal"
              variant="outlined"
            />
            <TextField
              id="cellphone"
              value={ this.state.cellphone }
              label="Celular"
              className="small"
              onChange={this.handleChange}
              margin="normal"
              variant="outlined"
            />
          </div>
          <TextField
            required
            id="position"
            value={ this.state.position }
            label="Cargo"
            className="long"
            onChange={this.handleChange}
            margin="normal"
            variant="outlined"
          />
          <p className="footer">
            Al registrarme, declaro que acepto las <b>politicas de privacidad</b> y 
            los <b>términos y condiciones</b> de éste sitio
          </p>
          <div className="wrapper">
            <Button
              variant="contained"
              color="primary"
              className="buttonClassname"
              /* disabled={loading} */
              onClick={this.handleButtonClick}
            >
              Registrarme
            </Button>
            {/* loading && <CircularProgress size={24} className={classes.buttonProgress} /> */}
          </div>
        </form>

      </div>

    );

  }

}

export default OutlinedTextFields;