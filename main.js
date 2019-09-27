const canvas = document.getElementsByTagName ('canvas') [0]

const ctx = canvas.getContext('2d')

ctx.imageSmoothingEnabled = false


const draw = () => {
	
}


onload = onresize = () => {
	canvas.height = innerHeight
	canvas.width = innerWidth

	ctx.fillStyle = '#000'
	let centerX = innerWidth / 2
	let centerY = innerHeight / 2
	let count = 0
	ctx.fillRect (0, 0, innerWidth, innerHeight / 2)

	ctx.fillStyle = '#000'
	do {
		ctx.fillRect (
			(centerX - count / centerY * centerX) | 0,
			(count + centerY) | 0,
			(count / centerY * innerWidth) | 0,
			1
		)
	}
	while (++ count < centerY)
}