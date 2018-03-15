import * as THREE from 'three';

import { Grid } from '../UI/Grid';

export class SceneManager {

  private activeScene: THREE.Scene = null;
  private grid: Grid = null;

  constructor() {
    this.activeScene = new THREE.Scene();
    this.showGrid();
    this.showAxisHelper();
    this.testScene();
  }

  public showGrid(): void {
    if (this.activeScene) {
      if(!this.grid){
        this.grid = new Grid('top', 64);
        this.activeScene.add(this.grid.mesh);
      }
      this.grid.mesh.visible = true;
    } else {
      console.warn('Grid failed to show, activeScene is null');
    }
  }

  public hideGrid(): void {
    if(this.activeScene && this.grid){
      this.activeScene.remove(this.grid.mesh);
    }
  }

  public showAxisHelper(): void {
    const axis = new THREE.AxesHelper();
    this.activeScene.add(axis);
  }

  private testScene(): void {
    const sGeo: THREE.SphereGeometry = new THREE.SphereGeometry(5);
    const cubeGeo: THREE.CubeGeometry = new THREE.CubeGeometry(12, 2, 12);
    const mat: THREE.MeshBasicMaterial = new THREE.MeshBasicMaterial({ transparent: true, opacity: .6 });
    const m: THREE.Mesh = new THREE.Mesh(cubeGeo, mat);
    this.activeScene.add(m);
  }

  public getActiveScene(): THREE.Scene {
    return this.activeScene;
  }

}