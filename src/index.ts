// import { createDebug } from '@bicycle-codes/debug'
// const debug = createDebug()

// for docuement.querySelector
declare global {
    interface HTMLElementTagNameMap {
        'arrow-prev': ArrowPrev
    }
}

export class ArrowPrev extends HTMLElement {
    constructor () {
        super()

        this.innerHTML = `<button>
            <svg width="11.5" height="20" xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                focusable="false"
            >
                <path
                    d="M10 18.5 1.5 10 10 1.5"
                    stroke="#00265D"
                    stroke-width="3"
                    fill="none"
                    fill-rule="evenodd"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                ></path>
            </svg>
            <span class="visually-hidden">Back</span>
        </button>`
    }
}

if ('customElements' in window) {
    customElements.define('arrow-prev', ArrowPrev)
}
