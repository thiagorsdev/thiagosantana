---
layout: post
title: Hey ho, let's Go!
image: img/danielle-macinnes-IuLgi9PWETU-unsplash.jpg
author: Thiago Santana
date: 2019-12-08T10:00:00.000Z
tags: ["techskills", "golang"]
draft: false
---

# Tudo bem?

Depois de 10 anos basicamente trabalhando com Java, estou aprendendo uma nova linguagem de programação. Golang é uma linguagem de código livre criada pelo Google em 2009. Compilada e focada em produtividade, inicialmente seu compilador era escrito em C mas agora é escrito no próprio Golang.

Mesmo já tendo mais de 10 anos de idade, Golang vem começando a ganhar popularidade apenas nos últimos anos, a empresa na qual eu trabalho hoje por exemplo optou por utilizar Go na grande maioria dos projetos backend.

### Go ou Golang?

Acho que não tem certo ou errado, mas normalmente eu utilizo Golang quando estou escrevendo ou quando estou buscando por temas relacionados. Até porque go é uma palavra comum do inglês, o que pode tornar mais complexa uma busca pelo termo. O uso de #golang em hashtags provavelmente também é o mais apropriado.

Agora se você estiver numa palestra ou discutindo com amigos desenvolvedores, provavelmente Go será mais do que suficiente.

### Motivações

**Desempenho** : Da pra dizer que Golang, utiliza bem os recursos computacionais disponíveis atualmente. É uma linguagem tipada que é "convertida" pra linguagem de máquina. Soa meio antigo né? Golang não precisa de nenhuma máquina virtual atuando como um intermediário entre a máquina e o programa propriamente dito. Uma outra questão é que Go possuiu **goroutines**, que são muito mais eficientes e baratos de serem criados quando comparamos com _threads_.

**Simplicidade** : Provavelmente Golang foi desenvolvida com foco em simplicidade desde o início. Os tempos de compilaçãao são rápidos de maneira que o binário resultante fica disponível rapidamente para ser executado(dando uma sensação parecida com a de linguagens dinâmicas). Uma coisa bacana é que Go parte da premissa de que a linguagem não será modificada o tempo todo. A biblioteca padrão ja provê muito do básico, de maneira que não são necessárias bibliotecas de terceiros pra diversas situações comuns. Ah! São apenas 25 palavras reservadas, metade das existentes em Java.

**Concorrência** : Golang é uma linguagem que nasceu pensando em concorrência desde o início com o suporte de **Goroutines** e **Channels**. O que torna a linguagem uma boa escolha para o desenvolvimento de backends com requerimentos de escalabilidade. Pode não parecer, mais isso é um grande passo a frente, especialmente para engenheiros de software com background em linguagens _single thread_ como Ruby e Python.

**Deployment** : Um programa Go quando compilado, gera um binário staticamente linkado, logo não existem dependências e o melhor, você tem apenas um binario pra _deployar_. Docker permite esse tipo de facilidade para outras linguagens que não se comportam da mesma maneira.

### Como começar?

Se você ficou curioso, e quer começar a aprender Go (ou Golang), eu preciso te dizer que esse site foi criado com o objetivo de se tornar referência do assunto. Basicamente vai servir de repositório dos meus aprendizados e que eu espero ser útil pra outros desenvolvedores.

A quantidade de conteúdo escrito em português ainda é pequeno quando comparamos com inglês, e também é um objetivo desse espaço reduzir essa diferença.

Algumas referências básicas ainda em inglês seguem abaixo. Mas eu estou fazendo um compilado do material que já existe em português e que eu irei catalogar aqui em breve.

Hasta la vista!

### Referências

[Tour of Go](https://tour.golang.org/basics/1)  
[Go playground](https://play.golang.org/)  
[Effective Go](https://golang.org/doc/effective_go.html)
