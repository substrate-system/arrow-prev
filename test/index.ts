import { test } from '@bicycle-codes/tapzero'
import { waitFor } from '@bicycle-codes/dom'
import '../src/index.js'

test('arrow-prev', async t => {
    document.body.innerHTML += `
        <arrow-prev class="test">
        </arrow-prev>
    `

    const el = await waitFor('arrow-prev')

    t.ok(el, 'should find the element')
})
