## Diferenças entre os frameworkrs

- Vue
    - v-for v-if 
    - TypeScript
    - Vuex, N sei oq 
    - https://nuxtjs.org/
- React 
    - JSX 
        - .map
    - Eric Elliot, Dan Abramov, Kent c Dotts 
    - TypeScript, PropTypes 
    - É só uma lib
    - Ecossistema   
        - react-router 
        - Server side render 
    - https://nextjs.org/
- Angular 
    - core, sub pacotes 
    - É dificil ser ateu e usar angular 
    - templates eu acho triste 
    - Tipagem
    - Estruturas comuns do backend
        - Injeção de dependencia
        - Estrutura de modulos 

==============================

## Sobre o redux
- https://medium.com/@dan_abramov/you-might-not-need-redux-be46360cf367
- https://medium.com/@oieduardorabelo/twitter-lite-alta-performance-com-react-e-progressive-web-apps-em-escala-2755e0908728
- https://medium.com/statuscode/dissecting-twitters-redux-store-d7280b62c6b1


## Dicas pra práticar
- Recriar coisas comuns de interface web: https://www.felipefialho.com/css-components/#component-collapse
    - pra tempo use o momment: https://momentjs.com/
- https://javascript30.com/

## Começar as coisas
- Componentes   
    - Performance (comento jaja)
    - Atomic design
    - Multi-plataforma  
        - React native
        - 

## Interface do face
- Sobe o popup
- Aumenta a contagem de mensagens
- Abre a caixinha de mensagens
- Atualiza as mensagens no chat

- JavaScript
    - AJAX


## Preparando pro deploy
- https://blog.caelum.com.br/como-preparar-uma-aplicacao-react-para-o-deploy/

## Como se manter atualizado no mundo JS
- https://github.com/tc39/proposals


## Roles do facebook pra criar o react
```js
// Imperativo
function gerenciadora() {
    if(novaMensagem) {
        if(janelaDeMensagensIsOpen) {
            fazOutraCoisa()
        } else {
            sobePopUp()
        }
        aumentaContagem()
        if(isCaixinhaOpen) {
            fazOutraCoisaX()
        } else {
            abreCaixinha()
        }
    }
}

// Declarativa
state = {novaMensagem}



<div>
    <ComponenteQueGuardaALogica>

    {
        if(novaMensagem) {
            <span>asuahu</span>
        }
    }
<div>

// =====

```

## Twitelum
- JavaScript mais novo sempre 


## Cases de React/React Native
- Case do banco do brasil: https://www.infoq.com/br/presentations/react-native-no-banco-do-brasil-como-rn-nos-faz-poupar-1500-horas-por-projeto
- Pesquisar: https://www.ze.delivery/

## Design System
- https://stenciljs.com/demos
- https://github.com/alexpate/awesome-design-systems
- https://storybook.js.org/

## Animações no Front End
- https://greensock.com/tweenmax
- Animar SVG
    - Draw SVG
    - SVG Filters
    - https://tympanus.net/codrops/
    - https://lhbzr.com/work
    - https://airbnb.design/lottie/ (façam um amigo que manje de after effects)
    - 

## Tcharanam da peformance no React
- Ajuda o browser a rodar as coisas, somente quando o browser ta livre pra rodar 
    - requestAnimationFrame()
        - roda sempre que o browser pode
- ele só muda o que precisa mudar ao invés de renderizar tudo de novo
    - Virtual DOM 
        - é um objeto que o react manipula antes de atualizar o document de verdade
- Angular usa o Monkey Patch: https://medium.com/reverse-engineering-angular/angular-deep-dive-zone-js-how-does-it-monkey-patches-various-apis-9cc1c7fcc321


## Livros
- Série you don't know JS: https://www.google.com.br/search?q=you+dont+know+js&oq=you+dont+know+js&aqs=chrome..69i57j0l5.1955j0j9&sourceid=chrome&ie=UTF-8
- Encham de perguntas o leo balter: https://twitter.com/leobalter
    - https://hipsters.tech/evolucao-e-especificacao-do-javascript-moderno/
