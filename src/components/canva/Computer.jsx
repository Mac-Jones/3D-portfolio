import { Float } from '@react-three/drei';

import { useGLTF } from '@react-three/drei';

const Computer = ({ isMobile }) => {
	const computer = useGLTF('./desktop_pc/scene.gltf');
	console.log('computer', computer);

	return (
		<Float speed={1} rotationIntensity={0.1} floatIntensity={0}>
			<mesh>
				<hemisphereLight intensity={1} groundColor='black' />
				<spotLight
					position={[-20, 50, 10]}
					angle={0.12}
					penumbra={1}
					intensity={1}
					castShadow
					shadow-mapSize={1024}
				/>
				<pointLight intensity={1} />
				<primitive
					object={computer.scene}
					scale={isMobile ? 0.7 : 0.75}
					position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
					rotation={[-0.01, -0.2, -0.1]}
				/>
			</mesh>
		</Float>
	);
};

export default Computer;
