/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { posix as pathPosix, win32 as pathWin32 } from '../../../base/common/path.js';
import { OperatingSystem } from '../../../base/common/platform.js';

/**
 * Returns the shell executable's base name, using the appropriate path module
 * for the given OS. On Windows the `.exe` suffix is stripped for matching.
 */
function shellBasename(shell: string, os: OperatingSystem): string {
	if (os === OperatingSystem.Windows) {
		return pathWin32.basename(shell).replace(/\.exe$/i, '');
	}
	return pathPosix.basename(shell);
}

/**
 * Detects whether the given shell path refers to a PowerShell executable
 * (pwsh, powershell, or their preview variants).
 */
export function isPowerShell(shell: string, os: OperatingSystem): boolean {
	if (os === OperatingSystem.Windows) {
		return /^(?:powershell|pwsh)(?:-preview)?$/i.test(shellBasename(shell, os));
	}
	return /^(?:powershell|pwsh)(?:-preview)?$/.test(shellBasename(shell, os));
}

/**
 * Detects whether the given shell path refers specifically to legacy Windows
 * PowerShell 5.x (`System32\WindowsPowerShell\v1.0\powershell.exe`).
 */
export function isWindowsPowerShell(shell: string): boolean {
	return shell.endsWith('System32\\WindowsPowerShell\\v1.0\\powershell.exe');
}

/**
 * Detects whether the given shell path refers to a Zsh executable.
 */
export function isZsh(shell: string, os: OperatingSystem): boolean {
	if (os === OperatingSystem.Windows) {
		return /^zsh(?:\.exe)?$/i.test(pathWin32.basename(shell));
	}
	return /^zsh$/.test(pathPosix.basename(shell));
}

/**
 * Detects whether the given shell path refers to a Bash executable.
 */
export function isBash(shell: string, os: OperatingSystem): boolean {
	if (os === OperatingSystem.Windows) {
		return /^bash(?:\.exe)?$/i.test(pathWin32.basename(shell));
	}
	return /^bash$/.test(pathPosix.basename(shell));
}

/**
 * Detects whether the given shell path refers to a Fish executable.
 */
export function isFish(shell: string, os: OperatingSystem): boolean {
	if (os === OperatingSystem.Windows) {
		return /^fish(?:\.exe)?$/i.test(pathWin32.basename(shell));
	}
	return /^fish$/.test(pathPosix.basename(shell));
}
