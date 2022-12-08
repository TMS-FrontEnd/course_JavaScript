const $pre = document.querySelector('#code-list');

const task1 = [
  ` 
  let a = Boolean(' ')
  let b = Number(' ')
  let c = (a == false)
  let d = (b == false)
  
  console.log({ a, b, c, d });

  `,
  `
  let a = (1 + 4, 3 + 5);

  console.log(a);

  `,
  `
  let a = 1;
  let b = 1;
  a++;
  ++b;

  console.log({ a, b });

  `,
  `
  let c = 1;
  let d = 1;
  let newC = ++c;
  let newD = d++;

  console.log({ newC, newD });

  `,
  `
  let c = 7;
  let a = 7;

  console.log(2 * c++);
  console.log(2 * ++a);

  `,
  `
  let c = 7;

  console.log(2 * ++c);
  console.log(2 * c++);

  `,
  `
  (null == undefined)
  (null >= 0)
  (null == 0)
  ('name' == 0)
  (' ' == 0)

  `,
  `
  (4 && 5 && 7)
  (null || 2 || undefined)
  (1 || 4 || 10)
  (14 && null && 18)
  (NaN || null || undefined)
  
  `,
  `
  const token = true;
  const globalGroup = true;
  const privateRole = false;
  const globalId = true;
  const isAdmin = true;

  token && ((globalGroup && privateRole && globalId) || isAdmin)
  `,
].join('=============================');

const $code = document.createElement('code'); 
$code.innerHTML = task1;
$pre.append($code)