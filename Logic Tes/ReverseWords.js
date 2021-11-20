// const word = 'I am A Great human'

// function strReverse(words) {
//     let strSplit = words.split(' ')
//     for (let i = 0; i < strSplit.length; i++) {
//         let strFix = strSplit[i].split('');
//         strResult = strFix.reverse().join('').toLowerCase()
        
//         console.log(strResult)
//     }
// }

// strReverse(word)

const word = 'I am A Great human'

function balik(kalimat) {
    let newKalimat = kalimat.split(' ')
    
    let newKalimat0 = newKalimat[0].split('').reverse().join('')
    let newKalimat1 = newKalimat[1].split('').reverse().join('')
    let newKalimat2 = newKalimat[2].split('').reverse().join('')
    let newKalimat3 = newKalimat[3].split('').reverse().join('').toLowerCase()
    let newKalimat30 = newKalimat3[0].toUpperCase()
    let newKalimat3spl = newKalimat30 + newKalimat3.split('').splice(1).join('')
    let newKalimat4 = newKalimat[4].split('').reverse().join('')

    console.log(newKalimat0, newKalimat1, newKalimat2, newKalimat3spl, newKalimat4)

}

balik(word)