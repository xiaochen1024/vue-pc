function titleCase(str) {
  const f = str.slice(0, 1);
  const e = str.slice(1);
  const l = f.toLocaleLowerCase();
  const u = f.toUpperCase();
  return {
    l: `${l}${e}`,
    u: `${u}${e}`
  };
}

module.exports = exports = { titleCase };
