webpackJsonp([78830509634931],{"./node_modules/json-loader/index.js!./.cache/json/kata-gilded-rose-switch.json":function(n,a){n.exports={data:{site:{siteMetadata:{title:"Hablando con Máquinas",author:"Jonay Godoy"}},allMarkdownRemark:{edges:[{node:{excerpt:"Me pareció interesante el concepto de analizar los errores que han llevado al fracaso de un proyecto\ny documentarlo. Puede que al escribirlo...",frontmatter:{title:"Post Mortem, Amidi",path:"/post-mortem-amidi/",date:"14 July, 2018"}}},{node:{excerpt:"Llevo tiempo queriendo escribir un articulo sobre este programa que me ha sido\nbastante útil en algunas ocasiones, generalmente esas...",frontmatter:{title:"Sweet Home 3D",path:"/sweet-home-crea-habitaciones-en-3d/",date:"01 July, 2018"}}},{node:{excerpt:"Primero de todo perdonar por el nombre del articulo no tuve \nimaginación para pensar un nombre mejor. En este capitulo quiero hacer un breve...",frontmatter:{title:"Libros: JSAllonge, CNV, XP, Apprenticeship",path:"/libros-js-allonge-cnv-xp-apprenticeship/",date:"19 February, 2018"}}},{node:{excerpt:"Hace poco que he empezado a tocar c# y con el Visual Studio.\nPor supuesto, esto incluye el plugin ReSharper de jetbrains para Visual Studio...",frontmatter:{title:"ReSharper, Search Pattern",path:"/resharper-search-pattern/",date:"14 January, 2018"}}},{node:{excerpt:"Hace muy poco me enseñaron la arquitectura modelo-vista-presenter con vista pasiva en javascript \ny no pude resistirme a hacer una prueba de...",frontmatter:{title:"Vista Pasiva",path:"/vista-pasiva/",date:"17 December, 2017"}}},{node:{excerpt:"Hoy voy a hablar del comando de git “—no-ff” sobretodo porque cuando vi este comando\nme pregunte ¿Por que alguien iba a querer evitar el...",frontmatter:{title:"No Fast Forward",path:"/no-fast-forward/",date:"03 December, 2017"}}},{node:{excerpt:"Este es el primer año que se hace el HackForGood BigDay por lo que creo que\nes una buena idea contar mi experiencia para que otras personas...",frontmatter:{title:"Hack For Good Big Day",path:"/hack-for-good-big-day/",date:"29 September, 2017"}}},{node:{excerpt:"Buenas, yo se nada sobre la mejor o la peor o manera de hacer un curriculum.Pero si sé una cosa odio invertir tiempo en mantener información...",frontmatter:{title:"Convierte tu perfil Linkedin en un curriculum",path:"/convierte-tu-perfil-de-Linkedin-en-tu-cv/",date:"12 September, 2017"}}},{node:{excerpt:"Screeps Se describe como un juego para programadores. Programa a tu colonia de creeps para que se expanda y conquiste nuevas zonas. Un MMO...",frontmatter:{title:"Empezamos con los juegos educativos.Screeps y Codecombat",path:"/empezamos-con-los-juegos-educativos/",date:"09 September, 2017"}}},{node:{excerpt:"Los métodos estáticos en general, hace nuestro día a día un poco más cómodo pero si tienes una mínima duda de si deberías utilizarlo lo...",frontmatter:{title:"Como testear métodos estáticos",path:"/como-testear-metodos-estaticos/",date:"01 July, 2017"}}},{node:{excerpt:"Últimamente me encontrado con muchos programadores que no ven el switch como un mal olor.\nEs más hace alrededor de un año yo tampoco lo...",frontmatter:{title:"Kata Gilded Rose Switch",path:"/kata-gilded-rose-switch/",date:"30 May, 2017"}}},{node:{excerpt:"Me parecía adecuado escribir como uno de los primeros artículos\nblog. Todo el trayecto que tiene mi blog porque aunque me dé algo\nde...",frontmatter:{title:"La Historia De Mi Blog",path:"/la-historia-de-mi-blog/",date:"30 May, 2017"}}},{node:{excerpt:"Buenas, hoy quería hablar sobre mi primera experiencia ludum. Aunque antes os voy a poner en contexto para todo aquel que desconozca el...",frontmatter:{title:"Ludum Dare GC 35, Mi primera Ludum",path:"/ludum-dare-gc-35-mi-primera-ludum/",date:"29 December, 2016"}}}]},markdownRemark:{id:"D:/blogRepository/hablando-con-maquinas/src/pages/articles/2017-06-09-kata-gilded-rose-switch/index.md absPath of file >>> MarkdownRemark",html:'<p>Últimamente me encontrado con muchos programadores que no ven el switch como un mal olor.\nEs más hace alrededor de un año yo tampoco lo sabía. Por lo que me he propuesto crear un kata\npara que los programadores que se encuentre en este punto en su camino del aprendizaje\nle sea más fácil avanzar.</p>\n<p>Emplee la Kata de Gilded como base para mi kata. Una\nkata cuyo fin principal es ayudar trabajar con código heredado partiendo arnés de seguridad de test creado previamente.\nHe conservado el problema que empleaba esta kata pero he cambiado las restricciones\ny el formato para que sirvan a este propósito.</p>\n<p>Si no podéis esperar y queréis ir ya a la kata aquí tenéis el <a href="https://github.com/jonayGodoy/Kata-Gilded-Rose-Switch">enlace</a>.</p>\n<p>Si aun estáis leyendo esto, a continuación voy a desarrollar un poco de porque el switch es\nconsiderado un mal olor así como de que consta la kata.</p>\n<p>En la practica el switch no es necesario.\nPorque para cada una de las funcionalidades que aporta suele existir una alternativa que\nuna vez se interiorizan simplica el código aunque para la gente que está empezando con el\npolimorfismo le puede costar un poco más verlo.</p>\n<p>Para empezar, voy a explicar como refactorizar el tipico ejemplo que nos muestra cuando vemos\nun switch por primera vez. Es un caso muy basico, pero también se puede extrapolar a los maps\no arrays asociativos.</p>\n<h3>Switch</h3>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>int n = 1;\nString message  = "";\n\nswitch (n) {\n case 1: message = "I am not an array ";\n break;\n case 2: message = "But I behave as one";\n break;\n case 3: message = "I do not know what to do with my life";\n break;\n}\nSystem.out.print(message);</code></pre>\n      </div>\n<h3>Array</h3>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>int n = 1;\nString message = "";\n\nString [] vector = {"I am an array", "And I behave as one ", "everything makes sense"};\nmessage = vector[n];\nSystem.out.print(message);</code></pre>\n      </div>\n<blockquote>\n<p>Aquí podéis empezar a ver el problema de los switch.\nCon ellos lo que hacemos controlar los estados. Es decir, en el switch comprobamos si n es 1\ny en consecuencia retornamos un valor en cambio cuando usamos una array no hay que comprobar\nporque n es 1, ya tiene dentro por el simple hecho de ser 1, toda la información que el array necesita.</p>\n</blockquote>\n<p>Vale, recordad este concepto.</p>\n<p>Ahora el problema que da origen a esta kata. Cuando en cada cases tenemos métodos o estructuras distintas.</p>\n<p>Lo que más duele del switch y así aprovecho para meter un nuevo concepto es que rompe\nde una manera bastante bestia el segundo principio de SOLID el open/close</p>\n<blockquote>\n<p><strong>Open-Closed Principle / Principio Abierto-Cerrado</strong>\n<strong>Vuestro código debe permitir extensiones pero no modificaciones.</strong></p>\n</blockquote>\n<p>No quiero meterme mucho en el tema de SOLID porque es largo de explicar.\nSimplemente aclarar, que para añadir una nueva funcionalidad a nuestra aplicación\nque tenga relación con lo que estáis comparando en el switch a la fuerza hay volver\na modificar el código escrito con anterioridad.</p>\n<p>Como tantas cosas en la programación esto se ve mucho mejor programando que intentado explicarlo con\npalabras así que empiezo a explicar la kata(ejercicio de programación).</p>\n<blockquote>\n<p><a href="https://github.com/jonayGodoy/Kata-Gilded-Rose-Switch">https://github.com/jonayGodoy/Kata-Gilded-Rose-Switch</a></p>\n</blockquote>\n<p>Cuando entráis a la kata tanto si es la versión en Java o en Javascript teneís un código\nque ya funciona y unas carpetas de test.También tenéis la solución en la carpeta “solution” por\nsi tenéis problemas.Cualquier duda podéis comentarla.</p>\n<h2>Para instalar</h2>\n<ul>\n<li>\n<p>La versión de java tiene el pom.xml para instalar las dependencias si usais maven o\npodéis descargaros las librerías</p>\n<ul>\n<li><a href="https://mvnrepository.com/artifact/junit/junit/4.10">Junit</a></li>\n<li><a href="https://mvnrepository.com/artifact/org.hamcrest/hamcrest-core/1.3">Hamcrest Core</a></li>\n</ul>\n</li>\n<li>\n<p>Para la versión de javascript bastara con hacer</p>\n<p><code>npm install</code></p>\n</li>\n<li>\n<p>y para correr los test en consola</p>\n<p><code>npm run test</code></p>\n</li>\n</ul>\n<p>Recomiendo, la versión de java si teneís problemas con el Polimorfismo.\nLa herencia en javascript tiene distintos estilos y todos pueden muy buenos por lo que\npreferiría que aunque no fuera java usarais un lenguaje de lado sevidor (node no cuenta).\nPero si por vuestro contexto preferís hacerlo en javascript de acuerdo pero sé consiente\nde que tiene una dificultad añadida.</p>\n<h2>Test</h2>\n<p>La kata está enfocada para hacerse con los test\nque os darán feedback inmediato cuando rompáis una funcionalidad del código. También\npodéis construir vuestro propio arnés de seguridad antes para practicar los test o simplemente\npasar de los test y imprimir los resultados por consola como esteís más comodos.</p>\n<h2>El problema principal eliminar el switch</h2>\n<p>Básicamente tenéis un ítem y dependiendo de como se llame (o que tipo de ítem sea)\nejecutara un código o otro. Tenéis la <a href="https://github.com/jonayGodoy/Kata-Gilded-Rose-Switch#gilded-rose-switch-1">explicacion de que hace cada ítem en github</a>\nLa idea principal es refactorizar este switch con polimorfismo. Tenéis libertad para\ncrear las clases que creáis necesarias. Una vez logrado esto tendréis que añadir una nueva\nfuncionalidad alterando nada o prácticamente nada la clase GildedRoseSwitch.</p>\n<div class="gatsby-highlight">\n      <pre class="language-java"><code><span class="token keyword">package</span> issue<span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">GildedRoseSwitch</span> <span class="token punctuation">{</span>\n    <span class="token keyword">private</span> ítem<span class="token punctuation">[</span><span class="token punctuation">]</span> ítems<span class="token punctuation">;</span>\n\n     <span class="token function">GildedRoseSwitch</span><span class="token punctuation">(</span>ítem<span class="token punctuation">[</span><span class="token punctuation">]</span> ítems<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">this</span><span class="token punctuation">.</span>ítems <span class="token operator">=</span> ítems<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n     <span class="token keyword">void</span> <span class="token function">updateQuality</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">for</span> <span class="token punctuation">(</span>ítem ítem <span class="token operator">:</span> ítems<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n         <span class="token keyword">switch</span> <span class="token punctuation">(</span>ítem<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n             <span class="token keyword">case</span> <span class="token string">"Aged Brie"</span><span class="token operator">:</span>\n                <span class="token keyword">if</span><span class="token punctuation">(</span>ítem<span class="token punctuation">.</span><span class="token function">getSellIn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">>=</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n                    <span class="token keyword">if</span><span class="token punctuation">(</span>ítem<span class="token punctuation">.</span><span class="token function">getQuality</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;</span> <span class="token number">50</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>ítem<span class="token punctuation">.</span><span class="token function">setQuality</span><span class="token punctuation">(</span>ítem<span class="token punctuation">.</span><span class="token function">getQuality</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token punctuation">}</span>\n                <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>\n                    updateí<span class="token function">temGenericQuality</span><span class="token punctuation">(</span>ítem<span class="token punctuation">)</span><span class="token punctuation">;</span>\n                <span class="token punctuation">}</span>\n                 <span class="token keyword">break</span><span class="token punctuation">;</span>\n             <span class="token keyword">case</span> <span class="token string">"Sulfuras, Hand of Ragnaros"</span><span class="token operator">:</span>\n                 <span class="token keyword">if</span><span class="token punctuation">(</span>ítem<span class="token punctuation">.</span><span class="token function">getQuality</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token number">80</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n                     ítem<span class="token punctuation">.</span><span class="token function">setQuality</span><span class="token punctuation">(</span><span class="token number">80</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n                 <span class="token punctuation">}</span>\n                 ítem<span class="token punctuation">.</span><span class="token function">setSellIn</span><span class="token punctuation">(</span>ítem<span class="token punctuation">.</span><span class="token function">getSellIn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n                 <span class="token keyword">break</span><span class="token punctuation">;</span>\n             <span class="token keyword">case</span> <span class="token string">"Backstage passes to a TAFKAL80ETC concert"</span><span class="token operator">:</span>\n                 ítem<span class="token punctuation">.</span><span class="token function">setSellIn</span><span class="token punctuation">(</span>ítem<span class="token punctuation">.</span><span class="token function">getSellIn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n                 <span class="token keyword">if</span><span class="token punctuation">(</span>ítem<span class="token punctuation">.</span><span class="token function">getSellIn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;=</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n                     ítem<span class="token punctuation">.</span><span class="token function">setQuality</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n                 <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token punctuation">{</span>\n                     <span class="token keyword">if</span> <span class="token punctuation">(</span>ítem<span class="token punctuation">.</span><span class="token function">getSellIn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;=</span> <span class="token number">5</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                         <span class="token keyword">if</span> <span class="token punctuation">(</span>ítem<span class="token punctuation">.</span><span class="token function">getQuality</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;</span> <span class="token number">50</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                             ítem<span class="token punctuation">.</span><span class="token function">setQuality</span><span class="token punctuation">(</span>ítem<span class="token punctuation">.</span><span class="token function">getQuality</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n                         <span class="token punctuation">}</span>\n                     <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>ítem<span class="token punctuation">.</span><span class="token function">getSellIn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;=</span> <span class="token number">10</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                         <span class="token keyword">if</span> <span class="token punctuation">(</span>ítem<span class="token punctuation">.</span><span class="token function">getQuality</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;</span> <span class="token number">50</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                             ítem<span class="token punctuation">.</span><span class="token function">setQuality</span><span class="token punctuation">(</span>ítem<span class="token punctuation">.</span><span class="token function">getQuality</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n                         <span class="token punctuation">}</span>\n                     <span class="token punctuation">}</span>\n                 <span class="token punctuation">}</span>\n                 <span class="token keyword">break</span><span class="token punctuation">;</span>\n             <span class="token keyword">default</span><span class="token operator">:</span>\n                 ítem<span class="token punctuation">.</span><span class="token function">setSellIn</span><span class="token punctuation">(</span>ítem<span class="token punctuation">.</span><span class="token function">getSellIn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n                 updateí<span class="token function">temGenericQuality</span><span class="token punctuation">(</span>ítem<span class="token punctuation">)</span><span class="token punctuation">;</span>\n                 <span class="token keyword">break</span><span class="token punctuation">;</span>\n         <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">private</span> <span class="token keyword">void</span> updateí<span class="token function">temGenericQuality</span><span class="token punctuation">(</span>ítem ítem<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">if</span><span class="token punctuation">(</span>ítem<span class="token punctuation">.</span><span class="token function">getQuality</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n            <span class="token keyword">if</span><span class="token punctuation">(</span>ítem<span class="token punctuation">.</span><span class="token function">getSellIn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;=</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n                ítem<span class="token punctuation">.</span><span class="token function">setQuality</span><span class="token punctuation">(</span>ítem<span class="token punctuation">.</span><span class="token function">getQuality</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n                <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>ítem<span class="token punctuation">.</span><span class="token function">setQuality</span><span class="token punctuation">(</span>ítem<span class="token punctuation">.</span><span class="token function">getQuality</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token punctuation">}</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<details>\n<summary>Spolier no queréis ver la solución pero estáis muy pero que muy perdidos. Aquí tenéis unas buenas pistas.</summary>\n    <details>\n        <summary> \n         Estás seguro de que quieres verlo, luego no hay vuelta atrás\n        ¿Por qué no lo intentas un poco más?\n        </summary>\n        <ul>\n           <li>El primer paso olvidaos que teneís diferentes ítems. Empezar a programar con uno solo, es decir solo\n           con el comportamiento base.\n           <li>Borrar el switch ya que no teneis varios ítems ya no lo necesitáis.\n           <li>A continuación, crear un método updateítem en el ítem y mover el comportamiento base al método.\n           <li>Tiene sentido es mejor que el ítem tenga la responsabilidad de como se actualiza.\n           <li>Ahora gilde rose simplemente recorrerá los ítems y los mandará a actualizar.\n           <li>Por último crear una clase una clase que herede de ítem. Como por ejemplo AgeBrie.\n           <li>¿Qué pasará ahora si sobrescribes el método updateítem con el comportamiento de Age Bried y después lo metes en la lista de ítems?\n        </ul>\n      \n   </details>\n</details>\n<h3>Mis Conclusiones</h3>\n<p>En la practica, yo hice el ejercicio de nunca usar el switch y hoy en día\ncontinuo siguiendo esta regla, mi código desde entonces es más limpio sobretodo\nhe conseguido aprovechar bastante mejor la potencia de la <a href="https://es.wikipedia.org/wiki/Programaci%C3%B3n_orientada_a_objetos">POO</a>.\nAunque como todo hay casos limite donde lo sigo usando. Por ejemplo, cuando tengo una\ntecnología o una arquitectura donde ya viene estandarizado, como con\n<a href="https://es.wikipedia.org/wiki/RabbitMQ">RabbitMq</a> un gestor de colas que utiliza\nuna variable tipo para diferenciar, una cola de otra, como resultado consigue\nevitar cualquier acoplamiento, es decir, le da igual que información le pases\ny en que formato se la pase siempre que la asocies a una key. Como resultado,\npuede trasmitir mensajes entre distintos lenguajes. Pero como digo\nson casos limites.</p>\n<p>Espero que la kata os ayude a avanzar un poco más en vuestro camino del aprendizaje y\nme encanta recibir feeback por lo que si tienes una opinion distinta o piensa que\ndeberia cambiar cualquier cosa o para lo que necesites deja un comentario estoy deseando escucharlo. </p>',frontmatter:{title:"Kata Gilded Rose Switch",path:"/kata-gilded-rose-switch/",date:"May 30, 2017",image_article:{relativePath:"articles/2017-06-09-kata-gilded-rose-switch/kata.jpg"}}}},pathContext:{path:"/kata-gilded-rose-switch/"}}}});
//# sourceMappingURL=path---kata-gilded-rose-switch-9a9a1960f8e50d4e0066.js.map