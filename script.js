/* Ett tärningspel där användaren ska kasta 1st tärning. 
Vid första kastet ska målet vara 1. Om 1 ej fås, ska man 
försöka igen. Hur många kast tar det för att komma upp i en 
stege, 1,2,3,4,5,6? */

// let goal = 1;
// let nmbrOfThrows = 0;

// while(goal < 7) {
//     let dice = Math.floor(Math.random() * 6 + 1);
//     console.log('Du kastade ' + dice);
//     nmbrOfThrows++;
//     if(dice === goal) {
//         goal++;
//         console.log('Snyggt! du kastade rätt!');
//     }
// }

// console.log('Grattis du vann på ' + nmbrOfThrows + ' antal kast!');
/*
Spelet har 2st tärningar.
Du som spelare väljer ett “knock out number” – antingen 6, 7, 8, eller 9.
Du som spelare väljer också vilken poäng som skall uppnås för att spelet skall avslutas.
Spelaren kastar båda tärningarna. Anteckna varje kasts resultat.
Om spelaren kastar något utav "knock out numbers" ges minuspoäng
*/

let score = 0;
let knockOutNmbr = 0;
let goal = 0;
let isInputApproved = false;

while(!isInputApproved) {
    knockOutNmbr = parseInt(window.prompt('Ange ett tal (6-9)'));
    if(knockOutNmbr < 6 || knockOutNmbr > 9) {
        window.alert('Du måste ange ett tal mellan 6 - 9');
    } else {
        goal = window.prompt('Ange ett mål!! (Större än 0)');
        if(goal <= 0) {
            window.alert('Du måste ange ett mål som är större än 0');
        } else {
            isInputApproved = true;
        }
    }
}

while(score < goal) {
    let diceOne = Math.floor(Math.random() * 11 + 2);
    let diceTwo = Math.floor(Math.random() * 6 + 1);
    let sum = diceOne + diceTwo;
    console.log('Du kastade ' + diceOne + ' och ' + diceTwo + '. Summan var ' + sum);

    if(sum === knockOutNmbr) {
        score -= 3;
        //score = score - 3;
    } else {
        score += sum;
        //score = score + sum;
    }
    console.log('Din totala poäng är nu ' + score + '/' + goal);
}























/* Stegen */
/*
anropa funktionen play();

function play()
    SET variabel goal till 1;
    SET variabel nmbrOfThrows till 0;

    while goal är mindre än 7
        SET variabel throw till returen från throwDice();
        öka på nmbrOfThrows med 1;
        if throw är lika med goal
            öka på goal med 1;
        end if
    end while
    PRINT "Grattis du klarade stegen på " + nmbrOfThrows + " kast!";
end function

function throwDice()
    SET variabel dice till slumpat tal (1-6);
    RETURN dice;
end function
*/

/* Knock out */
/*
play();

function play()
    Sätt variabeln inputApproved till false;
    Sätt variabeln totalScore till 0;
    Sätt variabeln knockOutNmbr till 0;
    Sätt variabeln goalNmbr till 0;

    MEDANS inputApproved är false
        Tilldela variabeln knockOutNmbr input från användaren (6-9);
        Tilldela variabeln goalNmbr input från användaren;

        OM knockOutNmbr är större än 5 OCH mindre än 10
            OM goalNumber är större än 0
                inputApproved tilldelas true; // OM vi lyckas komma ner hit så bryts loopen
    
    MEDANS totalscore är mindre än goalNmbr
        Sätt variabeln diceOne till returen från throwDice();
        Sätt variabeln diceTwo till returen från throwDice();
        Sätt variabeln sum till diceOne + diceTwo;

        OM sum är lika med knockOutNmbr
            totalscore minskas med 3;
        ANNARS
            totalScore ökas med sum;

        SKRIV UT "Denna runda kastade du { diceOne } och { diceTwo }, summan blev { sum }";
        SKRIV UT "Poängställning: { totalScore }/{ goalNmbr }";
    SKRIV UT "Grattis du har vunnit!";

function throwDice()
    SET variabel dice till slumpat tal (1-6);
    RETURN dice;
*/

/* Going to Boston */
/*
play();

function play()
    SET variabel diceOne = slumpat tal (1-6);
    SET variabel diceTwo = slumpat tal (1-6);
    SET variabel diceThree = slumpat tal (1-6);
    SET variabel score = 0;

    IF( diceOne > diceTwo OCH diceOne > diceThree )
        score = diceOne;
    END IF
    ELSE IF( diceTwo > diceOne OCH diceTwo > diceThree )
        score = diceTwo;
    END IF
    ELSE
        score = diceThree;
    END ELSE
    
    variabel diceOne = slumpat tal (1-6);
    variabel diceTwo = slumpat tal (1-6);

    IF( diceOne > diceTwo )
        score += diceOne;
    END IF
    ELSE
        score += diceTwo;
    END ELSE
    
    variabel diceOne = slumpat tal (1-6);
    score = score + diceOne; // ELLER score += diceOne;

    PRINT "Dina tärningar visade totalt { score } poäng";
end function
*/

