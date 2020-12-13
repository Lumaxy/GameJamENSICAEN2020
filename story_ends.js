let stories_ends =
[
    {
        influence: "health",
        possibilities: [
            {
                maxValue: -15,
                resolution: "Vous savez que cette soirée mémorable laissera des séquels. Vous avez plus que jamais abuser de l'alcool, et cela à vos dépens."
            },{
                minValue: -14,
                maxValue: 0,
                resolution: "Vous n'avez pas ménagé votre corps et une bonne gueule de bois vous attend à votre réveil."
            },{
                minValue: 1,
                maxValue: 6,
                resolution: "L'alcool n'était pas votre objectif de la soirée, vous avez trouvé d'autre chose à faire et vous n'avez rien à regretter."
            },{
                minValue: 7,
                resolution: "Vous avez fait attention à votre santé. Demain, vous léverai aux aurores et dans une forme olympique, pret à soulever des montagnes."
            }
        ],
    },
    {
        influence: "love",
        possibilities: [
            {
                maxValue: 2,
                resolution: "Vous avez invité votre date à la soirée pour à peine le calculer. Pas sûr que vous ne vous reparliez."
            },{
                minValue: 3,
                maxValue: 8,
                resolution: "Votre date a passé une bonne soirée mais forcément grâce à vous. Vous devrez peut-être rattraper la situation."
            },{
                minValue: 9,
                maxValue: 14,
                resolution: "Vous et votre date avez passé une très bonne soirée, vous vous reverrez surement."
            },{
                minValue: 15,
                resolution: "La soirée c'est très bien terminée entre vous et votre date, vous hâte de savoir où cela va vous mener."
            }
        ],

    },
    {
        influence: "friends",
        possibilities: [
            {
                maxValue: -7,
                resolution: "Vous n'avez finalement pas passé tant de temps avec vos potes. Peut-être que les plus rancuniers vous en voudront."
            },{
                minValue: -6,
                maxValue: 3,
                resolution: "Parfois il y a des jours où vous trainer avec vos potes sans que cela n'apporte rien de particulier. Ce jour là en est un."
            },{
                minValue: 4,
                maxValue: 17,
                resolution: "Vous avez passé une super journée et soirée avec vos potes. Si tout les jours était comme ça, on ne serait jamais triste. "
            },{
                minValue: 18,
                resolution: "Vous et vos potes avez passé une soirée comme on en fait rarement. Beaucoup de choses se sont passé et certaines anecdotes resteront longtemps. "
            }
        ],

    },
    {
        influence: "studies",
        possibilities: [
            {
                maxValue: 0,
                resolution: "Vous n'avez absolument pas révisé pour vos examens de demain. De toute façon il y a peut de chance que vous y soyez."
            },{
                minValue: 1,
                maxValue: 4,
                resolution: "Vous avez révisé vos examens. Ce n'était pas votre priorité mais ça devrait largement suffire pour ne pas aller aux rattrapages."
            },{
                minValue: 5,
                resolution: "Versatile serait un euphémisme pour vous décrire. Malgré la soirée vous avez révisé vos examens à fond et vous devriez majorer haut la main."
            }
        ],

    },
    {
        influence: "money",
        possibilities: [
            {
                maxValue: -14,
                resolution: "Vous vous êtes fait plaisir pour cette soirée, votre banquier s'en ai rendu compte. Il risque d'ailleurs de vous appeler pour une question de plafond dépassé ou quelque chose dans le genre."
            },{
                minValue: -13,
                maxValue: -7,
                resolution: "Vous avez beaucoup dépensé d'argent aujourd'hui. J'espère vraiment que vous aimez les pâtes et l'eau."
            },{
                minValue: -6,
                maxValue: -1,
                resolution: "Vous avez passé une bonne soirée sans vous ruiner. En regardant les tickets de caisse dans vos poches demain, vous n'aurez pas de mauvaises surprises, vous regretterez peut-être de ne pas vous être payé un kebab en plus."
            },{
                minValue: 0,
                resolution: "Bravo, vous avez su vous débrouiller pour finir la journée dans le positif. Peu de gens en sont capables et beaucoup aurez besoin de prendre exemple sur vous."
            }
        ],

    },
    {
        influence: "reputation",
        possibilities: [
            {
                maxValue: -4,
                resolution: "Porter un sweatshirt \"ENSI CAEN\" le jour où vous vous battez dans le tram n'était pas votre meilleur idée. On vous a filmé et la vidéo est devenue viral, le conseil d'admnistration n'a pas du tout apprécié."
            }
        ],

    }]
