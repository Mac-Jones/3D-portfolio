import {
	mobile,
	backend,
	web,
	javascript,
	typescript,
	html,
	css,
	reactjs,
	redux,
	tailwind,
	nodejs,
	mongodb,
	nextjs,
	git,
	figma,
	docker,
	threejs,
	princess,
	glydell,
	nikeapp,
	promptopia,
	piggame,
	mjstore,
	calculator,
	monster,
	food,
	breakout,
	funrun,
} from '../assets';

export const navLinks = [
	{
		id: 'about',
		title: 'About',
	},
	{
		id: 'projects',
		title: 'Projects',
	},
	{
		id: 'contact',
		title: 'Contact',
	},
];

const services = [
	{
		title: 'Frontend Developer',
		icon: web,
	},
	{
		title: 'React Native Developer',
		icon: mobile,
	},
	{
		title: 'Backend Developer',
		icon: backend,
	},
];

const technologies = [
	{
		name: 'HTML 5',
		icon: html,
	},
	{
		name: 'CSS 3',
		icon: css,
	},
	{
		name: 'JavaScript',
		icon: javascript,
	},
	{
		name: 'TypeScript',
		icon: typescript,
	},
	{
		name: 'React JS',
		icon: reactjs,
	},
	{
		name: 'Redux Toolkit',
		icon: redux,
	},
	{
		name: 'Tailwind CSS',
		icon: tailwind,
	},
	{
		name: 'Node JS',
		icon: nodejs,
	},
	{
		name: 'MongoDB',
		icon: mongodb,
	},

	{
		name: 'Next JS',
		icon: nextjs,
	},
	{
		name: 'Three JS',
		icon: threejs,
	},
	{
		name: 'git',
		icon: git,
	},
	{
		name: 'figma',
		icon: figma,
	},
	{
		name: 'docker',
		icon: docker,
	},
];

const testimonials = [
	{
		testimonial:
			'Frontend development is an art, and Mac Jones is a true artist in this field. His work speaks volumes about his talent and dedication.',
		name: 'Princess Mendoza',
		image: princess,
	},
	{
		testimonial:
			"I've never met a web developer who truly cares about their clients' success like Mac Jones does.",
		name: 'Glydell Soriano',
		image: glydell,
	},
	{
		testimonial:
			'Mac Jones is a top-notch frontend developer! His work is exceptional, and he brings creativity and precision to every project.',
		name: 'Rod Abraham Melano',
		image: 'https://randomuser.me/api/portraits/women/6.jpg',
	},
];

