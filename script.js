document.addEventListener("DOMContentLoaded", function() {
    alert("Vítej v mojí druhé uníkové hře! Minule jsi se dostal až k pokladu a nyní tě čeká druhá část této hry, tentokrát ses rozhodl, že se zkusíš díky všeobecným znalostem a znalostem o historii dostat k dalšímu bohatství, tentokrát však v truhle.")
    alert("Celá hra je uděláná formou kvízu na všeobecné znalosti, historie.")
    alert("Pozorně si zapisuj všechny číselné kódy, které uvidíš, abys na konci dostal poslední ze sedmi klíčů a otevřel tak komnatu s truhlou s pokladem.")
    alert("Většina dveří je zamčena, když však udpovíš na otázku, která je na dveřích, získáš klíč a můžeš pokračovat dál.")
    let jmeno = prompt("Napiš své jméno: ")
    let vek = prompt("Napiš svůj věk: ")
    if (vek < 18) {
        alert("Jsi moc mladý, hra končí.")
        process.exit(1);
    } else {
        alert("Vítej tedy ve hře a užij si ji.")}
        alert("Jsi na začátku hry, stojíš před vstupem do nejstřeženější budovy v ČR, kde má být poklad v podobě korunovačních klenotů.")





        alert("Vcházíš do budovy a před tebou jsou dveře s nápisem WC, tam toho asi moc nebude.")
            alert("Vydal ses tedy doleva, jdeš dlouhou chodbou na konec a tam vidíš dřevěné dveře, od kterých však nemáš klíč. Ovšem lze rozluštit hádanku, která je na dveřích a získat tak klíč, kterým otevřeš zámek.")
            let kod1 = prompt(("Otázka zní: Mnichovskou dohodu (1938) podepsali zástupci zemí Německa, Francie, Itálie a.... "))
                if (kod1 === "VB" || kod1 === "Anglie" || kod1 === "Velká Británie") {
                    // první klíč
                    alert("Správná odpověď, získáváš klíč, odemykáš dveře a pokračuješ dále.")
                    alert("Před sebou vidíš dlouhou chodbu, která vede do další místnosti, tam jsou dveře otevřené, procházíš tedy dále a přicházíš k dalším dveřím.")
                    let kod2 = prompt("Otázka zní: Kolik planet je ve sluneční soustavě? ")
                        // druhý klíč, První kód = 8
                        if (kod2 === "8") {
                            alert("Správná odpověď, získáváš druhý klíč.")
                            let cesta2 = prompt("Nyní máš na výběr mezi dvěma cestama, po schodech dolů a nebo nahoru, obě vedou ke stejnému cíli: ")
                            if (cesta2 === "dolů" || cesta2 === "Dolů") {
                                alert("Jdeš tedy dolů.")
                                alert("Procházíš chodbou, kde jsou lasery a když se jich dotkneš, spustíš alarm a hra končí.")
                                alert("Nyní budeš muset odpověďet na dvě otázky, první odpovědí vypneš lasery a druhou odpovědí otevřeš dveře. Odpověz celým jménem.")
                                let kod3 = prompt("Otázka zní: Kdo byl prvním prezidentem Československa v letech 1953-1957? ")
                                let kod4 = prompt("Otázka zní: Kdo ho nahradil v roce 1957?")
                                if (kod3 === "Antonín Zápotocký" && kod4 === "Antonín Novotný") {
                                    alert("Správné odpovědi, lasery jsou vypnuty a můžeš pokračovat dále.")
                                    alert("Před sebou vidíš dveře, které však nejsou zamčené, otevíráš je a procházíš chodbou dále.")
                                    // třetí klíč
                                    alert("Přicházíš do místnosti, kde je stůl a na něm klíč, kterým otevřeš dveře do další místnosti.")
                                    alert("Před sebou vidíš dveře do výtahu, potřebuješ však kód, který získáš odpovědí na následující otázku, abys mohl pokračovat dále.")
                                    let kod5 = prompt("Otázka zní: Která planeta je nejblíže Slunci?")
                                    switch (kod5) {
                                        case "Merkur":
                                            alert("Správná odpověď, vstupuješ do výtahu a pokračuješ dále.")
                                            break;
                                        default:
                                            alert("Špatná odpověď, hra končí.")
                                    }
                                    alert("Výtah tě zavedl do další místnosti, kde je další klíč, kterým otevřeš další dveře.")
                                    alert("K získání tohoto klíče budeš muset odpovědět na otázku, která je na dveřích.")
                                    let kod6 = prompt("Otázka zní: V jakém roce padla Berlínská zeď?")
                                    if (kod6 === "1989") {
                                        // čtvrtý klíč, drzí kód = 1989
                                        alert("Správná odpověď, získáváš klíč a pokračuješ dále.")
                                        alert("Před sebou vidíš dveře, které otevíráš a procházíš dále.")
                                        alert("Vcházíš do chodby, procházíš ji až na konec, kde vidíš dveře.")
                                        alert("Otevíráš dveře a před sebou vidíš truhlu, která je zamčená, k získání klíče od ní potřebuješ odpovědět na další otázku.")
                                        let kod7 = prompt("Otázka zní: Issac Newton je známý především díky objevu zákona o gravitaci, je to pravda?")
                                        if (kod7 === "Ne" || kod7 === "ne") {
                                            alert("Správná odpověď, získáváš klíč a otevíráš truhlu.")
                                            // Pátý klíč
                                            alert("V truhle je pátý klíč, otevíráš s ním dveře před sebou a pokračuješ dále chodbou.")
                                            alert("Před sebou vidíš předposlední dveře, zbvývá předposlední otázka.")
                                            let kod8 = prompt("Otázka zní: Je Melbourne nebo Brisbane hlavním městem Austrálie?")
                                            if (kod8 === "Ne" || kod8 === "ne") {
                                                // Šestý klíč
                                                alert("Správná odpověď, získáváš klíč a otevíráš dveře.")
                                                let kod9 = prompt("Před sebou vidíš poslední dveře, otázka tedy zní, jaký je kód?")
                                                if (kod9 === "81989") {
                                                    // Sedmý klíč
                                                    alert("Správná odpověď, získáváš poslední klíč a máš tedy všech 7 klíčů, které potřebuješ, aby ses dostal ke korunovačním klenotům.")
                                                    alert("Otevíráš poslední dveře, vcházíš do místnosti, kde je truhla s pokladem, který jsi hledal.")
                                                    alert("Gratuluji, našel jsi poklad a hra končí.")
                                                } else {
                                                    alert("Špatný kód, říkal jsem ať si je zapisuješ, hra končí.")
                                                    process.exit(1);
                                                }
                                            } else {
                                                alert("Špatná odpověď, je to Canberra hra končí.")
                                                process.exit(1);
                                            }
                                        } else {
                                            alert("Špatná odpověď, byl to Isaac Newton, hra končí.")
                                            process.exit(1);
                                        }

                                    } else {
                                        alert("Špatná odpověď, hra končí.")
                                        process.exit(1);
                                    }
                                
                                } else {
                                    alert("Špatná odpověď, hra končí.")
                                    process.exit(1);
                                }
                            } else if (cesta2 === "nahoru" || cesta2 === "Nahoru") {
                                // třetí klíč
                                alert("Jdeš tedy nahoru, po cestě vidíš nějaký klíč na schodech, tak ho vezmeš, protože se může hodit. a pokračuješ dále.")
                                alert("Vylezl jsi po schodech nahoru, vedle tebe je další výtah, ten ti však nepřijde důležitý, proto jdeš rovně, kde je další klíč, kterým otevřeš další dveře.")
                                    alert("K získání tohoto klíče budeš muset odpovědět na otázku, která je na dveřích.")
                                    let kod6 = prompt("Otázka zní: V jakém roce padla Berlínská zeď?")
                                    if (kod6 === "1989") {
                                        // čtvrtý klíč, drzí kód = 1989
                                        alert("Správná odpověď, získáváš klíč a pokračuješ dále.")
                                        alert("Před sebou vidíš dveře, které otevíráš a procházíš.")
                                        alert("Vcházíš do chodby, procházíš ji až na konec, kde vidíš dveře.")
                                        alert("Otevíráš dveře a před sebou vidíš truhlu, která je zamčená, k získání klíče od ní potřebuješ odpovědět na další otázku.")
                                        let kod7 = prompt("Otázka zní: Issac Newton je známý především díky objevu zákona o gravitaci, je to pravda?")
                                        if (kod7 === "Ne" || kod7 === "ne") {
                                            alert("Správná odpověď, získáváš klíč a otevíráš truhlu.")
                                            // Pátý klíč
                                            alert("V truhle je pátý klíč, otevíráš s ním dveře před sebou a pokračuješ dále chodbou.")
                                            alert("Před sebou vidíš předposlední dveře, zbvývá předposlední otázka.")
                                            let kod8 = prompt("Otázka zní: Je Melbourne nebo Brisbane hlavním městem Austrálie?")
                                            if (kod8 === "Ne" || kod8 === "ne") {
                                                // Šestý klíč
                                                alert("Správná odpověď, získáváš klíč a otevíráš dveře.")
                                                let kod9 = prompt("Před sebou vidíš poslední dveře, otázka tedy zní, jaký je kód?")
                                                if (kod9 === "81989") {
                                                    // Sedmý klíč
                                                    alert("Správná odpověď, získáváš poslední klíč a máš tedy všech 7 klíčů, které potřebuješ, aby ses dostal ke korunovačním klenotům.")
                                                    alert("Otevíráš poslední dveře, vcházíš do místnosti, kde je truhla s pokladem, který jsi hledal.")
                                                    alert("Gratuluji, našel jsi poklad a hra končí.")
                                                } else {
                                                    alert("Špatný kód, říkal jsem ať si je zapisuješ, hra končí.")
                                                    process.exit(1);
                                                }
                                            } else {
                                                alert("Špatná odpověď, je to Canberra hra končí.")
                                                process.exit(1);
                                            }
                                        } else {
                                            alert("Špatná odpověď, byl to Isaac Newton, hra končí.")
                                            process.exit(1);
                                        }

                                    } else {
                                        alert("Špatná odpověď, hra končí.")
                                        process.exit(1);
                                    }
                            }
                        } else {
                            alert("Špatná odpověď, hra končí.")
                            process.exit(1);
                        }
                } else {
                    alert("Špatná odpověď, spustil jsi alarm a hra končí.")
                    process.exit(1);
                }
            });