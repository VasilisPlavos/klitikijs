import { klitikijs } from '.';

Test('Πλαβός', 'Πλαβέ');
Test('Γεώργιος', 'Γεώργιε');
Test('Γιώργος', 'Γιώργο');
Test('Νικόλας', 'Νικόλα');
Test('Καμένος', 'Καμένε');
Test('Δευτεραίος', 'Δευτεραίε');

function Test(input: string, correctOutput: string) {
  let output = klitikijs.prototype.format(input);
  let result = correctOutput == output;
  console.log(`in: ${input} - out: ${output} - result: ${result}`);
}
