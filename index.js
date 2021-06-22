// Code your solutions in this file
// function writeCards( namesArray, specialEvent ) {
//     let thankYouCards = [ ]
//     for (let i = 0; i < namesArray.length; i++) {
//         console.log('Thank you, ${namesArray[i]}, for the wonderful ${specialEvent} gift!')
//     }
//     return thankYouCards
// }

// function countDown(10) {
//     while (i > 0) {
//         console.log( countdown );
//         i -= 1;
//     }
//     console.log( countdown );
// }

function writeCards( namesArray, event ) {
    let thankYouCards = []
    for ( let i = 0; i < namesArray.length; i++ ) {
      thankYouCards.push( `Thank you, ${namesArray[i]}, for the wonderful ${event} gift!` )
    }
    return thankYouCards
  }
  
  function countDown( countdown ) {
    while ( countdown > 0 ) {
      console.log( countdown );
      countdown -= 1;
    }
    console.log( countdown );
  }