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

  public static convertArrayToVec3s(points: Array<ArrayLike<number>>){
    let vec3s: THREE.Vector3[] = null;
    if(points){
      vec3s = [];
      points.forEach((point) => {
        vec3s.push(new THREE.Vector3(point[0], point[1], point[2]));
      });
    } else {
      throw new Error('cannot convert array to vector3s, vec3s is null');
    }
    return vec3s;
  }
}