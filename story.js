let introductionText =
    {
        title: "Where the story <strike>begin</strike> end",
        project: "Gamesicaen - Team Ctrl+C Ctrl+V = Jeu",
        theme: "Inversion",
        introduction: "Vous êtes étudiant, vous venez de passer une super soirée. Cependant vous ne savez pas où vous êtes. Vous essayez de vous remémorer la journée pour en déduire où vous êtes arrivé.",
        buttonText: "Remonter le fil de la journée"
    }

let stories =
[
    {
        id: 0,
        title: "Situation initiale",
        context: "Je me retrouve dans une pièce dont le plafond est blanc. Comment suis-je arrivé là ?",
        hour: "3h48",
        img: "",
        choices: [
            {
                id: 1,
                transition: "En Noctibus",
                resolution: "Vous avez pris le noctibus pour rentrer",
                influences: {
                    health: 0,
                    love: 0,
                    friends: 0,
                    studies: 0,
                    money: -1,
                    reputation: 0
                }
            },{
                id: 1,
                transition: "A pied",
                resolution: "Vous avez marché pour rentrer",
                influences: {
                    health: 1,
                    love: 0,
                    friends: 0,
                    studies: 0,
                    money: 0,
                    reputation: 0
                }
            }
        ],
    },
    {
        id: 1,
        title: "Bar qui ferme",
        context: "Je me souviens de ce bar. Il fermait mais heureusement j'ai eu le temps...",
        hour: "2h55",
        img: "",
        choices: [
            {
                id: 2,
                transition: "De trinquer avec mes potes",
                resolution: "Vous avez trinqué avec vos amis juste avant que le bar ne ferme",
                influences: {
                    health: -2,
                    love: 0,
                    friends: 2,
                    studies: 0,
                    money: -1,
                    reputation: 0
                }
            },{
                id: 2,
                transition: "D'embrasser mon date",
                resolution: "Vous avez embrassé votre date juste avant que le bar ne ferme",
                influences: {
                    health: 0,
                    love: 4,
                    friends: 0,
                    studies: 0,
                    money: 0,
                    reputation: 0
                }
            },{
                id: 2,
                transition: "D'aller au toilette",
                resolution: "Vous avez été au toilette juste avant que le bar ne ferme",
                influences: {
                    health: 1,
                    love: 0,
                    friends: 0,
                    studies: 0,
                    money: 0,
                    reputation: 0
                }
            }
        ],
    },
    {
        id: 2,
        title: "Nouveau bar (deuxième)",
        context: "On a bien fait de changer de bar car",
        hour: "2h06",
        img: "",
        choices: [
            {
                id: 3,
                transition: "Le précédent était trop cher",
                resolution: "Vous avez décidé de changer de bar pour un bar moins cher",
                influences: {
                    health: 0,
                    love: 0,
                    friends: 0,
                    studies: 0,
                    money: -2,
                    reputation: 0
                }
            },{
                id: 3,
                transition: "Il y avait une meilleur ambiance dans celui-ci",
                resolution: "Vous avez décidé de changer de bar pour un bar avec plus d'ambiance",
                influences: {
                    health: 0,
                    love: 0,
                    friends: -1,
                    studies: 0,
                    money: 0,
                    reputation: 0
                }
            }
        ],
    },
    {
        id: 3,
        title: "Premier bar",
        context: "Mais qu'est ce que j'ai fait dans le bar d'avant ?",
        hour: "1h31",
        img: "",
        choices: [
            {
                id: 4,
                transition: "J'ai joué aux fléchettes avec mes potes",
                resolution: "Vous avez joué aux fléchettes",
                influences: {
                    health: 0,
                    love: 0,
                    friends: 2,
                    studies: 0,
                    money: -1,
                    reputation: 0
                }
            },{
                id: 5,
                transition: "J'ai dragué mon date",
                resolution: "Vous avez dragué votre date",
                influences: {
                    health: 0,
                    love: 2,
                    friends: -1,
                    studies: 0,
                    money: 0,
                    reputation: 0
                }
            },{
                id: 6,
                transition: "J'ai payé un mètre de shots",
                resolution: "Vous avez payé la tournée de shots",
                influences: {
                    health: -2,
                    love: 1,
                    friends: 4,
                    studies: 0,
                    money: -3,
                    reputation: 0
                }
            }
        ],
    },
    {
        id: 4,
        title: "Premier bar bis / fléchette",
        context: "Et si je me souviens bien, avant cette partie de féchette",
        hour: "00h48",
        img: "",
        choices: [
            {
                id: 7,
                transition: "J'avais déjà joué aux fléchettes",
                resolution: "Vous avez fait une partie de fléchettes",
                influences: {
                    health: 0,
                    love: 0,
                    friends: 3,
                    studies: 0,
                    money: -1,
                    reputation: 0
                }
            },
            {
                id: 7,
                transition: "Je draguais mon date",
                resolution: "Vous avez dragué votre date",
                influences: {
                    health: 0,
                    love: 2,
                    friends: -1,
                    studies: 0,
                    money: 0,
                    reputation: 0
                }
            },
            {
                id: 7,
                transition: "Je venais de boire un mètre de shots",
                resolution: "Vous avez bu un mètre de shots",
                influences: {
                    health: -4,
                    love: 0,
                    friends: 2,
                    studies: 0,
                    money: -1,
                    reputation: 0
                }
            }
        ],
    },
    {
        id: 5,
        title: "Premier bar / drague",
        context: "Et si je me souviens bien",
        hour: "00h48",
        img: "",
        choices: [
            {
                id: 7,
                transition: "Je venais de gagner aux fléchettes",
                resolution: "Vous avez gagné une partie de flechettes",
                influences: {
                    health: 0,
                    love: 0,
                    friends: 2,
                    studies: 0,
                    money: -1,
                    reputation: 0
                }
            },{
                id: 7,
                transition: "Je discutais déjà avec depuis longtemps",
                resolution: "Vous avez discuté avec votre date",
                influences: {
                    health: 0,
                    love: 3,
                    friends: -1,
                    studies: 0,
                    money: 0,
                    reputation: 0
                }
            },{
                id: 7,
                transition: "Je venais de boire un mètre de shots",
                resolution: "Vous avez bu un mètre de shots",
                influences: {
                    health: -3,
                    love: 0,
                    friends: 2,
                    studies: 0,
                    money: -1,
                    reputation: 0
                }
            }
        ],
    },
    {
        id: 6,
        title: "Premier bar / shots",
        context: "Et si je me souviens bien",
        hour: "00h48",
        img: "",
        choices: [
            {
                id: 7,
                transition: "Je venais de gagner aux fléchettes",
                resolution: "Vous avez gagné aux fléchettes",
                influences: {
                    health: 0,
                    love: 0,
                    friends: 2,
                    studies: 0,
                    money: -1,
                    reputation: 0
                }
            },{
                id: 7,
                transition: "J'avais discuté avec mon date avant",
                resolution: "Vous avez discuté avec votre date",
                influences: {
                    health: 0,
                    love: 2,
                    friends: -1,
                    studies: 0,
                    money: 0,
                    reputation: 0
                }
            },{
                id: 7,
                transition: "C'était déjà mon deuxième mètre dans ce bar",
                resolution: "Vous avez bu un mètre de shots",
                influences: {
                    health: -4,
                    love: 0,
                    friends: 2,
                    studies: 0,
                    money: -1,
                    reputation: 0
                }
            }
        ],
    },
    {
        id: 7,
        title: "Choix du premier bar",
        context: "L'avantage du bar où nous étions",
        hour: "23h37",
        img: "",
        choices: [
            {
                id: 8,
                transition: "C'est que la musique plait à tout le monde",
                resolution: "Vous avez choisi un bar avec de la bonne musique",
                influences: {
                    health: 0,
                    love: 0,
                    friends: 1,
                    studies: 0,
                    money: 0,
                    reputation: 0
                }
            },
            {
                id: 9,
                transition: "Qu'il était plus calme, on s'entendait parler",
                resolution: "Vous avez choisi un bar un peu calme, histoire de discuter",
                influences: {
                    health: 0,
                    love: 0,
                    friends: 0,
                    studies: 1,
                    money: 0,
                    reputation: 0
                }
            }
        ],
    },
    {
        id: 8,
        title: "Choix du premier bar car / plait à tout le monde",
        context: "On était enfin descendu du tram, les contrôleurs ont vraiment pris leur temps. Je voulais d'abord aller au pub de la place mais tout le monde n'aime pas la musique qu'ils mettent. On est finalement allé à celui sur le quai mais on nous a demandé de finir la bouteille de \"Session 4\" ",
        hour: "23h22",
        img: "",
        choices: [
            {
                id: 10,
                transition: "J'ai aidé à la finir",
                resolution: "Vous avez fini seul \"Session 4\"",
                influences: {
                    health: -4,
                    love: 0,
                    friends: 2,
                    studies: 0,
                    money: 0,
                    reputation: 0
                }
            },
            {
                id: 10,
                transition: "Je n'ai pas aidé à la finir",
                resolution: "Vous avez regardé les autres finir \"Session 4\"",
                influences: {
                    health: 0,
                    love: 0,
                    friends: -1,
                    studies: 0,
                    money: 0,
                    reputation: 0
                }
            }
        ],
    },
    {
        id: 9,
        title: "Choix du premier bar car / plus calme",
        context: "On était enfin descendu du tram, les contrôleurs ont vraiment pris leur temps. Je voulais d'abord aller au pub de la place mais il avait beaucoup de monde. On est finalement allé à celui sur le quai mais on nous a demandé de finir la bouteille de \"Session 4\" ",
        hour: "23h22",
        img: "",
        choices: [
            {
                id: 10,
                transition: "J'ai aidé à la finir",
                resolution: "Vous avez fini seul \"Session 4\"",
                influences: {
                    health: -4,
                    love: 0,
                    friends: 2,
                    studies: 0,
                    money: 0,
                    reputation: 0
                }
            },
            {
                id: 10,
                transition: "Je n'ai pas aidé à la finir",
                resolution: "Vous avez regardé les autres finir \"Session 4\"",
                influences: {
                    health: 0,
                    love: 0,
                    friends: -1,
                    studies: 0,
                    money: 0,
                    reputation: 0
                }
            }
        ],
    },
    {
        id: 10,
        title: "Tram de l'ambiance",
        context: "Je me souviens du tram à l'arrêt, mais j'ai du mal à me rappeler pourquoi",
        hour: "23h04",
        img: "",
        choices: [
            {
                id: 11,
                transition: "Un autre groupe chantait trop fort",
                resolution: "Le tram s'est arrêté car un autre groupe chantait trop fort",
                influences: {
                    health: 0,
                    love: 0,
                    friends: 0,
                    studies: 0,
                    money: 0,
                    reputation: 0
                }
            },
            {
                id: 11,
                transition: "On s'est embrouillé avec une autre école",
                resolution: "Vous vous êtes battu avec un étudiant d'une autre école",
                influences: {
                    health: -1,
                    love: 0,
                    friends: 0,
                    studies: 0,
                    money: 0,
                    reputation: -2
                }
            },
            {
                id: 11,
                transition: "\"ON EST EN PHARMA, ON EST EN PHARMA\"",
                resolution: "\"ON EST EN PHARMA, ON EST EN PHARMA\"",
                influences: {
                    health: 0,
                    love: 0,
                    friends: 3,
                    studies: 0,
                    money: 0,
                    reputation: 0
                }
            }
        ],
    },
    {
        id: 11,
        title: "Attente du tram",
        context: "Mais attends, qu'est-ce que j'ai fait en attendant le tram en sortant du before",
        hour: "22h29",
        img: "",
        choices: [
            {
                id: 12,
                transition: "J'ai copieusement bu dans la bouteille \"Session 4\"",
                resolution: "Vous avez bu \"Session 4\" en attendant le tram",
                influences: {
                    health: -2,
                    love: 0,
                    friends: 1,
                    studies: 0,
                    money: 0,
                    reputation: 0
                }
            },
            {
                id: 12,
                transition: "J'ai payé mon ticket de tram",
                resolution: "Vous avez pris un ticket de tram",
                influences: {
                    health: 0,
                    love: 0,
                    friends: 0,
                    studies: 0,
                    money: -1,
                    reputation: 0
                }
            },
            {
                id: 12,
                transition: "J'ai dragué mon date",
                resolution: "Vous avez dragué votre date en attendant le tram",
                influences: {
                    health: 0,
                    love: 2,
                    friends: 0,
                    studies: 0,
                    money: 0,
                    reputation: 0
                }
            }
        ],
    },
    {
        id: 12,
        title: "Confection de la \"Session 4\"",
        context: "D'ailleurs, la bouteille \"Session 4\", ",
        hour: "22h00",
        img: "",
        choices: [
            {
                id: 13,
                transition: "n'était pas assez forte",
                resolution: "Puis vous avez ajouté du soft à \"Session 4\"",
                influences: {
                    health: 2,
                    love: 0,
                    friends: 0,
                    studies: 0,
                    money: 0,
                    reputation: 0
                }
            },
            {
                id: 15,
                transition: "était parfaitement dosée",
                resolution: "Vous avez confectionné une \"Session 4\" impéccable",
                influences: {
                    health: -1,
                    love: 0,
                    friends: 0,
                    studies: 0,
                    money: 0,
                    reputation: 0
                }
            },
            {
                id: 14,
                transition: "était trop forte",
                resolution: "Puis vous avez ajouté de l'alcool à \"Session 4\"",
                influences: {
                    health: -1,
                    love: 0,
                    friends: 0,
                    studies: 0,
                    money: 0,
                    reputation: 0
                }
            }
        ],
    },
    {
        id: 13,
        title: "Confection de la \"Session 4\" / J'aurais du mettre quelque chose de plus fort",
        context: "Nous aurions dû rajouter quelque chose de plus fort, mais ...",
        hour: "22h00",
        img: "",
        choices: [
            {
                id: 15,
                transition: "... sans en abuser",
                resolution: "Préparation de \"Session 4\" : Vous avez commencé par ajouter de l'alcool dans la bouteille",
                influences: {
                    health: 0,
                    love: 0,
                    friends: 0,
                    studies: 0,
                    money: 0,
                    reputation: 0
                }
            },
            {
                id: 15,
                transition: "... genre <u>VRAIMENT</u> plus fort",
                resolution: "Préparation de \"Session 4\" : Vous avez commencé par ajouter très peu d'alcool dans la bouteille",
                influences: {
                    health: 1,
                    love: 0,
                    friends: 0,
                    studies: 0,
                    money: 0,
                    reputation: 0
                }
            }
        ],
    },
    {
        id: 14,
        title: "Confection de la \"Session 4\" / J'aurais du metre que du soft",
        context: "La prochaine fois, ...",
        hour: "22h00",
        img: "",
        choices: [
            {
                id: 15,
                transition: "... on mettra du soft aussi",
                resolution: "Préparation de \"Session 4\" : Vous avez commencé par ajouter beaucoup d'alcool dans la bouteille",
                influences: {
                    health: -1,
                    love: 0,
                    friends: 0,
                    studies: 0,
                    money: 0,
                    reputation: 0
                }
            },
            {
                id: 15,
                transition: "... on mettra moins d'alcool fort",
                resolution: "Préparation de \"Session 4\" : Vous avez commencé par ajouter de l'alcool fort dans la bouteille",
                influences: {
                    health: -1,
                    love: 0,
                    friends: 0,
                    studies: 0,
                    money: 0,
                    reputation: 0
                }
            }
        ],
    },
    {
        id: 15,
        title: "Jeu à boire / j'ai fait",
        context: "Durant le before, je me souviens d'avoir fait un Picolo",
        hour: "21h17",
        img: "",
        choices: [
            {
                id: 16,
                transition: "Je n'ai bu que du soft, je suis trop smart",
                resolution: "Vous n'avez bu que du soft durant la deuxième partie de Picolo",
                influences: {
                    health: 0,
                    love: 0,
                    friends: -1,
                    studies: 0,
                    money: 0,
                    reputation: 0
                }
            },
            {
                id: 16,
                transition: "J'ai fait boire mes potes",
                resolution: "Vous avez fait boire vos amis durant la deuxième partie de Picolo",
                influences: {
                    health: 0,
                    love: 0,
                    friends: 1,
                    studies: 0,
                    money: 0,
                    reputation: 0
                }
            }
        ],
    },
    {
        id: 16,
        title: "Jeu à boire / j'ai subit",
        context: "Par contre, à la première partie",
        hour: "21h03",
        img: "",
        choices: [
            {
                id: 17,
                transition: "Je me suis fait focus par les autres",
                resolution: "Vous avez été focus par vos amis durant la première partie de Picolo",
                influences: {
                    health: -2,
                    love: 0,
                    friends: 1,
                    studies: 0,
                    money: 0,
                    reputation: 0
                }
            },
            {
                id: 17,
                transition: "Je n'ai pas participé",
                resolution: "Vous avez regardé vos amis jouer à Picolo",
                influences: {
                    health: 0,
                    love: 0,
                    friends: -1,
                    studies: 0,
                    money: 0,
                    reputation: 0
                }
            }
        ],
    },
    {
        id: 17,
        title: "Arrivé before",
        context: "Lorsque je suis arrivé au before, même en ayant amené",
        hour: "20h26",
        img: "",
        choices: [
            {
                id: 19,
                transition: "l'apéro",
                resolution: "Mais vous avez apporté l'apéro",
                influences: {
                    health: 0,
                    love: 0,
                    friends: 1,
                    studies: 0,
                    money: -2,
                    reputation: 0
                }
            },
            {
                id: 18,
                transition: "des potes",
                resolution: "Mais vous avez amené des amis",
                influences: {
                    health: 0,
                    love: 0,
                    friends: 2,
                    studies: 0,
                    money: 0,
                    reputation: 0
                }
            },
            {
                id: 20,
                transition: "mon date",
                resolution: "Mais vous êtes venu avec votre date",
                influences: {
                    health: 0,
                    love: 2,
                    friends: 0,
                    studies: 0,
                    money: 0,
                    reputation: 0
                }
            }
        ],
    },
    {
        id: 18,
        title: "Arrivé before / j'ai amené des potes",
        context: "On m'a quand même reproché de ne pas avoir amené",
        hour: "20h26",
        img: "",
        choices: [
            {
                id: 21,
                transition: "l'apéro",
                resolution: "Vous avez oublié l'apéro en vous rendant au before",
                influences: {
                    health: 0,
                    love: 0,
                    friends: -1,
                    studies: 0,
                    money: 0,
                    reputation: 0
                }
            },
            {
                id: 21,
                transition: "mon date mais il vient par ses propres moyens",
                resolution: "Vous n'êtes pas venu au before avec votre date, qui viendra plus tard dans la soirée",
                influences: {
                    health: 0,
                    love: 0,
                    friends: 0,
                    studies: 0,
                    money: 0,
                    reputation: 0
                }
            }
        ],
    },
    {
        id: 19,
        title: "Arrivé before / j'ai amené l'apéro",
        context: "On m'a quand même reproché de ne pas avoir amené",
        hour: "20h26",
        img: "",
        choices: [
            {
                id: 21,
                transition: "des potes qui habitent plus loin",
                resolution: "Vous n'avez pris personne dans votre voiture pour vous rendre au before",
                influences: {
                    health: 0,
                    love: 0,
                    friends: -1,
                    studies: 0,
                    money: 0,
                    reputation: 0
                }
            },
            {
                id: 21,
                transition: "mon date mais il vient par ses propres moyens",
                resolution: "Vous n'êtes pas venu au before avec votre date, qui viendra plus tard dans la soirée",
                influences: {
                    health: 0,
                    love: 0,
                    friends: 0,
                    studies: 0,
                    money: 0,
                    reputation: 0
                }
            }
        ],
    },
    {
        id: 20,
        title: "Arrivé before / j'ai amené mon date",
        context: "On m'a quand même reproché de ne pas avoir amené",
        hour: "20h26",
        img: "",
        choices: [
            {
                id: 21,
                transition: "l'apéro",
                resolution: "Vous avez oublié l'apéro en vous rendant au before",
                influences: {
                    health: 0,
                    love: 0,
                    friends: -2,
                    studies: 0,
                    money: 0,
                    reputation: 0
                }
            },
            {
                id: 21,
                transition: "des potes qui habitent plus loin",
                resolution: "Vous n'avez pris personne dans votre voiture pour vous rendre au before",
                influences: {
                    health: 0,
                    love: 0,
                    friends: -1,
                    studies: 0,
                    money: 0,
                    reputation: 0
                }
            }
        ],
    },
    {
        id: 21,
        title: "Sortie de boulot/pote/home",
        context: "Ceci dit j'aurais eu le temps de le faire si j'étais parti plus tôt",
        hour: "19h00",
        img: "",
        choices: [
            {
                id: 30,
                transition: "de mon travail à temps partiel",
                resolution: "Vous avez travaillé tout l'après-midi",
                influences: {
                    health: 0,
                    love: 0,
                    friends: 0,
                    studies: 0,
                    money: 5,
                    reputation: 0
                }
            },
            {
                id: 22,
                transition: "de chez mon pote",
                resolution: "Vous étiez chez votre ami avant d'aller au before",
                influences: {
                    health: 0,
                    love: 0,
                    friends: 0,
                    studies: 0,
                    money: 0,
                    reputation: 0
                }
            },
            {
                id: 26,
                transition: "de chez moi",
                resolution: "Vous étiez chez vous avant de vous rendre au before",
                influences: {
                    health: 0,
                    love: 0,
                    friends: 0,
                    studies: 0,
                    money: 0,
                    reputation: 0
                }
            }
        ],
    },
    {
        id: 22,
        title: "J'étais chez mon pote",
        context: "Mais j'ai passé un bon moment en",
        hour: "16h35",
        img: "",
        choices: [
            {
                id: 23,
                transition: "Faisant des ranked avec lui",
                resolution: "Vous avez joué aux jeux vidéos chez votre ami en fin d'après midi",
                influences: {
                    health: 0,
                    love: 0,
                    friends: 2,
                    studies: 0,
                    money: 0,
                    reputation: 0
                }
            },
            {
                id: 23,
                transition: "Répondant au sms de ce matin",
                resolution: "Vous avez répondu à votre sms de ce matin, quand vous étiez chez votre ami en fin d'après midi",
                influences: {
                    health: 0,
                    love: 0,
                    friends: -1,
                    studies: 0,
                    money: 0,
                    reputation: 0
                }
            }
        ],
    },
    {
        id: 23,
        title: "Avant d'être chez mon pote",
        context: "En début d'après midi, j'étais",
        hour: "16h35",
        img: "",
        choices: [
            {
                id: 24,
                transition: "déjà chez mon ami",
                resolution: "Vous êtes resté chez votre ami",
                influences: {
                    health: 0,
                    love: 0,
                    friends: 0,
                    studies: 0,
                    money: 0,
                    reputation: 0
                }
            },
            {
                id: 25,
                transition: "chez moi",
                resolution: "Vous êtes allé chez votre ami pour la fin d'après midi",
                influences: {
                    health: 0,
                    love: 0,
                    friends: 0,
                    studies: 0,
                    money: 0,
                    reputation: 0
                }
            }
        ],
    },
    {
        id: 24,
        title: "Avant d'être chez mon pote / j'étais chez mon pote",
        context: "Et ",
        hour: "14h22",
        img: "",
        choices: [
            {
                id: 30,
                transition: "On n'a pas laché le clavier",
                resolution: "Vous avez joué aux jeux vidéos avec votre ami en début d'après midi",
                influences: {
                    health: 0,
                    love: 0,
                    friends: 2,
                    studies: 0,
                    money: 0,
                    reputation: 0
                }
            },
            {
                id: 30,
                transition: "J'ai surtout répondu à mes messages",
                resolution: "Vous avez répondu à vos messages, chez votre ami en début d'après midi",
                influences: {
                    health: 0,
                    love: 0,
                    friends: -2,
                    studies: 0,
                    money: 0,
                    reputation: 0
                }
            }
        ],
    },
    {
        id: 25,
        title: "Avant d'être chez mon pote / j'étais chez moi",
        context: "En fait, ",
        hour: "14h22",
        img: "",
        choices: [
            {
                id: 30,
                transition: "J'ai quand même pas mal révisé en début d'après-midi",
                resolution: "Vous avez révisé chez vous en début d'après midi",
                influences: {
                    health: 0,
                    love: 0,
                    friends: 0,
                    studies: 2,
                    money: 0,
                    reputation: 0
                }
            },
            {
                id: 30,
                transition: "J'ai répondu au message de ce matin",
                resolution: "Vous avez répondu à vos messages, chez vous, en début d'après midi",
                influences: {
                    health: 0,
                    love: 0,
                    friends: 0,
                    studies: 0,
                    money: 0,
                    reputation: 0
                }
            }
        ],
    },
    {
        id: 26,
        title: "J'étais chez moi",
        context: "Il fallait vraiment que",
        hour: "16h35",
        img: "",
        choices: [
            {
                id: 27,
                transition: "Je révise pour les DS à venir",
                resolution: "Vous avez révisé vos examens en fin d'après midi",
                influences: {
                    health: 0,
                    love: 0,
                    friends: 0,
                    studies: 2,
                    money: 0,
                    reputation: 0
                }
            },
            {
                id: 27,
                transition: "J'envoie un dernier sms pour finir la discussion de ce matin",
                resolution: "Vous avez envoyé un dernier sms pour finir la discussion de ce matin",
                influences: {
                    health: 0,
                    love: 0,
                    friends: 0,
                    studies: 0,
                    money: 0,
                    reputation: 0
                }
            }
        ],
    },
    {
        id: 27,
        title: "Avant d'être chez moi",
        context: "En début d'après midi, j'étais",
        hour: "16h35",
        img: "",
        choices: [
            {
                id: 28,
                transition: "déjà chez moi",
                resolution: "Vous êtes resté chez vous",
                influences: {
                    health: 0,
                    love: 0,
                    friends: 0,
                    studies: 0,
                    money: 0,
                    reputation: 0
                }
            },
            {
                id: 29,
                transition: "chez votre ami",
                resolution: "Vous êtes allé chez votre ami pour la fin d'après midi",
                influences: {
                    health: 0,
                    love: 0,
                    friends: 0,
                    studies: 0,
                    money: 0,
                    reputation: 0
                }
            }
        ],
    },
    {
        id: 28,
        title: "Avant d'être chez moi / j'étais chez moi",
        context: "Il y a des priorité dans la vie,",
        hour: "14h22",
        img: "",
        choices: [
            {
                id: 30,
                transition: "Et en ce moment c'est les révisions",
                resolution: "Vous avez révisé chez vous en début d'après midi",
                influences: {
                    health: 0,
                    love: 0,
                    friends: 0,
                    studies: 2,
                    money: 0,
                    reputation: 0
                }
            },
            {
                id: 30,
                transition: "Et je devais répondre à ces messages",
                resolution: "Vous avez répondu à vos messages, chez vous en début d'après midi",
                influences: {
                    health: 0,
                    love: 0,
                    friends: 0,
                    studies: 0,
                    money: 0,
                    reputation: 0
                }
            }
        ],
    },
    {
        id: 29,
        title: "Avant d'être chez moi / j'étais chez mon pote",
        context: "Là-bas ",
        hour: "14h22",
        img: "",
        choices: [
            {
                id: 30,
                transition: "On s'est bien marré sur Fallguys",
                resolution: "Vous avez joué aux jeux vidéos chez votre ami en début d'après midi",
                influences: {
                    health: 0,
                    love: 0,
                    friends: 2,
                    studies: 0,
                    money: 0,
                    reputation: 0
                }
            },
            {
                id: 30,
                transition: "J'ai répondu au message de ce matin",
                resolution: "Vous avez répondu à vos messages, chez votre ami, en début d'après midi",
                influences: {
                    health: 0,
                    love: 0,
                    friends: -1,
                    studies: 0,
                    money: 0,
                    reputation: 0
                }
            }
        ],
    },
    {
        id: 30,
        title: "D'où viennent les messages ?",
        context: "C'est vrai qu'aujourd'hui, cette discussion par SMS avec",
        hour: "11h59",
        img: "",
        choices: [
            {
                id: 31,
                transition: "Mon date était très plaisante",
                resolution: "Vous avez commencé à discuter avec votre date en fin de matinée",
                influences: {
                    health: 0,
                    love: 0,
                    friends: 0,
                    studies: 0,
                    money: 0,
                    reputation: 0
                }
            },
            {
                id: 31,
                transition: "La dame des APL était nécessaire",
                resolution: "Vous avez commencé à discuter avec la dame des APL en fin de matinée",
                influences: {
                    health: 0,
                    love: 0,
                    friends: 0,
                    studies: 0,
                    money: 0,
                    reputation: 0
                }
            },
            {
                id: 31,
                transition: "Mon pote à Paris était sympa",
                resolution: "Vous avez commencé à discuter avec votre ami de Paris en fin de matinée",
                influences: {
                    health: 0,
                    love: 0,
                    friends: 0,
                    studies: 0,
                    money: 0,
                    reputation: 0
                }
            }
        ],
    },
    {
        id: 31,
        title: "La pause le matin",
        context: "Je suis bien content d'avoir ... pendant la pause de ce matin",
        hour: "10h07",
        img: "",
        choices: [
            {
                id: 32,
                transition: "Fini mes devoirs",
                resolution: "Vous avez fini vos devoir durant la pause du matin",
                influences: {
                    health: 0,
                    love: 0,
                    friends: 0,
                    studies: 1,
                    money: 0,
                    reputation: 0
                }
            },
            {
                id: 32,
                transition: "Pris un truc à manger",
                resolution: "Vous avez mangé un encas durant la pause du matin",
                influences: {
                    health: 2,
                    love: 0,
                    friends: 0,
                    studies: 0,
                    money: 0,
                    reputation: 0
                }
            }
        ],
    },
    {
        id: 32,
        title: "La tenue choisi",
        context: "Peut-être que ce matin, je n'aurais pas du m'habiller",
        hour: "07h31",
        img: "",
        choices: [
            {
                id: 33,
                transition: "Avec cette vieille veste confortable",
                resolution: "Vous avez enfilé une tenue confortable pour la journée",
                influences: {
                    health: 0,
                    love: 0,
                    friends: 0,
                    studies: 0,
                    money: 0,
                    reputation: 0
                }
            },
            {
                id: 33,
                transition: "Avec le sweat de l'ENSI",
                resolution: "Vous avez enfilé votre sweat de l'ENSI pour la journée",
                influences: {
                    health: 0,
                    love: 0,
                    friends: 0,
                    studies: 0,
                    money: 0,
                    reputation: -2
                }
            },
            {
                id: 33,
                transition: "Avec ces affaires stylées mais peu confortables",
                resolution: "Vous avez enfilé vos plus beaux vêtements pour la journée",
                influences: {
                    health: 0,
                    love: 1,
                    friends: 0,
                    studies: 0,
                    money: 0,
                    reputation: 0
                }
            }
        ],
    },
    {
        id: 33,
        title: "Le petit-dej",
        context: "Ce matin, j'ai",
        hour: "7h12",
        img: "",
        choices: [{
            id: 34,
            transition: "Bien fait de prendre un petit dej consistant",
            resolution: "Vous avez pris un bon petit déjeuner consistant et équilibré après vous être levé",
            influences: {
                health: 2,
                love: 0,
                friends: 0,
                studies: 0,
                money: 0,
                reputation: 0
            }
        },{
            id: 34,
            transition: "Pas pris de truc à manger",
            resolution: "Vous n'avez pas mangé de petit déjeuner ce matin",
            influences: {
                health: 0,
                love: 0,
                friends: 0,
                studies: 0,
                money: 0,
                reputation: 0
            }
        }],
    },{
        id: 34,
        title: "reveil",
        context: "Je me lève",
        hour: "7h01",
        img: "",
        choices: [],
    }]
