/*Sobre a criação de novos tipos
Há a possibilidade de gerar novos tipos em TypeScipt, já vimos isso com Generics (vamos nos aprofundar neste recurso também);
Porém existem outros operadores que visam facilitar nossa vida neste assunto;
A ideia deste recurso é deixar a manutenção do projeto mais simples;
Ou seja, gastar mais tempo na estruturação dos tipos e menos na busca de possíveis bugs depois;*/


/*1 - Generics
Utilizamos Generics quando uma função pode aceitar mais de um tipo;
É uma prática mais interessante do que o any, que teria um efeito semelhante;
Porém com Generics*/

function showData<T>(arg: T): string {
     return `O dado é : ${arg}`
}
console.log(showData(5))
console.log(showData('Testando Generic'))
console.log(showData(true))
console.log(showData(['teste']))
