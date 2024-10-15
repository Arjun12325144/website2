var tl =  gsap.timeline()
tl.from("nav h1, nav h4, nav button",{
    y:-10,
    duration:.5,
    delay:.5,
    opacity:0,
    stagger:.15
}) 
tl.from(".center_part1 h1",{
    x:-10,
    opacity:0,
    duration:.5
})
tl.from(".center_part1 p",{
    x:-10,
    opacity:0,
    duration:.4
})

tl.from(".center_part1 button",{
    opacity:0,
    duration:.4
})
tl.from(".center_part2 img",{
    opacity:0,
    x:20,
    duration:.4
},"-=.5")

tl.from(".section1bottom img",{
    opacity:0,
    y:30,
    stagger:.15,
    duration:.6
})


var tl2 = gsap.timeline({
    scrollTrigger:{
        trigger:".page2",
        scroller:"body",
        // markers:true,
        start:"top 50%",
        end:"top 0",
        scrub:2
        
    }
}) 
tl2.from(".services",{
    y:30,
    opacity:0,
    duration:.5,
     
})


tl2.from(".elem.line1.left",{
    x:-300,
    opacity:0,
    duration:1
},"anim")
tl2.from(".elem.line1.right",{
    x:300,
    opacity:0,
    duration:1
},"anim")

tl2.from(".elem.line2.left",{
    x:-300,
    opacity:0,
    duration:1
},"ani")
tl2.from(".elem.line2.right",{
    x:300,
    opacity:0,
    duration:1
},"ani")

