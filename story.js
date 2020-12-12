let stories =
[
    {
        id: 0,
        title: "Situation initiale",
        context: "Vous vous retrouvez dans une pièce dont le plafond est blanc. Comment êtes-vous arrivé là ?",
        hour: "6h37",
        img: "200.gif",
        choices: [
            {
                id: 1,
                transition: "En ambulance",
                majors: {
                    sante: -2,
                    amour: 0
                },
                minors: {
                },
            },
            {
                id: 2,
                transition: "A pied",
                majors: {
                    sante: +2,
                    amour: 0
                },
                minors: []
            },
            {
                id: 1,
                transition: "En hélicoptère",
                majors: {
                    sante: -2,
                    amour: 0
                },
                minors: []
            }
        ],
    },
    {
        id: 1,
        title: "Brulé vif",
        context: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
        hour: "3h02",
        img: "test2.jpg",
        choices: [
            {
                id: 1,
                transition: "En ambulance",
                majors: {
                    sante: -2,
                    amour: 0
                },
                minors: {
                },
            },
            {
                id: 2,
                transition: "A pied",
                majors: {
                    sante: +2,
                    amour: 0
                },
                minors: []
            },
        ],
    },
    {
        id: 2,
        title: "soirée pyjama",
        context: "Vous avez décidé de faire une soirée pyjama avec vos potes",
        hour: "18h59",
        img: "a.png",
        choices: [
        ],
    }
]
