// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import * as path from 'path';

export interface CortexDebug {
	registerSVDFile(expression: RegExp | string, path: string): void;
}

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	const cortexDebug: vscode.Extension<CortexDebug> = <vscode.Extension<CortexDebug>>vscode.extensions.getExtension('marus25.cortex-debug');
	if (!cortexDebug) {
		vscode.window.showErrorMessage('Cortex-Debug Extension is not available for device support packages');
		return;
	}
	cortexDebug.activate().then((cdbg) => {
		cdbg.registerSVDFile(/EFR32FG23A010F128GM40/i, path.join(context.extensionPath, 'data', 'EFR32FG23A010F128GM40.svd'));
		cdbg.registerSVDFile(/EFR32FG23A010F256GM40/i, path.join(context.extensionPath, 'data', 'EFR32FG23A010F256GM40.svd'));
		cdbg.registerSVDFile(/EFR32FG23A010F256GM48/i, path.join(context.extensionPath, 'data', 'EFR32FG23A010F256GM48.svd'));
		cdbg.registerSVDFile(/EFR32FG23A010F512GM40/i, path.join(context.extensionPath, 'data', 'EFR32FG23A010F512GM40.svd'));
		cdbg.registerSVDFile(/EFR32FG23A010F512GM48/i, path.join(context.extensionPath, 'data', 'EFR32FG23A010F512GM48.svd'));
		cdbg.registerSVDFile(/EFR32FG23A011F512GM40/i, path.join(context.extensionPath, 'data', 'EFR32FG23A011F512GM40.svd'));
		cdbg.registerSVDFile(/EFR32FG23A020F128GM40/i, path.join(context.extensionPath, 'data', 'EFR32FG23A020F128GM40.svd'));
		cdbg.registerSVDFile(/EFR32FG23A020F256GM40/i, path.join(context.extensionPath, 'data', 'EFR32FG23A020F256GM40.svd'));
		cdbg.registerSVDFile(/EFR32FG23A020F256GM48/i, path.join(context.extensionPath, 'data', 'EFR32FG23A020F256GM48.svd'));
		cdbg.registerSVDFile(/EFR32FG23A020F512GM40/i, path.join(context.extensionPath, 'data', 'EFR32FG23A020F512GM40.svd'));
		cdbg.registerSVDFile(/EFR32FG23A020F512GM48/i, path.join(context.extensionPath, 'data', 'EFR32FG23A020F512GM48.svd'));
		cdbg.registerSVDFile(/EFR32FG23A021F512GM40/i, path.join(context.extensionPath, 'data', 'EFR32FG23A021F512GM40.svd'));
		cdbg.registerSVDFile(/EFR32FG23B010F128GM40/i, path.join(context.extensionPath, 'data', 'EFR32FG23B010F128GM40.svd'));
		cdbg.registerSVDFile(/EFR32FG23B010F512GM48/i, path.join(context.extensionPath, 'data', 'EFR32FG23B010F512GM48.svd'));
		cdbg.registerSVDFile(/EFR32FG23B010F512IM40/i, path.join(context.extensionPath, 'data', 'EFR32FG23B010F512IM40.svd'));
		cdbg.registerSVDFile(/EFR32FG23B010F512IM48/i, path.join(context.extensionPath, 'data', 'EFR32FG23B010F512IM48.svd'));
		cdbg.registerSVDFile(/EFR32FG23B020F128GM40/i, path.join(context.extensionPath, 'data', 'EFR32FG23B020F128GM40.svd'));
		cdbg.registerSVDFile(/EFR32FG23B020F512IM40/i, path.join(context.extensionPath, 'data', 'EFR32FG23B020F512IM40.svd'));
		cdbg.registerSVDFile(/EFR32FG23B021F512IM40/i, path.join(context.extensionPath, 'data', 'EFR32FG23B021F512IM40.svd'));
		cdbg.registerSVDFile(/EFR32FG23B021F512IM40/i, path.join(context.extensionPath, 'data', 'EFR32FG23B021F512IM40.svd'));
		cdbg.registerSVDFile(/EFR32FG23B021F512IM48/i, path.join(context.extensionPath, 'data', 'EFR32FG23B021F512IM48.svd'));
	}, (error) => {
		console.log('Unable to activate cortexDebug');
	});
}

// This method is called when your extension is deactivated
export function deactivate() {}
