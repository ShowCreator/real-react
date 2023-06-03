/*
 * @Author: sfy
 * @Date: 2023-05-24 23:05:33
 * @LastEditors: sfy
 * @LastEditTime: 2023-06-03 16:27:27
 * @FilePath: /big-react/packages/react-dom/src/hostConfig.ts
 * @Description: update here
 */
export type Container = Element;
export type Instance = Element;

export const createInstance = (type: string): Instance => {
	// TODO 处理props
	const element = document.createElement(type);
	return element;
};

export const appendInitialChild = (
	parent: Instance | Container,
	child: Instance
) => {
	parent.appendChild(child);
};

export const createTextInstance = (content: string) => {
	return document.createTextNode(content);
};

export const appendChildToContainer = appendInitialChild;
