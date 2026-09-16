export declare const MovementType: {
    readonly PUTAWAY: "PUTAWAY";
    readonly PICK: "PICK";
    readonly MOVE: "MOVE";
    readonly ADJUSTMENT: "ADJUSTMENT";
};
export type MovementType = (typeof MovementType)[keyof typeof MovementType];
export declare const TaskStatus: {
    readonly PENDING: "PENDING";
    readonly DONE: "DONE";
};
export type TaskStatus = (typeof TaskStatus)[keyof typeof TaskStatus];
