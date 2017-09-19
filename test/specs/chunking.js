const test = require('tape')
const log = require('debug')('yeuai:chunking')
const yeuai = require('../../index')()

/**
 * test api dán nhãn từ loại
 */
test('yeuai.chunk(text)', function (t) {
    t.plan(1)
    // call yeu api
    yeuai.chunk('Ngoài thương hiệu, giá cả, thời điểm mua hàng cũng là một yếu tố để có được sản phẩm tốt với giá rẻ.')
        .then((result) => {
            log('result:', result)
            t.deepEqual(result, {
                "response": [
                    [
                        "Ngoài",
                        "E",
                        "B-PP"
                    ],
                    [
                        "thương hiệu",
                        "N",
                        "B-NP"
                    ],
                    [
                        ",",
                        "CH",
                        "I-NP"
                    ],
                    [
                        "giá cả",
                        "N",
                        "I-NP"
                    ],
                    [
                        ",",
                        "CH",
                        "I-NP"
                    ],
                    [
                        "thời điểm",
                        "N",
                        "I-NP"
                    ],
                    [
                        "mua hàng",
                        "N",
                        "I-NP"
                    ],
                    [
                        "cũng",
                        "R",
                        "B-VP"
                    ],
                    [
                        "là",
                        "V",
                        "I-VP"
                    ],
                    [
                        "một",
                        "M",
                        "B-NP"
                    ],
                    [
                        "yếu tố",
                        "N",
                        "I-NP"
                    ],
                    [
                        "để",
                        "E",
                        "B-PP"
                    ],
                    [
                        "có",
                        "V",
                        "B-VP"
                    ],
                    [
                        "được",
                        "R",
                        "I-VP"
                    ],
                    [
                        "sản phẩm",
                        "N",
                        "B-NP"
                    ],
                    [
                        "tốt",
                        "A",
                        "I-NP"
                    ],
                    [
                        "với",
                        "E",
                        "B-PP"
                    ],
                    [
                        "giá",
                        "N",
                        "B-NP"
                    ],
                    [
                        "rẻ",
                        "A",
                        "I-NP"
                    ],
                    [
                        ".",
                        "CH",
                        "O"
                    ]
                ]
            })
        })
})