const data = [
    {
        "lado": "dark",
        "name": [ 'Darth vader','Darth Revan', 'Darth Sidious', 'Darth Maul', 'Darth Tyranus', 'Asajj ventress', 'Kylo Ren'],
        "desc": [
            'Após os acontecimentos de "Vingança dos Sith", o escolhido Anakin Skywalker se volta para o lado negro, se tornando um dos mais poderosos Sith que ja existiram, mesmo sendo limitado pelo seu corpo mecânico, Darth Vader ainda acumula grandes feitos com a Força, sendo derrotado pelo seu filho Luke, Darth Vader renega o lado sombrio e volta a ser um Jedi em "O retorno de Jedi".',

            'Revan, um Jedi habilidoso, ganhou destaque durante as Guerras Mandalorianas, liderando a República à vitória. Corrompido pelo lado sombrio junto com seu amigo Malak, ele se tornou um Sith, sendo traído por Malak. Capturado e submetido a intervenção Jedi, sua memória foi apagada, ocultando sua identidade Sith. Ele foi reprogramado para acreditar ser um soldado da República.',

            'Darth Sidious, ou Palpatine, foi o vilão da primeira trilogia de Star Wars, recebendo o cargo de Chanceler conseguiu ganhar a confiança do escolhido Anakin Skywalker e trouxe ele para o lado negro. Após a conversão e execução da Ordem 66, Sidious se tornou Imperador e deu inicio aos acontecimentos dos filmes, morto por Rey em Ascensão Skywalker.',
            'Sendo um zabrak de Dathomir e filho de Mãe Talzin, Darth Maul foi treinado por Sidious antes de Darth Tyranus e Darth Vader, sendo considerado um excelente duelista Maul assassinou Qui-Gon Jinn em um combate dois contra um, sendo vencido por Obi-Wan Kenobi e sobrevivendo após ser partido ao meio. Regressa em Star Wars Rebels e após os acontecimentos da série é morto por Obi-Wan em Tatooine.',
            'Mestre de Quin-Gon Jinn e aprendiz de Yoda, acabou sendo considerado o ,melhor duelista de sua época, Conde Dookan tinha suas habilidades de sabre tão polidas ou até melhor que o próprio Mestre Yoda, após a "morte" de Darth Maul se tornou aprendiz de Sidious. Em um duelo dois contra um foi capaz de derrotar e humilhar Obi-Wan e Anakin sem dificuldades, após os acontecimentos das Guerras Clonicas foi morto por Anakin a mando de seu mestre Darth Sidious.',
        
            'Apesar de não ser uma Sith completa, Ventress foi treinada por Darth Tyranus, aparecendo pela primeira vez na série Clone Wars, teve sua origem entre as bruxas de Dathomir e na Ordem Jedi, após a morte de seu primeiro mestre se voltou para o lado sombrio, aonde permaneceu até Dookan a trair.',
            'Kylo Ren, tambem conhecido como Ben Solo, é filho de Han Solo e Leia e neto de Anakin Skywalker. Treinado como um Jedi por seu tio Luke Skywalker, Ben foi seduzido para o lado sombrio da Força pelo Líder Supremo Snoke, aspirando ser tão poderoso quanto seu avô, o Lorde Sith Darth Vader.Como Kylo Ren, ele se torna o mestre dos Cavaleiros de Ren, um senhor da guerra da Primeira Ordem. Eventualmente, ele é redimido e sacrifica-se para ajudar Rey a derrotar o ressuscitado Imperador Palpatine'
        ],
        "tokens": ['1t.png', '2t.png', '3t.png', '4t.png', '5t.png', '6t.png', '7t.png', '8t.png', '9t.png', '10t.png'],
        "wpp": ['1w.jpg', '2w.png', '3w.jpg', '4w.jpg', '5w.jpg', '6w.jpg', '7w.jpg', '8w.png', '9w.png', '10w.jpg'],
       
    },
    {
        "lado": "luz",
        "name": [ 'Luke Skywalker','Anakin Skywalker', 'obi-wan Kenobi', 'Mestre Yoda', 'qui-gon Jinn', 'Mance Windu', 'Rey'],
        "desc": [
            'Sendo considerado o Maior Jedi que ja existiu, Luke Skywalker foi o responsavel pelo fim do Império de Palpatine. Sendo descendente de Anakin, Luke tem uma proximidade maior que qualquer outro Jedi com a força, após seu treinamento completo foi capaz de derrotar Darth Vader e converte-lo novamente ao lado da luz.',
            'Anakin Skywalker, descoberto por Qui-Gon Jinn e treinado por Obi-Wan Kenobi, era um mestre Jedi talentoso. Sua ascensão como "Escolhido" foi obscurecida por sua queda para o lado negro, tornando-se Darth Vader. Sua história é marcada por sua busca por poder e sua eventual redenção através de seu filho, Luke Skywalker.',
            'Obi-Wan Kenobi, nascido em Stewjon, foi treinado como Jedi por Qui-Gon Jinn. Ele derrotou Darth Maul e treinou Anakin Skywalker, o Escolhido. Durante as Guerras Clônicas, serviu como Alto General Jedi. Após a Grande Purga Jedi, foi forçado ao exílio. Mentor de Luke Skywalker, guiou-o nos caminhos da Força.',
            'Mestre Yoda é um membro de uma espécie desconhecida, pequeno em estatura com apenas 76 centímetros de altura, e tem pele verde e grandes orelhas. Yoda é extremamente antigo, vivendo por mais de 900 anos. Ele é conhecido por sua sabedoria profunda, habilidades poderosas na Força e habilidades excepcionais com um sabre de luz. Yoda serviu como o Grande Mestre do Conselho Jedi e foi um mentor para muitos Jedi ao longo de sua vida.',
            'Qui-Gon Jinn, aprendiz de Conde Dookan e mestre de Obi-Wan, descobriu Anakin Skywalker e foi morto por Darth Maul. Apesar de suas habilidades limitadas com o sabre, era uma autoridade em conhecimento e sabedoria da Força. Ele alcançou a imortalidade através dela, ensinando a técnica a Yoda e Obi-Wan, sendo o primeiro a conseguir essa proeza.',
            'Mace Windu foi um Mestre Jedi, serviu como membro do Alto Conselho Jedi e foi um General Jedi durante as Guerras Clônicas. Windu é conhecido por sua sabedoria, habilidades com a Força e destreza com o sabre de luz. Ele nasceu em Haruun Kal e liderou 212 Jedi em uma batalha em Geonosis, sendo morto por Darth Sidious e Anakin em Vingança dos Sith.',
            'Rey, uma catadora de sucata em Jakku, se revela uma poderosa Mestra Jedi treinada por Luke Skywalker e Leia Organa. Sua conexão com Kylo Ren desempenha um papel crucial. Após a derrota de Palpatine, ela adota o sobrenome Skywalker, honrando seus mentores e assumindo o legado Jedi.'
        ],
        "tokens": ['1t.png', '2t.png', '3t.png', '4t.png', '5t.png', '6t.png', '7t.png', '8t.png', '9t.png', '10t.png'],
        "wpp": ['1w.jpg', '2w.jpg', '3w.jpg', '4w.jpg', '5w.jpg', '6w.jpg', '7w.jpg', '8w.jpg', '9w.jpg', '10w.jpg'],
       
    }]