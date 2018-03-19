var lineProcessorApp = function () {
    "use strict";

    var model = {
        targets: data.targets,
        collectionLength: 60,
        collectionMin: 0,
        collectionMax: 100,
        collection: [],
        mode: null
    };

    function getRandomInt(min, max, places) {
        // Returns a random number.
        var ranNumberLength = [];
        var index = 0;

        while (index < Number(places)) {
            ranNumberLength.push("0");
            index += 1;
        }
        ranNumberLength.unshift("1");

        var limit = ranNumberLength.toString();
        limit = limit.replace(/,/g, "");

        var ran = Math.floor(Math.random(min, max) * (limit));
        return ran;
    }

    function patternFilter(min, max, collection, strength) {
        // Returns a filtered collection <array>.
        // The results will have repeated values.
        // Takes in the original collection <array>,
        // min and max numbers <num> and
        // the strength <num>: 1 = very few
        // repeated values; 10 = a great amount
        // of repeated values.
        var results = [];
        var len = collection.length;
        var index = 0;
        var repeatedIndicies = [];
        var ranIndex = null;
        var noOfRepeatedIndicies = Math.floor(len / strength);
        var places = len.toString().length;
        var noOfVacacies = noOfRepeatedIndicies * strength;
        var vacancies = [];


        // get the indicies that will repeat
        while (index < noOfRepeatedIndicies) {
            ranIndex = getRandomInt(min, max, places);

            // avoid duplicates
            if (repeatedIndicies.indexOf(ranIndex) === -1) {
                repeatedIndicies.push(ranIndex);
            } else {
                index -= 1;
            }
            index += 1;
        }

        // create the new collection
        // index = 0;
        // while (index < len) {

        //     index += 1;
        // }


    }

    function generateCollection(len, min, max) {
        // Returns a collection of random
        // numbers <array>. Takes in the
        // length (size) of the collection,
        // min and max values <num>.
        var collection = [];
        var results = [];
        var index = 0;
        var ran = null;
        var places = len.toString().length;

        // process the initial collection
        while (index < len) {
            ran = getRandomInt(min, max, places);
            results.push(ran);
            index += 1;
        }

        // add a filter to the results
        collection = patternFilter(min, max, results, 5);
        // return collection;
        // console.log(results);
    }

    function render(m) {
        // TODO
    }


    function init() {
        generateCollection(model.collectionLength, model.collectionMin, model.collectionMax);
    }
    init();
};
lineProcessorApp(data);