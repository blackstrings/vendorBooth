import { SceneManager } from './SceneManager';
import { SlotManager } from './SlotManager';
import { RenderManager } from './RenderManager';
import { CameraManager } from './CameraManager';

/**
 * Inits all the managers and oversees all managers.
 * 
 * @export
 * @class MainManager
 */
export class MainManager {

  private sceneManager: SceneManager;
  private slotManager: SlotManager;
  private renderManager: RenderManager;
  private cameraManager: CameraManager;

  constructor(dom: HTMLElement){
    this.sceneManager = new SceneManager();
    this.cameraManager = new CameraManager(dom);
    
    // shold occur last as it kicks start the renderer too
    this.renderManager = new RenderManager(dom, this.sceneManager.getActiveScene(), this.cameraManager.getActiveCamera());

    this.slotManager = new SlotManager();
  }

  public init(): void {
    if(this.renderManager && this.sceneManager && this.slotManager){

    }
  }

}