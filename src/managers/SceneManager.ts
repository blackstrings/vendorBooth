import * as THREE from 'three';

export class SceneManager {

  private activeScene: THREE.Scene = null;

  constructor(){
    this.activeScene = new THREE.Scene();
    this.showGrid();
    this.showAxisHelper();
  }

  public showGrid(): void {
    if(this.activeScene){
      const grid: THREE.GridHelper = new THREE.GridHelper(30, 5);
      this.activeScene.add(grid);
    }
  }

  public showAxisHelper(): void {
    const axis = new THREE.AxesHelper();
    this.activeScene.add(axis);
  }

  private testScene(): void {
    const sGeo: THREE.SphereGeometry = new THREE.SphereGeometry(5);
    const m: THREE.Mesh = new THREE.Mesh(sGeo);
    this.activeScene.add(m);
  }

  public getActiveScene(): THREE.Scene {
    return this.activeScene;
  }

}