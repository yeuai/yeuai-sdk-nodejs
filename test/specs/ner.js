const test = require('tape')
const log = require('debug')('yeuai:ner')
const yeuai = require('../../index')()

/**
 * test api nhận dạng thực thể có tên
 */
test('yeuai.ner(text)', function (t) {
    t.plan(1)
    // call yeu api
    yeuai.ner('Bộ Công Thương xóa một tổng cục, giảm nhiều đầu mối')
        .then((result) => {
            log('result:', result)
            t.deepEqual(result, {
                "response": [
                    [
                        "Bộ",
                        "N",
                        "B-NP",
                        "B-ORG"
                    ],
                    [
                        "Công Thương",
                        "Np",
                        "I-NP",
                        "I-ORG"
                    ],
                    [
                        "xóa",
                        "V",
                        "B-VP",
                        "O"
                    ],
                    [
                        "một",
                        "M",
                        "B-NP",
                        "O"
                    ],
                    [
                        "tổng cục",
                        "N",
                        "B-NP",
                        "O"
                    ],
                    [
                        ",",
                        "CH",
                        "O",
                        "O"
                    ],
                    [
                        "giảm",
                        "V",
                        "B-VP",
                        "O"
                    ],
                    [
                        "nhiều",
                        "A",
                        "B-AP",
                        "O"
                    ],
                    [
                        "đầu mối",
                        "N",
                        "B-NP",
                        "O"
                    ]
                ]
            })
        })
})