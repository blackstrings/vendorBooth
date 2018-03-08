import * as THREE from 'three';

import { VectorUtils } from './VectorUtils';

/**
 * Contains thet shape information such as position and shape vertices for 2d
 * 
 * @export
 * @class Shape
 */
export class Shape {

    /**
     * contains 2d points
     * 
     * @type {THREE.Vector3[]}
     * @memberof Shape
     */
    public points: THREE.Vector3[] = [];

    private mesh2D: THREE.Mesh = null;

    constructor() {

    }

    private create2D(): void {
        if(this.points){
            const vec2s: THREE.Vector2[] = VectorUtils.convertVec3sToVec2s(this.points);
            const shape: THREE.Shape = new THREE.Shape(vec2s);
            const shapeGeo: THREE.ShapeGeometry = new THREE.ShapeGeometry(shape);
            this.mesh2D = new THREE.Mesh(shapeGeo, new THREE.MeshBasicMaterial());
        } else {
            throw new Error('<< Shape >> mesh2D is null');
        }
    }


}