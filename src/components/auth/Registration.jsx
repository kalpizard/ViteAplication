// import React, { Component } from "react";
// import axios from "axios";

// class Registration extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       email: "",
//       password: "",
//       password_confirmation: "",
//       registrationErrors: "",
//     };

//     // Enlace de los métodos
//     this.handleSubmit = this.handleSubmit.bind(this);
//     this.handleChange = this.handleChange.bind(this);
//   }

//   handleChange(event) {
//     this.setState({
//       [event.target.name]: event.target.value,
//     });
//   }

//   handleSubmit(event) {
//     const { email, password, password_confirmation } = this.state;

//     axios
//       .post(
//         "http://localhost:3000/registration",
//         {
//           user: {
//             email: email,
//             password: password,
//             password_confirmation: password_confirmation,
//           },
//         },
//         { withCredentials: true }
//       )
//       .then((response) => {
//         console.log(response.data); // Puedes manejar la respuesta aquí
//       })
//       .catch((error) => {
//         console.error("Error en la solicitud:", error);
//       });

//     console.log("Formulario enviado");
//     event.preventDefault();
//     // Agregar lógica adicional para manejar la presentación del formulario aquí
//   }

//   render() {
//     return (
//       <div>
//         <div>
//           <form onSubmit={this.handleSubmit}>
//             <input
//               type="email"
//               name="email"
//               placeholder="Email"
//               value={this.state.email}
//               onChange={this.handleChange}
//               required
//             />

//             <input
//               type="password"
//               name="password"
//               placeholder="Contraseña"
//               value={this.state.password}
//               onChange={this.handleChange}
//               required
//             />

//             <input
//               type="password"
//               name="password_confirmation"
//               placeholder="Confirmación de contraseña"
//               value={this.state.password_confirmation}
//               onChange={this.handleChange}
//               required
//             />

//             <button type="submit">Registrarse</button>
//           </form>
//         </div>
//       </div>
//     );
//   }
// }

import React, { Component } from "react";
import axios from "axios";

class Registration extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      password_confirmation: "",
      registrationErrors: "",
    };

    // Enlace de los métodos
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(event) {
    const { email, password, password_confirmation } = this.state;

    axios
      .post(
        "http://localhost:3000/registration",
        {
          user: {
            email: email,
            password: password,
            password_confirmation: password_confirmation,
          },
        },
        { withCredentials: true }
      )
      .then((response) => {
        console.log(response.data); // Puedes manejar la respuesta aquí
      })
      .catch((error) => {
        console.error("Error en la solicitud:", error);
      });

    console.log("Formulario enviado");
    event.preventDefault();
    // Agregar lógica adicional para manejar la presentación del formulario aquí
  }

  render() {
    return (
      <div>
        <div>
          <form onSubmit={this.handleSubmit}>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={this.handleChange}
              required
            />

            <input
              type="password"
              name="password"
              placeholder="Contraseña"
              value={this.state.password}
              onChange={this.handleChange}
              required
            />

            <input
              type="password"
              name="password_confirmation"
              placeholder="Confirmación de contraseña"
              value={this.state.password_confirmation}
              onChange={this.handleChange}
              required
            />

            <button type="submit">Registrarse</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Registration; // Asegúrate de mantener solo esta exportación al final del archivo
