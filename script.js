console.log("Vítej v mojí druhé uníkové hře! Minule jsi se dostal až k pokladu a nyní tě čeká druhá část této hry, tentokrát ses rozhodl, že se zkusíš díky všeobecným znalostem a znalostem o historii dostat k dalšímu bohatství, tentokrát však v truhle.")
console.log("Celá hra je uděláná formou kvízu na všeobecné znalosti, historie.")
console.log("Pozorně si zapisuj všechny číselné kódy a hesla, které uvidíš, abys dostal klíč a otevřel truhlu s pokladem.")
console.log("Každé dveře však střeží nějaký strážce, který ti dá otázku, na kterou musíš správně odpovědět, abys mohl pokračovat dále, pokud odpovíš špatně, budeš zadržen a hra končí.")
let jmeno = prompt("Napiš své jméno: ")
console.log("Jsi na začátku hry, stojíš před vstupem do jeskyně, kde má být podle legendy poklad. Vejdeš dovnitř a před sebou vidíš dvě cesty, jedna vede doleva a druhá doprava. Kterou cestou se vydáš?")




let cesta = prompt("Zadej směr cesty (doleva/doprava):")
if (cesta === "doleva") {
    console.log("Vydal ses tedy doleva, jdeš dlouhou chodbou na konec a tam vidíš staré dřevěné dveře, od kterých však nemáš klíč. Ovšem lze rozluštit hádanku, která je na dveřích a získat tak klíč, kterým otevřeš zámek.")
    let kod1 = prompt(("Otázka zní: Mnichovskou dohodu (1938) podepsali zástupci zemí Německa, Francie, Itálie a.... "))
        if (kod1 === "VB" || kod1 === "Anglie" || kod1 === "Velká Británie") {
            console.log("Správná odpověď, získáváš klíč, odemykáš dveře a pokračuješ dále.")
            console.log("Před sebou vidíš dlouhou chodbu, která vede do další místnosti, tam jsou dveře otevřené, procházíš tedy dále a přicházíš k dalším dveřím.")
            let kod2 = prompt(("Otázka zní: Kolik planet je ve sluneční soustavě? "))
            if (kod2 === 8) {
                console.log("Správná odpověď, strážce tě pouští dále.")
                let cesta2 = prompt("Nyní máš na výběr mezi dvěma cestama, po schodech dolů a nebo nahoru: ")
                if (cesta2 === "dolů" || cesta2 === "Dolů") {
                    console.log("Jdeš tedy dolů")
                } else if (cesta2 === "nahoru" || cesta2 === "Nahoru") {
                    console.log("Jdeš tedy nahoru.")
                }
            
            
            } else {
                console.log("Špatná odpověď, hra končí.")
            }
        } else {
            console.log("Špatná odpověď, strážce tě zadržel a hra končí.")
        }





} else if (cesta === "doprava") {
    console.log("asdasd")



} else {
    console.log("ahsdasd")
}