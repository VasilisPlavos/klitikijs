import { klitikijs } from '.';

Test('Πλαβός', 'Πλαβέ');
Test('Μουζενίδης', 'Μουζενίδη');
Test('Γεώργιος', 'Γεώργιε');
Test('Γιώργος', 'Γιώργο');
Test('Νικόλας', 'Νικόλα');
Test('Καμένος', 'Καμένε');
Test('Δευτεραίος', 'Δευτεραίε');

function Test(input: string, correctOutput: string) {
  const vocs = new klitikijs();
  let output = vocs.format(input);
  let result = correctOutput == output;
  console.log(`in: ${input} - out: ${output} - result: ${result}`);
}
