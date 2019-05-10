const imageSrcArray = [];

for (let i = 1; i < 37; i++) {
    imageSrcArray.push(`/static/images/fate_chibi/${i}.jpg`);
}

module.exports = {
    getAll: function() {
        return Promise.resolve(imageSrcArray);
    }
};