const projects = [
	{
		name: 'Nike App',
		description:
			'A sleek and responsive fitness application built with Tailwind CSS, providing a seamless user experience through beautifully designed UI components.',
		tags: [
			{
				name: 'react',
				color: 'blue-text-gradient',
			},
			{
				name: 'tailwindcss',
				color: 'green-text-gradient',
			},
		],
		image: nikeapp,
		source_code_link: 'https://github.com/Mac-Jones/nike-app-tailwind',
		live: 'https://nike-app-tailwind-css.netlify.app/',
	},

	{
		name: 'Promptopia',
		description:
			'Promptopia is an innovative writing assistant powered by AI, crafted with Tailwind CSS, Next.js, and React.js. It offers an inspiring collection of creative prompts to spark your imagination and enhance your writing skills.',
		tags: [
			{
				name: 'nextjs',
				color: 'blue-text-gradient',
			},
			{
				name: 'tailwindcss',
				color: 'green-text-gradient',
			},
			{
				name: 'react',
				color: 'pink-text-gradient',
			},
		],
		image: promptopia,
		source_code_link: 'https://github.com/Mac-Jones/promptopia',
		live: 'https://promptopia-cygqn8tia-mac-jones.vercel.app/',
	},

	{
		name: 'MJ Store',
		description:
			'An advanced e-commerce platform built using React, TypeScript, Redux, and other cutting-edge technologies. Explore a wide range of products, enjoy a seamless shopping experience, and discover exclusive deals.',
		tags: [
			{
				name: 'redux',
				color: 'blue-text-gradient',
			},
			{
				name: 'typescript',
				color: 'green-text-gradient',
			},
			{
				name: 'react',
				color: 'pink-text-gradient',
			},
		],
		image: mjstore,
		source_code_link: 'https://github.com/Mac-Jones/mac-jones-store',
		live: 'https://mac-jones-store-reactjs-redux.netlify.app',
	},

	{
		name: 'Pig Game',
		description:
			'Pig Game is a fun and engaging dice game implemented with HTML, CSS, and JavaScript. Challenge your friends in this two-player game, where you roll the dice, accumulate points, and strategize to avoid the dreaded pig-out.',
		tags: [
			{
				name: 'html',
				color: 'blue-text-gradient',
			},
			{
				name: 'css',
				color: 'green-text-gradient',
			},
			{
				name: 'javascript',
				color: 'pink-text-gradient',
			},
		],
		image: piggame,
		source_code_link: 'https://github.com/Mac-Jones/pig-game-javascript',
		live: 'https://pig-game-mac-jones.netlify.app/',
	},
	{
		name: 'Calculator App',
		description:
			'A versatile calculator application developed with React.js, providing users with a user-friendly interface for performing basic and advanced mathematical calculations.',
		tags: [
			{
				name: 'sass',
				color: 'blue-text-gradient',
			},
			{
				name: 'react',
				color: 'green-text-gradient',
			},
			{
				name: 'redux',
				color: 'pink-text-gradient',
			},
		],
		image: calculator,
		source_code_link: 'https://github.com/Mac-Jones/react-calculator',
		live: 'https://simple-calculator-reactjs-mj.netlify.app/',
	},

	{
		name: 'Monsters Rolodex',
		description:
			'An interactive web application built with React.js that showcases a rolodex of friendly and spooky monsters. Easily search and filter through a collection of unique monster profiles.',
		tags: [
			{
				name: 'react',
				color: 'blue-text-gradient',
			},
			{
				name: 'sass',
				color: 'green-text-gradient',
			},
			{
				name: 'javascript',
				color: 'pink-text-gradient',
			},
		],
		image: monster,
		source_code_link: 'https://github.com/Mac-Jones/monster-rolodex',
		live: 'https://monsters-rolodex-mj.netlify.app/',
	},
	{
		name: 'Recipe App',
		description:
			'A versatile Recipe App powered by pure JavaScript. Fetch and explore a vast library of mouthwatering recipes from an external API, create shopping lists, and embark on culinary adventures. Utilizes RESTful API for seamless data retrieval and CRUD operations for user convenience.',
		tags: [
			{
				name: 'javascript',
				color: 'orange-text-gradient',
			},
			{
				name: 'restful-api',
				color: 'blue-text-gradient',
			},
			{
				name: 'crud',
				color: 'green-text-gradient',
			},
		],
		image: food,
		source_code_link: 'https://github.com/Mac-Jones/forkify-app',
		live: 'https://recipe-app-macjones.netlify.app',
	},
	{
		name: 'Breakout',
		description:
			'An exciting Breakout game developed using HTML5, CSS, and JavaScript. Test your reflexes and coordination as you control the paddle to break the bricks and score points.',
		tags: [
			{
				name: 'html',
				color: 'orange-text-gradient',
			},
			{
				name: 'css',
				color: 'blue-text-gradient',
			},

			{
				name: 'javascript',
				color: 'green-text-gradient',
			},
		],
		image: breakout,
		source_code_link: 'https://github.com/Mac-Jones/breakout-game-javascript',
		live: 'https://breakout-macjones.netlify.app/',
	},

	{
		name: 'Fun Run Registration',
		description:
			'A user-friendly web application designed for registering participants in fun runs and charity events. Built with modern web technologies to streamline the registration process and enhance the event experience.',
		tags: [
			{
				name: 'react',
				color: 'blue-text-gradient',
			},
			{
				name: 'sass',
				color: 'green-text-gradient',
			},
		],
		image: funrun,
		source_code_link: 'https://github.com/Mac-Jones/fun-run-project.git',
		live: 'https://fun-run-project-mj.netlify.app/',
	},
];

export { services, technologies, testimonials, projects };
