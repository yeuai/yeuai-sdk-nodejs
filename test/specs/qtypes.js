const test = require('tape')
const log = require('debug')('yeuai:qtypes')
const yeuai = require('../../index')()

/**
 * test api tách từ
 */
test('yeuai.classify_qtype(text)', function (t) {
    t.plan(1)
    // call yeu api
    yeuai.classify_qtype('khi nào chương trình diễn ra?')
        .then((result) => {
            log('result:', result)
            t.deepEqual(result, {
                "success": true,
                "response": {
                    "classes": [{
                        "confidence": "0.948622",
                        "label": "WHEN"
                    }],
                    "text": "khi nào chương trình diễn ra?"
                }
            })
        })
})