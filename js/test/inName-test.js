function inName(name) {
  var iName = name.split(" ");
  iName[0] = iName[0][0].toUpperCase() +
    iName[0].slice(1).toLowerCase();
  iName[1] = iName[1].toUpperCase();
  return iName.join(" ");
}

console.log(inName("sebastian thrun"));

console.log(inName("NiZZZLE boFizleene"));
