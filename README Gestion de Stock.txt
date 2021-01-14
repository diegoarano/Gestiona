Titulo 

Gestión de Stock

Descripción del Proyecto:

Luego de mi amplia experiencia en gestión de locales de restauración, he notado que por lo general, el sector no se ha actualizado a las nuevas tecnologías, y se sigue trabajando con métodos anticuados.

El propósito de la App “Gestión de Stock” es que sea una aplicación interna, y que lleve un orden de cada empleado que realiza un pedido, y que éstos queden reflejados y asociados a su ID, la fecha, los productos y el proveedor correspondiente.


Mediante Tello, organizo todo mi proyecto en 25 tarjetas, de las cuales 14 serán del BackEnd, 10 del FrontEnd y 1 para los retoques finales.


Primera semana:

El proyecto se inicia creando un base de datos, usando Mongodb, donde figuran los siguientes campos:


-Usuarios: -Id.
                  -Username.
                  -Password.
                  -Email.

-Pedidos: -Id.
                -Productos.
                -Empleado.
                -Proveedor.
                -Concepto.

-Proveedores: -Id
                       -Nombre.
                        -Dirección.
                        -NIF.
                        -Contacto.
                        -Categoría.
-Stock: -Id
             -Categoría.
              -Nombre.
              -CantidadMinima.
              -CantidadMaxima.


Usando Node.js y Express creo un controller.js y un model.js por cada collection de mi base de datos. 
Y desde el main.js hacer todos los Endopint (Post,Get, Put , Delete) de cada uno de los datos.
Segunda Semana:

El Frontend cuenta con 7 vistas

-Registro.
-Login.
-Realizar Pedido.
-Visualizar Pedido.
-Agregar Proveedor.
-Visualizar Proveedor.

El Registro y Login, llevan las validaciones correspondientes, para que el usuario no cometa errores al darse de alta, o al ingresar en su sesión.
La app permite a un empleado ya registrado hacer los pedidos que crea necesario, consultando en el Stock, las cantidades existentes.
Y una vez realizado, la base de datos recibe y guarda el pedido, mostrando fecha, producto, empleado que lo realizó, al proveedor y el concepto (cantidades).
El usuario también podrá ingresar un nuevo proveedor a la lista de proveedores, y así queda registrado y listo para que se le realice los pedidos, por medio de su Id.
Todos los usuarios podrán acceder a los listados de Proveedores y de Visualizar Pedidos, para así tener referencias que los movimientos de cada semana, y hacer un calculo mas efectivo.




JavaScript, Angular, Jquery, ReactJS, GitHub, NodeJs,Express, Mysql, MongoDB, Css3,Html5 



************************************************************************************************************************************************





https://filebasestorage.googleapis.com/v0/b/tutoriales-e4830.appspot.com/o/exercise.png?alt=media&token=b9c4b236-16a9-4a56-bba2-90c9660a0f06

*************************************************************************************************************************************************

para entrar con el terminal, en la api del proyecto reducer

C:\Users\diego\OneDrive\Escritorio\crudredux>json-server db.json --port 4000


*********************************************************************************************



