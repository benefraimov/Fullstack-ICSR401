// practice 8
{
    const numNeighbours = prompt(
        'How many neighbour countries does your country have?'
    );

    //   // LATER : This helps us prevent bugs
    //   const numNeighbours = Number(
    //     prompt('How many neighbour countries does your country have?')
    //   );

    if (numNeighbours === 1) {
        console.log('Only 1 border!');
    } else if (numNeighbours > 1) {
        console.log('More than 1 border');
    } else {
        console.log('No borders');
    }
}
// practice 9
{
    if (language === 'english' && population < 50 && !isIsland) {
        console.log(`You should live in ${country} :)`);
    } else {
        console.log(`${country} does not meet your criteria :(`);
    }
}
// practice 10
{
    switch (language) {
        case 'chinese':
        case 'mandarin':
            console.log('MOST number of native speakers!');
            break;
        case 'spanish':
            console.log('2nd place in number of native speakers');
            break;
        case 'english':
            console.log('3rd place');
            break;
        case 'hindi':
            console.log('Number 4');
            break;
        case 'arabic':
            console.log('5th most spoken language');
            break;
        default:
            console.log('Great language too :D');
    }
}
// practice 11
{
    console.log(
        `${country}'s population is ${population > 33 ? 'above' : 'below'} average`
    );
}