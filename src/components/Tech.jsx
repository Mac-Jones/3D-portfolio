import { BallCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';

const Tech = () => {
	return (
		<div className='flex flex-row flex-wrap justify-center gap-9'>
			{technologies.map((technology) => (
				<div className='w-[125px] h-[125px] ' key={technology.name}>
					<BallCanvas icon={technology.icon} />
				</div>
			))}
		</div>
	);
};

export default SectionWrapper(Tech, '');
