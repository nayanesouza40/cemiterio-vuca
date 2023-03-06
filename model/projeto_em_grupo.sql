DROP DATABASE IF EXISTS projeto_em_grupo;

CREATE DATABASE projeto_em_grupo;
USE projeto_em_grupo;

-- criação das tabelas 

CREATE TABLE cemiterio (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    endereço VARCHAR(255) NOT NULL
);

CREATE TABLE pessoa (
    id INT AUTO_INCREMENT PRIMARY KEY,
    cpf VARCHAR(14) ,
    nome VARCHAR(255) NOT NULL,
    data_nascimento DATE,
    data_morte DATE,
    cemiterio_id INT,
    tumulo_id INT,
    texto_ob TEXT NOT NULL,
    FOREIGN KEY (cemiterio_id) REFERENCES cemiterio(id)
);



CREATE TABLE familia (
    id INT AUTO_INCREMENT PRIMARY KEY,
    sobrenome VARCHAR(255) NOT NULL,
    cemiterio_id INT,
    FOREIGN KEY (cemiterio_id) REFERENCES cemiterio(id)
);

CREATE TABLE tumulo (
    id INT AUTO_INCREMENT PRIMARY KEY,
    numero VARCHAR(255) NOT NULL,
    familia_id INT,
    FOREIGN KEY (familia_id) REFERENCES familia(id)
);

CREATE TABLE funcionario (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    cargo VARCHAR(255) NOT NULL,
    cemiterio_id INT,
    FOREIGN KEY (cemiterio_id) REFERENCES cemiterio(id)
);

-- inserção de dados
INSERT INTO cemiterio (nome, endereço) VALUES
('Cemitério Municipal de São Paulo', 'Av. Professor Lineu Prestes, 3327 - Cidade Universitária, São Paulo - SP'),
('Cemitério da Consolação', 'Rua da Consolação, 1660 - Consolação, São Paulo - SP'),
('Cemitério Gethsêmani', 'Rua São João Batista, 1020 - Vila Sofia, São Paulo - SP'),
('Cemitério São Paulo', 'Rua Cardeal Arcoverde, 1266 - Pinheiros, São Paulo - SP'),
('Cemitério do Araçá', 'Av. Dr. Arnaldo, 666 - Pacaembu, São Paulo - SP');

-- Inserção na tabela familia
INSERT INTO familia (sobrenome, cemiterio_id) VALUES
('Silva', 1),
('Santos', 2),
('Almeida', 3),
('Pereira', 4),
('Souza', 5);

-- Inserção na tabela tumulo
INSERT INTO tumulo (numero, familia_id) VALUES
('001', 1),
('002', 2),
('003', 3),
('004', 4),
('005', 5),
('006', 1),
('007', 2),
('008', 3),
('009', 4),
('010', 5);

-- Inserção na tabela funcionario
INSERT INTO funcionario (nome, cargo, cemiterio_id) VALUES
('João da Silva', 'Jardineiro', 1),
('Maria Santos', 'Atendente', 2),
('José Almeida', 'Zelador', 3),
('Ana Pereira', 'Administrador', 4),
('Pedro Souza', 'Segurança', 5);

-- Inserção na tabela pessoa
INSERT INTO pessoa (cpf, nome, data_nascimento, data_morte, cemiterio_id, tumulo_id, texto_ob) VALUES
('98987786447', 'Leila Barbosa Ferreira', '1945-07-23', '2036-03-03', 1, 1, 'Com grande pesar, comunicamos o falecimento de Leila Barbosa Ferreira, aos 90 anos. Ela deixa um legado de amor, generosidade e bondade, tendo tocado muitas vidas com sua presença. Seu sorriso caloroso e sua sabedoria serão lembrados para sempre. Descanse em paz, querida Leila'),
('66032475778', 'Fernanda Azevedo Alves', '1947-01-30', '2036-01-30', 2, 2, 'É com profundo pesar que anunciamos o falecimento de Fernanda Azevedo Alves, aos 89 anos. Sua partida deixa um vazio imenso em nossos corações, mas suas memórias permanecerão vivas. Ela foi uma pessoa dedicada e amorosa, que deixou sua marca em todos que a conheceram. Descanse em paz, querida Fernanda.'),
('53584212545', 'Gustavo Gomes Azevedo', '2000-10-26', '2077-03-02', 3, 3, 'Com grande tristeza, comunicamos o falecimento de Gustavo Gomes Azevedo, aos 76 anos. Ele foi um homem trabalhador e amável, que sempre colocou sua familia em primeiro lugar. Sua presença fará muita falta, mas sua lembrança será um conforto para aqueles que o amavam. Descanse em paz, querido Gustavo.'),
('41970038039', 'Kauã Araujo Gonçalves', '1975-03-14', '2039-07-20', 4, 4, 'Kauã Araujo Gonçalves: "Com muita dor, comunicamos o falecimento de Kauã Araujo Gonçalves, aos 64 anos. Ele foi um marido e pai amoroso, que sempre se dedicou à sua família. Sua partida deixa um vazio imenso em nossos corações, mas suas memórias permanecerão vivas. Descanse em paz, querido Kauã.'),
('46808891877', 'Estevan Barbosa Souza', '1941-11-06', '2029-02-18', 5, 5, 'Com profunda tristeza, comunicamos o falecimento de Estevan Barbosa Souza, aos 82 anos. Ele foi um homem íntegro e trabalhador, que sempre se preocupou com o bem-estar de sua família. Seu legado de bondade e honestidade será lembrado por aqueles que tiveram a sorte de conhecê-lo. Descanse em paz, querido Estevan'),
('40964000687', 'Thaís Fernandes Castro', '1994-03-30', '2072-02-09', 1, 6, 'Thaís Fernandes Castro: "Com grande pesar, comunicamos o falecimento de Thaís Fernandes Castro, aos 78 anos. Ela foi uma mulher forte e corajosa, que lutou até o fim contra a doença que a afligia. Sua presença fará muita falta, mas sua lembrança será um conforto para aqueles que a amavam. Descanse em paz, querida Thaís');
