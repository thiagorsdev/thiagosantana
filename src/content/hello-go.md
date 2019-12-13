---
layout: post
title: Hello World
image: img/kyle-glenn-nXt5HtLmlgE-unsplash.jpg
author: Thiago Santana
date: 2019-12-12T10:00:00.000Z
tags: ["techskills", "golang"]
draft: false
---

# Tudo tem um comeco

Nesse breve artigo iremos colocar a mao na massa. Ao final desse texto voce ira ter o ambiente de desenvolvimento configurado e tera executado o seu primeiro programa, o hello world!

### Instalando o Golang na sua maquina (Linux e Mac)

Faca o download do binario nesse site : https://golang.org/dl/

Descompacte na pasta **/usr/local**. Um diretorio **go** sera criado

Adcione **/usr/local/go/bin** no seu PATH. Assim o os executaveis ficarao disponiveis

```
export PATH=$PATH:/usr/local/go/bin
```

Pra Mac existe um executavel que facilita o processo. Basicamente voce o executa e ele faz o trabalho sujo.

No momento em que escrevo esse artigo, a versao disponivel e a _1.13.5_.

Pra testar a sua instalacao, basta digitar **go** no terminal. A saida tem que ser parecida com isso:

```
Go is a tool for managing Go source code.

Usage:

        go <command> [arguments]

The commands are:

        bug         start a bug report
        build       compile packages and dependencies
        clean       remove object files and cached files
        doc         show documentation for package or symbol
        env         print Go environment information
        fix         update packages to use new APIs
        fmt         gofmt (reformat) package sources
        generate    generate Go files by processing source
        get         add dependencies to current module and install them
        install     compile and install packages and dependencies
        list        list packages or modules
        mod         module maintenance
        run         compile and run Go program
        test        test packages
        tool        run specified go tool
        version     print Go version
        vet         report likely mistakes in packages

Use "go help <command>" for more information about a command.

Additional help topics:

        buildmode   build modes
        c           calling between Go and C
        cache       build and test caching
        environment environment variables
        filetype    file types
        go.mod      the go.mod file
        gopath      GOPATH environment variable
        gopath-get  legacy GOPATH go get
        goproxy     module proxy protocol
        importpath  import path syntax
        modules     modules, module versions, and more
        module-get  module-aware go get
        module-auth module authentication using go.sum
        module-private module configuration for non-public modules
        packages    package lists and patterns
        testflag    testing flags
        testfunc    testing functions

Use "go help <topic>" for more information about that topic.
```

### GOPATH, Workspaces e Organizacao de codigo

Como esse e um artigo introdutorio, vamos assumir algumas premissas:

<mark style="background-color: lightblue">
Todo codigo Golang que voce desenvolve, deve estar contido em um <b>workspace</b>, que por sua vez e definido atraves da variavel de ambiente <b>GOPATH</b>.
</mark>

Dentro do workspace vao outros 3 diretorios, **src**, **bin** e **pkg**

-   **src** : Contém todos os códigos, tanto os que você escreve quanto os que você baixa de terceiros. Com o tempo esse diretório fica cheio de repositórios de outros projetos baixados como dependencias dos seus projetos. Vai ficar mais claro a medida que o conteúdo avançar.
-   **bin** : Contém os executáveis (é uma linguagem compilada lembra?). A partir do momento que a configuração do workspace esteja feita, o compilador ira gerar todos os binarios nessa pasta. Todo programa Golang que tem um executável, precisa de um arquivo com o pacote **main** e uma funcao **main()**.
-   **pkg** : Contém todos os pacotes! São basicamente os nao executaveis, dependencias de outros projetos.
