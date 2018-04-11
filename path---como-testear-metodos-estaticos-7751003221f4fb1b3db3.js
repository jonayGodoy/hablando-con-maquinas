webpackJsonp([0x88650bc98419],{"./node_modules/json-loader/index.js!./.cache/json/como-testear-metodos-estaticos.json":function(n,a){n.exports={data:{site:{siteMetadata:{title:"Hablando con Máquinas",author:"Jonay Godoy"}},allMarkdownRemark:{edges:[{node:{excerpt:"Primero de todo perdonar por el nombre del articulo no tuve \nimaginación para pensar un nombre mejor. En este capitulo quiero hacer un breve...",frontmatter:{title:"Libros: JSAllonge, CNV, XP, Apprenticeship",path:"/libros-js-allonge-cnv-xp-apprenticeship/",date:"19 February, 2018"}}},{node:{excerpt:"Hace poco que he empezado a tocar c# y con el Visual Studio.\nPor supuesto, esto incluye el plugin ReSharper de jetbrains para Visual Studio...",frontmatter:{title:"ReSharper, Search Pattern",path:"/resharper-search-pattern/",date:"14 January, 2018"}}},{node:{excerpt:"Hace muy poco me enseñaron la arquitectura modelo-vista-presenter con vista pasiva en javascript \ny no pude resistirme a hacer una prueba de...",frontmatter:{title:"Vista Pasiva",path:"/vista-pasiva/",date:"17 December, 2017"}}},{node:{excerpt:"Hoy voy a hablar del comando de git “—no-ff” sobretodo porque cuando vi este comando\nme pregunte ¿Por que alguien iba a querer evitar el...",frontmatter:{title:"No Fast Forward",path:"/no-fast-forward/",date:"03 December, 2017"}}},{node:{excerpt:"Este es el primer año que se hace el HackForGood BigDay por lo que creo que\nes una buena idea contar mi experiencia para que otras personas...",frontmatter:{title:"Hack For Good Big Day",path:"/hack-for-good-big-day/",date:"29 September, 2017"}}},{node:{excerpt:"Buenas, yo se nada sobre la mejor o la peor o manera de hacer un curriculum.Pero si sé una cosa odio invertir tiempo en mantener información...",frontmatter:{title:"Convierte tu perfil Linkedin en un curriculum",path:"/convierte-tu-perfil-de-Linkedin-en-tu-cv/",date:"12 September, 2017"}}},{node:{excerpt:"Screeps Se describe como un juego para programadores. Programa a tu colonia de creeps para que se expanda y conquiste nuevas zonas. Un MMO...",frontmatter:{title:"Empezamos con los juegos educativos.Screeps y Codecombat",path:"/empezamos-con-los-juegos-educativos/",date:"09 September, 2017"}}},{node:{excerpt:"Los métodos estáticos en general, hace nuestro día a día un poco más cómodo pero si tienes una mínima duda de si deberías utilizarlo lo...",frontmatter:{title:"Como testear métodos estáticos",path:"/como-testear-metodos-estaticos/",date:"01 July, 2017"}}},{node:{excerpt:"Me parecía adecuado escribir como uno de los primeros artículos\nblog. Todo el trayecto que tiene mi blog porque aunque me dé algo\nde...",frontmatter:{title:"La Historia De Mi Blog",path:"/la-historia-de-mi-blog/",date:"30 May, 2017"}}},{node:{excerpt:"Últimamente me encontrado con muchos programadores que no ven el switch como un mal olor.\nEs más hace alrededor de un año yo tampoco lo...",frontmatter:{title:"Kata Gilded Rose Switch",path:"/kata-gilded-rose-switch/",date:"30 May, 2017"}}},{node:{excerpt:"Buenas, hoy quería hablar sobre mi primera experiencia ludum. Aunque antes os voy a poner en contexto para todo aquel que desconozca el...",frontmatter:{title:"Ludum Dare GC 35, Mi primera Ludum",path:"/ludum-dare-gc-35-mi-primera-ludum/",date:"29 December, 2016"}}}]},markdownRemark:{id:"/home/workspace/repositories/problemDependecy/gatsby-blog/src/pages/articles/2017-07-01-como-testear-metodos-estaticos/index.md absPath of file >>> MarkdownRemark",html:'<p>Los métodos estáticos en general, hace nuestro día a día un poco más cómodo pero si tienes una mínima duda de si deberías utilizarlo lo mejor es no utilizarlo.</p>\n<p>Si venís solo a por la solución os podéis <a href="#abajo">SALTAR</a> la siguiente explicación.</p>\n<p>La razón principal, por la que es difícil testear estáticos es que estáis escribiendo a fuego una llamada en vuestro código. Voy a comparar una solución con un estático y otra con objeto para explicar las diferencias.</p>\n<div class="gatsby-highlight">\n      <pre class="language-java"><code> <span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>\n \n     <span class="token keyword">private</span> String name<span class="token punctuation">;</span>\n     <span class="token keyword">private</span> Authentication authentication<span class="token punctuation">;</span>\n \n     <span class="token keyword">public</span> <span class="token function">User</span><span class="token punctuation">(</span>String name<span class="token punctuation">,</span> Authentication authentication<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n         <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>\n         <span class="token keyword">this</span><span class="token punctuation">.</span>authentication <span class="token operator">=</span> authentication<span class="token punctuation">;</span>\n     <span class="token punctuation">}</span>\n \n    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">deleteCommentary</span><span class="token punctuation">(</span>Commentary commentary<span class="token punctuation">)</span><span class="token punctuation">{</span>\n        <span class="token keyword">return</span> commentary<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n     <span class="token punctuation">}</span>\n \n <span class="token punctuation">}</span>\n \n \n <span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>\n     <span class="token keyword">private</span> String name<span class="token punctuation">;</span>\n     <span class="token keyword">private</span> Authentication authentication<span class="token punctuation">;</span>\n \n     <span class="token keyword">public</span> <span class="token function">User</span><span class="token punctuation">(</span>String name<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n         <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>\n         <span class="token keyword">this</span><span class="token punctuation">.</span>authentication <span class="token operator">=</span> AnyFramework<span class="token punctuation">.</span><span class="token function">generateAuthentication</span><span class="token punctuation">(</span><span class="token string">"USER"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n     <span class="token punctuation">}</span>\n \n   <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">deleteCommentary</span><span class="token punctuation">(</span>Commentary commentary<span class="token punctuation">)</span><span class="token punctuation">{</span>\n        <span class="token keyword">return</span> commentary<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n     <span class="token punctuation">}</span>\n \n <span class="token punctuation">}</span>\n \n</code></pre>\n      </div>\n<p> En el primer ejemplo de Authentification, que parece tan simple podría ser cualquier cosa. A través de herencia o interfaces ese Authentication podría esconder detrás un UserAuthentication o un AdminAuthentication, es un ejemplo un poco simplón. Pero creo que se entiende lo que quiero decir podéis crear lo que queráis que mientras sea una Authentificación el usuario lo va a saber usar.</p>\n<p> Por el contrario, en el segundo estáis llamando al método concreto de una clase concreta. Por lo que perdéis cualquier posibilidad de añadir comportamientos de manera dinámica y sin modificar directamente la clase. User </p>\n<p>Aun así yo uso estáticos cuando esta muy claro que es clase de utilidad. Una clase de utilidad normalmente es una clase que añade funcionalidades a librerías. Como una clase que se encarga de crear archivos y por comodidad te creas un método que te crea una estructura de directorios o te genera un ruta, etc.</p>\n<h3>Unas pequeñas normas personales que uso para saber si usar estático.</h3>\n<ul>\n<li>\n<p><strong><em>Me cuesta ponerle nombre a una clase.</em></strong>\nLo único que se me ocurre son cosas de estilo ManagerFile, EmailUtils esto es señal de que la clase no tiene relación con tu lógica de negocio, es decir no influye en las funcionalidades que estas desarrollando directamente.</p>\n</li>\n<li>\n<p><strong><em>No contienen estados.</em></strong>\nUna vez en un clase tenéis un estado y este cambia significa que estáis dándole a un estático la funcionalidad que utilizáis para los objetos. Es decir, tenéis comportamientos que cambian dependiendo de un estado a menos que este bien justificado esto nunca se debería hacer con estáticos. Ojo esto no es lo mismo que tener un clase estática solo con contantes que nunca van a cambiar.</p>\n</li>\n<li>\n<p><strong><em>No la voy a testear.</em></strong>\nComo veremos hoy testear un estáticos es algo que puede resultar muy difícil, sobretodo si respetáis la norma de que el código de producción no debe alterarse para crear un test. Alguna vez cuando veo que necesito testear y tiene las características de una clase de utilidad la utilizo como un objeto para simplificar.</p>\n</li>\n<li>\n<p><strong><em>Ante la duda no uso estáticos.</em></strong> Los estáticos se suelen usar por comodidad y rapidez a la hora de trabajar si tiene dudas de que vas a tener problemas con ellos no los uses.\n`</p>\n</li>\n</ul>\n<p><a name="abajo"></a></p>\n<h3>Ahora empecemos con los test.</h3>\n<p>Supongamos que queremos testear un usuario este solo puedes borrar sus propios comentarios pero un Administrador puede borrar cualquier comentario.</p>\n<div class="gatsby-highlight">\n      <pre class="language-java"><code> \n <span class="token annotation punctuation">@Test</span>\n     <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">user_only_can_delete_own_commentary</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> Exception <span class="token punctuation">{</span>\n         User user <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token string">"user"</span><span class="token punctuation">,</span><span class="token keyword">new</span> <span class="token class-name">Authentication</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n \n         Commentary userCommentary <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Commentary</span><span class="token punctuation">(</span><span class="token string">"Hola mundo"</span><span class="token punctuation">,</span> anyUser<span class="token punctuation">)</span><span class="token punctuation">;</span>\n         Commentary anyCommentary <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Commentary</span><span class="token punctuation">(</span><span class="token string">"Hola mundo"</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token string">"anyUser"</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">Authentication</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n \n         Assert<span class="token punctuation">.</span><span class="token function">assertTrue</span><span class="token punctuation">(</span>user<span class="token punctuation">.</span><span class="token function">deleteCommentary</span><span class="token punctuation">(</span>userCommentary<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n         Assert<span class="token punctuation">.</span><span class="token function">assertFalse</span><span class="token punctuation">(</span>user<span class="token punctuation">.</span><span class="token function">deleteCommentary</span><span class="token punctuation">(</span>anyCommentary<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n     <span class="token punctuation">}</span>\n \n \n     <span class="token annotation punctuation">@Test</span>\n     <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">admin_can_delete_all_commentary</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> Exception <span class="token punctuation">{</span>\n         User user <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token string">"JonayRules"</span><span class="token punctuation">,</span><span class="token keyword">new</span> <span class="token class-name">AdminAuthentication</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n \n         Commentary userCommentary <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Commentary</span><span class="token punctuation">(</span><span class="token string">"Hola mundo"</span><span class="token punctuation">,</span> anyUser<span class="token punctuation">)</span><span class="token punctuation">;</span>\n         Commentary anyCommentary <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Commentary</span><span class="token punctuation">(</span><span class="token string">"Hola mundo"</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token string">"anyUser"</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">Authentication</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n \n         Assert<span class="token punctuation">.</span><span class="token function">assertTrue</span><span class="token punctuation">(</span>user<span class="token punctuation">.</span><span class="token function">deleteCommentary</span><span class="token punctuation">(</span>userCommentary<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n         Assert<span class="token punctuation">.</span><span class="token function">assertTrue</span><span class="token punctuation">(</span>user<span class="token punctuation">.</span><span class="token function">deleteCommentary</span><span class="token punctuation">(</span>anyCommentary<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n     <span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p> Solución sin estáticos así es fácil solo tenemos que pasarle por el constructor Authentification o AdminAuthentication. Ahora vamos a suponer que la Authentification viene de nuestro framework y tiene que ser un estático si o si y lo queremos testear. </p>\n<h2>Problema</h2>\n<div class="gatsby-highlight">\n      <pre class="language-java"><code>  <span class="token annotation punctuation">@Test</span>\n     <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">user_only_can_delete_own_commentary</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> Exception <span class="token punctuation">{</span>\n         User user <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token string">"user"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n \n         Commentary userCommentary <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Commentary</span><span class="token punctuation">(</span><span class="token string">"Hola mundo"</span><span class="token punctuation">,</span> anyUser<span class="token punctuation">)</span><span class="token punctuation">;</span>\n         Commentary anyCommentary <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Commentary</span><span class="token punctuation">(</span><span class="token string">"Hola mundo"</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token string">"anyUser"</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">Authentication</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n \n         Assert<span class="token punctuation">.</span><span class="token function">assertTrue</span><span class="token punctuation">(</span>user<span class="token punctuation">.</span><span class="token function">deleteCommentary</span><span class="token punctuation">(</span>userCommentary<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n         Assert<span class="token punctuation">.</span><span class="token function">assertFalse</span><span class="token punctuation">(</span>user<span class="token punctuation">.</span><span class="token function">deleteCommentary</span><span class="token punctuation">(</span>anyCommentary<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n     <span class="token punctuation">}</span>\n \n \n     <span class="token annotation punctuation">@Test</span>\n     <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">admin_can_delete_all_commentary</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> Exception <span class="token punctuation">{</span>\n         User user <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token string">"JonayRules"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n \n         Commentary userCommentary <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Commentary</span><span class="token punctuation">(</span><span class="token string">"Hola mundo"</span><span class="token punctuation">,</span> anyUser<span class="token punctuation">)</span><span class="token punctuation">;</span>\n         Commentary anyCommentary <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Commentary</span><span class="token punctuation">(</span><span class="token string">"Hola mundo"</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token string">"anyUser"</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">Authentication</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n \n         Assert<span class="token punctuation">.</span><span class="token function">assertTrue</span><span class="token punctuation">(</span>user<span class="token punctuation">.</span><span class="token function">deleteCommentary</span><span class="token punctuation">(</span>userCommentary<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n         Assert<span class="token punctuation">.</span><span class="token function">assertTrue</span><span class="token punctuation">(</span>user<span class="token punctuation">.</span><span class="token function">deleteCommentary</span><span class="token punctuation">(</span>anyCommentary<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n     <span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>   <strong><em>Ahora mismo esto falla</em></strong>, porque si os fijáis en la inicialización de user, no hay manera de decirle al usuario que Authentification le corresponde. Desde fuera de la clase User no se puede indicar cual es su validación pues es el framework quien la guarda.\nSi nunca habéis tenido este problemas no seria una mala idea parar aquí e intentar pensar un rato como podríais hacerlo por vuestra cuenta y luego seguir leyendo.</p>\n<h2>Mi Solución</h2>\n<p>   Hay casos donde hay mejores soluciones, para este contexto probablemente intentaría crear un nueva Authentication y pasársela al framework se podría mover el estático a otro sitio pero seguramente ese otro sitio también necesite testeo de algún tipo. Este es un mecanismo que os sirve para la mayoría de los contextos. Primero de todo rompemos la regla de que nunca se puede modificar el código para hacer un test y nos vamos ayudar del <a href="https://es.wikipedia.org/wiki/Template_Method_(patr%C3%B3n_de_dise%C3%B1o)">patron template</a>.</p>\n<p>   El patron template es simplemente coger una clase, y a través de una interface o una herencia modificar un método, seguro que muchos ya lo habian hecho pero no sabian el nombre en mi caso también fue asi.\nSe llama template simplemente porque cogemos una clase como “plantilla” para crear nuevas.\n</p>\n<p>   No me gusta modificar el código para pasar un test, lo test deben de ser siempre inocuos pero este es uno de lo casos limites que te atan de pies y manos . Por lo que regresamos a nuestra clase User con nuestro estático.</p>\n<div class="gatsby-highlight">\n      <pre class="language-java"><code> <span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>\n     <span class="token keyword">private</span> String name<span class="token punctuation">;</span>\n     <span class="token keyword">private</span> Authentication authentication<span class="token punctuation">;</span>\n \n     <span class="token keyword">public</span> <span class="token function">User</span><span class="token punctuation">(</span>String name<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n         <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>\n         <span class="token keyword">this</span><span class="token punctuation">.</span>authentication <span class="token operator">=</span> AnyFramework<span class="token punctuation">.</span><span class="token function">generateAuthentication</span><span class="token punctuation">(</span><span class="token string">"USER"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n     <span class="token punctuation">}</span>\n \n   <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">deleteCommentary</span><span class="token punctuation">(</span>Commentary commentary<span class="token punctuation">)</span><span class="token punctuation">{</span>\n        <span class="token keyword">return</span> commentary<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n     <span class="token punctuation">}</span>\n <span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>   Y hacemos los siguiente.</p>\n<div class="gatsby-highlight">\n      <pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>\n    <span class="token keyword">private</span> String name<span class="token punctuation">;</span>\n    <span class="token keyword">private</span> Authentication authentication<span class="token punctuation">;</span>\n\n    <span class="token keyword">public</span> <span class="token function">User</span><span class="token punctuation">(</span>String name<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>\n        <span class="token keyword">this</span><span class="token punctuation">.</span>authentication <span class="token operator">=</span> <span class="token function">getAuthentication</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">protected</span> Authentication <span class="token function">getAuthentication</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> AnyFramework<span class="token punctuation">.</span><span class="token function">generateAuthentication</span><span class="token punctuation">(</span><span class="token string">"USER"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">deleteCommentary</span><span class="token punctuation">(</span>Commentary commentary<span class="token punctuation">)</span><span class="token punctuation">{</span>\n        <span class="token keyword">return</span> commentary<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>   Como veis hemos envuelto nuestro estático con una función que si podemos falsear. Como veremos a continuación. Regresamos a los test.</p>\n<div class="gatsby-highlight">\n      <pre class="language-java"><code> <span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">UserShould</span> <span class="token punctuation">{</span>\n\n\n    <span class="token annotation punctuation">@Test</span>\n    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">user_only_can_delete_own_commentary</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> Exception <span class="token punctuation">{</span>\n        User user <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">UserStub</span><span class="token punctuation">(</span><span class="token string">"user"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n        Commentary userCommentary <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Commentary</span><span class="token punctuation">(</span><span class="token string">"Hola mundo"</span><span class="token punctuation">,</span> anyUser<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        Commentary anyCommentary <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Commentary</span><span class="token punctuation">(</span><span class="token string">"Hola mundo"</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token string">"anyUser"</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">Authentication</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n        Assert<span class="token punctuation">.</span><span class="token function">assertTrue</span><span class="token punctuation">(</span>user<span class="token punctuation">.</span><span class="token function">deleteCommentary</span><span class="token punctuation">(</span>userCommentary<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        Assert<span class="token punctuation">.</span><span class="token function">assertFalse</span><span class="token punctuation">(</span>user<span class="token punctuation">.</span><span class="token function">deleteCommentary</span><span class="token punctuation">(</span>anyCommentary<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n\n    <span class="token annotation punctuation">@Test</span>\n    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">admin_can_delete_all_commentary</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> Exception <span class="token punctuation">{</span>\n        User user <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">AdminStub</span><span class="token punctuation">(</span><span class="token string">"JonayRules"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n        Commentary userCommentary <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Commentary</span><span class="token punctuation">(</span><span class="token string">"Hola mundo"</span><span class="token punctuation">,</span> anyUser<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        Commentary anyCommentary <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Commentary</span><span class="token punctuation">(</span><span class="token string">"Hola mundo"</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token string">"anyUser"</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">Authentication</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n        Assert<span class="token punctuation">.</span><span class="token function">assertTrue</span><span class="token punctuation">(</span>user<span class="token punctuation">.</span><span class="token function">deleteCommentary</span><span class="token punctuation">(</span>userCommentary<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        Assert<span class="token punctuation">.</span><span class="token function">assertTrue</span><span class="token punctuation">(</span>user<span class="token punctuation">.</span><span class="token function">deleteCommentary</span><span class="token punctuation">(</span>anyCommentary<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">UserStub</span> <span class="token keyword">extends</span> <span class="token class-name">User</span><span class="token punctuation">{</span>\n    <span class="token keyword">private</span> String name<span class="token punctuation">;</span>\n    <span class="token keyword">private</span> String authenticationLevel<span class="token punctuation">;</span>\n    <span class="token keyword">private</span> Authentication authentication<span class="token punctuation">;</span>\n\n    <span class="token keyword">public</span> <span class="token function">UserStub</span><span class="token punctuation">(</span>String name<span class="token punctuation">,</span>String authenticationLevel<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n       <span class="token keyword">super</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>\n       <span class="token keyword">this</span><span class="token punctuation">.</span>authenticationLevel <span class="token operator">=</span> authenticationLevel<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">protected</span> Authentication <span class="token function">getAuthentication</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> AnyFramework<span class="token punctuation">.</span><span class="token function">generateAuthentication</span><span class="token punctuation">(</span><span class="token string">"USER"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AdminStub</span> <span class="token keyword">extends</span> <span class="token class-name">User</span><span class="token punctuation">{</span>\n    <span class="token keyword">private</span> String name<span class="token punctuation">;</span>\n    <span class="token keyword">private</span> Authentication authentication<span class="token punctuation">;</span>\n\n    <span class="token keyword">public</span> <span class="token function">UserStub</span><span class="token punctuation">(</span>String name<span class="token punctuation">,</span>String authenticationLevel<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">super</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">this</span><span class="token punctuation">.</span>authenticationLevel <span class="token operator">=</span> authenticationLevel<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword">protected</span> Authentication <span class="token function">getAuthentication</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> AnyFramework<span class="token punctuation">.</span><span class="token function">generateAuthentication</span><span class="token punctuation">(</span><span class="token string">"ADMIN"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>   De esta manera podemos sobrescribimos el método getAuthentication, gracias a eso, generamos dos Stub en nuestro test, UserStub y AdminStub falseando la Autentificación sin apenas modificar el código.</p>\n<p>   Resumiendo, usar estáticos pueden ser muy rápidos a la hora de trabajar con utilidades pero pueden traer problemas y cuando los utilizas renuncias a la herancia y al polimorfismo donde quiera que los uses. De todas maneras para los casos limites donde un estáticos se nos atasca el patrón template nos puede dar una solución.</p>',
frontmatter:{title:"Como testear métodos estáticos",path:"/como-testear-metodos-estaticos/",date:"July 01, 2017",image_article:{relativePath:"articles/2017-07-01-como-testear-metodos-estaticos/image-article.jpg"}}}},pathContext:{path:"/como-testear-metodos-estaticos/"}}}});
//# sourceMappingURL=path---como-testear-metodos-estaticos-7751003221f4fb1b3db3.js.map