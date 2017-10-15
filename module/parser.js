const _ = require('lodash')

/**
 * Text parser for yeuai
 */

/**
 * filter data
 * @param {*} data text data with extracted tags
 * @param {*} tags tags need to extract
 */
function filterData(data, tags) {
    if (!data || !tags) return []

    return data.filter((tokens) => {
        let token = tokens[1]
        return tags.indexOf(token) >= 0
    })
}

/**
 * Map data after filter
 * @param {*} data 
 * @param {*} tags 
 */
function filterAndMapData(data, tags) {
    let result = filterData(data, tags)
    return result.map((token) => token[0])
}

class Parser {

    constructor() {

    }

    /**
     * match Nouns
     */
    matchNouns(words) {
        return filterAndMapData(words, ['N'])
    }

    matchVerbs(words) {
        return filterAndMapData(words, ['V'])
    }

    matchAdverbs(words) {
        return filterAndMapData(words, ['R'])
    }

    matchAdjectives(words) {
        return filterAndMapData(words, ['A'])
    }

    matchPronouns(words) {
        return filterAndMapData(words, ['Np'])
    }

    /**
     * generate entities from IOB tags
     *
     * @param tags
     *      each element is an array [token, tag]
     *      each tag is in IOB format: B-NP, I-NP, B-VP, I-VP, O...
     * @returns {Array|*}
     */
    matchEntities(words) {
        let tags = _.chain(words)
            .map((tag) => [tag])
            .reduce(this.mergeIOBTags)
            .map(this.removeIOBPrefix)
            .value()
        // parse entities
        let entities = this.generateEntitiesFromTags(tags).filter((entity) => entity[1] != 'O')
        return {
            persons: entities.filter((entity) => entity[1] === 'PER'),
            organizations: entities.filter((entity) => entity[1] === 'ORG'),
            locations: entities.filter((entity) => entity[1] === 'LOC'),
        }
    }

    generateEntitiesFromTags(tags) {
        let start = 0;
        return _.map(tags, function (tag, i) {
            var entity = [];
            entity[0] = "T" + (i + 1);
            entity[1] = tag[1];
            entity[2] = [
                [start, start + tag[0].length]
            ];
            entity[3] = tag[0];
            start += tag[0].length + 1;
            return entity;
        });
    }

    mergeIOBTags(x, y) {
        var li = x.length - 1; // last index
        var ly = _.last(y); // last element of y
        if (ly[1][0] == "I") {
            x[li][0] = x[li][0] + " " + ly[0];
        } else {
            x.push(ly);
        }
        return x;
    }

    removeIOBPrefix(tag) {
        if (tag[1] != "O") {
            tag[1] = tag[1].slice(2);
        }
        return tag;
    }

}

/**
 * Exports module
 * @public
 */
module.exports = new Parser();