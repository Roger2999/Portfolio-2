export const ContactNewCard = () => {
  return (
    <a href="#" className="hover-3d my-12 mx-2 cursor-pointer">
      {/* content */}
      <div className="card w-96 bg-black text-white bg-[radial-gradient(circle_at_bottom_left,#ffffff04_35%,transparent_36%),radial-gradient(circle_at_top_right,#ffffff04_35%,transparent_36%)] bg-size-[4.95em_4.95em]">
        <div className="card-body">
          <h2 className="text-2xl font-bold mb-4 text-center">
            Información de contacto
          </h2>
          <ul className="w-full space-y-2 text-start p-4">
            <li>
              <span>Nombre: </span> Roger Gutiérrez Martínez
            </li>
            <li>
              <span>País: </span> Cuba
            </li>
            <li>
              <span>Ciudad: </span> Matanzas
            </li>
            <li className="break-words">
              <span>Correo: </span>
              rogergutierrezmartinez900@gmail.com
            </li>
            <li>
              <span>Teléfono:</span> +53 54849352
            </li>
          </ul>
        </div>
      </div>

      {/* 8 empty divs needed for the 3D effect */}
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </a>
  );
};
