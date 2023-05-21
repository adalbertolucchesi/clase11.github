console.log(" ----------TEMA IF-ELSE----------")
const oreo = 10;
const KitKat = 15;
const Kinder = 25;
const helado = 100;
const topping = "oreo";
let preciofinal = 0;

if (topping === "oreo") {
  preciofinal = oreo + helado;   
console.log("el helado cuesta:", preciofinal);
} else if (topping === "KitKat") {
  preciofinal = KitKat + helado;
  console.log("el helado cuesta:", preciofinal);
} else if (topping === "Kinder") {
  preciofinal = Kinder + helado;  
console.log("el helado cuesta:", preciofinal);
} else {
  console.log("NO TENEMOS ESTE TOPPING");
}

console.log(" ----------TEMA SWITCH----------")


let pedido = "carne"; 

switch (pedido) {
  case "carne":
    console.log("Como bebida, le ofrecemos vino tinto.");
    break;
  case "pescado":
    console.log("Como bebida, le ofrecemos vino blanco.");
    break;
  case "verdura":
    console.log("Como bebida, le ofrecemos agua.");
    break;
  default:
    console.log("Elija carne, pescado o verdura.");
    break;
}

console.log("----------TEMA FOR----------")


const datos = ["ensaladas varias","pastas" , "cordero", "pato","cerdo", "chivito"];
datos.
push("vinos acorde a la  comidas",)
for (let i = 0; i < datos.length; i++) 
  console.log(datos[i]);
 
  for (let i = 1; i <= 5; i++) {
    if (datos[i] === "pastas") {
      datos[i] += " (con vino blanco)";
    } else if (datos[i] === "cordero") {
      datos[i] += " (con vino tinto)";
    } else if (datos[i] === "pato") {
        datos[i] += " (con vino tinto)";
    } else if (datos[i] === "cerdo") {
        datos[i] += " (con vino tinto)";
    } else if (datos[i] === "chivito") {
        datos[i] += " (con vino tinto o blanco)";
    }

    console.log(datos[i]);
  }
     
  
