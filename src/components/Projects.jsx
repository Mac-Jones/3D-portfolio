import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { github } from '../assets';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';

import { GrDeploy } from 'react-icons/gr';

const ProjectCard = ({
	name,
	description,
	tags,
	image,
	source_code_link,
	live,
}) => {
	const openLiveLink = () => window.open(live, '_blank');
	const openSourceCodeLink = () => window.open(source_code_link, '_blank');

	return (
		<>
			<div className='bg-tertiary p-5 rounded-2xl sm:w-[350px] h-full w-full'>
				<div className='relative w-full h-[230px]'>
					<img
						src={image}
						alt='project_image'
						className='w-full h-full object-cover object-left rounded-2xl'
						loading='lazy'
					/>

					<div className='absolute inset-0 flex justify-end gap-2 m-3 card-img_hover'>
						<div
							onClick={openLiveLink}
							className='violet-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
						>
							<GrDeploy className='w-1/2 h-1/2 object-contain ' />
						</div>
						<div
							onClick={openSourceCodeLink}
							className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
						>
							<img
								src={github}
								alt='source code'
								className='w-1/2 h-1/2 object-contain'
							/>
						</div>
					</div>
				</div>

				<div className='mt-5'>
					<h3 className='text-white font-bold text-[24px]'>{name}</h3>
					<p className='mt-2 text-secondary text-[14px]'>{description}</p>
				</div>

				<div className='mt-4 flex flex-wrap gap-2'>
					{tags.map((tag) => (
						<p
							key={`${name}-${tag.name}`}
							className={`text-[14px] ${tag.color}`}
						>
							#{tag.name}
						</p>
					))}
				</div>
			</div>
		</>
	);
};

const Projects = () => {
	return (
		<>
			<motion.div>
				<p className='section-sub-text'>Introduction</p>
				<h2 className='section-head-text'>Overview</h2>
			</motion.div>

			<div className='w-full flex'>
				<motion.p className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'>
					Following projects showcases my skills and experience through
					real-world examples of my work. Each project is briefly described with
					links to code repositories and live demos in it. It reflects my
					ability to solve complex problems, work with different technologies,
					and manage projects effectively.
				</motion.p>
			</div>

			<div className='mt-20 flex flex-wrap gap-7 w-full'>
				{projects.map((project, index) => {
					return (
						<ProjectCard key={`project-${index}`} index={index} {...project} />
					);
				})}
			</div>
		</>
	);
};

export default SectionWrapper(Projects, 'projects');
