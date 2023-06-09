/*
 * @Author: sfy
 * @Date: 2023-05-23 21:52:40
 * @LastEditors: sfy
 * @LastEditTime: 2023-06-03 18:24:33
 * @FilePath: /big-react/packages/react-reconciler/src/fiberFlags.ts
 * @Description: update here
 */
export type Flags = number;

export const NoFlags = 0b0000000;
export const Placement = 0b0000001;
export const Update = 0b0000010;
export const ChildDeletion = 0b0000100;

export const MutationMask = Placement | Update | ChildDeletion;
