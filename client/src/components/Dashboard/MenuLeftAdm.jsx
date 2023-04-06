import React from "react";
import { Link } from "react-router-dom";

export function DashboardLeftMenu() {
  // Verifica el token de autenticación y el rol del usuario
  //como lo hago? xd
  //que dios me guie
  if (role === "admin") {
    return (
      <div>
        <ul>
          <li>
            <Link to="/dashboard">Estadísticas</Link>
          </li>
          <li>
            <Link to="/dashboard/products">Productos</Link>
          </li>
          <li>
            <Link to="/dashboard/users">Usuarios</Link>
          </li>
          <li>
            <Link to="/dashboard/orders">Ordenes</Link>
          </li>
        </ul>
      </div>
    );
  } else {
    return (
      <div>
        <h1>No tienes acceso al dashboard</h1>
        <Link to={`/home`}>
          <button>
            <span className={styles.icon}>⬅️</span>
            <span className={styles.label}>atras</span>
          </button>
        </Link>
      </div>
    );
  }
}
