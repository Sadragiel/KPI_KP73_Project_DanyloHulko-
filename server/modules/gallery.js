const imageSrcArray = [];

const names = [
    'Saber','Lancer','Archer','Caster','Assassin','Rider','Berserk'
]


for (let i = 1; i < 37; i++) {
    imageSrcArray.push({
        src: `/static/images/fate_chibi/${i}.jpg`,
        name: names[i % names.length]
    });
}

module.exports = {
    getAll: function() {
        return Promise.resolve(imageSrcArray.slice());
    }
};



