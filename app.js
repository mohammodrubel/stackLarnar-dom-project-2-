window.onload = ()=>{
    main()
}

const main = ()=>{
    const root = document.getElementById('root')
    const btn = document.getElementById('button')
    const output = document.getElementById('output')

        btn.addEventListener('click',function(){
            const colorsBG = HEXGenarator()
            root.style.backgroundColor=colorsBG
            output.value = colorsBG
        })
}


function HEXGenarator (){
    const red = Math.floor(Math.random() * 255)
    const green = Math.floor(Math.random() * 255)
    const blue = Math.floor(Math.random() * 255)

    return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`
}

