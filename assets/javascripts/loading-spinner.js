
function Spinner() {
	Spinner.element = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
	let c = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
	Spinner.element.setAttribute('width', '100');
	Spinner.element.setAttribute('height', '100');
	c.setAttribute('viewBox', '0 0 100 100');
	c.setAttribute('cx', '50');
	c.setAttribute('cy', '50');
	c.setAttribute('r', '42');
	c.setAttribute('stroke-width', '16');
	c.setAttribute('stroke', '#2196f3');
	c.setAttribute('fill', 'transparent');
	Spinner.element.appendChild(c);
	Spinner.element.style.cssText = 'position:absolute;left:calc(50% - 50px);top:calc(50% - 50px)';

	let spinnerContainer = document.createElement('div');
	spinnerContainer.id = 'spinner_container';
	spinnerContainer.style.position = 'absolute';
	spinnerContainer.style.left = 0;
	spinnerContainer.style.right = 0;
	spinnerContainer.style.top = 0;
	spinnerContainer.style.bottom = 0;
	spinnerContainer.style.zIndex = 100;
	spinnerContainer.style.background = 'black';
	spinnerContainer.style.opacity = 0.7;
	spinnerContainer.appendChild(Spinner.element)
	document.body.appendChild(spinnerContainer)
}
Spinner.id = null;
Spinner.element = null;
Spinner.show = function () {
	const c = 264, m = 15;
	Spinner.element.style.display = 'block';
	document.getElementById('spinner_container').style.display = 'block';
	move1();
	function move1() {
		let i = 0, o = 0;
		move();
		function move() {
			if (i == c) move2();
			else {
				i += 4; o += 8;
				Spinner.element.setAttribute('stroke-dasharray', i + ' ' + (c - i));
				Spinner.element.setAttribute('stroke-dashoffset', o)
				Spinner.id = setTimeout(move, m)
			}
		}
	}
	function move2() {
		let i = c, o = c * 2;
		move();
		function move() {
			if (i == 0) move1();
			else {
				i -= 4; o += 4;
				Spinner.element.setAttribute('stroke-dasharray', i + ' ' + (c - i));
				Spinner.element.setAttribute('stroke-dashoffset', o)
				Spinner.id = setTimeout(move, m)
			}
		}
	}
};
Spinner.hide = function () {
	Spinner.element.style.display = 'none';
	document.getElementById('spinner_container').style.display = 'none';
	if (Spinner.id) {
		clearTimeout(Spinner.id);
		Spinner.id = null
	}
	Spinner.element.setAttribute('stroke-dasharray', '0 264');
	Spinner.element.setAttribute('stroke-dashoffset', '0')
};
