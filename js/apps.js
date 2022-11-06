let tweets =[
    {
    tweet: `Snake in a can?`,
    userName: `Tbone`,
    createdAt: `01-01-2009`,
    age: 16
    },
    {
    tweet: `Cool, cool, cool, cool`,
    userName: `Abed`,
    createdAt: `02-01-2009`,
    age: 17
    },
    {
    tweet: `Your butt is the bomb.`,
    userName: `Jake`,
    createdAt: `01-21-2018`,
    age: 30
    },
    {
    tweet: `Jake, your butt is the bomb.`,
    userName: `Amy`,
    createdAt: `06-15-2018`,
    age: 31
    },
    {
    tweet: `Terry loves Yogurt`,
    userName: `3rd Person Terry`,
    createdAt: `10-01-2017`,
    age: 35
    },
    {
    tweet: `You're not Cheddar!`,
    userName: `@5261796d6e6420`,
    createdAt: `04-26-2020`,
    age: 53
    },
    {
    tweet: `WWBJD?`,
    userName: `Shirley`,
    createdAt: `12-25-2010`,
    age: 42
    },
    {
    tweet: `Denny's is for Winners!`,
    userName: `Jeff`,
    createdAt: `01-30-2009`,
    age: 40
    },
    {
    tweet: `Welcome to the Ginazone`,
    userName: `Gina`,
    createdAt: `02-14-2014`,
    age: 18
    },
    {
    tweet: `Was that off the books enough for ya?`,
    userName: `Annie`,
    createdAt: `01-02-2008`,
    age: 16
    },
]

// This counter will only post tweets of people 18 years of age or older.
let counter = 0;
while (counter < tweets.length) {
    if (tweets[counter][`age`] >= 18) {
    console.log(tweets[counter][`tweet`]);
    console.log(tweets[counter][`userName`]);
    console.log(tweets[counter][`createdAt`]);
    }
    counter = counter + 1;
}

// This counter will only post tweets of people under 18 years of age.
for (let counter = 0; counter < tweets.length; counter++){
    if (tweets[counter][`age`] < 18){
    console.log(tweets[counter][`tweet`]);
    console.log(tweets[counter][`userName`]);
    console.log(tweets[counter][`createdAt`]);
    }
}