- https://www.amazon.com.br/M%C3%ADtico-Homem-M%C3%AAs-Ensaios-Engenharia-Software/dp/8550802530?tag=goog0ef-20&smid=A1ZZFT5FULY4LN&ascsubtag=go_726685122_54292137521_242594579893_aud-519888259198:pla-843361975152_c_
- Clean Architechture: https://www.youtube.com/watch?v=Nsjsiz2A9mg

## Softwares como serviço
- https://sendgrid.com/marketing/sendgrid-services-cro/?extProvId=5&extPu=49397-gaw&extLi=115523862&sem_adg=5147766942&extCr=5147766942-144426643671&extSi=&extTg=&keyword=sendgrid%20com&extAP=1t1&extMT=b&gclid=CjwKCAjw7_rlBRBaEiwAc23rhkV2E61qHT4wN3A-k3A4iKqtiay0Ul8PQ_FAXLtpZmLkHCtfx80ZcRoCD9IQAvD_BwE
- https://cloudinary.com/
- https://www.heroku.com/
- http://www.setupmyproject.com
- Como buscar CEP: https://viacep.com.br/ws/<cep da onde vc quer pegar>/json
- Para não reinventar a roda com validação: https://github.com/jquense/yup
- Formik: formularios complexos é com ele https://github.com/jaredpalmer/formik
- https://httpstatusdogs.com/

## Dicas pra lidar com backend
Spring/Node

CRUD [HTTP]
http://twitelum-api.herokuapp.com/tweets GET (pega todos)
http://twitelum-api.herokuapp.com/tweets POST (cria um novo)
http://twitelum-api.herokuapp.com/tweets/id DELETE (apaga por id)
http://twitelum-api.herokuapp.com/tweets/id PUT/PATCH (atualiza por id)

HATEOAS

http://twitelum-api.herokuapp.com/tweets/id/like LIKE (atualiza por id)


- postman pra documentar 
- pegar pronto do swagger: https://swagger.io/

## Deploy de apps
- https://lengstorf.com/code/deploy-nodejs-ssl-digitalocean/




## Dicas de referencias de código
- Como não se preocupar com a performance do browser: https://www.youtube.com/watch?v=i3LRWERf74Mß
- https://www.youtube.com/watch?v=xMk2RwdbByM
- Clean Code
    - 
- https://www.casadocodigo.com.br/products/livro-oo-solid
- https://www.amazon.com.br/Refactoring-Improving-Existing-Addison-Wesley-Signature-ebook/dp/B07LCM8RG2?tag=goog0ef-20&smid=A18CNA8NWQSYHH&ascsubtag=go_1686871380_65779544836_327582895583_aud-580930410671:pla-581169666159_c_
- 
- https://www.google.com.br/search?q=vaughn+vernon+implementando+domain-driven+design&stick=H4sIAAAAAAAAAONgFuLRT9c3NDQuqzQtSy5XAvOMjAzNy8wLi7UEHEtLMvKLQvKd8vOz_fNyKhexGpQllqZn5CmUpRbl5ecpZOYW5KTmpuaVJOal5Cuk5OcmZubpphRllqXmKaSkFmem5wEAPZ8OSmMAAAA&sa=X&ved=2ahUKEwjlw6qPkerhAhUhw1kKHanMBQwQxA0wF3oECAsQBA&biw=1024&bih=689
- Gerando IDs no React: https://www.npmjs.com/package/uuid
- https://willianjusten.com.br/analisando-seu-codigo-js-com-linter/


## Empresas com front end referencia
- https://www.heroku.com/

## Acessibilidade com a talita pagani
- https://www.youtube.com/watch?v=4URTZHk6tz0
- https://www.youtube.com/watch?v=igGOeem6y4w
- Simulador de deficiencias visuais: https://chrome.google.com/webstore/detail/nocoffee/jjeeggmbnhckmgdhmgdckeigabjfbddl

## Trabalhando com Tipos no Front End
- Estude java: https://www.caelum.com.br/apostila-java-orientacao-objetos/#null
- Coloque typescript no projeto: https://facebook.github.io/create-react-app/docs/adding-typescript
- Depoimentos de um front tbm: https://www.youtube.com/watch?v=DAGKG3KrQgA

<!-- - Front End 
    - Faz tudo 

