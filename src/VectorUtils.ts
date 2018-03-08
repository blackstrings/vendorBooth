import * as THREE from 'three';

export class VectorUtils {
  
  public static convertVec3sToVec2s(vec3s: THREE.Vector3[]): THREE.Vector2[]{
    let vec2s: THREE.Vector2[] = null;

    if(vec3s){
      vec2s = [];
      vec3s.forEach((v) => {
        vec2s.push(new THREE.Vector2(v.x, v.y));
      });
    }

    return vec2s;
  }
}