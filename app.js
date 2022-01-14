console.log(document.cookie)

let version = 'v1.5.2'

let circle = ['Epic rollercoaster', 'This website was made for one of my favorite servers. PiglinBox', 'Site programmed and designed by amukh1#9613', 'Minecraft is cool', `This is version ${version}`]

console.log(version)
setInterval(credits, 4000);

function credits() {
    console.log('switching')
    // if(document.getElementById('eee').innerHTML == 'Parkour is a high speed intense game that requires a lot of energy and agility.'){

    //     document.getElementById('eee').innerHTML = 'Site programmed and designed by amukh1.'
    //     //    document.getElementById('eee').innerHTML = 'amu'
    // }else if(document.getElementById('eee').innerHTML == 'Site programmed and designed by amukh1.'){

    //     document.getElementById('eee').innerHTML = 'Parkour is a high speed intense game that requires a lot of energy and agility.'
        
    //     // document.getElementById('eee').innerHTML = 'park'
    // }
    let current = circle.indexOf(document.getElementById('eee').innerHTML)
    if(current == circle.length - 1){
        current = -1
    }
    document.getElementById('eee').innerHTML = circle[current + 1]
}

function useless(e) {
console.log(e)
let target = e.innerHTML
window.location.href = `https://parkour.amukh1.dev/${target}`
}

function byebye() {
    document.getElementById('move').style.top = '100px'
    document.getElementById('move').style.opacity = '0'
    display = 'none'

        window.scrollBy(0, 6000);
}

function submit() {
    const whurl ="https://discord.com/api/webhooks/931543012931158087/qsRoVVJIGEq61BRwXIWY_f_mLCrgqu5Bn-MmEaCGauRuk6zyFNeTRyC0mdSg8sA9EgOs"
    let x = document.getElementById('price').value - 0
    let y = document.getElementById('rides').value - 0
    let date = new Date()
    const msg = {
        "content": `"${document.getElementById('name').value}" ordered ${document.getElementById('rides').value} rides. Mc: ${document.getElementById('mc').value}; Discord: ${document.getElementById('dc').value}; Price (per ride): ${document.getElementById('price').value}; Total: ${x * y} @everyone`,
        "username": "Bookings..",
        "avatar_url": "https://i.imgur.com/oBPXx0D.png",
        "embeds": [{
            "title": "New rollercoaster booking!",
            "description": "Rolling",
            "color": 1127128,
            "fields": [
                {
                  "name": "Name",
                  "value":  `${document.getElementById('name').value}`,
                //   "inline": true
                },
                {
                  "name": "Mc name",
                  "value": `${document.getElementById('mc').value}`,
                
                },
                {
                  "name": "Discord",
                  "value": `${document.getElementById('dc').value}`,
                },
                {
                  "name": "Rides",
                  "value": `${document.getElementById('rides').value} rides`,
                },
                {
                    "name": "Price",
                    "value": `${document.getElementById('price').value} oxeyes`,
                  },
                  {
                    "name": "Total Revenue",
                    "value": `${x * y} total oxeyes`,
                  }
              ],
              // fields end
              "footer": {
                "text": "Developed by amukh1",
                "icon_url": "https://i.imgur.com/fKL31aD.jpg"
              },
                // footer end
                "timestamp": date
          }]
    }
    
    fetch(whurl + "?wait=true", 
    {"method":"POST", 
    "headers": {"content-type": "application/json"},
    "body": JSON.stringify(msg)}).then((res)=>{
        if(res.status == 404 || '404'){
          console.log('THERE HAS BEEN A MASSIVE ERROR...')
          alert('There has been an error, try again another time or contact the developer.')
          const whurls ="https://discord.com/api/webhooks/931543913079115866/5PrN2tnaYmO-FTEh9xDnfRSyv_zoueZrTUfYYz1-WI8Gl_N2pYSUukcU3w8Cpzbu99jY"
          const msgg = "@amukh1 THERE HAS BEEN A MASSIVE ERROR... WEBHOOK DOWN...."
          fetch(whurls + "?wait=true", 
          {"method":"POST", 
          "headers": {"content-type": "application/json"},
          "body": JSON.stringify(msgg)})
        }
    });
}

function upp() {
    document.getElementById('hk').style.paddingLeft = '450px'
    document.getElementById('hk').style.paddingRight = '450px'
}

// document.getElementById('f').style.fontSize = '15rem;'