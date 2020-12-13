let stories_ends =
[
    {
        influence: "Health",
        possibilities: [
            {
                maxValue: 0,
                resolution: "Vous êtes pas en forme"
            },{
                minValue: 1,
                maxValue: 3,
                resolution: "Vous êtes relativement en forme pour vos examens"
            },{
                minValue: 4,
                maxValue: 9,
                resolution: "Vous êtes très en forme pour vos examens"
            },{
                minValue: 10,
                resolution: "Vous allez tout niquer"
            }
        ],
    },
    {
        influence: "Love",
        possibilities: [
            {
                maxValue: 0,
                resolution: "Vous avez chié dans la colle"
            },{
                minValue: 1,
                maxValue: 3,
                resolution: "Vous n'avez pas fait d'effort particulier"
            },{
                minValue: 4,
                maxValue: 9,
                resolution: "Tout se passe pour le mieux"
            },{
                minValue: 10,
                resolution: "CE SOIR JE KEN !"
            }
        ],
        
    }]