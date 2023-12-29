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
//         "http://localhost:3000/Registration",
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

// export default Registration; // Asegúrate de mantener solo esta exportación al final del archivo

//Segunda parte
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
//         "http://localhost:3000/registrations",
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

// export default Registration; // Asegúrate de mantener solo esta exportación al final del archivo

//UNIDO

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
        "http://localhost:3000/registrations",
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

        if (error.response) {
          // La solicitud fue realizada y el servidor respondió con un código de estado fuera del rango 2xx
          console.error("Respuesta del servidor:", error.response.data);
          console.error("Código de estado HTTP:", error.response.status);
          console.error("Encabezados de respuesta:", error.response.headers);
        } else if (error.request) {
          // La solicitud fue realizada pero no se recibió ninguna respuesta
          console.error("No se recibió respuesta del servidor");
          console.error("Solicitud:", error.request);
        } else {
          // Algo sucedió en la configuración de la solicitud que provocó un error
          console.error("Error al configurar la solicitud:", error.message);
        }
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

export default Registration;
