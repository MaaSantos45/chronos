import type {TaskStateModel} from "../models/TaskStateModel.tsx";

let instance: WorkerManager | null = null;

export class WorkerManager {
    private worker: Worker;

    private constructor() {
        this.worker = new Worker(new URL('./webWorker.ts', import.meta.url))
    }

    static getInstance() {
        if(!instance) {
            instance = new WorkerManager();
        }
        return instance
    }

    postMessage(message: TaskStateModel) {
        this.worker.postMessage(message);
    }

    onmessage(callback: (e: MessageEvent) => void) {
        this.worker.onmessage = callback;
    }

    terminate() {
        this.worker.terminate();
        instance = null;
    }
}