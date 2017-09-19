const test = require('tape')
const log = require('debug')('yeuai:pos-tagger')
const yeuai = require('../../index')()

/**
 * test api dán nhãn từ loại
 */
test('yeuai.pos_tag(text)', function (t) {
    t.plan(1)
    // call yeu api
    yeuai.pos_tag('Ngoài thương hiệu, giá cả, thời điểm mua hàng cũng là một yếu tố để có được sản phẩm tốt với giá rẻ.')
        .then((result) => {
            log('result:', result)
            t.deepEqual(result, {
                "response": [
                    [
                        "Ngoài",
                        "E"
                    ],
                    [
                        "thương hiệu",
                        "N"
                    ],
                    [
                        ",",
                        "CH"
                    ],
                    [
                        "giá cả",
                        "N"
                    ],
                    [
                        ",",
                        "CH"
                    ],
                    [
                        "thời điểm",
                        "N"
                    ],
                    [
                        "mua hàng",
                        "N"
                    ],
                    [
                        "cũng",
                        "R"
                    ],
                    [
                        "là",
                        "V"
                    ],
                    [
                        "một",
                        "M"
                    ],
                    [
                        "yếu tố",
                        "N"
                    ],
                    [
                        "để",
                        "E"
                    ],
                    [
                        "có",
                        "V"
                    ],
                    [
                        "được",
                        "R"
                    ],
                    [
                        "sản phẩm",
                        "N"
                    ],
                    [
                        "tốt",
                        "A"
                    ],
                    [
                        "với",
                        "E"
                    ],
                    [
                        "giá",
                        "N"
                    ],
                    [
                        "rẻ",
                        "A"
                    ],
                    [
                        ".",
                        "CH"
                    ]
                ]
            })
        })
})