- 11 anos
    - tibia 
        - OT server
    - 
- 14 
    - Infonet 
        - <title>
    - 3 semestres 
        - mysqli 
        - rede social 
- 17
    - ADS 
    - IBM
        - 
    - Agencia Pulso 
        - JS 
    - Eventos 
        - Meetup 
            - Front in Sampa
            - BrazilJS  
    - Caelum 
        -   
    - Só da aula ou trabalha 
        - ERP
        - Wordpress
        - Compilador Universal 

- Ficar programando

## Hobbie
- Fazer roles aleatorios com minha namorada 
- Jogar 
- Estudando mágica 
    - Cartas 
- Livro de performance

==========

- Nao precisa pedir pra ir no banheiro 
- Caelum   
    - Ser customizado ao ponto de ti ajudar especificamente 
    - Desafios 
    - Me interrompam a qualquer momento 
- 15:00


======

# Anotações 

## Pq vcs vieram? O que vcs esperam ver no curso?
- Ver como ele funciona
- Ver o básico
- Quando vale a pena usar react?
    - justificativas tecnicas
- Arquitetura dentro de projetos javascript
- performance
    - 
- cases 
- novas funcionalidades
    - react hooks, context api 
- nao veremos testes com react 
- login
    - autenticação
- organização de rotas
- performance
- 

- Dicas de trampo: https://github.com/frontendbr/vagas/issues


- Meetups
    - .NETCoders
    - Front
- 

=========
- Componentização
    - Vue, Angular, React 
- Não conhecer o suficiente pra defender

 -->


## Dicas pra vida de JS
- https://braziljs.org/weekly/
- https://javascriptweekly.com/

## Dicas de Git e Github
- https://www.udemy.com/git-e-github-para-iniciantes/
- https://willianjusten.com.br/chamada-curso-git-e-github-na-vida-real/
- https://hipsters.tech/pull-requests-e-code-review-hipsters-64/
- Essencial: https://www.youtube.com/watch?v=C18qzn7j4SM&list=PLQCmSnNFVYnRdgxOC_ufH58NxlmM6VYd1


## CSS
- https://cssgridgarden.com/
- 


## Redux Saga
- https://medium.com/nossa-coletividad/redux-saga-voc%C3%AA-no-controle-das-opera%C3%A7%C3%B5es-ass%C3%ADncronas-71c9e6b3aabc
- Sigam o eduardo rabello

## Manipulando Arrays no JavaScripts
```js
// Executa uma função pra cada item de um array
Array.prototype.forEach = function(funcao) {
	arrayQueEstamosTrabalhando = this

    for(let i = 0; i < arrayQueEstamosTrabalhando.length; i++) {
        funcao(arrayQueEstamosTrabalhando[i])
    }
}

// Recebe um array e retorna um novo com o mesmo numero de posições
Array.prototype.map = function(funcao) {
    arrayQueEstamosTrabalhando = this
    const novoArray = []

    for(let i = 0; i < arrayQueEstamosTrabalhando.length; i++) {
        novoArray.push(funcao(arrayQueEstamosTrabalhando[i]))
    }

    return novoArray
}

// Executa uma função pra cada item do array
// Se o retorno da função for true, esse item vai pro array novo
Array.prototype.filter = function(funcao) {
    arrayQueEstamosTrabalhando = this
    const novoArray = []

    for(let i = 0; i < arrayQueEstamosTrabalhando.length; i++) {
        if(funcao(arrayQueEstamosTrabalhando[i])) {
            novoArray.push(arrayQueEstamosTrabalhando[i])
        }
    }
    
    return novoArray
}
```
\



## Performance
- https://www.youtube.com/watch?v=EMCBd3kw4zs
- https://wpostats.com/2015/10/29/amazon-1-percent.html
- 


## Documentação/Design System
- https://www.docz.site/
- https://storybook.js.org


## Deploy
- https://blog.caelum.com.br/como-preparar-uma-aplicacao-react-para-o-deploy/
- https://medium.com/@samanbaboli/how-to-load-balancing-nodejs-apps-using-nginx-a3b4ceb7c782
- https://www.heroku.com/
- 

## Assita com calma
- https://www.youtube.com/user/AkitaOnRails/videos