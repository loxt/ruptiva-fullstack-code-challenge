"TypeORM ~~são meus ovos~~" - Super xandão

Para criar o banco de dados, necessitamos do **Docker** e **docker-compose**!

**Criando o banco de dados**:
 * 1 - Rode o docker-compose
 * 2 - Va no seu terminal, digite sequencialmente os comandos abaixo:
 
 `docker ps -a` Com isso você vai pegar o ID do container mysql<br />
 `docker exec -it SEUCONTAINERID bash`<br />
 `mysql -u root -p` Sem senha, apenas pressione ENTER.<br />
 `CREATE DATABASE ruptiva;` Este comando cria o banco<br />
 `use ruptiva` Usar o banco RUPTIVA para poder criar nossas tabelas<br /><br />
  
  Copie tudo pra criar a tabela "cars":<br />
  `CREATE TABLE IF NOT EXISTS `cars` (
     `id` int(10) NOT NULL AUTO_INCREMENT,
     `name` varchar(150) NOT NULL,
     `manufacturer` varchar(150) NOT NULL,
     `hp` int(6) NOT NULL,
     `price` int(20) NOT NULL,
     PRIMARY KEY (`id`)
   ) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=1;
`
