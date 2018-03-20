var lineProcessorApp = function () {
    "use strict";

    var model = {
        targets: data.targets,
        collectionLength: 60,
        collectionMin: 5,
        collectionMax: 25,
        collection: [],
        mode: null
    };

    function getRandomInt(min, max) {
        // Returns a random number.
        var ran = Math.floor(Math.random() * ((max + 1) - min)) + min;
        return ran;
    }

    function generateCollection(len, min, max) {
        // Returns a collection of random
        // numbers <array>. Takes in the
        // length (size) of the collection,
        // min and max values <num>.
        var collection = [];
        var index = 0;
        var ran = null;

        // process the collection
        while (index < len) {
            ran = getRandomInt(min, max);
            collection.push(ran);
            index += 1;
        }

        collection.sort(function (a, b) {
            return a - b
        });

        model.collection = collection;
    }

    function render(m) {
        // TODO
    }


    function init() {
        generateCollection(model.collectionLength, model.collectionMin, model.collectionMax);
        console.log(model.collection);
    }
    init();
};
lineProcessorApp(data);