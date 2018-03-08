import * as THREE from 'three';

export class RenderManager {

  private renderer: THREE.WebGLRenderer;
  private dom: HTMLElement;
  public activeScene: THREE.Scene;
  public activeCamera: THREE.Camera;

  private isRendering: boolean = false;

  constructor(dom: HTMLElement, activeScene: THREE.Scene, activeCamera: THREE.Camera) {
    if (dom && activeScene && activeCamera) {

      this.dom = dom;
      this.activeScene = activeScene;
      this.activeCamera = activeCamera;

      this.renderer = new THREE.WebGLRenderer();

      // TODO: figure out the size of dom
      // this.renderer.setSize( 500, 500);
      this.renderer.setSize(this.dom.offsetWidth, this.dom.offsetHeight);

      this.renderer.setClearColor(0xcccccc, 1);
      dom.appendChild(this.renderer.domElement);

      // kick off render
      this.render();

    } else {
      throw new Error('<< RenderManager >> dom, activeScene, or activeCamera is null');
    }
  }

  public setActiveScene(scene: THREE.Scene): void {
    this.activeScene = scene;
  }

  public setActiveCamera(cam: THREE.Camera): void {
    this.activeCamera = cam;
  }

  /**
   * TODO: put checks around to stop and start renderer properly
   * 
   * @memberof RenderManager
   */
  public render(): void {

    requestAnimationFrame(() => this.render); // it is important this comes first before the renderer
    this.renderer.render(this.activeScene, this.activeCamera);
  };
}