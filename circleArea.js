const arguments = process.argv.slice(2)



function rFunction(r) {

    const pi =3.14;
    let area= pi*(r*r)
    console.log(area);

}



rFunction(arguments[0])