import * as THREE from 'three';

import OrbitControlsFactory from '../plugins/three-orbital-controls';
let OrbitControls = OrbitControlsFactory(THREE);

export class CameraManager {

  private activeCamera: THREE.Camera;
  private orbitControls: any;

  /**
   * Creates an instance of CameraManager.
   * @param {HTMLElement} dom helps define the camera aspect ratio
   * @memberof CameraManager
   */
  constructor(dom: HTMLElement) {
    // aspect ratio must be correct or you see skewed visuals or nothing at all
    this.activeCamera = new THREE.PerspectiveCamera(35, dom.offsetWidth / dom.offsetHeight, .1, 5000);

    this.orbitControls = new OrbitControls(this.activeCamera, dom);


    // TODO: refactor into a scene starter 
    // start camera at angle
    // this.activeCamera.position.copy(new THREE.Vector3(55,55,55));
    // this.activeCamera.lookAt(new THREE.Vector3(0,0,0));
  }

  public getActiveCamera(): THREE.Camera {
    return this.activeCamera;
  }
}