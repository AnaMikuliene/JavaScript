/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri gebės sukurti objektus 3 savybėm ir 1 metodu.
Savybės:
title: string
director: string
budget: number
Metodas: 
wasExpensive() - jeigu filmo "budget" yra daugiau nei 100 000 000 mln USD, tada grąžins true, kitu atveju false. 
------------------------------------------------------------------------------------------------------ */

class Movie {
    constructor(title, directror, budget) {
        this.title = title,
        this.directror = directror,
        this.budget = budget
    }
    wasExpensive(){return this.budget > 100000000}
    }

    const movieTitanic = new Movie("Titanic", "Petraitis", 123456);
    const movieVienasNamuose = new Movie("Vienas namuose", "Adomitis", 8000000000);
    console.log(movieTitanic.wasExpensive())
    console.log(movieVienasNamuose.wasExpensive())