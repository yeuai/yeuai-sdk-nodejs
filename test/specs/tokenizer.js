const test = require('tape')
const log = require('debug')('yeuai:tokenizer')
const yeuai = require('../../index')()

/**
 * test api tách từ
 */
test('yeuai.word_tokenize(text)', function (t) {
    t.plan(1)
    // call yeu api
    yeuai.word_tokenize('Ngoài thương hiệu, giá cả, thời điểm mua hàng cũng là một yếu tố để có được sản phẩm tốt với giá rẻ.')
        .then((result) => {
            log('result:', result)
            t.deepEqual(result, {
                "response": [
                    "Ngoài",
                    "thương hiệu",
                    ",",
                    "giá cả",
                    ",",
                    "thời điểm",
                    "mua hàng",
                    "cũng",
                    "là",
                    "một",
                    "yếu tố",
                    "để",
                    "có",
                    "được",
                    "sản phẩm",
                    "tốt",
                    "với",
                    "giá",
                    "rẻ",
                    "."
                ]
            })
        })
})