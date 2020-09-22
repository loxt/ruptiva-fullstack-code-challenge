"TypeORM ~~são meus ovos~~" - Super Xandão

Para criar o banco de dados, necessitamos do **Docker** e **docker-compose**!

**Criando o banco de dados**:
 * 1 - Rode o docker-compose usando ``docker-compose up -d``
 * 2 - Va no seu terminal, digite sequencialmente os comandos abaixo:
 
 `docker ps -a` Com isso você vai pegar o ID do container mysql<br />
 `docker exec -it SEUCONTAINERID bash`<br />
 `mysql -u root -p` Entrar no MYSQL - A senha é docker<br />
 `CREATE DATABASE ruptiva;` Este comando cria o banco<br />
 `use ruptiva` Usar o banco RUPTIVA para poder criar nossas tabelas<br /><br />
  Copie tudo pra criar a tabela "cars":<br />
  ``CREATE TABLE IF NOT EXISTS `cars` (
     `id` int(10) NOT NULL AUTO_INCREMENT,
     `name` varchar(150) NOT NULL,
     `manufacturer` varchar(150) NOT NULL,
     `hp` double(6, 1) NOT NULL,
     `price` double(20, 2) NOT NULL,
     PRIMARY KEY (`id`)
   ) ENGINE=MyISAM  DEFAULT CHARSET=utf8
    ``<br />
    
  Copie tudo pra criar a tabela "users":<br />
  ``CREATE TABLE IF NOT EXISTS `users` (
     `id` int(10) NOT NULL AUTO_INCREMENT,
     `name` varchar(150) UNIQUE NOT NULL,
     `password` varchar(150) NOT NULL,
     PRIMARY KEY (`id`)
   ) ENGINE=MyISAM DEFAULT CHARSET=utf8;
    ``
    
     
