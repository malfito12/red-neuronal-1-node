$(()=>{
    $('#pag2-p1').on('click',()=>{
        var getPocentanje=20
        getPocentanje=getPocentanje + parseInt(localStorage.getItem('porcentaje'))

        localStorage.setItem('porcentaje',getPocentanje)
    })
    $('#pag2-p2').on('click',()=>{
        localStorage.setItem('porcentaje',23)
    })
    $('#pag2-p3').on('click',()=>{
        localStorage.setItem('porcentaje',40)
    })
    $('#pag2-p4').on('click',()=>{
        localStorage.setItem('porcentaje',33)
    })
})