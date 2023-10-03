import { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload } from '@react-three/drei';

import { useMediaQuery } from 'react-responsive';

import CanvasLoader from '../Loader';

import Computer from '../canva/Computer';

const ComputerCanvas = () => {
	const [mobileView, setMobileView] = useState(false);

	const isMobile = useMediaQuery({ query: '(max-width: 500px)' });
	useEffect(() => {
		setMobileView(isMobile);
	}, [isMobile]);

	return (
		<Canvas camera={{ position: [21, 3, 5], fov: 20 }}>
			<Suspense fallback={<CanvasLoader />}>
				<OrbitControls
					enableZoom={false}
					maxPolarAngle={Math.PI / 2}
					minPolarAngle={Math.PI / 2}
				/>
				<Computer isMobile={mobileView} />
			</Suspense>

			{/* <Preload all /> */}
		</Canvas>
	);
};

export default ComputerCanvas;
