const filp1 = document.getElementById('filp1')
const filp2 = document.getElementById('filp2')
const filp3 = document.getElementById('filp3')
const ro = document.getElementById('ro')
const Button_filp = document.getElementById('Button_filp')
var x = document.documentElement.clientWidth

function reply_click(clicked_id) { //เปลี่ยนสี่ของกล่อง
  const x = document.getElementById(clicked_id)
  if (x.style.backgroundColor == 'white') {
    x.style.backgroundColor = '#000000'
    x.style.boxShadow = '0 0 10px #ffffff, 0 0 21px #D15BFC'
  } else {
    x.style.backgroundColor = 'white'
    x.style.boxShadow = '0 0 10px #D15BFC, 0 0 21px #ffffff'
  }
}

function filp_box() { //filp กล่องทั้งหมด
  random = Math.floor(Math.random() * 2) + 1;
  if (ro.style.transform == 'rotate(0deg)') {
    if (random == 1) {
      ro.style.transform = 'rotate(-180deg)'
      Button_filp.style.transform = 'rotate(180deg)'
    } else {
      ro.style.transform = 'rotate(180deg)'
      Button_filp.style.transform = 'rotate(-180deg)'
    }
    ro.style.top = '860px'
    if (x < 1700) {
      ro.style.top = '700px'
    }
  } else {
    Button_filp.style.transform = 'rotate(0deg)'
    ro.style.transform = 'rotate(0deg)'
    ro.style.top = ''
  }
}

const oppositeOrientation = screen.orientation.type.startsWith("portrait")
  ? "landscape"
  : "portrait";
screen.orientation.lock(oppositeOrientation)