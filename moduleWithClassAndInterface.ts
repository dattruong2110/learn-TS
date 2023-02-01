import { hasPrint } from "./interfaceForClass";
import { Invoice } from "./classImplementInterface";

const documentOne: hasPrint = new Invoice('Hitachi Vantara', 'Front-End Developer', 10500000);
const documentTwo: hasPrint = new Invoice('VietJet Air', 'Fly', 1880000);

const allDocuments: hasPrint[] = [];
allDocuments.push(documentOne);
allDocuments.push(documentTwo);

console.log(allDocuments);