/* Sten, Sax, Påse */
/*
SET playerOneScore = 0;
SET playerTwoScore = 0;

while( playerOneScore < 3 || playerTwoScore < 3 )
    SET playerOneChoice = input från användaren (sten, sax eller påse);
    SET playerTwoChoice = slumpat tal (1-3, där 1 = sten, 2 = sax, 3 = påse);

    IF( playerOneChoice === playerTwoChoice )
        PRINT "Det blev lika";
    ELSE IF( playerOneChoice === "sten" && playerTwoChoice === "sax" )
        playerOneScore++;
        PRINT "Spelare 1 vann!";
    ELSE IF( playerOneChoice === "sax" && playerTwoChoice === "påse" )
        playerOneScore++;
        PRINT "Spelare 1 vann!";
    ELSE IF( playerOneChoice === "påse" && playerTwoChoice === "sten" )
        playerOneScore++;
        PRINT "Spelare 1 vann!";
    ELSE
        playerTwoScore++;
        PRINT "Spelare 2 vann!";

IF( playerOneScore === 3 )
    PRINT "Spelare 1 vann matchen!";
ELSE
    PRINT "Spelare 2 vann matchen!";
*/

/* FizzBuzz */
/*
FOR (loopa igenom talen 1-100)
    IF( talet är jämnt delbart med 3 OCH talet är jämnt delbart med 5 ) // talet % 3 === 0 && talet % 5 === 0
        PRINT "FizzBuzz";
    ELSE IF( talet är jämnt delbart med 3 ) // talet % 3 === 0
        PRINT "Fizz";
    ELSE IF( talet är jämnt delbart med 5 ) // talet % 5 === 0
        PRINT "Buzz";
*/

/* Högt eller lågt */
/*
play();
function play()
    SET variabel secretNmbr till slumpat tal (1-100);
    SET variabel guess till 0;
    SET nmbrOfGuesses till 0;

    WHILE( guess är inte lika med secretNmbr )
        SET variabel guess till input från användaren;
        WHILE(controlInput(guess) är false)
            SET variabel guess till input från användaren;

        IF( guess är mindre än secretNmbr )
            PRINT "För lågt!";
        ELSE IF( guess är större än secretNmbr )
            PRINT "För högt!";
        ELSE
            PRINT "Rätt!";
        END IF
        Öka på nmbrOfGuesses med 1;

    PRINT "Du klarade det på { nmbrOfGuesses } försök!";

function controlInput(input)
    IF(input är ett tal OCH input är mellan 1-100)
        RETURN true;
    ELSE
        RETURN false;
*/

/* Söka efter likheter mellan ord */
/*
input();

function input()
    SET variabel wordOne till input från användaren;
    SET variabel wordTwo till input från användaren;
    SET variabel likheter till 0;
    SET variable loop till true;

    while(loop)
        if(wordOne och wordTwo innehåller lika många bokstäver)
            likheter = checkSimilarities(wordOne, wordTwo);
            loop = false;
        end if
        else
            PRINT "Båda orden måste innehålla lika många bokstäver!";
            AVBRYT PROGRAMMET;
        end else
    end while

    PRINT "Orden innehåller { likheter } likheter";
end function

function checkSimilarities(hund, katt) // notera att namnen hund och katt bara är ett sätt att visa att vi kan döpa våra variabler till vad vi vill. De innehåller fortfarande samma värden som wordOne och wordTwo
    SET variabel similarities = 0;

    for(varje bokstavsindex i variabeln hund)
        if(hund[index] === katt[index])
            similarities++;
        end if
    end for

    returnera similarities;
end function
/*

/* TODO app */
/*
SET varaibeln todos = [..., ..., ...];

Funktion visaTodos():
    skriv("Dina Todos:");
    för varje todo i todos:
        skriv("- " + todo);

Funktion lagg_till_todo():
    skriv("Lägg till en ny todo:");
    nyTodo = läs in användarinput;
    todos.lägg_till(nyTodo);
    skriv("Todo tillagd!");

Funktion taBortTodo():
    visaTodos();
    skriv("Vilken todo vill du ta bort? Ange index:");
    indexAttTaBort = läs in användarinput;

    om indexAttTaBort >= 0 och indexAttTaBort < längd(todos):
        borttagenTodo = todos.taBort(indexAttTaBort);
        skriv("Todo borttagen:", borttagenTodo);
    annars:
        skriv("Ogiltigt index. Försök igen.");

Funktion huvudprogram():
    medan val !== 4:
        skriv("Välkommen till ToDo-appen!");
        skriv("1. Visa Todos");
        skriv("2. Lägg till Todo");
        skriv("3. Ta bort Todo");
        skriv("4. Avsluta");

        val = läs in användarinput;

        om val == "1":
            visa_todos()
        annars om val == "2":
            laggTillTodo();
        annars om val == "3":
            taBortTodo();
        annars om val == "4":
            skriv("Hejdå!");
            bryt;
        annars:
            skriv("Ogiltigt val. Försök igen.");

*/

// Riktig JavaScript-kod för spelet Knock Out, avkommentera play() för att köra spelet på index.html
/* Knock out */
//play();
function play() {
    let inputApproved = false;
    let totalScore = 0;
    let knockOutNmbr = 0;
    let goalNmbr = 0;

    while (!inputApproved) {
        knockOutNmbr = parseInt(prompt("Välj ett nummer mellan 6 och 9"));
        goalNmbr = parseInt(prompt("Välj ett mål"));

        if (knockOutNmbr > 5 && knockOutNmbr < 10 && goalNmbr > 0) {
            inputApproved = true;
        }
    }

    while (totalScore < goalNmbr) {
        let diceOne = throwDice();
        let diceTwo = throwDice();
        let sum = diceOne + diceTwo;

        if (sum === knockOutNmbr) {
            totalScore -= 3;
        } else {
            totalScore += sum;
        }

        console.log(`Denna runda kastade du ${diceOne} och ${diceTwo}, summan blev ${sum}`);
        console.log(`Poängställning: ${totalScore}/${goalNmbr}`);
    }

    console.log("Grattis du har vunnit!");
}

function throwDice() {
    let dice = Math.floor(Math.random() * 6) + 1;
    return dice;
}

