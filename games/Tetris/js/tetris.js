'use strict'

export default class tetris{
    constructor()
    {
        this.w = 10 // 게임판의 가로
        this.h = 20 // 게임판의 세로

    this.stage = document.querySelector('.stage')
    }
    init()
    {
        this.makeplate()
    }

    makeplate()
    {
        this.ground = []
        for(let i = 0; i <this.h; i++)
        {
            this.ground.push('<tr>')
            for(let k = 0; k<this.w; k++)
            {
                this.ground.push('<td></td>')
            }
            this.ground.push('</tr>')
        }
        this.stage.innerHTML = this.ground.join('')
    }
}

