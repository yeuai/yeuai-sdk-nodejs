/**
 * Text parser for yeuai
 */

/**
 * filter data
 * @param {*} data 
 * @param {*} tags 
 */
function filterData(data, tags) {
    return [].concat(data).filter((token) => {
        return [].concat(tags).indexOf(token[1]) >=0
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

    matchEntities(words) {
        return filterAndMapData(words, ['NR', 'NS', 'NT'])
    }

    matchNames(words) {
        return filterAndMapData(words, ['NR'])
    }

}

/**
 * Exports module
 * @public
 */
module.exports = new Parser();
