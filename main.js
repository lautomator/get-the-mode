var lineProcessorApp = function () {
    "use strict";

    var model = {
        targets: data.targets,
        collectionLength: 100,
        collectionMin: 80,
        collectionMax: 90,
        collection: [],
        mode: null
    };

    function setCollection(d) {
        model.collection = d;
    }

    function setMode(result) {
        model.mode = result;
    }

    function getRandomInt(min, max) {
        // Returns a random number <num> between
        // min <num> and max <num>.
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

        // set the collection in the model.
        return collection;
    }

    function getMode(c) {
        // Returns the mode <num>:
        // the number that is used
        // the most. Takes in a
        // collection <array>.
        var collection = c;
        var mode = [];
        var index = 0;
        var len = c.length;
        var val = null;
        var count = 0;
        var counts = [];
        var marker = 0;
        var highest = [0, 0]; // val, count

        // sort the collection
        collection.sort(function (a, b) {
            return a - b
        });

        while (index < len) {
            // count the occurences of an index
            if (index > 0) {
                if (collection[index] === val) {
                    // matches the previous value
                    count += 1;
                    counts[marker] = [val, count];

                    if (counts[marker][1] > highest[1]) {
                        highest = [val, count];
                    }
                } else {
                    // reset
                    val = collection[index]
                    count = 1;
                    marker += 1;
                    counts.push([val, count]);
                }
            } else {
                // initial iteration
                val = collection[index];
                count = 1;
                counts.push([val, count]);
                highest = counts[0];
            }
            index += 1;
        }
        mode = highest[0];
        return mode;
    }

    function render(m) {
        var arrayEl = m.targets.arrayEl;
        var modeEl = m.targets.modeEl;
        var collection = m.collection.toString();

        arrayEl.textContent = collection.replace(/,/g, " ");
        modeEl.textContent = m.mode.toString();
    }


    function init() {
        var collection = [];
        var mode = null;

        collection = generateCollection(model.collectionLength, model.collectionMin, model.collectionMax);
        setCollection(collection);
        mode = getMode(model.collection);
        setMode(mode);
        render(model);
    }

    // button event
    model.targets.generateEl.addEventListener("click", function () {
        init();
    }, false);

    init();
};
lineProcessorApp(data);