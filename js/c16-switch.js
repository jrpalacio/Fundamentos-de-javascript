var signo = prompt('¿Cuál es tú signo?');
switch (signo.toLowerCase()) {
    case  'acuario':
        console.log("Eres acuario");
        break;
    case 'libra':
        console.log("Eres libra");
        break;
    case 'sagitario':
        console.log("Eres sagitario");
    default:
        console.log("No es un signo zodiacal valido");
        break;
}