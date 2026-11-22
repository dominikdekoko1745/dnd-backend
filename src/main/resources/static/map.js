const players = [
    { name: "Arthas", hp: 100 },
    { name: "Legolas", hp: 65 },
    { name: "Geralt", hp: 0 },
    { name: "Jaina", hp: 80 }
];


let alivePlayer = players.filter(p => p.hp > 0)
let sumHP = alivePlayer.reduce((sum, p) => sum + p.hp, 0)

console.log(alivePlayer);
console.log(sumHP);



let findPlayer = players.find(p => p.name === "Legolas")
findPlayer.hp -= 20
console.log(findPlayer);

