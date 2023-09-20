import { motion } from 'framer-motion';

import { BallCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';
import { textVariant } from '../utils/motion';

const Tech = () => {
	return (
		<div>
			<motion.div variants={textVariant()}>
				<h2 className='section-head-text'>Skills</h2>
			</motion.div>

			<div className='flex flex-row flex-wrap justify-center gap-9 mt-10'>
				{technologies.map((technology) => (
					<div className='w-[125px] h-[125px]' key={technology.name}>
						<BallCanvas icon={technology.icon} />
					</div>
				))}
			</div>
		</div>
	);
};

export default SectionWrapper(Tech, '');
