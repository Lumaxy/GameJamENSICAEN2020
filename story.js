let stories =
[
    {
        id: 0,
        title: "Situation initiale",
        context: "Vous vous retrouvez dans une pièce dont le plafond est blanc. Comment êtes-vous arrivé là ?",
        hour: "6h37",
        img: "a.jpg",
        choices: [
            {
                id: 1,
                transition: "En tram",
                majors: {
                    sante: -2,
                    amour: 0
                },
                minors: {},
            },
            {
                id: 1,
                transition: "A pied",
                majors: {
                    sante: +2,
                    amour: 0
                },
                minors: {}
            }
        ],
    },
    {
        id: 1,
        title: "Bar qui ferme",
        context: "J'étais à ce bar avant. Il fermait, heureusement j'ai eu le temps",
        hour: "3h02",
        img: "test2.jpg",
        choices: [
            {
                id: 2,
                transition: "De trinquer avec mes potes",
                majors: {
                    sante: -2,
                    amour: 0
                },
                minors: {},
            },
            {
                id: 2,
                transition: "D'embrasser mon date",
                majors: {
                    sante: +2,
                    amour: 0
                },
                minors: {}
            },
            {
                id: 2,
                transition: "D'aller au toilette",
                majors: {
                    sante: +2,
                    amour: 0
                },
                minors: {}
            }
        ],
    },
    {
        id: 2,
        title: "Nouveau bar",
        context: "Ce nouveau bar était bien car",
        hour: "18h59",
        img: "",
        choices: [
            {
                id: 3,
                transition: "Il était moins cher que le précédent",
                majors: {
                    sante: -2,
                    amour: 0
                },
                minors: {},
            },
            {
                id: 3,
                transition: "Il y avait une meilleur ambiance qu'au précédent",
                majors: {
                    sante: +2,
                    amour: 0
                },
                minors: {}
            }
        ],
    },
    {
        id: 3,
        title: "Bar précédent",
        context: "Ceci dit j'ai passé un bon moment dans le bar d'avant en",
        hour: "18h59",
        img: "",
        choices: [
            {
                id: 4,
                transition: "Jouant au fléchettes avec mes potes",
                majors: {
                    sante: -2,
                    amour: 0
                },
                minors: {},
            },
            {
                id: 5,
                transition: "Draguant mon date",
                majors: {
                    sante: +2,
                    amour: 0
                },
                minors: {}
            },
            {
                id: 6,
                transition: "Buvant ce mètre de shots",
                majors: {
                    sante: +2,
                    amour: 0
                },
                minors: {}
            }
        ],
    },
    {
        id: 4,
        title: "Bar précédent / fléchettes",
        context: "Et si je me souviens bien",
        hour: "18h59",
        img: "",
        choices: [
            {
                id: 7,
                transition: "J'ai beaucoup joué aux fléchettes à ce bar",
                majors: {
                    sante: -2,
                    amour: 0
                },
                minors: {},
            },
            {
                id: 7,
                transition: "Je dragait mon date juste avant",
                majors: {
                    sante: +2,
                    amour: 0
                },
                minors: {}
            },
            {
                id: 7,
                transition: "Je venais de boire un mètre de shots",
                majors: {
                    sante: +2,
                    amour: 0
                },
                minors: {}
            }
        ],
    },
    {
        id: 5,
        title: "Bar précédent / drague",
        context: "Et si je me souviens bien",
        hour: "18h59",
        img: "",
        choices: [
            {
                id: 7,
                transition: "Je venais de gagner aux fléchettes",
                majors: {
                    sante: -2,
                    amour: 0
                },
                minors: {},
            },
            {
                id: 7,
                transition: "Je discutais déjà avec depuis longtemps",
                majors: {
                    sante: +2,
                    amour: 0
                },
                minors: {}
            },
            {
                id: 7,
                transition: "Je venais de boire un mètre de shots",
                majors: {
                    sante: +2,
                    amour: 0
                },
                minors: {}
            }
        ],
    },
    {
        id: 6,
        title: "Bar précédent / shots",
        context: "Et si je me souviens bien",
        hour: "18h59",
        img: "",
        choices: [
            {
                id: 7,
                transition: "Je venais de gagner aux fléchettes",
                majors: {
                    sante: -2,
                    amour: 0
                },
                minors: {},
            },
            {
                id: 7,
                transition: "J'avais discuté avec mon date avant",
                majors: {
                    sante: +2,
                    amour: 0
                },
                minors: {}
            },
            {
                id: 7,
                transition: "C'était déjà mon deuxième mètre dans ce bar",
                majors: {
                    sante: +2,
                    amour: 0
                },
                minors: {}
            }
        ],
    },
    {
        id: 7,
        title: "Bar mieux car",
        context: "L'avantage de ce bar",
        hour: "18h59",
        img: "",
        choices: [
            {
                id: 8,
                transition: "C'est que la musique plait à tout le monde",
                majors: {
                    sante: -2,
                    amour: 0
                },
                minors: {},
            },
            {
                id: 9,
                transition: "Qu'il était plus calme, on s'entendait parler",
                majors: {
                    sante: +2,
                    amour: 0
                },
                minors: {}
            }
        ],
    },
    {
        id: 8,
        title: "Bar mieux car / plait à tout le monde",
        context: "On était enfin descendu du tram, les contrôleurs ont vraiment pris leur temps. Je voulais d'abord aller au pub de la place mais tout le monde n'aime pas la musique qu'ils mettent. On est finalement allé à celui sur le quai mais on nous a demandé de finir la bouteille de \"Session 4\" ",
        hour: "18h59",
        img: "",
        choices: [
            {
                id: 10,
                transition: "J'ai aidé à la finir",
                majors: {
                    sante: -2,
                    amour: 0
                },
                minors: {},
            },
            {
                id: 10,
                transition: "Je n'ai pas aidé à la finir",
                majors: {
                    sante: +2,
                    amour: 0
                },
                minors: {}
            }
        ],
    },
    {
        id: 9,
        title: "Bar mieux car / plus calme",
        context: "On était enfin descendu du tram, les contrôleurs ont vraiment pris leur temps. Je voulais d'abord aller au pub de la place mais il avait beaucoup de monde. On est finalement allé à celui sur le quai mais on nous a demandé de finir la bouteille de \"Session 4\" ",
        hour: "18h59",
        img: "",
        choices: [
            {
                id: 10,
                transition: "J'ai aidé à la finir",
                majors: {
                    sante: -2,
                    amour: 0
                },
                minors: {},
            },
            {
                id: 10,
                transition: "Je n'ai pas aidé à la finir",
                majors: {
                    sante: +2,
                    amour: 0
                },
                minors: {}
            }
        ],
    },
    {
        id: 10,
        title: "Tram de l'ambiance",
        context: "D'ailleurs c'était un beau tram de l'ambiance, il s'est arrété car ",
        hour: "18h59",
        img: "",
        choices: [
            {
                id: 11,
                transition: "Un autre groupe chantait trop fort",
                majors: {
                    sante: -2,
                    amour: 0
                },
                minors: {},
            },
            {
                id: 11,
                transition: "On s'est embrouillé avec une autre école",
                majors: {
                    sante: +2,
                    amour: 0
                },
                minors: {}
            },
            {
                id: 11,
                transition: "\"ON EST EN PHARMA, ON EST EN PHARMA\"",
                majors: {
                    sante: +2,
                    amour: 0
                },
                minors: {}
            }
        ],
    },
    {
        id: 11,
        title: "Arrête de tram",
        context: "Mais attends, qu'est-ce que j'ai fait en attendant le tram en sortant du before ...",
        hour: "18h59",
        img: "",
        choices: [
            {
                id: 12,
                transition: "J'ai copieusement bu dans la bouteille de \"Session 4\" ",
                majors: {
                    sante: -2,
                    amour: 0
                },
                minors: {},
            },
            {
                id: 12,
                transition: "J'ai payé mon ticket de tram",
                majors: {
                    sante: +2,
                    amour: 0
                },
                minors: {}
            },
            {
                id: 12,
                transition: "J'ai dragué mon date",
                majors: {
                    sante: +2,
                    amour: 0
                },
                minors: {}
            }
        ],
    },
    {
        id: 12,
        title: "Confection de la \"Session 4\"",
        context: "D'ailleurs, dans cette bouteille de \"Session 4\", ",
        hour: "18h59",
        img: "",
        choices: [
            {
                id: 13,
                transition: "J'aurais du mettre quelque chose de plus fort",
                majors: {
                    sante: -2,
                    amour: 0
                },
                minors: {},
            },
            {
                id: 15,
                transition: "Elle était parfaitement dosée",
                majors: {
                    sante: +2,
                    amour: 0
                },
                minors: {}
            },
            {
                id: 14,
                transition: "J'aurais du mettre que du soft",
                majors: {
                    sante: +2,
                    amour: 0
                },
                minors: {}
            }
        ],
    },
    {
        id: 13,
        title: "Confection de la \"Session 4\" / quelque chose de plus fort",
        context: "Mais ...",
        hour: "18h59",
        img: "",
        choices: [
            {
                id: 15,
                transition: "... sans en abuser",
                majors: {
                    sante: -2,
                    amour: 0
                },
                minors: {},
            },
            {
                id: 15,
                transition: "... genre quelque chose de VRAIMENT plus fort",
                majors: {
                    sante: +2,
                    amour: 0
                },
                minors: {}
            }
        ],
    },
    {
        id: 14,
        title: "Confection de la \"Session 4\" / que du soft",
        context: "Mais ...",
        hour: "18h59",
        img: "",
        choices: [
            {
                id: 15,
                transition: "... pas trop quand même",
                majors: {
                    sante: -2,
                    amour: 0
                },
                minors: {},
            },
            {
                id: 15,
                transition: "... en fait, arrêté de boire directement serait plus simple",
                majors: {
                    sante: +2,
                    amour: 0
                },
                minors: {}
            }
        ],
    },
    {
        id: 15,
        title: "Jeu à boire / j'ai fait",
        context: "Pendant le jeu à boire avant ça, j'ai",
        hour: "18h59",
        img: "",
        choices: [
            {
                id: 16,
                transition: "Bu que du soft",
                majors: {
                    sante: -2,
                    amour: 0
                },
                minors: {},
            },
            {
                id: 16,
                transition: "Fait boire mes potes",
                majors: {
                    sante: +2,
                    amour: 0
                },
                minors: {}
            }
        ],
    },
    {
        id: 16,
        title: "Jeu à boire / j'ai subit",
        context: "Même si ...",
        hour: "18h59",
        img: "",
        choices: [
            {
                id: 17,
                transition: "... j'ai été focus par les autres",
                majors: {
                    sante: -2,
                    amour: 0
                },
                minors: {},
            },
            {
                id: 17,
                transition: "... je n'ai pas participé",
                majors: {
                    sante: +2,
                    amour: 0
                },
                minors: {}
            }
        ],
    },
    {
        id: 17,
        title: "Arrivé before",
        context: "Même en ayant amené ...",
        hour: "18h59",
        img: "",
        choices: [
            {
                id: 18,
                transition: "... des potes ...",
                majors: {
                    sante: -2,
                    amour: 0
                },
                minors: {},
            },
            {
                id: 19,
                transition: "... l'apéro ...",
                majors: {
                    sante: +2,
                    amour: 0
                },
                minors: {}
            },
            {
                id: 20,
                transition: "... mon date ...",
                majors: {
                    sante: +2,
                    amour: 0
                },
                minors: {}
            }
        ],
    },
    {
        id: 18,
        title: "Arrivé before / j'ai amené des potes",
        context: "... On m'a quand même reproché de ne pas avoir amené",
        hour: "18h59",
        img: "",
        choices: [
            {
                id: 21,
                transition: "... l'apéro",
                majors: {
                    sante: +2,
                    amour: 0
                },
                minors: {}
            },
            {
                id: 21,
                transition: "... mon date",
                majors: {
                    sante: +2,
                    amour: 0
                },
                minors: {}
            }
        ],
    },
    {
        id: 19,
        title: "Arrivé before / j'ai amené l'apéro",
        context: "... On m'a quand même reproché de ne pas avoir amené",
        hour: "18h59",
        img: "",
        choices: [
            {
                id: 21,
                transition: "... des potes qui habitent plus loin",
                majors: {
                    sante: +2,
                    amour: 0
                },
                minors: {}
            },
            {
                id: 21,
                transition: "... mon date",
                majors: {
                    sante: +2,
                    amour: 0
                },
                minors: {}
            }
        ],
    },
    {
        id: 20,
        title: "Arrivé before / j'ai amené mon date",
        context: "... On m'a quand même reproché de ne pas avoir amené",
        hour: "18h59",
        img: "",
        choices: [
            {
                id: 21,
                transition: "... l'apéro",
                majors: {
                    sante: +2,
                    amour: 0
                },
                minors: {}
            },
            {
                id: 21,
                transition: "... des potes qui habitent plus loin",
                majors: {
                    sante: +2,
                    amour: 0
                },
                minors: {}
            }
        ],
    },
    {
        id: 21,
        title: "Sortie de ?",
        context: "Ceci dit j'aurais pu avoir le temps de le faire si j'étais parti plus tôt ...",
        hour: "18h59",
        img: "",
        choices: [
            {
                id: 30,
                transition: "... de mon temps partiel",
                majors: {
                    sante: +2,
                    amour: 0
                },
                minors: {}
            },
            {
                id: 22,
                transition: "... de chez mon pote",
                majors: {
                    sante: +2,
                    amour: 0
                },
                minors: {}
            },
            {
                id: 26,
                transition: "... de chez moi",
                majors: {
                    sante: +2,
                    amour: 0
                },
                minors: {}
            }
        ],
    },
    {
        id: 22,
        title: "J'étais chez mon pote",
        context: "Mais j'ai passé un bon moment en ",
        hour: "18h59",
        img: "",
        choices: [
            {
                id: 23,
                transition: "Faisant des ranked avec lui",
                majors: {
                    sante: +2,
                    amour: 0
                },
                minors: {}
            },
            {
                id: 23,
                transition: "Discutant avec mon date par sms",
                majors: {
                    sante: +2,
                    amour: 0
                },
                minors: {}
            }
        ],
    },
    {
        id: 23,
        title: "Avant d'être chez mon pote",
        context: "D'ailleurs",
        hour: "18h59",
        img: "",
        choices: [
            {
                id: 24,
                transition: "J'y ai passé tout l'aprèm",
                majors: {
                    sante: +2,
                    amour: 0
                },
                minors: {}
            },
            {
                id: 25,
                transition: "J'étais chez moi avant",
                majors: {
                    sante: +2,
                    amour: 0
                },
                minors: {}
            }
        ],
    },
    {
        id: 24,
        title: "Avant d'être chez mon pote / j'étais chez mon pote",
        context: "J'y suis arrivé en début d'aprèm",
        hour: "18h59",
        img: "",
        choices: [
            {
                id: 30,
                transition: "Et on n'a pas laché le clavier",
                majors: {
                    sante: +2,
                    amour: 0
                },
                minors: {}
            },
            {
                id: 30,
                transition: "Mais je surtout répondu à mes messages en arrivant",
                majors: {
                    sante: +2,
                    amour: 0
                },
                minors: {}
            }
        ],
    },
    {
        id: 25,
        title: "Avant d'être chez mon pote / j'étais chez moi",
        context: "En fait, ",
        hour: "18h59",
        img: "",
        choices: [
            {
                id: 30,
                transition: "J'ai quand même pas mal révisé en début d'après-midi",
                majors: {
                    sante: +2,
                    amour: 0
                },
                minors: {}
            },
            {
                id: 30,
                transition: "J'ai longtemps discuté par message avant de venir",
                majors: {
                    sante: +2,
                    amour: 0
                },
                minors: {}
            }
        ],
    },
    {
        id: 26,
        title: "J'étais chez moi",
        context: "Il fallait vraiment que",
        hour: "18h59",
        img: "",
        choices: [
            {
                id: 27,
                transition: "Je révise pour les DS à venir",
                majors: {
                    sante: +2,
                    amour: 0
                },
                minors: {}
            },
            {
                id: 27,
                transition: "J'envoie ce sms",
                majors: {
                    sante: +2,
                    amour: 0
                },
                minors: {}
            }
        ],
    },
    {
        id: 27,
        title: "Avant d'être chez moi",
        context: "En y repensant, ",
        hour: "18h59",
        img: "",
        choices: [
            {
                id: 28,
                transition: "J'ai passé tout l'aprèm chez moi",
                majors: {
                    sante: +2,
                    amour: 0
                },
                minors: {}
            },
            {
                id: 29,
                transition: "J'étais passé chez mon pote en début d'après-midi",
                majors: {
                    sante: +2,
                    amour: 0
                },
                minors: {}
            }
        ],
    },
    {
        id: 28,
        title: "Avant d'être chez moi / j'étais chez moi",
        context: "Il y a des priorité dans la vie ... ",
        hour: "18h59",
        img: "",
        choices: [
            {
                id: 30,
                transition: "Et en ce moment c'est les révisions",
                majors: {
                    sante: +2,
                    amour: 0
                },
                minors: {}
            },
            {
                id: 30,
                transition: "Et je devais répondre à ces messages",
                majors: {
                    sante: +2,
                    amour: 0
                },
                minors: {}
            }
        ],
    },
    {
        id: 29,
        title: "Avant d'être chez moi / j'étais chez mon pote",
        context: "Là-bas ",
        hour: "18h59",
        img: "",
        choices: [
            {
                id: 30,
                transition: "On s'est bien marré sur fallguys",
                majors: {
                    sante: +2,
                    amour: 0
                },
                minors: {}
            },
            {
                id: 30,
                transition: "J'ai surtout répondu au sms de ce matin",
                majors: {
                    sante: +2,
                    amour: 0
                },
                minors: {}
            }
        ],
    },
    {
        id: 30,
        title: "D'où viennent les messages ?",
        context: "C'est vrai qu'aujourd'hui, cette discussion par SMS avec",
        hour: "18h59",
        img: "",
        choices: [
            {
                id: 31,
                transition: "Mon date était très plaisante",
                majors: {
                    sante: +2,
                    amour: 0
                },
                minors: {}
            },
            {
                id: 31,
                transition: "La dame des APL était nécessaire",
                majors: {
                    sante: +2,
                    amour: 0
                },
                minors: {}
            },
            {
                id: 31,
                transition: "Mon pote à Paris était sympa",
                majors: {
                    sante: +2,
                    amour: 0
                },
                minors: {}
            }
        ],
    },
    {
        id: 31,
        title: "La pause le matin",
        context: "... N'empêche que maintenant, je suis bien content que pendant la pause de ce matin, j'ai",
        hour: "18h59",
        img: "",
        choices: [
            {
                id: 32,
                transition: "Finit mes devoirs",
                majors: {
                    sante: +2,
                    amour: 0
                },
                minors: {}
            },
            {
                id: 32,
                transition: "Prit un truc à manger",
                majors: {
                    sante: +2,
                    amour: 0
                },
                minors: {}
            }
        ],
    },
    {
        id: 32,
        title: "La tenue choisit",
        context: "Peut-être que ce matin, je n'aurais pas du m'habiller",
        hour: "18h59",
        img: "",
        choices: [
            {
                id: 33,
                transition: "Avec cette vieille veste",
                majors: {
                    sante: +2,
                    amour: 0
                },
                minors: {}
            },
            {
                id: 33,
                transition: "Avec le sweat de l'ENSI",
                majors: {
                    sante: +2,
                    amour: 0
                },
                minors: {}
            },
            {
                id: 33,
                transition: "Avec ces fringues très stylé mais peu confortable",
                majors: {
                    sante: +2,
                    amour: 0
                },
                minors: {}
            }
        ],
    },
    {
        id: 33,
        title: "Le petit-dej",
        context: "Et ",
        hour: "18h59",
        img: "",
        choices: [
            {
                id: 34,
                transition: "J'ai bien fait de prendre un petit dej consistant en tout cas",
                majors: {
                    sante: +2,
                    amour: 0
                },
                minors: {}
            },
            {
                id: 34,
                transition: "J'aurais du prendre un truc à manger",
                majors: {
                    sante: +2,
                    amour: 0
                },
                minors: {}
            }
        ],
    },
    {
        id: 34,
        title: "reveil",
        context: "Je me lève",
        hour: "9h00",
        img: "",
        choices: [],
    }
]
