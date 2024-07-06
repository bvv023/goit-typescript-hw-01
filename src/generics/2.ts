type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
}

function compare(top: Partial<AllType>, bottom: Partial<AllType>): AllType {
  const result: AllType = {
    name: top.name || 'default',
    position: bottom.position || 0,
    color: top.color || 'default',
    weight: bottom.weight || 0,
  };

  return result;
}

const top = { name: 'Max', color: 'blue' };
const bottom = { position: 1, weight: 50 };

const result = compare(top, bottom);
console.log(result);
