const test = require('tape')
const log = require('debug')('yeuai:parser')
const yeuai = require('../../index')()

/**
 * test api tách từ
 */
test('yeuai.parse(text)', function (t) {
    t.plan(1)
    // call yeu api
    yeuai.parse('Ngoài thương hiệu, giá cả, thời điểm mua hàng cũng là một yếu tố để có được sản phẩm tốt với giá rẻ.')
        .then((result) => {
            log('result:', result)
            t.deepEqual(result, {
                "success": true,
                "data": {
                    nouns: [
                        'thương hiệu',
                        'giá cả',
                        'thời điểm',
                        'yếu tố',
                        'sản phẩm',
                        'giá'
                    ],
                    pronouns: [],
                    verbs: ['là', 'có', 'mua hàng'],
                    adverbs: ['cũng', 'được'],
                    adjectives: ['tốt', 'rẻ'],
                    entities: [],
                    names: []

                }
            })
        })
})