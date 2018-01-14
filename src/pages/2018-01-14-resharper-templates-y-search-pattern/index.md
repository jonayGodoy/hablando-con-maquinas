---
title: ReSharper, Templates y Search Pattern
date: "2018-01-14T02:40:32.169Z"
path: "/resharper-templates-y-search-pattern/"
image_article: "cover.png"
---

Hace poco que he empezado a tocar c# y con el visual studio.
Por supuesto, esto incluye el plugin ReSharper de jetbrains para visual studio.

El plugin tiene un montón de funcionalidades muy potentes, la que más destaca a 
mi parecer son sus refactor automáticos. Sin embargo, hoy hablaré otras dos funcionalidades
menos espectaculares pero muy útiles las Templates de resharper, sus Search Pattern y de como
estos se pueden utilizar de manera conjunta para crear tus propios refactors personalizados.
Como un pequeño extra también explico como exportar estas y otras configuraciones de reSharper.


Resharper tiene tres tipos de templates hfhfh, jfjfjffj, y fileTemplates.


FileTemplates
-------------------------

Search Pattern
-------------------------


Un marcador de posición tiene el siguiente formato:
 $ placeholder_name $ - where placeholder_name es un identificador arbitrario.
 
Cada marcador de posición se debe definir una vez y se puede usar varias veces en el patrón. 
Al definir un marcador de posición, debe definir sus restricciones tipo y opcional. Hay cinco tipos de marcadores de posición:

Argumento Placeholder: uno o más argumentos en una invocación a un método.
 Si es necesario, puede especificar el número mínimo o máximo de argumentos que deberían coincidir.

Expression Placeholder - una secuencia de operadores y operandos.
 Opcionalmente puede especificar un tipo que devuelve esta expresión.

Identificador Placeholder - cualquier identificador de símbolo. 
También puede especificar una expresión regular que se utilizará para hacer coincidir nombres de símbolos.

Marcador de posición de extracto: 
una sentencia de línea única que termina con un punto y coma o un bloque de instrucciones. Si es necesario, puede especificar el número mínimo o máximo de declaraciones que deberían coincidir.


Escriba Placeholder:
 un tipo de valor o un tipo de referencia. De forma predeterminada, 
 un marcador de posición de este tipo coincidirá con cualquier tipo, 
 pero puede especificar un tipo específico explícitamente.

Tenga en cuenta que es muy importante elegir los tipos correctos de marcadores 
de posición para partes específicas de su patrón. 
Si su patrón no coincide con el bloque de código al que corresponde,
 el problema suele ser con tipos de marcadores de posición elegidos incorrectamente.