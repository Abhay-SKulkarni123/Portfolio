import { useEffect, useRef } from "react";
import * as THREE from "three";

function Background() {
    const mountRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = mountRef.current;

        if (!container) return;

        const width = container.clientWidth;
        const height = container.clientHeight;

        const scene = new THREE.Scene();

        const camera = new THREE.PerspectiveCamera(
            60,
            width / height,
            0.1,
            1000
        );

        camera.position.z = 20;

        const renderer = new THREE.WebGLRenderer({
            alpha: true,
            antialias: true,
        });

        renderer.setSize(width, height);

        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

        container.appendChild(renderer.domElement);

        /* Lights */

        const ambient = new THREE.AmbientLight(0xffffff, 0.9);
        scene.add(ambient);

        const point = new THREE.PointLight(0x3b82f6, 20, 80);
        point.position.set(0, 0, 0);
        scene.add(point);

        const softAccent = new THREE.SpotLight(0x8b5cf6, 8);

        softAccent.position.set(20, 20, 15);

        scene.add(softAccent);

        /* Core */

        const group = new THREE.Group();

        scene.add(group);

        const sphere = new THREE.Mesh(
            new THREE.SphereGeometry(1.55, 64, 64),
            new THREE.MeshPhongMaterial({
                color: 0x4d8eff,
                emissive: 0x4d8eff,
                emissiveIntensity: 3,
                opacity: 0.72,
                transparent: true,
                shininess: 100,
            })
        );

        group.add(sphere);

        /* Wireframe */

        const lattice = new THREE.Mesh(
            new THREE.IcosahedronGeometry(3.0, 3),
            new THREE.MeshPhongMaterial({
                color: 0xb794f6,
                opacity: 0.55,
                wireframe: true,
                transparent: true,
                shininess: 100,
                emissive: 0x8b5cf6,
                emissiveIntensity: 0.4,
            })
        );

        group.add(lattice);

        const points = new THREE.Points(
            new THREE.IcosahedronGeometry(3.0, 3),
            new THREE.PointsMaterial({
                color: 0x52e6ff,
                opacity: 0.9,
                size: 0.04,
                transparent: true,
            })
        );

        group.add(points);

        /* Floating Cubes */

        const fragments: THREE.Mesh[] = [];

        for (let i = 0; i < 40; i++) {
            const cube = new THREE.Mesh(
                new THREE.BoxGeometry(0.12, 0.12, 0.12),
                new THREE.MeshPhongMaterial({
                    color: 0x52e6ff,
                    opacity: 0.9,
                    transparent: true,
                    shininess: 100,
                })
            );

            const radius = 7 + Math.random() * 7;

            const angle = Math.random() * Math.PI * 2;

            const phi = Math.acos(2 * Math.random() - 1);

            cube.position.set(
                radius * Math.sin(phi) * Math.cos(angle),
                radius * Math.sin(phi) * Math.sin(angle),
                radius * Math.cos(phi)
            );

            cube.userData = {
                speed: 0.0004 + Math.random() * 0.001,
                axis: new THREE.Vector3(
                    Math.random(),
                    Math.random(),
                    Math.random()
                ).normalize(),
                orbitSpeed: 0.0008 + Math.random() * 0.0015,
            };

            fragments.push(cube);

            group.add(cube);
        }

        const particleCount = 500;

        const geometry = new THREE.BufferGeometry();

        const positions = new Float32Array(particleCount * 3);

        for (let i = 0; i < particleCount * 3; i++) {
            positions[i] = (Math.random() - 0.5) * 45;
        }

        geometry.setAttribute(
            "position",
            new THREE.BufferAttribute(positions, 3)
        );

        const starField = new THREE.Points(
            geometry,
            new THREE.PointsMaterial({
                color: 0xb794f6,
                opacity: 0.55,
                size: 0.012,
                transparent: true,
                blending: THREE.AdditiveBlending,
            })
        );

        scene.add(starField);

        const animate = () => {
            requestAnimationFrame(animate);

            group.rotation.y += 0.0006;

            lattice.rotation.y -= 0.0003;

            sphere.scale.setScalar(
                1 + Math.sin(Date.now() * 0.0008) * 0.02
            );

            targetX += (mouseX * 0.1 - targetX) * 0.03;
            targetY += (mouseY * 0.1 - targetY) * 0.03;

            group.rotation.x += targetY;
            group.rotation.y += targetX;

            points.rotation.y -= 0.0003;

            fragments.forEach((frag) => {
                frag.rotateOnAxis(frag.userData.axis, frag.userData.speed);

                frag.position.applyAxisAngle(
                    new THREE.Vector3(0, 1, 0),
                    frag.userData.orbitSpeed
                );
            });

            starField.rotation.y += 0.00008;

            renderer.render(scene, camera);
        };

        let mouseX = 0;
        let mouseY = 0;

        let targetX = 0;
        let targetY = 0;

        window.addEventListener("mousemove", (e) => {
            mouseX = e.clientX / window.innerWidth - 0.5;
            mouseY = e.clientY / window.innerHeight - 0.5;
        });

        animate();

        const resize = () => {
            const w = container.clientWidth;
            const h = container.clientHeight;

            camera.aspect = w / h;

            camera.updateProjectionMatrix();

            renderer.setSize(w, h);
        };

        window.addEventListener("resize", resize);

        return () => {
            window.removeEventListener("resize", resize);

            renderer.dispose();

            container.removeChild(renderer.domElement);
        };
    }, []);

    return (
        <>
            <div
                className="fixed inset-0 -z-20"
                style={{
                    background:
                        "linear-gradient(180deg,#17182f 0%,#23204f 55%,#17182f 100%)",
                }}
            />

            <div className="fixed inset-0 -z-10">
                <div
                    ref={mountRef}
                    className="h-full w-full"
                />
            </div>
        </>
    );
}

export default Background;