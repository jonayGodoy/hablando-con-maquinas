webpackJsonp([18542225287523],{"./node_modules/json-loader/index.js!./.cache/json/vista-pasiva.json":function(n,a){n.exports={data:{site:{siteMetadata:{title:"Hablando con Máquinas",author:"Jonay Godoy"}},allMarkdownRemark:{edges:[{node:{excerpt:"Primero de todo perdonar por el nombre del articulo no tuve \nimaginación para pensar un nombre mejor. En este capitulo quiero hacer un breve...",frontmatter:{title:"Libros: JSAllonge, CNV, XP, Apprenticeship",path:"/libros-js-allonge-cnv-xp-apprenticeship/",date:"19 February, 2018"}}},{node:{excerpt:"Hace poco que he empezado a tocar c# y con el Visual Studio.\nPor supuesto, esto incluye el plugin ReSharper de jetbrains para Visual Studio...",frontmatter:{title:"ReSharper, Search Pattern",path:"/resharper-search-pattern/",date:"14 January, 2018"}}},{node:{excerpt:"Hace muy poco me enseñaron la arquitectura modelo-vista-presenter con vista pasiva en javascript \ny no pude resistirme a hacer una prueba de...",frontmatter:{title:"Vista Pasiva",path:"/vista-pasiva/",date:"17 December, 2017"}}},{node:{excerpt:"Hoy voy a hablar del comando de git “—no-ff” sobretodo porque cuando vi este comando\nme pregunte ¿Por que alguien iba a querer evitar el...",frontmatter:{title:"No Fast Forward",path:"/no-fast-forward/",date:"03 December, 2017"}}},{node:{excerpt:"Este es el primer año que se hace el HackForGood BigDay por lo que creo que\nes una buena idea contar mi experiencia para que otras personas...",frontmatter:{title:"Hack For Good Big Day",path:"/hack-for-good-big-day/",date:"29 September, 2017"}}},{node:{excerpt:"Buenas, yo se nada sobre la mejor o la peor o manera de hacer un curriculum.Pero si sé una cosa odio invertir tiempo en mantener información...",frontmatter:{title:"Convierte tu perfil Linkedin en un curriculum",path:"/convierte-tu-perfil-de-Linkedin-en-tu-cv/",date:"12 September, 2017"}}},{node:{excerpt:"Screeps Se describe como un juego para programadores. Programa a tu colonia de creeps para que se expanda y conquiste nuevas zonas. Un MMO...",frontmatter:{title:"Empezamos con los juegos educativos.Screeps y Codecombat",path:"/empezamos-con-los-juegos-educativos/",date:"09 September, 2017"}}},{node:{excerpt:"Los métodos estáticos en general, hace nuestro día a día un poco más cómodo pero si tienes una mínima duda de si deberías utilizarlo lo...",frontmatter:{title:"Como testear métodos estáticos",path:"/como-testear-metodos-estaticos/",date:"01 July, 2017"}}},{node:{excerpt:"Me parecía adecuado escribir como uno de los primeros artículos\nblog. Todo el trayecto que tiene mi blog porque aunque me dé algo\nde...",frontmatter:{title:"La Historia De Mi Blog",path:"/la-historia-de-mi-blog/",date:"30 May, 2017"}}},{node:{excerpt:"Últimamente me encontrado con muchos programadores que no ven el switch como un mal olor.\nEs más hace alrededor de un año yo tampoco lo...",frontmatter:{title:"Kata Gilded Rose Switch",path:"/kata-gilded-rose-switch/",date:"30 May, 2017"}}},{node:{excerpt:"Buenas, hoy quería hablar sobre mi primera experiencia ludum. Aunque antes os voy a poner en contexto para todo aquel que desconozca el...",frontmatter:{title:"Ludum Dare GC 35, Mi primera Ludum",path:"/ludum-dare-gc-35-mi-primera-ludum/",date:"29 December, 2016"}}}]},markdownRemark:{id:"/home/workspace/repositories/blog/hablando-con-maquinas/src/pages/articles/2017-12-17-vista-pasiva/index.md absPath of file >>> MarkdownRemark",html:'<p>Hace muy poco me enseñaron la arquitectura modelo-vista-presenter con vista pasiva en javascript\ny no pude resistirme a hacer una prueba de conceptos.\nEl punto fuerte de esta arquitectura es que permite un gran desacoplamiento\nde la tecnología que se utiliza para interactuar con el DOM. Facilitando los test y teniendo\nla libertad de usar la tecnología que mejor se adapte al contexto.</p>\n<p>Vale, ahora que ya os he comentado las cosas buenas de la MVP con vista pasiva. Voy a desglosar\nen que consiste, luego mostraré mi prueba de conceptos y por ultimo terminaré por explicar las\nventajas e inconvenientes de esta arquitectura.</p>\n<h2>Desglosando MVP con vista pasiva</h2>\n<p><strong>Modelo-vista-presenter</strong></p>\n<p>Seguro que muchos conocéis el <strong>modelo-vista-controlador</strong>. En este modelo separamos los elementos de\nnuestro programa según su responsabilidad todo lo que tenga relación con la interfaz de usuario,\nen la vista, si estos elementos se corresponden con como persisten los datos los colocamos\nen el modelo y punto que sirve de enlace entre la vista y el modelo es el controlador.\nTambién recordad que el modelo puede llamar a la vista y mostrar sus datos ya actualizados\npero la vista nunca puede llamar al modelo.</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/8bcf320bc0bc4aa43efa5f5ffce4ce3b-71696.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 590px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 53.80029806259314%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsSAAALEgHS3X78AAAA/klEQVQoz5WSW4+CQAyF+f+/TDdxjUYfeJIngktkDZfhNtD1m93ixEBkmzQztHNOe0oDWbC6rhc9z/MlmAT+xzAM0nWd9H0vWZbJOI7OkySRKLpIGIZSGeNIVxFCpCRVVU3xoiicU8TaYT0h3am1bStN04h5dGT+utK7X+xth2p0aa11YE51CDn/TUh3dPwqjwLEfTWrCMuynAUyCmJ0OksIicrhMScxCJE9Z7whz1b448ADEshDGnL0zl+lwJyBYRc5f3HG4fBAZ4SE2y1zQX9euka+KyaOY7nfv+V6/XpK1mSapnI+neQSRVOSvdM5+q6Yw/Eg+8+dbLYfE+YHJcdf0x1+CXgAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="model_view_controller"\n        title=""\n        src="/static/8bcf320bc0bc4aa43efa5f5ffce4ce3b-fb8a0.png"\n        srcset="/static/8bcf320bc0bc4aa43efa5f5ffce4ce3b-1a291.png 148w,\n/static/8bcf320bc0bc4aa43efa5f5ffce4ce3b-2bc4a.png 295w,\n/static/8bcf320bc0bc4aa43efa5f5ffce4ce3b-fb8a0.png 590w,\n/static/8bcf320bc0bc4aa43efa5f5ffce4ce3b-71696.png 671w"\n        sizes="(max-width: 590px) 100vw, 590px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>El <strong>modelo-vista-presentador</strong> mantiene el mismo concepto de separar las responsabilidades pero\nes el presenter (alias controlador en mvc) quien se ocupa tanto de actualizar la información que muestra de la vista\ncomo de hacer las peticiones al modelo.Es decir, todo pasa por el presenter.</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/838775fd91411529f4733f55fa1b2ac5-55386.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 281px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 174.73309608540924%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAjCAYAAACU9ioYAAAACXBIWXMAAAsSAAALEgHS3X78AAABoElEQVRIx+2W70vCQBzG94f3ohdBkFKzF71WrCiz6IXoiwhJUJeGS/dGxE3dpm7mb5qO2Pa0WwSKpmZjEPiFY+M4Pnfb89xzRymKgl6vh263+6dGGKqqgiIvbpVlWaAI/adiGAax+yhyL694zuWRSj5C0z9WQlcCq5Uy0qknRG7ukEjEEQpfrl3lSuA25T7QTVHG4zGoyWSyYBtBENbahOd5sCw7ZxtN00Atm2nT37Bs3A7oApBIPasyUY/juI0CQRTFOZVHo5G7PpxOpx5sPbUlIhaLQ6jLjsGbsujknCy3IDbqKJaKkGQZzWZrMyBf5vCQTCObzuBgfw/hi3Mc0wHQPj9S2TzogA+R2yiYTO734WAYhtNM07Sb5fSZhun0eRIOZGLqW/JZO5BzZp1lOp0O2u32nG1I39bGJp6r1Wq7vfwvgLquL6RNoVDYKG3I2FnbuB4Ow+HQ04PeRKMuomEnDKn+YPD17A+2BRrwHx6BtpMmFAziOnKFk9MzsKXStkDLyby3jgJJklCp8o4I7/Zh7tlVxAGSNCYXRTeKfO0n+iijfInDIncAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="model_view_presenter"\n        title=""\n        src="/static/838775fd91411529f4733f55fa1b2ac5-55386.png"\n        srcset="/static/838775fd91411529f4733f55fa1b2ac5-60165.png 148w,\n/static/838775fd91411529f4733f55fa1b2ac5-55386.png 281w"\n        sizes="(max-width: 281px) 100vw, 281px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>Llegamos al <strong>mvp con vista pasiva</strong>. Aquí se mantienen los conceptos del mvp.\nSalvo que nuestra vista va a ser <strong>tonta</strong>, la vista no va a contener ninguna clase de lógica.\nSimplemente va a tener una ordenes lo más básicas posibles que ejecutará el presenter.</p>\n<p>Con esto se consigue ese desacoplamiento del que hablamos antes. Si la vista no tiene ninguna\nlógica para cambiar la tecnología que utilizamos simplemente debemos cambiar el modo en\nque se renderizan los elementos.</p>\n<h2>Prueba de concepto</h2>\n<p>Ahora que ya hemos visto los conceptos veamos como se hace.\nLa prueba de conceptos es sencilla voy tener un botón que va a ocultar o mostrar un mensaje.\nUno de estos botones funciona con React, el otro con Vue y ambos utilizan la misma lógica para\nfuncionar.</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/ac9607aa0ff2c6b76096f33938568428-346f0.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 586px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 83.78839590443685%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAARCAIAAABSJhvpAAAACXBIWXMAAAsSAAALEgHS3X78AAABaElEQVQ4y5WTz0/CMBTH+VtNjAcPePDgyYt3TfwPvOvFKEqikYgJ4gGDP1giy8a6nwTWtdtKVwbMhxhHNkT38m3T9ttP0r6XV0JaD2TbViGZpgFUCYbWU2e5SJYi7wZBkMJJLt5f2o1ms15/eG61QsYybhiG6+BZLKbjaCo4LGBXDK71xJnETyUOs+zGxeD9WlCu0t0bun1FKzIvBp+02dGjf9wMDhv+kznOuIyxbxjEwjAjtU8l01vIcf2M67puCg8Hg4yIO6B4SPF8xsOs69h2Co9GLCt42YhFUcQ5z7sexuv+DKEjhLHnOE7eSv/8G9yV3kyElO5H3voj24hOtCBR6EylicenBet8529dks0LsnHuVbr/q/NPSxzc+ztVb++WlK9JVeZwvNwtK+BJHEMqhRBRJOQ+7dj+q0E6lu/ggPN52iH5K+DxV0B5ENIQ0hVFRboObWsYJuzR/JIGaTcta3GTUgJnn9K5ugZEcjriAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="prueba-concepto"\n        title=""\n        src="/static/ac9607aa0ff2c6b76096f33938568428-346f0.png"\n        srcset="/static/ac9607aa0ff2c6b76096f33938568428-2834f.png 148w,\n/static/ac9607aa0ff2c6b76096f33938568428-39b60.png 295w,\n/static/ac9607aa0ff2c6b76096f33938568428-346f0.png 586w"\n        sizes="(max-width: 586px) 100vw, 586px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>Primero de todo mostraré el presenter donde se encuentra la lógica.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">TogglePresenter</span><span class="token punctuation">(</span>view<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\n    <span class="token keyword">let</span> isShow <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>\n    view<span class="token punctuation">.</span><span class="token function">subscribeToToggleMessageRequested</span><span class="token punctuation">(</span>toggleMessage<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token function">toggleMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token keyword">function</span> <span class="token function">toggleMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        isShow <span class="token operator">?</span> view<span class="token punctuation">.</span><span class="token function">hideText</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">:</span> view<span class="token punctuation">.</span><span class="token function">showText</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        isShow <span class="token operator">=</span> <span class="token operator">!</span>isShow<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">return</span> <span class="token punctuation">{</span>toggleMessage<span class="token punctuation">:</span> toggleMessage<span class="token punctuation">}</span>\n\n<span class="token punctuation">}</span>\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> TogglePresenter<span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>Nuestro presenter recibe una vista. Esta vista puede estar trabajando sobre Vue, React, Jquery\nque nuestro presenter trabajara igual.</p>\n<p>Luego la vista se suscribe a nuestra funcionalidad.Ya volveremos a tocar este tema cuando lleguemos\na la vista.Pero si os fijáis el presenter esta manipulando la vista a través\ndel método toggleMessage y se lo esta devolviendo en <strong>view.subscribeToToggleMessageRequested(toggleMessage);</strong>\nEs decir, el presenter le está indicando a la vista como tiene que comportarse usando sus propios\nmétodos y después le pasa este comportamiento a la vista.</p>\n<p>El resto del presenter no es muy importante.Solo tiene lógica de como se comporta, oculta el\nmensaje al empezar y maneja un estado.</p>\n<p>Este presenter fue construido usando tdd. Para ello falseamos la vista y testeamos el comportamiento\nde la vista con el presenter como resultado generamos la estructura de la vista.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">ToggleViewEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n\n    <span class="token keyword">function</span> <span class="token function">hideText</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">throw</span> <span class="token string">"not implemented"</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">function</span> <span class="token function">showText</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">throw</span> <span class="token string">"not implemented"</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">function</span> subscribeToToggleMessageRequested <span class="token punctuation">(</span>handler<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">throw</span> <span class="token string">"not implemented"</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">return</span> <span class="token punctuation">{</span>\n        hideText<span class="token punctuation">:</span> hideText<span class="token punctuation">,</span>\n        showText<span class="token punctuation">:</span> showText<span class="token punctuation">,</span>\n        subscribeToToggleMessageRequested<span class="token punctuation">:</span>subscribeToToggleMessageRequested\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> ToggleViewEmpty<span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>La vista no la testeamos. La idea es crear una vista tan tonta que no tenga caso testearla.\nSiempre que se cumpla la norma y la vista sea tonta. Lo ideal, es conseguir una vista\nque si la testearamos nos encontraríamos testeando la libreria que usa más que la propia vista.</p>\n<p>El siguiente paso seria sobre la estructura de la vista con la que trabaja el presenter y sin romper los test\nimplementar la vista ya funcional. Normalmente, esto se hace directamente sobre la función, pero\ndejaré esta clase de referencia para la gente que quiera ver el repositorio. Por\nlo que copio el archivo, lo renombro e implemento la vista con React.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">const</span> React <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'react\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> ReactDom <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'react-dom\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">function</span> <span class="token function">BoxViewReact</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n\n    <span class="token keyword">let</span> subscribeToToggleMessageRequestedHandler<span class="token punctuation">;</span>\n\n    <span class="token keyword">function</span> <span class="token function">hideText</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        ReactDom<span class="token punctuation">.</span><span class="token function">unmountComponentAtNode</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">\'container-message-react\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">function</span> <span class="token function">showText</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        ReactDom<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>MessageBox <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">,</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">\'container-message-react\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">function</span> subscribeToToggleMessageRequested <span class="token punctuation">(</span>handler<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        subscribeToToggleMessageRequestedHandler <span class="token operator">=</span> handler<span class="token punctuation">;</span>\n        <span class="token function">renderBox</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">function</span> <span class="token function">renderBox</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n        <span class="token keyword">class</span> <span class="token class-name">BoxReact</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span><span class="token punctuation">{</span>\n            <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n                <span class="token keyword">return</span> <span class="token punctuation">(</span>\n                    <span class="token operator">&lt;</span>div  className<span class="token operator">=</span><span class="token string">"box"</span><span class="token operator">></span>\n                        <span class="token operator">&lt;</span>h2 className<span class="token operator">=</span><span class="token string">"titleBox"</span><span class="token operator">></span>React js<span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">></span>\n                        <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"btn"</span> onClick<span class="token operator">=</span><span class="token punctuation">{</span>subscribeToToggleMessageRequestedHandler<span class="token punctuation">}</span><span class="token operator">></span>Toogle<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>\n                        <span class="token operator">&lt;</span>div id<span class="token operator">=</span><span class="token string">"container-message-react"</span><span class="token operator">/</span><span class="token operator">></span>\n                    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span><span class="token punctuation">)</span>\n            <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span>\n        ReactDom<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>BoxReact<span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">,</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">\'box-react\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">class</span> <span class="token class-name">MessageBox</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span><span class="token punctuation">{</span>\n        <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token keyword">return</span> <span class="token operator">&lt;</span>p className<span class="token operator">=</span><span class="token string">"messageBox"</span><span class="token operator">></span>Este mensaje ha sido mostrado por React<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span><span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">return</span> <span class="token punctuation">{</span>\n        hideText<span class="token punctuation">:</span> hideText<span class="token punctuation">,</span>\n        showText<span class="token punctuation">:</span> showText<span class="token punctuation">,</span>\n        subscribeToToggleMessageRequested<span class="token punctuation">:</span>subscribeToToggleMessageRequested\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> BoxViewReact<span class="token punctuation">;</span> \n</code></pre>\n      </div>\n<p>En cuanto al método “subscribeToToggleMessageRequested” es un método que es llamado en el\npresenter donde este le pasa una función que ejecutara la vista cuando el usuario\nejecute algún evento. En nuestro caso el click sobre el botón.</p>\n<p>Si nos fijamos en las implementaciones vemos como la función que recibe la vista desde\nel presenter(subscribeToToggleMessageRequestedHandler) es directamente lo que ejecuta en el Click.</p>\n<p>Todo funciona perfectamente, pero a medida que avanza las semanas por alguna razón\nahora nos interesa trabajar sobre Vue en lugar de React. Que hacemos simplemente cambiamos\nla vista y en lugar de trabajar con React a partir de ahora trabajará con Vue. Manteniendo toda\nla lógica de la aplicación intacta.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">\'vue\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">function</span> <span class="token function">BoxViewVue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n\n    <span class="token keyword">let</span> subscribeToToggleMessageRequestedHandler<span class="token punctuation">;</span>\n    <span class="token keyword">let</span> VueBox<span class="token punctuation">;</span>\n\n    <span class="token keyword">function</span> <span class="token function">hideText</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>VueBox<span class="token punctuation">.</span>show <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span><span class="token punctuation">}</span>\n\n    <span class="token keyword">function</span> <span class="token function">showText</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>VueBox<span class="token punctuation">.</span>show <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span><span class="token punctuation">}</span>\n\n    <span class="token keyword">function</span> subscribeToToggleMessageRequested <span class="token punctuation">(</span>handler<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        subscribeToToggleMessageRequestedHandler <span class="token operator">=</span> handler<span class="token punctuation">;</span>\n        <span class="token function">renderBox</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">function</span> <span class="token function">renderBox</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n        VueBox <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n            el<span class="token punctuation">:</span> <span class="token string">\'#box-vue\'</span><span class="token punctuation">,</span>\n            data<span class="token punctuation">:</span><span class="token punctuation">{</span>show<span class="token punctuation">:</span><span class="token boolean">true</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n            methods<span class="token punctuation">:</span><span class="token punctuation">{</span>\n                subscribeToToggleMessageRequestedHandler<span class="token punctuation">:</span>subscribeToToggleMessageRequestedHandler\n            <span class="token punctuation">}</span><span class="token punctuation">,</span>\n            template<span class="token punctuation">:</span> <span class="token template-string"><span class="token string">`\n            &lt;div  class="box">\n                &lt;h2 class="titleBox">Vue js&lt;/h2>\n                &lt;div class="btn" v-on:click="subscribeToToggleMessageRequestedHandler">Toogle&lt;/div>\n                &lt;div v-if="show">Este mensaje ha sido mostrado por Vue&lt;/div>\n            &lt;/div>`</span></span>\n        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">return</span> <span class="token punctuation">{</span>\n        hideText<span class="token punctuation">:</span> hideText<span class="token punctuation">,</span>\n        showText<span class="token punctuation">:</span> showText<span class="token punctuation">,</span>\n        subscribeToToggleMessageRequested<span class="token punctuation">:</span>subscribeToToggleMessageRequested\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> BoxViewVue<span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<hr>\n<h2>Ventajas e Inconvenientes</h2>\n<p>Es cierto, que ahora la lógica es un simple toggle pero este sistema funcionará igual\nsi se tratara de un componente mucho más complejo. </p>\n<p>Algunas cosas no tan buenas y vale la pena contarlas.\nNo tenemos componentes en el sentido estricto de la palabra.Quiero decir,\norganizamos los presenter y las vistas como si fueran componentes.\nPero ni el javascript, ni los estilos y muchas veces ni el html están ligados entre si\nsalvo por unas clases css y unos id de html.Lo que significa que no podemos quitar\ntodos los elementos de un componentes simplemente dejando de usar un archivo de javascript.\nNormalmente mantenemos la vista y el presenter en el mismo archivo. Con lo cual\nnos funciona bastante bien. Pero no se puede ignorar que conseguimos este desacoplamiento\natacando al Dom directamente. Con lo que a veces hay tocar en varios archivo para lo que solo\nes responsabilidad de un componente.</p>\n<p>Esta arquitectura tiene algunos sacrificios como no poder utilizar toda la potencia de una\ntecnología porque todas estas tecnologías las orientamos a nuestra arquitectura\ny no realmente a como están pensadas para funcionar.Por ejemplo, en caso de la implementación\nde React juego con el método <strong>ReactDom.unmountComponentAtNode</strong> para desmontar y\nocultar el nodo del mensaje y React no esta pensado para funcionar de esta manera.</p>\n<p>Por otro lado implementar una vista sin ninguna lógica puede\nser más difícil hacerlo en la practica de la que uno pudiera imaginar en\nun primer momento. Por ejemplo, en la implementación con vue no supe hace una vista\ntotalmente tonta para este contexto. Si os fijáis dentro del objeto de Vue existe\nun estado show que me vi a obligado a crea para interactuar con la vista. Ya\ntengo en el presenter un estado y ahora en Vue tengo otro estado que no me aporta.\nEn consecuencia añado una complejidad innecesaria por la manera en la que trabaja vue.</p>\n<p>También es cierto que para este caso yo realmente usaría Jquery\ncon el método show y hide se adaptaría perfectamente a lo que necesito.\nY en el contexto de mostrar una estructura de datos es cuando uso React o Vue\npor lo que puedo elegir la mejor herramienta que se adapte a mi arquitectura y a mi contexto\nteniendo una gran libertad para trabajar con varias herramientas.</p>\n<p>Por otro lado, simplifica los test, como tiene un gran nivel de abstracción ya no son necesarios hacer\ntest frágiles de integración para comprobar el DOM.</p>\n<p>Sinceramente, el otro dia hicimos una prueba para estudiar si nos compensaba empezar a mudarnos\nde React a Vue. Probamos con un componente que era básicamente una agenda de citas y\nen poco más de una hora habíamos mudado el componente de React a Vue sin apenas errores\ny sin apenas conocer como trabaja Vue. Lo cual demuestra lo realmente cómodo que\nes cambiar de tecnología.</p>\n<p>La verdad es que aun estoy empezando a manejarme con ella pero ya estoy disfrutando de\nla gran flexibilidad que permite.</p>\n<p>Para terminar os dejo un par de enlaces que os lleva a la prueba de conceptos de github.\n<a href="https://github.com/jonayGodoy/proof_of_concept_pasive-view" target="_blank">el repositorio</a>,\n<a href="https://jonaygodoy.github.io/proof_of_concept_pasive-view/" target="_blank">una página de github con el concepto</a></p>',
frontmatter:{title:"Vista Pasiva",path:"/vista-pasiva/",date:"December 17, 2017",image_article:{relativePath:"articles/2017-12-17-vista-pasiva/mvp.png"}}}},pathContext:{path:"/vista-pasiva/"}}}});
//# sourceMappingURL=path---vista-pasiva-1dfd9893ecc65920a63b.js.map