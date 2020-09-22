import init, { solve } from './advent_of_code_wasm.js';

async function run() {
	await init();

	const year_element = document.getElementById('year');
	const day_element = document.getElementById('day');
	const part_element = document.getElementById('part');
	const input_element = document.getElementById('input');
	const output_element = document.getElementById('output');

	[day_element, part_element, input_element].forEach(element => element.addEventListener('input', function() {
	  output_element.textContent = '';
	  output_element.classList.remove('blink', 'error');
	}, false));

	document.getElementById("run_button").addEventListener("click", function() {
	   const year = year_element.options[year_element.selectedIndex].value;
	   const day = day_element.options[day_element.selectedIndex].value;
	   const part = part_element.options[part_element.selectedIndex].value;
	   const input = input_element.value;

	   let message;
	   try {
		  message = solve(year, day, part, input);
		  output_element.classList.remove('error');
	   } catch (e) {
		  console.log(e);
		  message = e.message;
		  output_element.classList.add('error');
	   }
	   output_element.textContent = message;
	   output_element.scrollIntoView();
	   output_element.classList.add('blink');
	});
}

run();