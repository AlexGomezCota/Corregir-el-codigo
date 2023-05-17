const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const nombre = document.querySelector('.name'); //se agregó el "." a name, 
                                                //ya que no lo tenía
                                                
const blog = document.querySelector('#blog');   //se cambiaron los nombres de las
                                                //variables, ya que no era claro
                                                //a qué hacían referencia
const locacion = document.querySelector('.location');

function displayUser(username) {
  nombre.textContent = 'cargando...';
  const response = await fetch(`${usersEndpoint}/${username}`);
  console.log(data);
  nombre.textContent = '${data.name}';
  blog.textContent = '${data.blog}';
  locacion.textContent = '${data.location}';
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  n.textContent = `Algo salió mal: ${err}`
}

displayUser('stolinski').catch(handleError);