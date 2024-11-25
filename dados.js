let dados = [
    {
        paroquia: "Igreja São Francisco",
        endereco: "Endereço: Praça Sao Francisco - Roger, João Pessoa - PB, 58010-630.",
        diahorario: "Horários: Domingo - 08:00, 10:00, 18:00",
        contato: "Contato:  (83) 3221-0779 / 3218-4505",
        link: "https://turismo.joaopessoa.pb.gov.br/o-que-fazer/pontos-turisticos/igrejas/igreja-de-sao-francisco/",
        tags: "são francisco sao francisco centro roger",
        coordenadas: {
            latitude: -7.1195,
            longitude: -34.8630
        } 
    },

    {
        paroquia: "Comunidade Católica Nova Berith",
        endereco: "Endereço: R. João Alfredo de Souza, 200 - Altiplano Cabo Branco, João Pessoa - PB, 58046-020 ",
        diahorario: "Horários: Segunda - 17:30 e Sábado - 09:00",
        contato: "Contato: (83) 98724-4412",
        link: "https://www.instagram.com/novaberith/",
        tags: " Comunidade Católica Nova Berith Comunidade Catolica Nova Berith Nova Berith Altiplano ",
        coordenadas: {
            latitude: -7.1308652151662155,
            longitude: -34.8311777002960
        }         
    },

    {
        paroquia: "Paróquia Nossa Senhora do Perpétuo Socorro",
        endereco: "Endereço: R. Emílio de Araújo Chaves, s/n - Altiplano Cabo Branco, João Pessoa - PB, 58046-150",
        diahorario: "Horários: Terça - 7:15, Quarta - 07:15, Quinta - 19:00, Sexta - 07:15, Domingo - 08:00, 10:00, 17:00 e 18:30",
        contato: "Contato: (83) 99925-2805",
        link: "https://www.instagram.com/perpetuosocorrojp/",
        tags: "Nossa Senhora do Perpétuo Socorro Nossa Senhora do Perpetuo Socorro Perpetuo Socorro Perpétuo Socorro Altiplano",
        coordenadas: {
            latitude: -7.134748260728881, 
            longitude: -34.82792040757529
        }  
    },

    {
        paroquia: "Comunidade Doce Mãe de Deus",
        endereco: "Endereço: Av. Gov. Argemiro de Figueiredo, 1470 - Bessa, João Pessoa - PB, 58037-030",
        diahorario: "Horários: Terça - 7:00, Quarta - 7:00, Quinta - 7:00, Sexta -7:00, Domingo - 09:00",
        contato: "Contato: (83) 2177-8805",
        link: "https://www.instagram.com/docemaededeusjp/",
        tags: "Comunidade Doce Mãe de Deus Comunidade Doce Mae de Deus Mae de Deus Mãe de Deus Bessa Jardim Oceania",
        coordenadas: {
            latitude: -7.082470756968935, 
            longitude: -34.83286699329781
        }  
    },

    {
        paroquia: "Paróquia Nossa Senhora Auxiliadora dos Cristãos",
        endereco: "Endereço: R. Valdemar Chianca, 330 - Bessa, João Pessoa - PB, 58037-255",
        diahorario: "Horários: Segunda a Sábado - 17:00, Domingo - 07:30, 10:00, 17:00, 19:30",
        contato: "Contato: (83) 3246-1520 / (83) 98823-7711",
        link: "https://www.instagram.com/paroquiaauxiliadorajp/",
        tags: "Paróquia Nossa Senhora Auxiliadora dos Cristãos Igreja Nossa Senhora Auxiliadora dos Cristãos Nossa Senhora Auxiliadora dos Cristãos Nossa Senhora Auxiliadora dos Cristaos Bessa Jardim Oceania Nossa Sra Auxiliadora dos Cristãos",
        coordenadas: {
            latitude: -7.088869009658833, 
            longitude: -34.8374376903921,
        }  
    },

    {
        paroquia: "Paróquia São Miguel Arcanjo",
        endereco: "Endereço: R. Renato de Souza Maciel, 335 - Bessa, João Pessoa - PB, 58035-150",
        diahorario: "Horários: Terça a Sábado - 19:30, Domingo - 07:00, 10:00, 17:00",
        contato: "Contato: (83) 3508-3468 / (83) 99693-9388",
        link: "https://www.instagram.com/paroquiasaomigueljp/",
        tags: "Paróquia São Miguel Arcanjo Paroquia Sao Miguel Arcanjo Igreja São Miguel Arcanjo São Miguel Arcanjo Bessa Jardim Oceania",
        coordenadas: {
            latitude: -7.064179592499352, 
            longitude: -34.84532830388773
        }  
    },

    {
        paroquia: "Santuário Mãe Rainha",
        endereco: "Endereço: R. Dr. José Aloysio da Costa Machado, 73-1 - Aeroclube, João Pessoa - PB, 58033-455",
        diahorario: "Horários: Quinta - 19:30, Domingo - 07:30, 10:00, 17:00",
        contato: "Contato: (83)3035-9241",
        link: "https://www.instagram.com/santuariomaerainhabessa/",
        tags: "Santuário Mãe Rainha Santuario Mãe Rainha Mãe Rainha Bessa Aeroclube",
        coordenadas: {
            latitude: -7.0869029555710705, 
            longitude: -34.84350331922712
        }  
    },

    {
        paroquia: "Igreja de São Pedro e São Paulo",
        endereco: "Endereço: R. Newton Timoteo De Souza, 25 - Brisamar, João Pessoa - PB, 58034-149.",
        diahorario: "Horários: Segunda a Sexta - 18:30",
        contato: "Contato: (83) 3244-6484 / (83) 99357-1396",
        link: "https://www.instagram.com/paroquia_spedrospaulo/",
        tags: "Igreja de São Pedro e São Paulo São Pedro e São Paulo Sao Pedro e Sao Paulo Paróquia São Pedro São Paulo Brisamar",
        coordenadas: {
            latitude: -7.110918426173418, 
            longitude: -34.841169867407544
        }   
    },
    
    {
        paroquia: "Paróquia Nossa Sra da Assunção",
        endereco: "Endereço: R. Raul Seixas, 78 - Renascer, Cabedelo - PB, 58310-000",
        diahorario: "Horários: Quinta - 19h (+adoração), Domingo - 09:00, 19:00",
        contato: "Contato: indisponível",
        link: "https://www.instagram.com/pnsaa",
        tags: "Paróquia Nossa Sra da Assunção Nossa Sra da Assunção Nossa Sra da Assuncao Renascer Cabedelo",
        coordenadas: {
            latitude: -7.068638144199163, 
            longitude: -34.85739279230585
        }   
    },

    {
        paroquia: "Igreja Nossa Senhora de Nazaré",
        endereco: "Endereço: Tv. Carolino Cardoso, 15 - Portal do Poço, Cabedelo - PB, 58310-000",
        diahorario: "Horários: Terça - 19:00, Quinta - 17:00, Domingo - 07:00, 10:00, 19:30",
        contato: "Contato: (83) 3567-6012",
        link: "https://www.instagram.com/paroquiadenazarepb/",
        tags: "Igreja Nossa Srª de Nazaré Nossa Srª de Nazaré Nossa Senhora de Nazaré Nossa Senhora de Nazare cabedelo",
        coordenadas: {
            latitude: -7.017597191509796, 
            longitude: -34.830604653817346
        }   
    },

    {
        paroquia: "Capela Santo Antônio",
        endereco: "Endereço: Tv. Carolino Cardoso, 15 - Portal do Poço, Cabedelo - PB, 58310-000",
        diahorario: "Horários: Terça - 19:00, Quinta - 17:00, Domingo - 07:00, 10:00, 19:30",
        contato: "Contato: (83) 3567-6012",
        link: "https://www.instagram.com/paroquiadenazarepb/",
        tags: "Capela Santo Antônio Capela Santo Antonio cabedelo",
        coordenadas: {
            latitude: -7.020922530619014, 
            longitude: -34.830696850466346
        }   
    },

    {
        paroquia: "Capela São José Operário",
        endereco: "Endereço: R. Nova Esperança - Lot. Oceania VI, Cabedelo - PB, 58310-000",
        diahorario: "Horários: Sábado - 19:30",
        contato: "Contato: (83) 3567-6012",
        link: "https://www.instagram.com/paroquiadenazarepb/",
        tags: "Capela São José Operário Capela Sao Jose Operario cabedelo",
        coordenadas: {
            latitude: -7.02648021739606, 
            longitude: -34.848638556115084
        }   
    },

    {
        paroquia: "Capela Santa Rita de Cássia",
        endereco: "Endereço: Cabedelo - PB",
        diahorario: "Horários: Domingo - 17:00",
        contato: "Contato: (83) 3567-6012",
        link: "https://www.instagram.com/paroquiadenazarepb/",
        tags: "Capela Santa Rita de Cássia Capela Santa Rita de Cassia cabedelo",
        coordenadas: {
            latitude: -7.02648021739606,
            longitude: -34.848638556115084
        }   
    },

    {
        paroquia: "Capela Nossa Senhora Aparecida",
        endereco: "Endereço: R. Maria Margarida de Andrade, 340 - Portal do Poço, Cabedelo - PB, 58310-000",
        diahorario: "Horários: Sábado - 16:00, 19:00",
        contato: "Contato: (83) 3567-6012",
        link: "https://www.instagram.com/paroquiadenazarepb/",
        tags: "Capela Nossa Senhora Aparecida Nossa Senhora Aparecida cabedelo",
        coordenadas: {
            latitude: -7.024681648716982,
            longitude: -34.8439528621759
        }   
    },

    {
        paroquia: "Par. Sagrado Coração de Jesus",
        endereco: "Endereço: R. Pres. João Pessoa, 129 - Ponta de Matos, Cabedelo - PB, 58100-503",
        diahorario: "Horários: Quinta - 19:30, Sábado - 19:00",
        contato: "Contato: (83) 3228-3488",
        link: "https://www.instagram.com/pscjcabedelo/",
        tags: "Paróquia Sagrado Coração de Jesus Paroquia Sagrado Coracao de Jesus Igreja Sagrado Coracao de Jesus Igreja Sagrado Coração de Jesus cabedelo",
        coordenadas: {
            latitude: -6.971355329312801, 
            longitude: -34.838049376208495
        }   
    },

    {
        paroquia: "Capela Bom Jesus Ressuscitado",
        endereco: "Endereço: R. Antônio Paulino Serrano, 678 - Jardim Manguinho, Cabedelo - PB, 58103-428",
        diahorario: "Horários: Domingo - 08:30",
        contato: "Contato: (83) 3228-3488",
        link: "https://www.instagram.com/pscjcabedelo/",
        tags: "Capela Bom Jesus Ressuscitado Bom Jesus Ressuscitado cabedelo",
        coordenadas: {
            latitude: -6.992613630753265, 
            longitude: -34.83255993836471
        }   
    },

    {
        paroquia: "Capela de São João Maria Vianney e Sta Emília de Rodat",
        endereco: "Endereço: Vila Sao Joao, Cabedelo - PB, 58310-000",
        diahorario: "Horários: Domingo - 19:00",
        contato: "Contato: (83) 3228-3488",
        link: "https://www.instagram.com/pscjcabedelo/",
        tags: "Capela de São João Maria Vianney e Sta Emília de Rodat Capela de Sao Joao Maria Vianney e Sta Emilia de Rodat cabedelo",
        coordenadas: {
            latitude: -6.976085031056044, 
            longitude: -34.82852882579962
        }   
    },

    {
        paroquia: "Capela de São Sebastião",
        endereco: "Endereço: Av. São Sebastião, 26 - Vila Sao Joao, Cabedelo - PB, 58310-000",
        diahorario: "Horários: Domingo - 19:00",
        contato: "Contato: (83) 3228-3488",
        link: "https://www.instagram.com/pscjcabedelo/",
        tags: "Capela de São Sebastião Capela de Sao Sebastiao Sao Sebastiao São Sebastião cabedelo",
        coordenadas: {
            latitude: -6.981130504326702, 
            longitude: -34.83412073272363
        }   
    },

    {
        paroquia: "Par. Sagrado Coração de Jesus - Fortaleza de Sta. Catarina",
        endereco: "Endereço: R. Pres. João Pessoa, 129 - Ponta de Matos, Cabedelo - PB, 58100-503",
        diahorario: "Horários: Domingo - 19:00",
        contato: "Contato: (83) 3228-3488",
        link: "https://www.instagram.com/pscjcabedelo/",
        tags: "Fortaleza de Sta. Catarina Fortaleza de Santa Catarina cabedelo",
        coordenadas: {
            latitude: -6.9713589021572355, 
            longitude: -34.838045953192236
        }   
    },

    {
        paroquia: "Paróquia São Judas Tadeu",
        endereco: "Endereço: R. Nilo Montenegro - Jardim Camboinha, Cabedelo - PB, 58103-676",
        diahorario: "Horários: Quinta - 19:30, Sábado - 17:00, Domingo - 08:30, 17:00",
        contato: "Contato: indisponível",
        link: "https://www.instagram.com/p.saojudastadeu_camboinha",
        tags: "Paróquia São Judas Tadeu Igreja São Judas Tadeu Igreja Sao Judas Tadeu cabedelo",
        coordenadas: {
            latitude: -7.004488472524915, 
            longitude: -34.83202343349667
        }   
    },

    {
        paroquia: "Casa de Evangelização Monsenhor Aluísio Catão",
        endereco: "Endereço: R. Mirtes Bichara Sobreira - Cabo Branco, João Pessoa - PB, 58045-450",
        diahorario: "Horários: Quarta - 18:15, Quinta - 18:15, Sexta - 18:15, Sábado - 18:00, Domingo - 09:00, 17:00",
        contato: "Contato: (83) 99360-8558",
        link: "https://www.instagram.com/casamonscatao/",
        tags: "Casa de Evangelização Monsenhor Aluísio Catão Casa de Evangelizacao Monsenhor Aluisio Catao Monsenhor Aluísio Catão Monsenhor Aluisio Catao Cabo Branco",
        coordenadas: {
            latitude: -7.144810545331201, 
            longitude: -34.81262288093629
        }   
    },

    {
        paroquia: "Comunidade Mel de Deus",
        endereco: "Endereço: R. Maria Loureiro Franca, 145, Cabo Branco",
        diahorario: "Horários: Segunda - 07:30, Terça - 07:30, Quarta - 07:30, Quinta - 07:30, Sexta - 07:30, Sábado - 07:30, Domingo - 07:30",
        contato: "Contato: (83) 98196-7727",
        link: "https://www.instagram.com/meldedeus.jp",
        tags: "Comunidade Mel de Deus Mel de Deus Cabo Branco",
        coordenadas: {
            latitude: -7.121709711171675, 
            longitude: -34.82733385165621
        }   
    },

    {
        paroquia: "Paróquia N Sra. de Guadalupe",
        endereco: "Endereço: R. Maria Loureiro Franca, 145, Cabo Branco",
        diahorario: "Horários: Segunda a Sexta - 17:00, Sábado - 07:00, 19:00, Domingo - 07:00, 10:00, 18:00",
        contato: "Contato: (83) 3226-9182 / (83) 99340-2928",
        link: "https://www.instagram.com/nsguadalupejp/",
        tags: "Paróquia Nossa Senhora de Guadalupe Igreja Nossa Senhora de Guadalupe Nossa Senhora de Guadalupe Cabo Branco",
        coordenadas: {
            latitude: -7.121695349238669, 
            longitude: -34.82733958128602
        }   
    },

    {
        paroquia: "Comunidade Fraterno Amor - Oásis",
        endereco: "Endereço: Rua João Targino Delgado, 53, Camboinha III, Cabedelo",
        diahorario: "Horários: Terça, Quarta, Sexta - 07:00, Sábado - 17:30",
        contato: "Contato: (83) 99964-5813",
        link: "https://www.instagram.com/fraterno_amor/",
        tags: "Comunidade Fraterno Amor Oásis  Fraterno amor Camboinha cabedelo",
        coordenadas: {
            latitude: -6.999050802748421, 
            longitude: -34.82878981249019
        }   
    },

    {
        paroquia: "Paróquia Maria Mãe de Deus",
        endereco: "Endereço: Rua Golfo de Áden s/n, Intermares, Cabedelo",
        diahorario: "Horários: Terça a Sexta - 18:00, Sábado - 19:00, Domingo - 09:00, 17:00, 18:00",
        contato: "Contato: (83) 3248-4826",
        link: "https://www.instagram.com/paroquiamaededeus_intermares/",
        tags: "Maria Mãe de Deus Maria Mae de Deus Intermares cabedelo",
        coordenadas: {
            latitude: -7.035337767928915, 
            longitude: -34.84002498613835
        }   
    },

    {
        paroquia: "Paróquia Maria Mãe de Deus - Capela Jacaré",
        endereco: "Endereço: Rua Golfo de Áden 191, Intermares, Cabedelo",
        diahorario: "Horários: Quarta - 19:30, Domingo 07:30",
        contato: "Contato: (83) 3248-4826",
        link: "https://www.instagram.com/paroquiamaededeus_intermares/",
        tags: "Maria Mãe de Deus Capela Jacaré Maria Mae de Deus Capela jacare Intermares cabedelo",
        coordenadas: {
            latitude: -7.035337767928915,
            longitude: -34.84002498613835
        }   
    },

    {
        paroquia: "Paróquia Nossa Sra. de Nazaré",
        endereco: "Endereço: Rua Oceano Antártico, 200 Jardim Oceania",
        diahorario: "Horários: Segunda a Quarta e Sexta - 17:30, Domingo - 08:00, 11:00, 19:00",
        contato: "Contato: (83) 3246-5968",
        link: "https://www.instagram.com/paroquiadenazarejp/",
        tags: "Nossa Sra. de Nazaré Nossa Senhora de Nazare Jardim Oceania cabedelo",
        coordenadas: {
            latitude: -7.076713303042217, 
            longitude: -34.836229756968315
        }   
    },

    {
        paroquia: "Par. N. S. de Nazaré - Capela N. Sra. da Conceição",
        endereco: "Endereço: Av. Gov. Argemiro de Figueiredo - Jardim Oceania, João Pessoa - PB, 58037-030",
        diahorario: "Horários: Sábado - 16:30",
        contato: "Contato: (83) 3246-5968",
        link: "https://www.instagram.com/paroquiadenazarejp/",
        tags: "Nossa Sra. de Nazaré Nossa Senhora de Nazare Capela Nossa Senhora da Conceicao Bessa Jardim Oceania cabedelo",
        coordenadas: {
            latitude: -7.0734743192595895, 
            longitude: -34.83138056680047
        }   
    },

    {
        paroquia: "Paróquia São Pedro Pescador",
        endereco: "Endereço: Av. Maria Rosa, 1124 - Manaíra, João Pessoa - PB, 58038-460",
        diahorario: "Horários: Segunda a Sábado - 17:00, Domingo - 08:00, 10:00, 17:00, 19:00",
        contato: "Contato: (83) 3031-0328",
        link: "https://www.instagram.com/paroquiasaopedropescadorjp/",
        tags: "Igreja São Pedro Pescador Igreja Sao Pedro Pescador Manaíra Manaira",
        coordenadas: {
            latitude: -7.105525094277995, 
            longitude: -34.83783469094321
        }   
    },

    {
        paroquia: "Paróquia São Pedro Pescador - Capela Sto André",
        endereco: "Endereço: Av. Maria Rosa, 1124 - Manaíra, João Pessoa - PB, 58038-460",
        diahorario: "Horários: Domingo - 06:30",
        contato: "Contato: (83) 3031-0328",
        link: "https://www.instagram.com/paroquiasaopedropescadorjp/",
        tags: "Igreja São Pedro Pescador Igreja Sao Pedro Pescador Manaíra Manaira",
        coordenadas: {
            latitude: -7.105525094277995,
            longitude: -34.83783469094321
        }   
    },

    {
        paroquia: "Comunidade Nossa Sra do Carmo (Maná)",
        endereco: "Endereço: Rua Orlando Soares de Oliveira, nº 299, Miramar, João Pessoa, Brasil 58032-083",
        diahorario: "Horários: Segunda - 07:00, Terça a Sexta - 07:00, 18:00, Sábado - 18:00, Domingo - 09:30, 18:00",
        contato: "Contato: (83) 99909-9977",
        link: "https://www.instagram.com/comunidade_n_s_carmo",
        tags: "Com. N. Senhora do Carmo Nossa Sra do Carmo Miramar",
        coordenadas: {
            latitude: -7.116347188806922, 
            longitude: -34.83264053331139
        }   
    },

    {
        paroquia: "Paróquia N. Sra. de Fátima",
        endereco: "Endereço: Rua Nevinha Cavalcante - Miramar, João Pessoa, Brasil 58043-000",
        diahorario: "Horários: Terça a Sábado - 17:00, Domingo - 07:00, 11:00, 17:00, 19:30",
        contato: "Contato: (83) 3247-5850",
        link: "https://www.instagram.com/pnsfmiramar/",
        tags: "Paróquia Nossa Senhora de Fátima Igreja Nossa Senhora de Fátima Miramar Fatima",
        coordenadas: {
            latitude: -7.120878580406817, 
            longitude: -34.83565333643277
        }   
    },

    {
        paroquia: "Santuário Nossa Senhora da Penha",
        endereco: "Endereço: Reitor Mons. Nereudo Freire Penha, João Pessoa - PB, 58047-010",
        diahorario: "Horários: Sábado - 19:30, Domingo - 07:00, 09:00",
        contato: "Contato: (83) 99890-2339",
        link: "https://www.instagram.com/santuariodapenhapb/",
        tags: "Santuário N. Sra. da Penha Igreja da Penha",
        coordenadas: {
            latitude: -7.165537172287554, 
            longitude: -34.797714117786725
        }   
    },

    {
        paroquia: "Paróquia Santo Antônio de Lisboa",
        endereco: "Endereço: Av. Olinda S/N Tambaú - João Pessoa/PB",
        diahorario: "Horários: Segunda a Sábado - 17:00, Domingo - 07:00, 10:00, 18:00",
        contato: "Contato: (83) 3247-3103",
        link: "https://www.instagram.com/psaltambau",
        tags: "Par. S. Antônio de Lisboa Igreja Santo Antonio de Lisboa Tambaú Tambau",
        coordenadas: {
            latitude: -7.112352451891329, 
            longitude: -34.823461708352134
        }   
    },

    {
        paroquia: "Capela Santa Zita",
        endereco: "Endereço: R. Lauro Tôrres, 335 - Tambauzinho, João Pessoa - PB, 58042-030",
        diahorario: "Horários: Domingo - 10:30, 1° Sexta-feira do mês às 16:00",
        contato: "Contato: (83) 3576-3553",
        link: "https://www.instagram.com/capelasantazita",
        tags: "Capela Santa Zita Tambauzinho",
        coordenadas: {
            latitude: -7.12250272998596, 
            longitude: -34.84895633207725
        }   
    },

    {
        paroquia: "Comunidade Nossa Senhora Menina",
        endereco: "Endereço: R. Gov. José Gomes da Silva, 766 - Tambauzinho, João Pessoa - PB, 58042-240",
        diahorario: "Horários: Sábado - 17:00",
        contato: "Contato: (83) 98820-8984",
        link: "https://www.instagram.com/ccnsm/",
        tags: "Igreja Nossa Senhora Menina Tambauzinho",
        coordenadas: {
            latitude: -7.123021008506471, 
            longitude: -34.843636651896
        }   
    },

    {
        paroquia: "Obra Lumen - Casa Sta Teresa de Calcutá",
        endereco: "Endereço: Rua Joao Domingos, 221 - Miramar, João Pessoa, Brasil",
        diahorario: "Horários: Segunda - 09:00",
        contato: "Contato: (83) 99652-6900",
        link: "https://www.instagram.com/lumenjoaopessoa/",
        tags: "Casa Sta Teresa de Calcutá Casa Santa Teresa de Calcuta Miramar",
        coordenadas: {
            latitude: -7.121565588587338, 
            longitude: -34.83870985097855
        }   
    },

    {
        paroquia: "Santuário Imaculada Conceição",
        endereco: "Endereço: Rua Est. Carlos Henrique Andrade Braga, s/n, Tambauzinho, João Pessoa, Brasil 58042-070",
        diahorario: "Horários: Segunda - 06:00, Terça a Sexta - 06:00, 17:15, Domingo - 06:00, 09:00, 17:15",
        contato: "Contato: (83) 99410-7427",
        link: "https://www.instagram.com/santuariodaimaculadajp/",
        tags: "Santuário Imaculada Conceição Igreja Imaculada Conceicao Tambauzinho",
        coordenadas: {
            latitude: -7.122576898879125, 
            longitude: -34.84433980039584
        }   
    },

    {
        paroquia: "Paróquia N. Sra. de Aparecida",
        endereco: "Endereço: R. Carteiro Francisco Marquês, s/n - Treze de Maio, João Pessoa - PB, 58025-160",
        diahorario: "Horários: Quinta a Sexta - 19:00, Domingo - 08:00, 18:00",
        contato: "Contato: (83) 3576-0867",
        link: "https://www.instagram.com/pnsa13demaio/",
        tags: "Par. N. Sra. de Aparecida Par. Nossa Senhora de Aparecida Treze de Maio 13 de Maio",
        coordenadas: {
            latitude: -7.1139153542986655, 
            longitude: -34.86395872222254
        }   
    },

    {
        paroquia: "Par. N. Sra. de Aparecida - Capela N. Sra. das Graças",
        endereco: "Endereço: R. São José, 191 - Treze de Maio, João Pessoa - PB, 58025-270",
        diahorario: "Horários: Quinta a Sexta - 19:00, Domingo - 08:00, 18:00",
        contato: "Contato: indisponível",
        link: "https://www.instagram.com/pnsa13demaio/",
        tags: "Par. N. Sra. de Aparecida Par. Nossa Senhora de Aparecida Capela Nossa Senhora das Graças Treze de Maio 13 de Maio",
        coordenadas: {
            latitude: -7.112547211778097, 
            longitude: -34.86585404860236
        }   
    },

    {
        paroquia: "Par. N. Sra. de Aparecida - Fraternidade Discípulos Da Mãe de Deus - Missão João Pessoa",
        endereco: "Endereço: R. Francisco Lima de Araújo, 264 - Treze de Maio, João Pessoa - PB, 58025-340",
        diahorario: "Horários: indisponível",
        contato: "Contato: (83) 3224-1764",
        link: "https://www.instagram.com/pnsa13demaio/",
        tags: "Par. N. Sra. de Aparecida Par. Nossa Senhora de Aparecida Fraternidade Discípulos Da Mãe de Deus Fraternidade Discipulos Da Mae de Deus Treze de Maio 13 de Maio",
        coordenadas: {
            latitude: -7.110587245872674, 
            longitude: -34.86287687538158
        }   
    },

    {
        paroquia: "Paróquia Santo Inácio de Loyola",
        endereco: "Endereço: R. João de Brito Lima Moura, 1-113 - Alto do Céu, João Pessoa - PB, 58020-290",
        diahorario: "Horários: Segunda a Sexta - 18:30, Domingo - 07:00, 10:30, 17:00",
        contato: "Contato: (83) 99832-7542",
        link: "https://www.instagram.com/santoinaciojpa/",
        tags: "Paróquia Santo Inácio de Loyola Igreja Santo Inácio de Loyola Igreja Santo Inacio de Loyola Inacio de Loyola Alto do Céu Alto do Ceu",
        coordenadas: {
            latitude: -7.097568689318212, 
            longitude: -34.866189075046776
        }   
    },

    {
        paroquia: "Par. Sto. Inácio de Loyola - Capela Sagrada Família",
        endereco: "Endereço: R. Severina Manoel da Silva - Cidade Padre Zé, João Pessoa - PB, 58025-790",
        diahorario: "Horários: Quinta e Sábado - 19:30",
        contato: "Contato: indisponível",
        link: "https://www.instagram.com/capela.sf",
        tags: "Par. Sto. Inácio de Loyola Igreja Santo Inácio de Loyola Inacio de Loyola Capela Sagrada Familia Padre Ze Padre Zé",
        coordenadas: {
            latitude: -7.104239958566113, 
            longitude: -34.86687943030919
        }   
    },

    {
        paroquia: "Par. Sto. Inácio de Loyola - Capela N. Sra. Aparecida",
        endereco: "Endereço: R. Profa. Josefa di Lorenzo Souza - Portal do Sol, João Pessoa - PB, 58046-751",
        diahorario: "Horários: indisponível",
        contato: "Contato: indisponível",
        link: "https://www.instagram.com/santoinaciojpa/",
        tags: "Par. Sto. Inácio de Loyola Igreja Santo Inácio de Loyola Inacio de Loyola Capela Nossa Senhora Aparecida Porto",
        coordenadas: {
            latitude: -7.159502690280569, 
            longitude: -34.82079168816656
        }   
    },

    {
        paroquia: "Par. Sto. Inácio de Loyola - Capela N. Sra. das Graças",
        endereco: "Endereço: R. Rodrigues Alves, 147 - Alto do Céu, João Pessoa - PB, 58027-340",
        diahorario: "Horários: Terça - 19:30",
        contato: "Contato: indisponível",
        link: "https://www.instagram.com/santoinaciojpa/",
        tags: "Paróquia Santo Inácio de Loyola Igreja Santo Inácio de Loyola Inacio de Loyola Capela Nossa senhora das Graças Gracas Alto do Céu Alto do Ceu",
        coordenadas: {
            latitude: -7.0977058359818646, 
            longitude: -34.86171582326142
        }   
    },

    {
        paroquia: "Par. Sto. Inácio de Loyola - Capela N. Sra. da Conceição",
        endereco: "Endereço: R. Isabel Medeiros Corrêa, 350 - Mandacaru, João Pessoa - PB, 58027-560",
        diahorario: "Horários: Sexta - 19:15",
        contato: "Contato: indisponível",
        link: "https://www.instagram.com/santoinaciojpa/",
        tags: "Paróquia Santo Inácio de Loyola Igreja Santo Inácio de Loyola Inacio de Loyola Capela Nossa Senhora da Conceição Conceicao Mandacaru",
        coordenadas: {
            latitude: -7.0934816737503485, 
            longitude: -34.86454216932438
        }   
    },

    {
        paroquia: "Capelania Militar Sto. Expedito",
        endereco: "Endereço:  Av. Pres. Epitácio Pessoa, 2515 - Bairro dos Estados, João Pessoa - PB, 58088-230",
        diahorario: "Horários: Quinta - 16:00, Sábado - 17:00, Domingo - 09:00",
        contato: "Contato: (83) 2106-1658",
        link: "https://www.instagram.com/capelaniasantoexpeditojp/",
        tags: "Capelania Militar Santo Expedito bairro dos estados",
        coordenadas: {
            latitude: -7.118609434182276, 
            longitude: -34.85188540658531
        }   
    },

    {
        paroquia: "Com. em Adoração - Casa Mãe de Pentecostes",
        endereco: "Endereço:  Rua Dr. Oswaldo Brayne, 124 - Bairro dos Estados, João Pessoa - PB, 58030-210",
        diahorario: "Horários: Segunda a Sexta - 07:00,Sábado - 19:00",
        contato: "Contato: (83) 98205-2946",
        link: "https://www.instagram.com/emadoracaomaedepentecostes",
        tags: "Comunidade Em Adoração Casa Mãe de Pentecostes Mae de Pentecostes bairro dos estados",
        coordenadas: {
            latitude: -7.111194998161685, 
            longitude: -34.854181415970075
        }   
    },

    {
        paroquia: "Fraternidade Oblatos da Santa Cruz e da Sagrada Face",
        endereco: "Endereço:  R. Josimar de Castro Barreto, 284 - Bairro dos Estados, João Pessoa - PB, 58030-227",
        diahorario: "Horários: Terça, Quinta e Sábado - 17:00, Domingo - 10:00, 17:00",
        contato: "Contato: (83) 3566-5741",
        link: "https://www.instagram.com/fraternidadeoblatos/",
        tags: "Fraternidade Oblatos Oblatos da Santa Cruz e da Sagrada Face Bairro dos Estados",
        coordenadas: {
            latitude: -7.108684159309242, 
            longitude: -34.85531784615086
        }   
    },

    {
        paroquia: "Lar da Providência Carneiro da Cunha",
        endereco: "Endereço:  Av. Santa Catarina, 5 - Estados, João Pessoa - PB, 58030-070",
        diahorario: "Horários: Segunda a Sábado - 06:00, Domingo - 7:00",
        contato: "Contato: (83) 3133-3072",
        link: "https://www.instagram.com/lardaprovidenciajoaopessoa/",
        tags: "Lar da Providência Lar da Providencia Providencia Bairro dos Estados",
        coordenadas: {
            latitude: -7.116357707308276, 
            longitude: -34.861112461094244
        }   
    },

    {
        paroquia: "Catedral Nossa Senhora das Neves",
        endereco: "Endereço: Praça Dom Ulrico, s/n - Centro, João Pessoa - PB, 58010-740",
        diahorario: "Horários: Segunda a Sexta - 12:00, Sábado - 18:00, Domingo - 06:00, 09:00, 17:00",
        contato: "Contato: (83) 3221-2503",
        link: "https://www.instagram.com/catedralnevesjp/",
        tags: "Igreja de Nossa Senhora das Neves Nossa Senhora das Neves Catedral de Nossa Senhora das Neves catedral centro",
        coordenadas: {
            latitude: -7.115644619320818, 
            longitude: -34.88447664199958
        }   
    },

    {
        paroquia: "Igreja Nossa Sra. de Lourdes",
        endereco: "Endereço:  R. Trincheiras - Centro, João Pessoa - PB, 58013-520",
        diahorario: "Horários: Terça - 18:30, Sexta - 17:00, Sábado - 19:00, Domingo - 07:00, 17:00, 19:00",
        contato: "Contato: (83) 3221-2163",
        link: "https://www.instagram.com/paroquia_lourdes/",
        tags: "Igreja Nossa Senhora de Lourdes Nossa Senhora de Lourdes Igreja de Lourdes lourdes Centro",
        coordenadas: {
            latitude: -7.125565291047187, 
            longitude: -34.884591838214796
        }   
    },

    {
        paroquia: "Igreja Nossa Sra. do Carmo",
        endereco: "Endereço: Praça Dom Adauto, S/N - Centro, João Pessoa, Brasil 58010-670",
        diahorario: "Horários: Terça a Sábado - 16:00, Domingo - 10:00",
        contato: "Contato: (83) 3221-9400",
        link: "https://www.instagram.com/otc_jp/",
        tags: "Igreja Nossa Senhora do Carmo Nossa Senhora do Carmo carmo Centro",
        coordenadas: {
            latitude: -7.116401966072056, 
            longitude: -34.882526486057536
        }   
    },

    {
        paroquia: "Mosteiro de São Bento",
        endereco: "Endereço: Av. Gen. Osório - Centro, João Pessoa - PB, 58010-780",
        diahorario: "Horários: Terça a Sexta - 15:00, Domingo - 18:30",
        contato: "Contato: (83) 3241-1093",
        link: "https://www.instagram.com/ejcneves/",
        tags: "Mosteiro São Bento Sao Bento Centro",
        coordenadas: {
            latitude: -7.116593508598865, 
            longitude: -34.88458795058174
        }   
    },

    {
        paroquia: "Oratório Nossa Sra. das Mercês",
        endereco: "Endereço: Rua Francisca Moura, 360, Centro , João Pessoa/PB",
        diahorario: "Horários: Quinta - 11:20, Domingo - 11:00",
        contato: "Contato: (83) 3222-3989",
        link: "https://www.instagram.com/oratoriodasmerces/",
        tags: "Oratorio Nossa Senhora das Mercês Oratorio Nossa Senhora das Merces Nossa Senhora das Mercês Nossa Senhora das Merces Merces Centro",
        coordenadas: {
            latitude: -7.125313956671949, 
            longitude: -34.87618719885117
        }   
    },

    {
        paroquia: "Igreja da Misericórdia",
        endereco: "Endereço: R. Duque de Caxias - Centro, João Pessoa - PB, 58100-263",
        diahorario: "Horários: Segunda a Sexta - 11:30, Domingo - 10:30",
        contato: "Contato: (83) 3221-2368",
        link: "https://www.instagram.com/igrejadamisericordiaoficial/",
        tags: "Misericórdia Misericordia Centro",
        coordenadas: {
            latitude: -7.1186700975889705, 
            longitude: -34.88382508254252
        }   
    },

    {
        paroquia: "Paróquia Nossa Sra. Mãe dos Homens",
        endereco: "Endereço: R. Monsenhor Walfredo Leal, 41. Centro, João Pessoa, Brasil 58020-540",
        diahorario: "Horários: Terça a Sábado - 16:00, Domingo - 06:00, 09:00, 11:15, 16:00, 18:15",
        contato: "Contato: (83) 3031-5771",
        link: "https://www.instagram.com/paroquiamaedoshomensjp/",
        tags: "Paróquia Nossa Senhora Mãe dos Homens Igreja Nossa Senhora Mãe dos Homens Mae dos Homens Centro",
        coordenadas: {
            latitude: -7.115441845251684, 
            longitude: -34.87723017820247
        }   
    },

    {
        paroquia: "Comunidade Filhos da Misericórdia",
        endereco: "Endereço: R. Jovita Gomes Alves, 475 - Bairro dos Ipês, João Pessoa - PB, 58028-870",
        diahorario: "Horários: Segunda - 18:15, Terça, Quinta e Sexta 12:30, Sábado - 18:30, Domingo - 09:00, 11:00, 18:30",
        contato: "Contato: (83) 99814-5865",
        link: "https://www.instagram.com/comfilhosdamisericordia/",
        tags: "Filhos da Misericórdia Filhos da Misericordia Misericordia Bairro dos Ipês Ipes",
        coordenadas: {
            latitude: -7.106155503757169, 
            longitude: -34.84590299109043
        }   
    },

    {
        paroquia: "Comunidade Missão És Fiel",
        endereco: "Endereço: R. Jovita Gomes Alves, 475 - Bairro dos Ipês, João Pessoa - PB, 58028-870",
        diahorario: "Horários: Terça - 19:30",
        contato: "Contato: (83) 99626-6536",
        link: "https://www.instagram.com/missaoesfiel/",
        tags: "Comunidade Missao es Fiel Missão És Fiel Bairro dos Ipês Ipes",
        coordenadas: {
            latitude: -7.103218129835069, 
            longitude: -34.855482644664086
        }   
    },

    {
        paroquia: "Paróquia Sant'Anna e S. Joaquim",
        endereco: "Endereço: R. Adália Suassuna Barreto - Pedro Gondim, João Pessoa - PB, 58031-112",
        diahorario: "Horários: Terça a Sexta - 18:00, Sábado - 08:00, Domingo - 07:30, 10:00, 18:30",
        contato: "Contato: (83) 3224-5466",
        link: "https://www.instagram.com/paroquia_santannaesaojoaquim/",
        tags: "Paróquia Santanna e São Joaquim Paroquia Santanna e Sao Joaquim Igreja Santanna e São Joaquim Igreja Santanna e Sao Joaquim Igreja Santana e Sao Joaquim Pedro Gondim",
        coordenadas: {
            latitude: -7.112288493678565, 
            longitude: -34.84374575070751
        }   
    },

    {
        paroquia: "Paróquia Sta. Teresinha",
        endereco: "Endereço: R. Carlos Pessoa - Roger, João Pessoa - PB, 58020-050",
        diahorario: "Horários: Quarta, Sext e Sábado - 19:00, Domingo - 07:30, 17:00",
        contato: "Contato: (83) 98173-5624",
        link: "https://www.instagram.com/santateresinharogerjp/",
        tags: "Paróquia Santa Teresinha Igreja de Santa Teresinha Igreja Santa Terezinha Santa Terezinha Santa Teresinha Roger",
        coordenadas: {
            latitude: -7.111579109665958, 
            longitude: -34.88136097529774
        }   
    },

    {
        paroquia: "Capela Virgem Mãe dos Pobres - Hospital Padre Zé",
        endereco: "Endereço: Av. Des. Boto de Menezes, 657 - Tambiá, João Pessoa - PB, 58020-670",
        diahorario: "Horários: Domingo - 09:00",
        contato: "Contato: indisponível",
        link: "https://www.instagram.com/hospitalpadreze",
        tags: "Capela Virgem Mãe dos Pobres Capela Virgem Mae dos Pobres Hospital Padre Zé Padre Ze Tambiá Tambia",
        coordenadas: {
            latitude: -7.112207365305346, 
            longitude: -34.87189814674346
        }   
    },

    {
        paroquia: "Comunidade Católica Shalom",
        endereco: "Endereço: Av. Dom Pedro II, 2600 - Torre, João Pessoa - PB, 58013-420",
        diahorario: "Horários: Domingo - 09:30",
        contato: "Contato: (83) 99605-4785",
        link: "https://www.instagram.com/shalomjpessoa/",
        tags: "Comunidade Católica Shalom Comunidade Catolica Shalom Shalom Shalon Xalom Torre",
        coordenadas: {
            latitude: -7.1315477745561555, 
            longitude: -34.86240645728247
        }   
    },

    {
        paroquia: "Igreja São Gonçalo",
        endereco: "Endereço: Praça Tiradentes, s/n - Torre, João Pessoa - PB, 58040-160",
        diahorario: "Horários: Segunda a Sábado - 19:00, Domingo - 07:00, 17:00, 19:00",
        contato: "Contato: (83) 3507-1769",
        link: "https://www.instagram.com/igrejasaogoncalo/",
        tags: "Igreja São Gonçalo Igreja Sao Goncalo São Gonçalo Sao Goncalo Torre",
        coordenadas: {
            latitude: -7.123067874588919, 
            longitude: -34.86637628179116
        }   
    },

    {
        paroquia: "Paróquia Santa Júlia",
        endereco: "Endereço: Av. Júlia Freire, s/n - Torre, João Pessoa - PB, 58040-040",
        diahorario: "Horários: Segunda a Sábado - 17:00, Domingo - 07:30, 11:00, 17:00, 19:00",
        contato: "Contato: (83) 3244-7592",
        link: "https://linktr.ee/igrejasantajulia",
        tags: "Paróquia Santa Júlia Igreja Santa Júlia Santa Julia Torre",
        coordenadas: {
            latitude: -7.121289174292499, 
            longitude: -34.860937346461014
        }   
    },

    {
        paroquia: "Santuário São Judas Tadeu",
        endereco: "Endereço: Av. Nossa Sra. de Fátima, 1946 - Torre, João Pessoa, Brasil 58040-380",
        diahorario: "Horários: Terça, Quinta, Sexta e Sábado - 17:00, Quarta - 06:00, Domingo - 07:30, 18:00",
        contato: "Contato: (83) 3224-8759",
        link: "https://www.instagram.com/saojudastadeujp/",
        tags: "Santuário São Judas Tadeu Igreja São Judas Tadeu Igreja Sao Judas Tadeu Torre",
        coordenadas: {
            latitude: -7.1294156094144965, 
            longitude: -34.863075565229984
        }   
    },

    {
        paroquia: "Santuário São Judas Tadeu - Capela N. Sra. da Esperança",
        endereco: "Endereço: R. Mariano Botelho - Expedicionários, João Pessoa - PB, 58041-050",
        diahorario: "Horários: Domingo - 16:00",
        contato: "Contato: (83) 3224-8759",
        link: "https://www.instagram.com/saojudastadeujp/",
        tags: "Santuário São Judas Tadeu Igreja São Judas Tadeu Igreja Sao Judas Tadeu Capela Nossa Senhora da Esperança Capela Nossa Senhora da Esperanca Expedicionários Expedicionarios",
        coordenadas: {
            latitude: -7.127853270461392, 
            longitude: -34.85431907238772
        }   
    },

    {
        paroquia: "Santuário São Judas Tadeu - Capela N. Sra. da Conceição",
        endereco: "Endereço: Av. Nossa Sra. de Fátima, 1946 - Torre, João Pessoa, Brasil 58040-380",
        diahorario: "Horários: Domingo - 08:00",
        contato: "Contato: (83) 3224-8759",
        link: "https://www.instagram.com/saojudastadeujp/",
        tags: "Santuário São Judas Tadeu Igreja São Judas Tadeu Igreja Sao Judas Tadeu Capela Nossa Senhora da Conceição Capela Nossa Senhora da Conceicao Torre",
        coordenadas: {
            latitude: -7.129424317727236, 
            longitude: -34.86307673469871
        }   
    },

    {
        paroquia: "Paróquia N. Sra. da Conceição",
        endereco: "Endereço: R. São Miguel - Varadouro, João Pessoa - PB, 58010-271",
        diahorario: "Horários: Quinta - 19:00 (Missa + adoração), Domingo - 07:00, 19:00",
        contato: "Contato: (83) 3222-4777",
        link: "indisponível",
        tags: "Paróquia Nossa Senhora da Conceição Igreja Nossa Senhora da Conceição Igreja Nossa Senhora da Conceicao Nossa Senhora da Conceicao Nossa Senhora da Conceição Varadouro",
        coordenadas: {
            latitude: -7.123211129604756, 
            longitude: -34.88984083903726
        }   
    },

    {
        paroquia: "Paróquia Santa Clara",
        endereco: "Endereço: 153, R. Luís de França Pereira, 103 - Alto do Mateus, João Pessoa - PB, 58090-580",
        diahorario: "Horários: indisponível",
        contato: "Contato: (83) 98221-0188",
        link: "https://www.instagram.com/paroquiasantaclarapb/",
        tags: "Paróquia Santa Clara Igreja Santa Clara Santa Clara Alto do Mateus Alto do Matheus",
        coordenadas: {
            latitude: -7.1381765390615035, 
            longitude: -34.91430554978178
        }   
    },

    {
        paroquia: "Paróquia Santa Clara - Com. Sta. Mônica",
        endereco: "Endereço: R. Santa Mônica, 142 - Alto do Mateus, João Pessoa - PB, 58090-419",
        diahorario: "Horários: Domingo - 09:00",
        contato: "Contato: (83) 98825-5815",
        link: "https://www.instagram.com/paroquiasantaclarapb/",
        tags: "Paróquia Santa Clara Igreja Santa Clara Comunidade Santa Mônica Comunidade Santa Monica Alto do Mateus Alto do Matheus",
        coordenadas: {
            latitude: -7.138764997575467, 
            longitude: -34.90857073257533
        }   
    },

    {
        paroquia: "Paróquia Santa Clara - Com. S. Pedro",
        endereco: "Endereço: R. Luiz Jacinto, 138 - Alto do Mateus, João Pessoa - PB, 58090-800",
        diahorario: "Horários: Domingo - 09:00",
        contato: "Contato: (83) 98849-95395",
        link: "https://www.instagram.com/paroquiasantaclarapb/",
        tags: "Paróquia Santa Clara Igreja Santa Clara Comunidade São Pedro Comunidade Sao Pedro Igreja São Pedro Alto do Mateus Alto do Matheus",
        coordenadas: {
            latitude: -7.130985340375931, 
            longitude: -34.914040982820005
        }   
    },

    {
        paroquia: "Paróquia Santa Clara - Com. N. Sra. da Rosa Mística",
        endereco: "Endereço: R. Dr. José Edílson Hipólito Ribeiro, 52 - Alto do Mateus, João Pessoa - PB, 58090-037, Brasil",
        diahorario: "Horários: Sábado - 19:30",
        contato: "Contato: (83) 98849-95395",
        link: "https://www.benditoguia.com.br/empresa/igreja-nossa-senhora-rosa-mistica-paroquia-santa-clara-pscpb-alto-do-mateus-joao-pessoa-pb",
        tags: "Paróquia Santa Clara Igreja Santa Clara Comunidade Nossa Senhora da Rosa Mística Comunidade Nossa Senhora da Rosa Mistica Igreja Nossa Senhora Rosa Mística Igreja Nossa Senhora Rosa Mistica Alto do Mateus Alto do Matheus",
        coordenadas: {
            latitude: -7.145263338416487, 
            longitude: -34.91054796660733
        }   
    },

    {
        paroquia: "Paróquia Santa Clara - Com. Sta. Clara",
        endereco: "Endereço: R. Luís de França Pereira, 103 - Alto do Mateus, João Pessoa - PB, 58090-580",
        diahorario: "Horários: Terça e Sexta - 19:30, Domingo - 07:30, 19:30",
        contato: "Contato: (83) 98221-0188",
        link: "https://www.instagram.com/paroquiasantaclarapb/",
        tags: "Paróquia Santa Clara Igreja Santa Clara Comunidade Santa Clara Com. Santa Clara Igreja Santa Clara Santa Clara Alto do Mateus Alto do Matheus",
        coordenadas: {
            latitude: -7.138114428760957, 
            longitude: -34.914266713518394
        }   
    },

    {
        paroquia: "Paróquia Santa Clara - Comunidade S. Mateus",
        endereco: "Endereço:  R. Compositor Noel Rosas - Alto do Mateus, João Pessoa - PB, 58090-780",
        diahorario: "Horários: Domingo -17:00",
        contato: "Contato: (83) 98725-4518",
        link: "https://www.instagram.com/comunidadesaomateuspb",
        tags: "Paróquia Santa Clara Igreja Santa Clara Comunidade São Mateus Comunidade Sao Mateus Igreja São Mateus Igreja Sao Mateus São Mateus Sao Mateus Alto do Mateus Alto do Matheus",
        coordenadas: {
            latitude: -7.131626137741051, 
            longitude: -34.9118191153761
        }   
    },

    {
        paroquia: "Paróquia Santa Clara - Comunidade N. Sra. das Graças",
        endereco: "Endereço:  R. Mateus Ribeiro, 422 - Oitizeiro, João Pessoa - PB, 58088-795",
        diahorario: "Horários: indisponível",
        contato: "Contato: (83) 98867-1167",
        link: "indisponível",
        tags: "Paróquia Santa Clara Igreja Santa Clara Comunidade Nossa Senhora das Graças Comunidade Nossa Senhora das Gracas Igreja Nossa Senhora das Gracas Nossa Senhora das Graças Nossa Senhora das Graças Nossa Senhora das Gracas Alto do Mateus Alto do Matheus",
        coordenadas: {
            latitude: -7.148206561628254, 
            longitude: -34.90573899179308
        }   
    },

    {
        paroquia: "Paróquia Mãe do Redentor - Com. S. Lucas",
        endereco: "Endereço:  R. dos Milagres, 2520 - Cristo Redentor, João Pessoa - PB, 58071-260",
        diahorario: "Horários: Terça, Quinta e Sexta - 19:30, Domingo - 07:30, 17:00, 19:30",
        contato: "Contato: (83) 3231-3800",
        link: "https://www.instagram.com/paroquiamdr/",
        tags: "Paróquia Mãe do Redentor Paroquia Mae do Redentor Igreja Mãe do Redentor Igreja Mae do Redentor Comunidade São Lucas Comunidade Sao Lucas Cristo Redentor Cristo",
        coordenadas: {
            latitude: -7.166914750359894, 
            longitude: -34.868533816050345
        }   
    },

    {
        paroquia: "Paróquia Mãe do Redentor - Com. Mãe da Divina Providência",
        endereco: "Endereço: Cristo Redentor, João Pessoa",
        diahorario: "Horários: Sábado - 17:00",
        contato: "Contato: (83) 3231-3800",
        link: "https://www.instagram.com/paroquiamdr/",
        tags: "Paróquia Mãe do Redentor Paroquia Mae do Redentor Igreja Mãe do Redentor Igreja Mae do Redentor Comunidade Mae da Divina Providencia Comunidade Mãe da Divina Providência Mãe da Divina Providência Mae da Divina Providencia Cristo Redentor Cristo",
        coordenadas: {
            latitude: -7.166923206486148, 
            longitude: -34.868533535957994
        }   
    },

    {
        paroquia: "Paróquia Mãe do Redentor - Com. N. Sra. da Paz",
        endereco: "Endereço:  R. Rodrigo Rizzo Fernandes De Lima - Lot. Cidade Jardim Cristo Redentor, João Pessoa - PB, 58071-285",
        diahorario: "Horários: Sábado - 19:30",
        contato: "Contato: indisponível",
        link: "https://www.instagram.com/paroquiamdr/",
        tags: "Paróquia Mãe do Redentor Paroquia Mae do Redentor Igreja Mãe do Redentor Igreja Mae do Redentor Comunidade Nossa Senhora da Paz Nossa Senhora da Paz Cristo Redentor Cristo",
        coordenadas: {
            latitude: -7.164415330677094, 
            longitude: -34.87248513903339
        }   
    },

    {
        paroquia: "Paróquia Mãe do Redentor - Com. S. Francisco",
        endereco: "Endereço:  R. Pres. Nereu Ramos, 1414 - Cristo Redentor, João Pessoa - PB, 58070-440",
        diahorario: "Horários: Domingo - 08:30",
        contato: "Contato: indisponível",
        link: "https://www.instagram.com/paroquiamdr/",
        tags: "Paróquia Mãe do Redentor Paroquia Mae do Redentor Igreja Mãe do Redentor Igreja Mae do Redentor Comunidade São Francisco Comunidade Sao Francisco São Francisco Sao Francisco Cristo Redentor Cristo",
        coordenadas: {
            latitude: -7.158987419709713, 
            longitude: -34.8760329252362
        }   
    },

    {
        paroquia: "Par. N. Sra. de Aparecida",
        endereco: "Endereço:  R. Horácio Trajano de Oliveira, 630 - Cristo Redentor, João Pessoa - PB, 58070-450",
        diahorario: "Horários: Terça, Quinta e Sexta - 19:00, Domingo - 07:00, 10:00, 18:00",
        contato: "Contato: (83) 3023-6525",
        link: "https://www.instagram.com/pnsaparecidadocristo/",
        tags: "Paróquia Nossa Senhora de Aparecida Paroquia Nossa Senhora de Aparecida Igreja Nossa Senhora de Aparecida Nossa Senhora Aparecida Cristo Redentor Cristo",
        coordenadas: {
            latitude: -7.152226529865091, 
            longitude: -34.87854386174634
        }   
    },

    {
        paroquia: "Par. N. Sra. de Aparecida - Capela N. Sra. de Fátima",
        endereco: "Endereço:  R. Fernando Cunha Lima - Cristo Redentor, João Pessoa - PB, 58071-480",
        diahorario: "Horários: Sábado - 18:00",
        contato: "Contato: indisponível",
        link: "https://www.instagram.com/pnsaparecidadocristo/",
        tags: "Paróquia Nossa Senhora de Aparecida Paroquia Nossa Senhora de Aparecida Igreja Nossa Senhora de Aparecida Nossa Senhora Aparecida Capela Nossa Senhora de Fátima Capela Nossa Senhora de Fatima Nossa Senhora de Fátima Nossa Senhora de Fatima Cristo Redentor Cristo",
        coordenadas: {
            latitude: -7.156899747763154, 
            longitude: -34.88252543555377
        }   
    },

    {
        paroquia: "Par. N. Sra. de Aparecida - Capela Sta. Terezinha",
        endereco: "Endereço:  R. Fernando Cunha Lima - Cristo Redentor, João Pessoa - PB, 58071-480",
        diahorario: "Horários: indisponível",
        contato: "Contato: indisponível",
        link: "https://www.instagram.com/pnsaparecidadocristo/",
        tags: "Paróquia Nossa Senhora de Aparecida Paroquia Nossa Senhora de Aparecida Igreja Nossa Senhora de Aparecida Nossa Senhora Aparecida Capela Santa Terezinha Capela Santa Teresinha Santa Terezinha Santa Teresinha Cristo Redentor Cristo",
        coordenadas: {
            latitude: -7.156908619751016, 
            longitude: -34.882525892937124
        }   
    },

    {
        paroquia: "Par. N. Sra. de Aparecida - Capela N. Sra. da Conceição",
        endereco: "Endereço: Cristo Redentor, João Pessoa - PB",
        diahorario: "Horários: Domingo - 08:00",
        contato: "Contato: indisponível",
        link: "https://www.instagram.com/pnsaparecidadocristo/",
        tags: "Paróquia Nossa Senhora de Aparecida Paroquia Nossa Senhora de Aparecida Igreja Nossa Senhora de Aparecida Nossa Senhora Aparecida Capela Nossa Senhora da Conceição Capela Nossa Senhora da Conceicao Cristo Redentor Cristo",
        coordenadas: {
            latitude: -7.156927845217559, 
            longitude: -34.882528806195644
        }   
    },

    {
        paroquia: "Par. N. Sra. de Aparecida - Capela N. Sra das Graças",
        endereco: "Endereço: R. Dep. José Tavares - Cristo Redentor, João Pessoa - PB, 58070-620",
        diahorario: "Horários: Domingo - 18:00",
        contato: "Contato: indisponível",
        link: "https://www.instagram.com/pnsaparecidadocristo/",
        tags: "Paróquia Nossa Senhora de Aparecida Paroquia Nossa Senhora de Aparecida Igreja Nossa Senhora de Aparecida Nossa Senhora Aparecida Capela Nossa Senhora das Graças Capela Nossa Senhora das Gracas Nossa Senhora das Graças Nossa Senhora das Gracas Cristo Redentor Cristo",
        coordenadas: {
            latitude: -7.154122145305245, 
            longitude: -34.884020119811936
        }   
    },

    {
        paroquia: "Par. São José Operário",
        endereco: "Endereço: Av. Cruz das Armas, 1179 - Cruz das Armas, João Pessoa - PB, 58085-000",
        diahorario: "Horários: Quarta e Sexta - 19:00, Domingo - 07:00, 17:00",
        contato: "Contato: (83) 99858-0104",
        link: "https://www.instagram.com/psjojp/",
        tags: "Paróquia São José Operário Paroquia Sao Jose Operario Igreja São José Operário Cruz das Armas",
        coordenadas: {
            latitude: -7.142885276369003, 
            longitude: -34.890362012557745
        }   
    },

    {
        paroquia: "Casa de Acolhimento Bom Pastor",
        endereco: "Endereço: Av. Jesus de Nazaré, 150 - Jaguaribe, João Pessoa - PB, 58015-340",
        diahorario: "Horários: Segunda a Sábado - 06:30, 17:00, Domingo - 17:00",
        contato: "Contato: (83) 3234-0755",
        link: "indidponível",
        tags: "Casa de Acolhimento Bom Pastor Bom pastor Jaguaribe",
        coordenadas: {
            latitude: -7.127516860965327, 
            longitude: -34.873990471133105
        }   
    },

    {
        paroquia: "Instituto Cândida Vargas - Capela N. Sra. das Graças",
        endereco: "Endereço: Av. Coremas, 865 - Jaguaribe, João Pessoa - PB, 58015-087",
        diahorario: "Horários: Domingo - 08:30",
        contato: "Contato: (83)3213-7580",
        link: "https://www.instagram.com/paroquia_lourdes/",
        tags: "Cândida Vargas Candida Vargas Capela Nossa Senhora das Graças Capela Nossa Senhora das Gracas Jaguaribe",
        coordenadas: {
            latitude: -7.127013116873703, 
            longitude: -34.87586903536496
        }   
    },

    {
        paroquia: "Par. N. Sra. do Rosário",
        endereco: "Endereço:  R. Frei Martinho, s/n - Jaguaribe, João Pessoa - PB, 58014-430",
        diahorario: "Horários: Terça a Sábado - 17:00, Domingo - 07:00, 17:00",
        contato: "Contato: (83) 3241-1433",
        link: "https://www.instagram.com/paroquiadorosariojp/",
        tags: "Paróquia Nossa Senhora do Rosário Paroquia Nossa Senhora do Rosario Igreja Nossa Senhora do Rosário Igreja Nossa Senhora do Rosario Jaguaribe",
        coordenadas: {
            latitude: -7.13304433791054, 
            longitude: -34.879678284464475
        }   
    },

    {
        paroquia: "Par. N. Sra. do Rosário - Capela S. Cristóvão",
        endereco: "Endereço:  R. São Cristóvão, 211 - Jaguaribe, João Pessoa - PB, 58015-310",
        diahorario: "Horários: Domingo - 10:00",
        contato: "Contato: (83) 3241-1433",
        link: "https://www.instagram.com/paroquiadorosariojp/",
        tags: "Paróquia Nossa Senhora do Rosário Paroquia Nossa Senhora do Rosario Igreja Nossa Senhora do Rosário Igreja Nossa Senhora do Rosario Capela São Cristóvão Capela Sao Cristovao Jaguaribe",
        coordenadas: {
            latitude: -7.1320253685650234, 
            longitude: -34.87299869313164
        }   
    },

    {
        paroquia: "Par. N. Sra. do Rosário - Capela Sagr. Família",
        endereco: "Endereço: Jaguaribe, João Pessoa - PB",
        diahorario: "Horários: Domingo - 09:00",
        contato: "Contato: (83) 3241-143",
        link: "https://www.instagram.com/paroquiadorosariojp/",
        tags: "Paróquia Nossa Senhora do Rosário Paroquia Nossa Senhora do Rosario Igreja Nossa Senhora do Rosário Igreja Nossa Senhora do Rosario Capela Sagrada Família Sagrada Familia Jaguaribe",
        coordenadas: {
            latitude: -7.133061777995512, 
            longitude: -34.87967826042575
        }   
    },

    {
        paroquia: "Par. Virgem Mãe dos Pobres",
        endereco: "Endereço: Rua Compositor Rosil Cavalcanti, 130 - Jardim Planalto, João Pessoa - PB, 58088-000",
        diahorario: "Horários: Quinta e Sexta - 19:30, Sábado - 07:00, Domingo - 07:00, 19:00",
        contato: "Contato: (83) 3233-2260",
        link: "https://www.instagram.com/virgemmaedospobres/",
        tags: "Paróquia Virgem Mãe dos Pobres Paroquia Virgem Mae dos Pobres Jardim Planalto",
        coordenadas: {
            latitude: -7.158180688679632, 
            longitude: -34.89813869022113
        }   
    },

    {
        paroquia: "Par. Virgem Mãe dos Pobres - Igreja S. José Carpinteiro",
        endereco: "Endereço: Av. Des. Santos Estanislau, 1187-1297 - Jardim Planalto, João Pessoa - PB, 58088-540",
        diahorario: "Horários: Domingo - 16:00",
        contato: "Contato: (83) 3233-2260",
        link: "https://www.instagram.com/virgemmaedospobres/",
        tags: "Paróquia Virgem Mãe dos Pobres Paroquia Virgem Mae dos Pobres Igreja São José Carpinteiro Igreja Sao Jose Carpinteiro Bairro dos Novais Jardim Planalto",
        coordenadas: {
            latitude: -7.157880286004587, 
            longitude: -34.9062123384133
        }   
    },

    {
        paroquia: "Par. Virgem Mãe dos Pobres - Igreja N. Sra de Fátima",
        endereco: "Endereço: Av. Marta Pachêco, 522 - Jardim Planalto, João Pessoa - PB, 58088-520",
        diahorario: "Horários: Domingo - 09:00",
        contato: "Contato: (83) 3233-2260",
        link: "https://www.instagram.com/virgemmaedospobres/",
        tags: "Paróquia Virgem Mãe dos Pobres Paroquia Virgem Mae dos Pobres Igreja Nossa Senhora de Fátima Nossa Senhora de Fatima Jardim Planalto Bairro dos Novais",
        coordenadas: {
            latitude: -7.15619061435005, 
            longitude: -34.900739644985464
        }   
    },

    {
        paroquia: "Par. Virgem Mãe dos Pobres - Com. S. Tiago",
        endereco: "Endereço: Av. Marta Pachêco, 56 - Bairro dos Novais, João Pessoa - PB",
        diahorario: "Horários: indisponível",
        contato: "Contato: (83) 3233-2260",
        link: "https://www.instagram.com/virgemmaedospobres/",
        tags: "Paróquia Virgem Mãe dos Pobres Paroquia Virgem Mae dos Pobres Comunidade São Tiago Maior Sao Tiago Maior Bairro dos Novais",
        coordenadas: {
            latitude: -7.154573539604451, 
            longitude: -34.896826428772975 
        }   
    },

    {
        paroquia: "Par. Virgem Mãe dos Pobres - Igreja Sto. Antônio",
        endereco: "Endereço: Av. Cruz das Armas, 3335 - Cruz das Armas, João Pessoa - PB",
        diahorario: "Horários: Terça - 19:30",
        contato: "Contato: (83) 3233-2260",
        link: "https://www.instagram.com/virgemmaedospobres/",
        tags: "Paróquia Virgem Mãe dos Pobres Paroquia Virgem Mae dos Pobres Igreja Santo Antônio Santo Antonio Cruz das Armas",
        coordenadas: {
            latitude: -7.160920459179898, 
            longitude: -34.896082437630255
        }   
    },

    {
        paroquia: "Par. Virgem Mãe dos Pobres - Com. N. Sra. das Graças",
        endereco: "Endereço: R. Dr. Luís Bronzeado, 206 - Lot. Santo Antonio, João Pessoa - PB, 58087-318",
        diahorario: "Horários: indisponível",
        contato: "Contato: (83) 3233-2260",
        link: "https://www.instagram.com/virgemmaedospobres/",
        tags: "Paróquia Virgem Mãe dos Pobres Paroquia Virgem Mae dos Pobres Comunidade Nossa Senhora das Graças Nossa Senhora das Gracas",
        coordenadas: {
            latitude: -7.163319445520123, 
            longitude: -34.888701423198846
        }   
    },

    {
        paroquia: "Par. Virgem Mãe dos Pobres - Com. N. Sra. da Assunção",
        endereco: "Endereço: R. Maria Alves de Lima, 42 - 2 - Lot. Brasil, João Pessoa - PB, 58088-740",
        diahorario: "Horários: indisponível",
        contato: "Contato: (83) 3233-2260",
        link: "https://www.instagram.com/virgemmaedospobres/",
        tags: "Paróquia Virgem Mãe dos Pobres Paroquia Virgem Mae dos Pobres Comunidade Nossa Senhora Da Assunção Comunidade Nossa Senhora Da Assuncao Loteamento Brasil Lot. Brasil",
        coordenadas: {
            latitude: -7.152053558513927, 
            longitude: -34.90144203085143
        }   
    },

    {
        paroquia: "Par. Virgem Mãe dos Pobres - Com. N. Sra. da Conceição",
        endereco: "Endereço: R. Sete de Setembro, 63 - Oitizeiro, João Pessoa - PB, 58088-670",
        diahorario: "Horários: indisponível",
        contato: "Contato: (83) 3233-2260",
        link: "https://www.instagram.com/virgemmaedospobres/",
        tags: "Paróquia Virgem Mãe dos Pobres Paroquia Virgem Mae dos Pobres Comunidade Nossa Senhora Da Conceição Comunidade Nossa Senhora Da Conceicao Oitizeiro Oitiseiro",
        coordenadas: {
            latitude: -7.156688508985535, 
            longitude: -34.90498045737615
        }   
    },

    {
        paroquia: "Par. Virgem Mãe dos Pobres - Com. N. Sra. das Dores",
        endereco: "Endereço: R. Comerciante José Antônio de Souza, 285 - Oitizeiro, João Pessoa - PB, 58088-680",
        diahorario: "Horários: indisponível",
        contato: "Contato: (83) 3233-2260",
        link: "https://www.instagram.com/paroquiansdoress/",
        tags: "Paróquia Virgem Mãe dos Pobres Paroquia Virgem Mae dos Pobres Comunidade Nossa Senhora Das Dores Nossa Senhora Das Dores Oitizeiro Oitiseiro",
        coordenadas: {
            latitude: -7.1195,
            longitude: -34.8630
        }   
    },

    {
        paroquia: "Par. Virgem Mãe dos Pobres - Com. Sto. Agostinho",
        endereco: "Endereço: R. Vanderlei Xavier, 32 - Oitizeiro João Pessoa - PB, 58087-160",
        diahorario: "Horários: Domingo - 11:00",
        contato: "Contato: (83) 3233-2260",
        link: "https://www.instagram.com/sntagostinho/",
        tags: "Paróquia Virgem Mãe dos Pobres Paroquia Virgem Mae dos Pobres comunidade santo agostinho  santo agostinho Oitizeiro Oitiseiro",
        coordenadas: {
            latitude: -7.1195,
            longitude: -34.8630
        }   
    },

    {
        paroquia: "Par. Sagrado Coração de Jesus",
        endereco: "Endereço: Av. Caramuru, 666 - Mandacaru, João Pessoa - PB, 58027-430",
        diahorario: "Horários: Sexta - 19:30, Domingo - 08:00, 17:00",
        contato: "Contato: (83) 3224-6989",
        link: "https://www.instagram.com/pscjmandacaru/",
        tags: "Paróquia Sagrado Coração de Jesus Paroquia Sagrado Coracao de Jesus Mandacaru",
        coordenadas: {
            latitude: -7.102807348125637, 
            longitude: -34.8619083090082
        }   
    },

    {
        paroquia: "Par. Sagrado Coração de Jesus - Sant. N. Sra. das Graças",
        endereco: "Endereço: Mandacaru, João Pessoa - PB, 58027-430",
        diahorario: "Horários: Segunda e Sábado - 19:30",
        contato: "Contato: (83) 3224-6989",
        link: "https://www.instagram.com/pscjmandacaru/",
        tags: "Paróquia Sagrado Coração de Jesus Paroquia Sagrado Coracao de Jesus santuário nossa senhora das graças santuario nossa senhora das gracas Mandacaru Mandacarú",
        coordenadas: {
            latitude: -7.102815453637529, 
            longitude: -34.86190810333117
        }   
    },

    {
        paroquia: "Par. Sagrado Coração de Jesus - Capela N. Sra. da Glória",
        endereco: "Endereço: Mandacaru, João Pessoa - PB, 58027-430",
        diahorario: "Horários: Domingo - 19:30",
        contato: "Contato: (83) 3224-6989",
        link: "https://www.instagram.com/pscjmandacaru/",
        tags: "Paróquia Sagrado Coração de Jesus Paroquia Sagrado Coracao de Jesus Capela Nossa Senhora da Glória Capela Nossa Senhora da Gloria Mandacaru Mandacarú",
        coordenadas: {
            latitude: -7.102805270069169, 
            longitude: -34.86191502059798
        }   
    },

    {
        paroquia: "Par. Sagrado Coração de Jesus - Igreja S. José",
        endereco: "Endereço: Mandacaru, João Pessoa - PB, 58027-430",
        diahorario: "Horários: Quarta - 19:30, Sábado - 17:30, Domingo - 17:00",
        contato: "Contato: (83) 3224-6989",
        link: "https://www.instagram.com/pscjmandacaru/",
        tags: "Paróquia Sagrado Coração de Jesus Paroquia Sagrado Coracao de Jesus Igreja São José Igreja Sao Jose Mandacaru Mandacarú",
        coordenadas: {
            latitude: -7.102805935475519, 
            longitude: -34.86190228010657
        }   
    },

    {
        paroquia: "Par. Sagrado Coração de Jesus - Capela Sto. Antônio",
        endereco: "Endereço: Rua Gil Furtado, 142, Mandacarú João Pessoa - PB, 58028-050",
        diahorario: "Horários: Quarta - 19:30, Sábado - 17:30, Domingo - 17:00",
        contato: "Contato: (83) 3224-6989",
        link: "https://www.instagram.com/pscjmandacaru/",
        tags: "Paróquia Sagrado Coração de Jesus Paroquia Sagrado Coracao de Jesus Capela Santo Antônio Capela Santo Antonio Mandacaru Mandacarú",
        coordenadas: {
            latitude: -7.102797950599305, 
            longitude: -34.86190965618055
        }   
    },

    {
        paroquia: "Par. Jesus Ressuscitado",
        endereco: "Endereço:  R. dos Eucaliptos, 100, Anatólia - João Pessoa, PB, 58052-060, Brasil",
        diahorario: "Horários: Terça a Sexta - 18:00, Sábado - 17:00, Domingo - 07:00, 11:00, 17:00",
        contato: "Contato: (83) 2178-7447",
        link: "https://www.instagram.com/pjrpb/",
        tags: "Paróquia Jesus Ressuscitado Igreja Jesus Ressuscitado Jesus Ressuscitado Resucitado Anatólia Anatolia",
        coordenadas: {
            latitude: -7.1501843262006295, 
            longitude: -34.844590047227804
        }   
    },

    {
        paroquia: "Par. Jesus Ressuscitado - Com. S. Lucas",
        endereco: "Endereço:  R. Adailton Tavares da Silva, 86, Cidade dos Colibris - João Pessoa, PB, 58052-060, Brasil",
        diahorario: "Horários: Sábado - 19:00",
        contato: "Contato: (83) 2178-7447",
        link: "https://www.instagram.com/pjrpb/",
        tags: "Paróquia Jesus Ressuscitado Igreja Jesus Ressuscitado Jesus Ressuscitado Resucitado Comunidade São Lucas Comunidade Sao Lucas Cidade dos Colibris",
        coordenadas: {
            latitude: -7.15677925381951, 
            longitude: -34.84833370310274
        }   
    },

    {
        paroquia: "Par. Jesus Ressuscitado - Com. N. Sra. das Graças",
        endereco: "Endereço:  R. Eloy de Medeiros Costa, 135 - Jardim Cidade Universitária, João Pessoa - PB, 58052-530",
        diahorario: "Horários: Domingo - 09:15",
        contato: "Contato: (83) 2178-7447",
        link: "https://www.instagram.com/pjrpb/",
        tags: "Paróquia Jesus Ressuscitado Igreja Jesus Ressuscitado Jesus Ressuscitado Resucitado Comunidade Nossa Senhora das Graças Jardim Cidade Universitária Cidade Universitaria",
        coordenadas: {
            latitude: -7.158881414639451, 
            longitude: -34.84157204201867
        }   
    },

    {
        paroquia: "Par. São Francisco - Matriz Sta. Clara",
        endereco: "Endereço:  R. da Produção s/n- Bairro das Indústrias, João Pessoa - PB, 58083-065",
        diahorario: "Horários: Quinta - 19:00, Domingo - 07:00, 19:00",
        contato: "Contato: (83) 98817-1814",
        link: "https://www.instagram.com/paroquiasf.deassis/",
        tags: "Paróquia São Francisco Paroquia Sao Francisco Matriz Santa Clara",
        coordenadas: {
            latitude: -7.176215655530277, 
            longitude: -34.91474066065481
        }   
    },

    {
        paroquia: "Par. São Francisco - Com. N. Sra. do Sagr. Coração",
        endereco: "Endereço: R. Roberval C. Seabra Marquês, 199-265 - Bairro das Indústrias, João Pessoa - PB, 58083-150",
        diahorario: "Horários: Sábado - 18:00",
        contato: "Contato: (83) 98817-1814",
        link: "https://www.instagram.com/paroquiasf.deassis/",
        tags: "Paróquia São Francisco Paroquia Sao Francisco Comunidade Nossa Senhora do Sagrado Coração de Jesus Sagrado Coracao de Jesus Bairro das Indústrias Bairro das Industrias",
        coordenadas: {
            latitude: -7.1792020143773785, 
            longitude: -34.92023571312292
        }   
    },

    {
        paroquia: "Par. São Francisco - Com. Sta. Luzia",
        endereco: "Endereço: R. Guatemala, s/n - Bairro das Indústrias, João Pessoa - PB, 58083-623",
        diahorario: "Horários: Quarta e Sábado - 19:30",
        contato: "Contato: (83) 98889-8390",
        link: "https://www.instagram.com/paroquiasf.deassis/",
        tags: "Paróquia São Francisco Paroquia Sao Francisco Comunidade Santa Luzia Comunidade Santa Lusia Bairro das Indústrias Bairro das Industrias",
        coordenadas: {
            latitude: -7.179578265192662, 
            longitude: -34.93344892835187
        }   
    },

    {
        paroquia: "Par. São Francisco - Com. N. Sra. Aparecida",
        endereco: "Endereço: Bairro das Indústrias, João Pessoa - PB",
        diahorario: "Horários: Domingo - 17:00",
        contato: "Contato: (83) 98817-1814",
        link: "https://www.instagram.com/paroquiasf.deassis/",
        tags: "Paróquia São Francisco Paroquia Sao Francisco comunidade nossa senhora aparecida Bairro das Indústrias Bairro das Industrias",
        coordenadas: {
            latitude: -7.1762158296774645, 
            longitude: -34.91474272065898
        }   
    },

    {
        paroquia: "Par. São Francisco - Com. N. Sra. de Fátima",
        endereco: "Endereço: R. Projetada, s/n - Bairro das Indústrias, João Pessoa - PB",
        diahorario: "Horários: Sábado - 16:30",
        contato: "Contato: (83) 98817-1814",
        link: "https://www.instagram.com/paroquiasf.deassis/",
        tags: "Paróquia São Francisco Paroquia Sao Francisco Comunidade Nossa Senhora de Fátima Nossa Senhora de Fatima Bairro das Indústrias Bairro das Industrias",
        coordenadas: {
            latitude: -7.176210209681541, 
            longitude: -34.91475059183442
        }   
    },

    {
        paroquia: "Par. Menino Jesus de Praga",
        endereco: "Endereço: R. Bancário Waldemar de Mesquita Accioly, 16 - Bancários, João Pessoa - PB, 58051-420",
        diahorario: "Horários: Terça e Quarta 06:30, Quinta e Sexta - 06:30, 19:30, Sábado - 19:00, Domingo - 08:00, 11:00, 17:00",
        contato: "Contato: (83) 3235-5120",
        link: "https://www.instagram.com/meninojesuspb/",
        tags: "Paróquia Menino Jesus de Praga Igreja Menino Jesus de Praga Bancários Bancarios",
        coordenadas: {
            latitude: -7.147746947082044, 
            longitude: -34.834710532764625
        }   
    },

    {
        paroquia: "Com. Cat. Consolação Misericordiosa",
        endereco: "Endereço: R. José Dionísio da Silva, 97 - Castelo Branco, João Pessoa - PB, 58050-660",
        diahorario: "Horários: Terça - 07:00, 20:00, Quarta a Sexta - 07:00",
        contato: "Contato: (83) 3222-0207",
        link: "https://www.instagram.com/consolacaomisericordiosa/",
        tags: "Comunidade Católica Consolação Misericordiosa Comunidade Catolica Consolacao Misericordiosa Castelo Branco",
        coordenadas: {
            latitude: -7.13214001672425, 
            longitude: -34.845286270780484
        }   
    },

    {
        paroquia: "Par. São Rafael",
        endereco: "Endereço:  R. Hermenegildo de Almeida, SN - Conj. Pres. Castelo Branco II, João Pessoa - PB, 58033-455",
        diahorario: "Horários: Terça a Sexta - 19:00, Sábado - 07:00, Domingo - 07:00, 11:00, 17:00, 19:00",
        contato: "Contato: (83) 3244-8744",
        link: "https://www.instagram.com/paroquiasaorafael/",
        tags: "Paróquia São Rafael Paroquia Sao Rafael Castelo Branco",
        coordenadas: {
            latitude: -7.131611624055437, 
            longitude: -34.84887639607781
        }   
    },

    {
        paroquia: "Par. São Rafael - Capela Sta. Paula Frassinetti",
        endereco: "Endereço:  Praça Alves de Souza, 48 - Castelo Branco, João Pessoa - PB, 58050-200",
        diahorario: "Horários: Domingo - 17:00",
        contato: "Contato: (83) 3244-8744",
        link: "https://www.instagram.com/paroquiasaorafael/",
        tags: "Paróquia São Rafael Paroquia Sao Rafael Capela Santa Paula Castelo Branco",
        coordenadas: {
            latitude: -7.131621128042503, 
            longitude: -34.84887869384763
        }   
    },

    {
        paroquia: "Seminário Arquidiocesano da Paraíba",
        endereco: "Endereço: Conj. Pres. Castelo Branco I, João Pessoa - PB, 58050-010",
        diahorario: "Horários: Segunda - 11:30, Terça a Sexta - 06:40, Sábado - 17:00, Domingo - 10:00",
        contato: "Contato: (83) 99699-3690",
        link: "https://www.instagram.com/seminariopb/",
        tags: "Seminário Arquidiocesano da Paraíba Seminario Arquidiocesano da Paraiba Castelo Branco",
        coordenadas: {
            latitude: -7.130228624342439, 
            longitude: -34.83761458018175
        }   
    },

    {
        paroquia: "Com. Em Adoração - Casa S. Miguel",
        endereco: "Endereço: R. Ciro Troccoli, 1413 - Cidade dos Colibris, João Pessoa - PB, 58073-172",
        diahorario: "Horários: Terça, Quarta, Sexta e Sábado - 17:00, Domingo - 08:00",
        contato: "Contato: (83) 98105-6273",
        link: "https://www.instagram.com/emadoracao/",
        tags: "Comunidade em Adoração Casa São Miguel Comunidade em Adoracao Casa Sao Miguel Cidade dos Colibris Colibris",
        coordenadas: {
            latitude: -7.157349693049317, 
            longitude: -34.85035826154191
        }   
    },

    {
        paroquia: "Par. N. Sra. da Conceição Aparecida",
        endereco: "Endereço: R. Daura Alcídes de Almeida, 149-231 - Gramame, João Pessoa - PB, 58069-270",
        diahorario: "Horários: Quinta - 19:30 (+adoração), Domingo - 07:30, 19:00",
        contato: "Contato: indisponível",
        link: "https://www.instagram.com/pnscaparecidacolinas/",
        tags: "Paróquia Nossa Senhora da Conceição Aparecida Paroquia Nossa Senhora da Conceicao Aparecida Nossa Senhora da Conceicao Aparecida Gramame",
        coordenadas: {
            latitude: -7.194697626895174, 
            longitude: -34.88603917841551
        }   
    },

    {
        paroquia: "Par. São João Batista",
        endereco: "Endereço: R. Jorn. João José Ramalho - Costa e Silva, João Pessoa - PB, 58081-160",
        diahorario: "Horários: Segunda, Quarta e Sexta - 06:30, Terça e Quinta - 19:00, Domingo - 07:00, 17:00",
        contato: "Contato: (83) 2179-3936",
        link: "https://www.instagram.com/saojoaobatistacs/",
        tags: "Paróquia São João Batista Paroquia Sao Joao Batista Costa e Silva",
        coordenadas: {
            latitude: -7.178889585793169, 
            longitude: -34.8957380273777
        }   
    },

    {
        paroquia: "Par. São João Batista - Comunidade Sagrado Coração de Jesus",
        endereco: "Endereço: R. Luzia Otávio de Oliveira - Conj. Esplanada, João Pessoa - PB, 58080-670",
        diahorario: "Horários: Domingo - 09:00",
        contato: "Contato: (83) 2179-3936",
        link: "https://www.instagram.com/saojoaobatistacs/",
        tags: "Paróquia São João Batista Paroquia Sao Joao Batista Comunidade Sagrado Coração de Jesus Comunidade Sagrado Coracao de Jesus Igreja Sagrado Coração de Jesus Esplanada",
        coordenadas: {
            latitude: -7.1705568319590585, 
            longitude: -34.88811141459064
        }   
    },

    {
        paroquia: "Par. São João Batista - Capela N. Sra. Aparecida",
        endereco: "Endereço: R. Maria de Fátima Alves, 123 - Costa e Silva, João Pessoa - PB, 58081-266",
        diahorario: "Horários: Sábado 17:00",
        contato: "Contato: (83) 2179-3936l",
        link: "https://www.instagram.com/saojoaobatistacs/",
        tags: "Paróquia São João Batista Paroquia Sao Joao Batista Capela Nossa Senhora de Aparecida Capela Nossa Senhora Aparecida Costa e Silva",
        coordenadas: {
            latitude: -7.1728069978273545, 
            longitude: -34.89656849509381
        }   
    },

    {
        paroquia: "Par. São João Batista - Com. N. Sra. da Conceição",
        endereco: "Endereço: Costa e Silva, João Pessoa - PB",
        diahorario: "Horários: Sábado 19:00",
        contato: "Contato: (83) 2179-3936",
        link: "https://www.instagram.com/saojoaobatistacs/",
        tags: "Paróquia São João Batista Paroquia Sao Joao Batista Comunidade Nossa Senhora da Conceição Comunidade Nossa Senhora Conceicao Costa e Silva",
        coordenadas: {
            latitude: -7.1789118046918405, 
            longitude: -34.89573872036954
        }   
    },

    {
        paroquia: "Par. São João Batista - Com. Sepol",
        endereco: "Endereço: Costa e Silva, João Pessoa - PB",
        diahorario: "Horários: indisponível",
        contato: "Contato: (83) 2179-3936",
        link: "https://www.instagram.com/saojoaobatistacs/",
        tags: "Paróquia São João Batista Paroquia Sao Joao Batista Comunidade Sepol Costa e Silva",
        coordenadas: {
            latitude: -7.178912342094136, 
            longitude: -34.89572531953593
        }   
    },

    {
        paroquia: "Par. São João Batista - Com. São João Batista Mártir",
        endereco: "Endereço: R. Jorn. João José Ramalho - Costa e Silva, João Pessoa - PB, 58081-160",
        diahorario: "Horários: indisponível",
        contato: "Contato: (83) 2179-3936",
        link: "https://www.instagram.com/saojoaobatistacs/",
        tags: "Paróquia São João Batista Paroquia Sao Joao Batista Comunidade São João Batista Mártir São João Batista Sao Joao Batista Costa e Silva",
        coordenadas: {
            latitude: -7.178918102628404, 
            longitude: -34.89573838724465
        }   
    },

    {
        paroquia: "Par. São João Batista - Com. S. Sebastião",
        endereco: "Endereço: R. Jorn. João José Ramalho - Costa e Silva, João Pessoa - PB, 58081-160",
        diahorario: "Horários: indisponível",
        contato: "Contato: (83) 2179-3936",
        link: "https://www.instagram.com/saojoaobatistacs/",
        tags: "Paróquia São João Batista Paroquia Sao Joao Batista Comunidade São Sebastião Sao Sebastiao Costa e Silva",
        coordenadas: {
            latitude: -7.178911736620312, 
            longitude: -34.8957259193233
        }   
    },

    {
        paroquia: "Par. São João Batista - Com. N. Sra de Fátima",
        endereco: "Endereço: Costa e Silva, João Pessoa - PB",
        diahorario: "Horários: indisponível",
        contato: "Contato: (83) 2179-3936",
        link: "https://www.instagram.com/saojoaobatistacs/",
        tags: "Paróquia São João Batista Paroquia Sao Joao Batista Comunidade Nossa Senhora de Fátima Nossa Senhora de Fatima Costa e Silva",
        coordenadas: {
            latitude: -7.178909641395247, 
            longitude: -34.89573145649549
        }   
    },

    {
        paroquia: "Par. Sant'Ana",
        endereco: "Endereço: R. José Lúcio dos Santos - Cidade dos Funcionários II, João Pessoa - PB, 58078-220",
        diahorario: "Horários: Terça e Quinta - 19:30, Sexta - 17:00, Domingo - 07:00, 19:00",
        contato: "Contato: (83) 3234-9960",
        link: "https://www.instagram.com/paroquiasantanajp/",
        tags: "Paróquia Sant'Ana Paróquia Santana Paroquia Santana Funcionários 2 Funcionarios 2 Funcionários II",
        coordenadas: {
            latitude: -7.178565217679515, 
            longitude: -34.881572975761344
        }   
    },

    {
        paroquia: "Par. Sant'Ana - Com. N. Sra da Conceição",
        endereco: "Endereço: Funcionários III, João Pessoa - PB, 58078-220",
        diahorario: "Horários: Quarta - 19:30",
        contato: "Contato: (83) 3234-9960",
        link: "https://www.instagram.com/paroquiasantanajp/",
        tags: "Paróquia Sant'Ana Paróquia Santana Paroquia Santana Comunidade Nossa Senhora Da Conceição Comunidade Nossa Senhora Da Conceicao Funcionários 3 Funcionarios 3 Funcionários III",
        coordenadas: {
            latitude: -7.178552651811451, 
            longitude: -34.88159408433173
        }   
    },

    {
        paroquia: "Par. Sant'Ana - Com. N. Sra. de Nazaré",
        endereco: "Endereço: Cidade dos Funcionários III, João Pessoa - PB, 58033-455",
        diahorario: "Horários: Sábado - 16:00, Domingo - 09:30",
        contato: "Contato: (83) 3234-9960",
        link: "https://www.instagram.com/paroquiasantanajp/",
        tags: "Paróquia Sant'Ana Paróquia Santana Paroquia Santana Comunidade Nossa Senhora de Nazaré Comunidade Nossa Senhora de Nazare Funcionários 3 Funcionarios 3 Funcionários III",
        coordenadas: {
            latitude: -7.1785721555782835, 
            longitude: -34.88157208166245
        }   
    },

    {
        paroquia: "Par. Sant'Ana - Com. S. João Paulo II",
        endereco: "Endereço: Cidade dos Funcionários III, João Pessoa - PB",
        diahorario: "Horários: Sábado - 17:30",
        contato: "Contato: (83) 3234-9960",
        link: "https://www.instagram.com/paroquiasantanajp/",
        tags: "Paróquia Sant'Ana Paróquia Santana Paroquia Santana Comunidade São João Paulo II Comunidade Sao Joao Paulo II Sao Joao Paulo 2 Funcionários 3 Funcionarios 3 Funcionários III",
        coordenadas: {
            latitude: -7.178586126796596, 
            longitude: -34.88157945773643
        }   
    },

    {
        paroquia: "Par. Sant'Ana - Com. N. Sra. Aparecida",
        endereco: "Endereço: R. Maria Paulino da Silva - Mangabeira, João Pessoa - PB, 58057-000",
        diahorario: "Horários: Sábado - 19:30",
        contato: "Contato: (83) 2178-4114",
        link: "https://www.instagram.com/paroquiasantanajp/",
        tags: "Paróquia Sant'Ana Paróquia Santana Paroquia Santana Comunidade Nossa Senhora Aparecida Mangabeira",
        coordenadas: {
            latitude: -7.1811180758393895, 
            longitude: -34.839672519351744
        }   
    },

    {
        paroquia: "Par. Sant'Ana - Com. S. Paulo Apóstolo",
        endereco: "Endereço:  Cidade dos Funcionários II e III, João Pessoa - PB, 58079-130",
        diahorario: "Horários: Domingo - 17:00",
        contato: "Contato: (83) 3234-9960",
        link: "https://www.instagram.com/paroquiasantanajp/",
        tags: "Paróquia Sant'Ana Paróquia Santana Paroquia Santana Comunidade Nossa Senhora Aparecida Funcionários II Funcionarios II Funcionários 2",
        coordenadas: {
            latitude: -7.18213192588625, 
            longitude: -34.88445122770457
        }   
    },

    {
        paroquia: "Par. Sant'Ana - Santuário S. José",
        endereco: "Endereço: R. Francisco Tito da Silva - João Paulo II, João Pessoa - PB, 58076-662",
        diahorario: "Horários: Domingo - 17:00",
        contato: "Contato: (83) 3234-9960",
        link: "https://www.instagram.com/paroquiasantanajp/",
        tags: "Paróquia Sant'Ana Paróquia Santana Paroquia Santana Santuário São José Santuario Sao Jose João Paulo II Joao Paulo II João Paulo 2 Joao Paulo 2",
        coordenadas: {
            latitude: -7.173038734575556, 
            longitude: -34.88377178966345
        }   
    },

    {
        paroquia: "Par. N. Sra. da Assunção - Igreja Matriz Sta. Clara",
        endereco: "Endereço: R. Frei Antônio Gonçalves, 377 - Cidade dos Funcionários II, João Pessoa - PB, 58079-300",
        diahorario: "Horários: Quinta: - 19:30, Domingo - 07:00, 19:00",
        contato: "Contato: (83) 3234-9960",
        link: "https://www.instagram.com/paroquiaassuncaojp/",
        tags: "Paróquia Nossa Senhora da Assunção Paroquia Nossa Senhora da Assuncao Igreja Matriz Santa Clara Funcionários IV Funcionarios IV Funcionários 4 Funcionarios 4",
        coordenadas: {
            latitude: -7.180868102279078, 
            longitude: -34.88823615109499
        }   
    },

    {
        paroquia: "Par. N. Sra. da Assunção - Com. N. Sra. da Assunção",
        endereco: "Endereço: R. Blumenau, 140 - Grotão, João Pessoa - PB, 58079-802",
        diahorario: "Horários: Domingo - 17:00",
        contato: "Contato: (83) 98716-8712",
        link: "https://www.instagram.com/paroquiaassuncaojp/",
        tags: "Paróquia Nossa Senhora da Assunção Paroquia Nossa Senhora da Assuncao Comunidade Nossa Senhora da Assunção Comunidade Nossa Senhora da Assuncao Grotão Grotao",
        coordenadas: {
            latitude: -7.1195,
            longitude: -34.8630
        }   
    },

    {
        paroquia: "Par. N. Sra. da Assunção - Com. N. Sra. das Graças",
        endereco: "Endereço: R. Pres. Médici, 88 - Funcionários, João Pessoa - PB, 58079-723",
        diahorario: "Horários: Sábado - 19:30",
        contato: "Contato: (83) 98716-8712",
        link: "https://www.instagram.com/paroquiaassuncaojp/",
        tags: "Paróquia Nossa Senhora da Assunção Paroquia Nossa Senhora da Assuncao Comunidade Nossa Senhora das Graças Comunidade Nossa Senhora das Gracas Funcionários Funcionarios",
        coordenadas: {
            latitude: -7.18461153085404, 
            longitude: -34.88754955530151
        }   
    },

    {
        paroquia: "Com. Doce Mãe de Deus - Casa Mãe",
        endereco: "Endereço: R. Valdemar Naziazeno - Ernesto Geisel, João Pessoa - PB, 58075-000",
        diahorario: "Horários: Segunda a Sexta - 19:00, Sábado - 17:00, Domingo - 06:00, 17:00",
        contato: "Contato: (83) 3023-5482",
        link: "https://www.instagram.com/docemaededeus/",
        tags: "Comunidade Doce Mãe de Deus Doce Mae de Deus Casa mãe Ernesto Geisel",
        coordenadas: {
            latitude: -7.187836230903693, 
            longitude: -34.875508921486805
        }   
    },

    {
        paroquia: "Com. Doce Mãe de Deus - Capela Santíssima Trindade",
        endereco: "Endereço: Av. Valdemar Naziazeno, 3150 - João Paulo II, João Pessoa - PB",
        diahorario: "Horários: indisponível",
        contato: "Contato: (83) 3023-5482",
        link: "https://www.instagram.com/docemaededeus/",
        tags: "Comunidade Doce Mãe de Deus Doce Mae de Deus Casa mãe Capela Santíssima Trindade Capela Santissima Trindade João Paulo II Joao Paulo 2",
        coordenadas: {
            latitude: -7.187832093899389, 
            longitude: -34.87551386471345
        }   
    },

    {
        paroquia: "Par. Sto. Antônio de Pádua",
        endereco: "Endereço: R. Dr. Ranulfo Cunha, s/n - Ernesto Geisel, João Pessoa - PB, 58075-300",
        diahorario: "Horários: Terça a Quinta - 19:00, Sexta e Sábado - 17:00, Domingo - 07:00, 10:30, 17:00",
        contato: "Contato: (83) 98882-4201",
        link: "https://www.instagram.com/psapaduapb/",
        tags: "Paróquia Santo Antônio de Pádua Paroquia Santo Antonio de Padua Ernesto Geisel",
        coordenadas: {
            latitude: -7.178937232267722, 
            longitude: -34.867445416216846
        }   
    },

    {
        paroquia: "Par. S. Francisco de Assis",
        endereco: "Endereço: R. Joaquim Borba Filho, 413 - Jardim São Paulo, João Pessoa - PB, 58053-110",
        diahorario: "Horários: Quarta - 19:30, Quinta e Sexta - 06:30, 19:30, Sábado - 17:00, Domingo - 08:00, 10:00, 18:00",
        contato: "Contato: (83) 3508-9906",
        link: "https://www.instagram.com/psfa_paroquia/",
        tags: "Paróquia São Francisco de Assis Paroquia Sao Francisco de Assis Jardim São Paulo Jardim Sao Paulo",
        coordenadas: {
            latitude: -7.15167282560109, 
            longitude: -34.84848918807364
        }   
    },

    {
        paroquia: "Par. Maria Mãe da Igreja - Matriz S. Pedro",
        endereco: "Endereço: R. Maria José Miranda do Amaral - Jardim Veneza, João Pessoa - PB, 58084-160",
        diahorario: "Horários: Quinta - 19:30 (+adoração), Domingo - 07:30, 19:30",
        contato: "Contato: indisponível",
        link: "https://www.instagram.com/paroquia.mariamae/",
        tags: "Paróquia Maria Mãe da Igreja Paroquia Maria Mae da Igreja Matriz São Pedro Paroquia Maria Mae da Igreja Matriz Sao Pedro Jardim Veneza",
        coordenadas: {
            latitude: -7.170118351831046, 
            longitude: -34.912413241353995
        }   
    },

    {
        paroquia: "Par. Maria Mãe da Igreja - Capela S. Francisco de Assis",
        endereco: "Endereço: R. Teodósio de Oliveira Lêdo - Jardim Veneza, João Pessoa - PB, 58084-060",
        diahorario: "Horários: Sexta - 19:30, Domingo - 17:00",
        contato: "Contato: indisponível",
        link: "https://www.instagram.com/paroquia.mariamae/",
        tags: "Paróquia Maria Mãe da Igreja Paroquia Maria Mae da Igreja Capela São Francisco de Assis Capela Sao Francisco de Assis Jardim Veneza",
        coordenadas: {
            latitude: -7.163411082835818, 
            longitude: -34.909386137308594
        }   
    },

    {
        paroquia: "Par. Maria Mãe da Igreja - Comunidade Sagrada Família",
        endereco: "Endereço: R. da Domésticas, 446 - Jardim Veneza, João Pessoa - PB, 58084-046",
        diahorario: "Horários: Sábado - 17:00",
        contato: "Contato: indisponível",
        link: "https://www.instagram.com/paroquia.mariamae/",
        tags: "Paróquia Maria Mãe da Igreja Capela Sagrada Família Paroquia Maria Mae da Igreja Comunidade Sagrada Familia Jardim Veneza",
        coordenadas: {
            latitude: -7.163239041444747, 
            longitude: -34.90292403180156
        }   
    },

    {
        paroquia: "Par. Maria Mãe da Igreja - Capela N. Sra. da Conceição",
        endereco: "Endereço: R. Maria José Miranda do Amaral - Jardim Veneza, João Pessoa - PB, 58084-160",
        diahorario: "Horários: Sábado - 19:30",
        contato: "Contato: indisponível",
        link: "https://www.instagram.com/paroquia.mariamae/",
        tags: "Paróquia Maria Mãe da Igreja Capela Nossa Senhora da Conceição Paroquia Maria Mae da Igreja Capela Nossa Senhora da Conceicao Jardim Veneza",
        coordenadas: {
            latitude: -7.170059723519834, 
            longitude: -34.91241917887949
        }   
    },

    {
        paroquia: "Par. Sto. Antônio do Menino Deus",
        endereco: "Endereço: R. Rejane Freire Correia, 2015 - Jardim Cidade Universitária, João Pessoa - PB, 58052-197",
        diahorario: "Horários: Segunda a Sexta - 19:30, Sábado - 18:00, Domingo - 08:00, 11:00, 18:00",
        contato: "Contato: (83) 3578-0953",
        link: "https://www.instagram.com/psantoantoniomd/",
        tags: "Paróquia Santo Antônio do Menino Deus Paroquia Santo Antonio do Menino Deus Jardim Cidade Universitária Cidade Universitaria",
        coordenadas: {
            latitude: -7.155638085151836, 
            longitude: -34.83169590668269
        }   
    },

    {
        paroquia: "Frateridade Casa de Judá",
        endereco: "Endereço: R. Francisco Tito da Silva - João Paulo II, João Pessoa - PB, 58078",
        diahorario: "Horários: indisponível",
        contato: "Contato: (83) 99816-8750",
        link: "https://www.instagram.com/fraternidade_casa_de_juda/",
        tags: "Frateridade Casa de Judá Frateridade Casa de Juda João Paulo II Joao Paulo II Joao Paulo 2",
        coordenadas: {
            latitude: -7.173254320266504, 
            longitude: -34.88413069989623
        }   
    },

    {
        paroquia: "Par. São José",
        endereco: "Endereço: R. Rosa de Paula Barbosa, 460 - José Américo de Almeida, João Pessoa - PB, 58073-370",
        diahorario: "Horários: Quinta - 19h30 (+adoração), Sábado - 17:00, Domingo - 08:30, 19:30",
        contato: "Contato: (83) 3231-8195",
        link: "https://www.instagram.com/psjpb/",
        tags: "Paróquia São José Paroquia Sao Jose José Américo de Almeida Jose Americo",
        coordenadas: {
            latitude: -7.168810373248245, 
            longitude: -34.85708995515181
        }   
    },

    {
        paroquia: "Par. Jesus Cristo Rei",
        endereco: "Endereço: Mangabeira I, João Pessoa - PB, 58033-455",
        diahorario: "Horários: Segunda e Terça - 18:45, Quarta - 06:15, 19:30, Quinta e Sexta - 06:15, 18:45, Domingo - 07:00, 10:00, 17:00",
        contato: "Contato: (83) 3238-6790",
        link: "https://www.instagram.com/paroquiajesuscristorei/",
        tags: "Paróquia Jesus Cristo Rei Paroquia Jesus Cristo Rei Mangabeira I Mangabeira 1",
        coordenadas: {
            latitude: -7.171198922667021, 
            longitude: -34.83881474877513
        }   
    },

    {
        paroquia: "Par. Jesus Cristo Rei - Com. N. Sra. das Graças",
        endereco: "Endereço: R. Dep. João Batista da Silva Filho, 11 - Mangabeira, João Pessoa - PB, 58074-709",
        diahorario: "Horários: Sábado - 19:30",
        contato: "Contato: (83) 3238-6790",
        link: "https://paroquiajesuscristorei.com.br/comunidade-nossa-senhora-das-gracas/",
        tags: "Paróquia Jesus Cristo Rei Paroquia Jesus Cristo Rei Comunidade Nossa Senhora das Gracas Nossa Senhora das Graças Mangabeira",
        coordenadas: {
            latitude: -7.175705223418954, 
            longitude: -34.84568011699302
        }   
    },

    {
        paroquia: "Par. Jesus Cristo Rei - Comunidade Mãe Rainha",
        endereco: "Endereço: R. Est. Lucivan Gomes Barbosa, 14 - Mangabeira I, João Pessoa - PB, 58055-565",
        diahorario: "Horários: indisponível",
        contato: "Contato: (83) 3238-6790",
        link: "https://paroquiajesuscristorei.com.br/comunidade-mae-rainha/",
        tags: "Paróquia Jesus Cristo Rei Paroquia Jesus Cristo Rei Comunidade Mãe Rainha Mae Rainha Mangabeira I Mangabeira 1",
        coordenadas: {
            latitude: -7.164069714138729, 
            longitude: -34.84320336521393
        }   
    },

    {
        paroquia: "Par. N. Sra. das Dores",
        endereco: "Endereço: Av. Cel. Calixto - Mangabeira, João Pessoa - PB, 58059-140",
        diahorario: "Horários: Quinta - 19h30 (+adoração), Sábado - 18:00, Domingo - 07:00, 16:00, 19:00",
        contato: "Contato: (83) 3236-4156",
        link: "https://www.instagram.com/paroquiansdoress/",
        tags: "Paróquia Nossa Senhora Das Dores Paroquia Nossa Senhora Das Dores Mangabeira I Mangabeira 1",
        coordenadas: {
            latitude: -7.182161022242987, 
            longitude: -34.834882725356806
        }   
    },

    {
        paroquia: "Par. Sagrada Família",
        endereco: "Endereço: R. Vitaliano Barbosa de Albuquerque, S/N - Mangabeira IV, João Pessoa - PB, 58057-322",
        diahorario: "Horários: Terça - 17:00, Quinta - 19:30, Sábado - 07:00, Domingo - 09:00, 19:00",
        contato: "Contato: (83) 2178-4114",
        link: "https://www.instagram.com/sagradafamilia_jpa/",
        tags: "Paróquia Sagrada Família Paroquia Sagrada Familia Mangabeira IV Mangabeira 4",
        coordenadas: {
            latitude: -7.184676262343246, 
            longitude: -34.84407548645833
        }   
    },

    {
        paroquia: "Par. Sagrada Família - Com. Sagr. Coração de Jesus",
        endereco: "Endereço: R. Odete Gomes de Araújo, 212 - Mangabeira, João Pessoa - PB, 58057-303",
        diahorario: "Horários: Sexta e Sábado - 19:30, Domingo - 16:00",
        contato: "Contato: (83) 2178-4114",
        link: "https://www.instagram.com/sagradafamilia_jpa/",
        tags: "Paróquia Sagrada Família Paroquia Sagrada Familia Comunidade Sagrado Coração de Jesus Comunidade Sagrado Coracao de Jesus Mangabeira IV Mangabeira 4",
        coordenadas: {
            latitude: -7.18779395968216, 
            longitude: -34.839625123572475
        }   
    },

    {
        paroquia: "Par. Sagrada Família - Com. N. Sra. Aparecida",
        endereco: "Endereço: R. Vitaliano Barbosa de Albuquerque, S/N - Mangabeira IV, João Pessoa - PB, 58057-322",
        diahorario: "Horários: Quarta - 19:30, Domingo - 07:00",
        contato: "Contato: (83) 2178-4114",
        link: "https://www.instagram.com/sagradafamilia_jpa/",
        tags: "Paróquia Sagrada Família Paroquia Sagrada Familia Comunidade Nossa Senhora Aparecida Nosa Senhora Aparecida Mangabeira IV Mangabeira 4",
        coordenadas: {
            latitude: -7.184680033168267, 
            longitude: -34.8440779966427
        }   
    },

    {
        paroquia: "Comunidade Salesiana Santa Clara",
        endereco: "Endereço: Rua Herotildes Bulhões Pinheiro - Mangabeira VIII - João Pessoa",
        diahorario: "Horários: Domingo - 17:30",
        contato: "Contato: indisponível",
        link: "https://www.instagram.com/comunidadesalesianasantaclara/",
        tags: "Comunidade Salesiana Santa Clara Mangabeira VIII Mangabeira 8",
        coordenadas: {
            latitude: -7.182052130624409, 
            longitude: -34.82461749294625
        }   
    },

    {
        paroquia: "Par. S. Francisco de Assis",
        endereco: "Endereço: R. Renato Gomes de Oliveira, s/n - Mangabeira VII, João Pessoa - PB, 58058-232",
        diahorario: "Horários: Domingo - 17:30",
        contato: "Contato: (83) 3238-8600 / (83) 98734-28045",
        link: "https://www.instagram.com/psfaoficial/",
        tags: "Paróquia São Francisco de Assis Paroquia Sao Francisco de Assis Sao Francisco de Asis Mangabeira VII Mangabeira 7",
        coordenadas: {
            latitude: -7.168246942384433, 
            longitude: -34.829694577000524
        }   
    },

    {
        paroquia: "Par. S. Francisco de Assis - Com. Sto. Antônio de Pádua",
        endereco: "Endereço: R. Renato Gomes de Oliveira, s/n - Mangabeira VII, João Pessoa - PB, 58058-232",
        diahorario: "Horários: Domingo - 09:00",
        contato: "Contato: (83) 3238-8600 / (83) 98734-28045",
        link: "https://www.instagram.com/psfaoficial/",
        tags: "Paróquia São Francisco de Assis Paroquia Sao Francisco de Assis Sao Francisco de Asis Comunidade Santo Antônio de Pádua Antonio de Padua Mangabeira VII Mangabeira 7",
        coordenadas: {
            latitude: -7.168244702935691, 
            longitude: -34.829704045942364
        }   
    },

    {
        paroquia: "Par. S. Francisco de Assis - Sta. Dulce dos Pobres",
        endereco: "Endereço: R. Renato Gomes de Oliveira, s/n - Mangabeira VII, João Pessoa - PB, 58058-232",
        diahorario: "Horários: Sábado - 16:00",
        contato: "Contato: (83) 3238-8600 / (83) 98734-28045",
        link: "https://www.instagram.com/psfaoficial/",
        tags: "Paróquia São Francisco de Assis Paroquia Sao Francisco de Assis Sao Francisco de Asis Santa Dulce dos Pobres Mangabeira VII Mangabeira 7",
        coordenadas: {
            latitude: -7.168249672320645, 
            longitude: -34.829692525455194
        }   
    },

    {
        paroquia: "Par. S. Francisco de Assis - Com. Sta. Rita de Cássia",
        endereco: "Endereço: R. Renato Gomes de Oliveira, s/n - Mangabeira VII, João Pessoa - PB, 58058-232",
        diahorario: "Horários: Sábado - 18:00",
        contato: "Contato: (83) 3238-8600 / (83) 98734-280455",
        link: "https://www.instagram.com/psfaoficial/",
        tags: "Paróquia São Francisco de Assis Paroquia Sao Francisco de Assis Sao Francisco de Asis Comunidade Santa Rita de Cássia Rita de Cassia Casia Mangabeira VII Mangabeira 7",
        coordenadas: {
            latitude: -7.168257656055039, 
            longitude: -34.829696548768275
        }   
    },

    {
        paroquia: "Par. S. Francisco de Assis - Com. S. João Paulo II e Sta. Bárbara",
        endereco: "Endereço: R. Renato Gomes de Oliveira, s/n - Mangabeira VII, João Pessoa - PB, 58058-232",
        diahorario: "Horários: Sábado - 19:30",
        contato: "Contato: (83) 3238-8600 / (83) 98734-28045",
        link: "https://www.instagram.com/psfaoficial/",
        tags: "Paróquia São Francisco de Assis Paroquia Sao Francisco de Assis Sao Francisco de Asis Comunidade São João Paulo II e Santa Bárbara Sao Joao Paulo 2 e Santa Barbara Mangabeira VII Mangabeira 7",
        coordenadas: {
            latitude: -7.168239692652453, 
            longitude: -34.829692525455194
        }   
    },

    {
        paroquia: "Par. S. Francisco de Assis - Com. S. José",
        endereco: "Endereço: R. Ivan de Assis Costa, 142 - Mangabeira VI, João Pessoa - PB, 58033-455",
        diahorario: "Horários: Domingo - 16:00",
        contato: "Contato: (83) 3238-8600 / (83) 98734-28045",
        link: "https://www.instagram.com/comunidadesaojose.psfa/",
        tags: "Paróquia São Francisco de Assis Paroquia Sao Francisco de Assis Sao Francisco de Asis Comunidade São José Sao Jose Mangabeira VI Mangabeira 6",
        coordenadas: {
            latitude: -7.166706844299654, 
            longitude: -34.83575878747483
        }   
    },

    {
        paroquia: "Com. N. Sra. da Conceição",
        endereco: "Endereço: R. Dr. Edgard Claudino de Souza s/n - Mangabeira VIII, João Pessoa, Brasil 58059-724",
        diahorario: "Horários: Quarta 19:30, Domingo - 09:00",
        contato: "Contato: (83) 98886-8112",
        link: "https://www.instagram.com/comunidadensdaconceicao/",
        tags: "Comunidade Nossa Senhora da Conceição Nossa Senhora da Conceicao Mangabeira VIII Mangabeira 8",
        coordenadas: {
            latitude: -7.180081573917468,
            longitude: -34.8190238973071
        }   
    },

    {
        paroquia: "Par. S. Francisco das Chagas",
        endereco: "Endereço: Av. Dois de Fevereiro, 736 - Varjão, João Pessoa - PB, 58070-000",
        diahorario: "Horários: Quinta e Sábado - 19:30, Domingo - 07:00, 19:30",
        contato: "Contato: (83) 98610-5255",
        link: "https://www.instagram.com/paroquiasfcrangel/",
        tags: "Paróquia São Francisco das Chagas Paroquia Sao Francisco das Chagas Rangel",
        coordenadas: {
            latitude: -7.147460473235044, 
            longitude: -34.874692481814535
        }   
    },

    {
        paroquia: "Par. S. Francisco das Chagas - Com. N. Sra. das Graças",
        endereco: "Endereço: Av. Dois de Fevereiro, 763 - Rangel",
        diahorario: "Horários: Sábado - 17:00",
        contato: "Contato: (83) 98610-5255",
        link: "https://www.instagram.com/paroquiasfcrangel/",
        tags: "Paróquia São Francisco das Chagas Paroquia Sao Francisco das Chagas Comunidade Nossa Senhora das Graças Nossa Senhora das Gracas Rangel",
        coordenadas: {
            latitude: -7.147452414867089, 
            longitude: -34.87468731360163
        }   
    },

    {
        paroquia: "Par. S. Francisco das Chagas - Com. S. Antônio",
        endereco: "Endereço: Av. Dois de Fevereiro, 763 - Rangel",
        diahorario: "Horários: Domingo - 16:00",
        contato: "Contato: (83) 98610-5255",
        link: "https://www.instagram.com/paroquiasfcrangel/",
        tags: "Paróquia São Francisco das Chagas Paroquia Sao Francisco das Chagas Comunidade Santo Antônio Santo Antônio Rangel",
        coordenadas: {
            latitude: -7.147450949709258, 
            longitude: -34.87469765002744
        }   
    },

    {
        paroquia: "Par. S. Francisco das Chagas - Com. Bom Jesus",
        endereco: "Endereço: Av. Dois de Fevereiro, 763 - Rangel",
        diahorario: "Horários: Domingo - 17:30",
        contato: "Contato: (83) 98610-5255",
        link: "https://www.instagram.com/paroquiasfcrangel/",
        tags: "Paróquia São Francisco das Chagas Paroquia Sao Francisco das Chagas Comunidade Bom Jesus Rangel",
        coordenadas: {
            latitude: -7.14746340355063, 
            longitude: -34.87468879023389
        }   
    },

    {
        paroquia: "Par. de Aparecida",
        endereco: "Endereço: Av. Mariângela Lucena Peixoto, 49 - Conj. Valentina Figueredo I, João Pessoa, Brasil 58063300",
        diahorario: "Horários: Segunda a Sexta - 19:00, Sábado - 17:00, Domingo - 06:30, 09:30, 17:30",
        contato: "Contato: (83) 3237-8521",
        link: "https://www.instagram.com/paroquiadeaparecida/",
        tags: "Paróquia de Aparecida Paroquia de Aparecida Valentina",
        coordenadas: {
            latitude: -7.198905455626805, 
            longitude: -34.85020436106584
        }   
    },

    {
        paroquia: "Par. de Aparecida - Capela S. Pedro e S. Paulo",
        endereco: "Endereço: R. Jornalista Rubens César, 29 Valentina de Figueiredo, João Pessoa - PB, 58063-285",
        diahorario: "Horários: Segunda a Sexta - 19:00, Sábado - 17:00, Domingo - 06:30, 09:30, 17:30",
        contato: "Contato: (83) 3237-8521",
        link: "https://www.instagram.com/paroquiadeaparecida/",
        tags: "Paróquia de Aparecida Paroquia de Aparecida Capela São Pedro e São Paulo Sao Pedro e Sao Paulo Valentina",
        coordenadas: {
            latitude: -7.192564114065577, 
            longitude: -34.85146182840425
        }
    },

    {
        paroquia: "Par. de Aparecida - Comunidade Sta. Maria Mãe de Deus",
        endereco: "Endereço: R. Geraldo Gonzaga Ribeiro, 2 - Conj. Valentina Figueredo II, João Pessoa - PB, 58033-455",
        diahorario: "Horários: indisponível",
        contato: "Contato: (83) 3237-8521",
        link: "https://www.instagram.com/paroquiadeaparecida/",
        tags: "Paróquia de Aparecida Paroquia de Aparecida Comunidade Santa Maria Mãe de Deus Mae Valentina",
        coordenadas: {
            latitude: -7.19449966966593,  
            longitude: -34.84837523867563
        }
    },

    {
        paroquia: "Par. de Aparecida - Igreja N. Sra. de Fátima",
        endereco: "Endereço: Av. Mariângela Lucena Peixoto, 49 - Conj. Valentina Figueredo I, João Pessoa, Brasil 58063300",
        diahorario: "Horários: Domingo - 08:00",
        contato: "Contato: (83) 3237-8521",
        link: "https://www.instagram.com/paroquiadeaparecida/",
        tags: "Paróquia de Aparecida Paroquia de Aparecida Igreja Nossa Senhora de Fátima Fatima",
        coordenadas: {
            latitude: -7.19890870394146,   
            longitude: -34.8502070279503
        }
    },

    
];