export default class WinnerForm {
    constructor() {
        this.$element = document.querySelector("#winner-area");
        this.#renderer();
        this.#mounted();
    }

    #renderer() {
        this.$element.innerHTML = this.#getWinnerTemplate();
    }

    #mounted() {
        document.querySelector("#reset-button").addEventListener("click", (event) => this.#onReset());
    }

    #onReset() {

    }

    #getWinnerTemplate() {
        return `
        <div>
          <h2>🏆 최종 우승자: ${this.winners.map(winner).join(", ")} 🏆</h2>
          <div class="d-flex justify-center">
            <button id="reset-button" type="button" class="btn btn-cyan">다시 시작하기</button>
          </div>
        </div>`;
    }
}