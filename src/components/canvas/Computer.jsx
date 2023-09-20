import { useMediaQuery } from 'react-responsive';
import { useGLTF } from '@react-three/drei';

const Computer = () => {
	const isMobile = useMediaQuery({ query: '(max-width: 500px)' });
	const computer = useGLTF('./desktop_pc/scene.gltf');

	console.log(isMobile);

	return (
		<mesh>
			<hemisphereLight intensity={0.15} groundColor='black' />
			<spotLight
				position={[-20, 50, 10]}
				angle={0.12}
				penumbra={1}
				intensity={1}
				castShadow
				shadow-mapSize={1024}
			/>
			<pointLight intensity={1} />
			{isMobile ? (
				<primitive
					object={computer.scene}
					scale={0.7}
					position={[0, -3, -2.2]}
					rotation={[-0.01, -0.2, -0.1]}
				/>
			) : (
				<primitive
					object={computer.scene}
					scale={0.75}
					position={[0, -3.25, -1.5]}
					rotation={[-0.01, -0.2, -0.1]}
				/>
			)}
		</mesh>
	);
};

export default Computer;
