/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import * as platform from '../../../base/common/platform.js';
import { isZsh as isZshShell } from '../../terminal/common/terminalShellDetection.js';

export function isZsh(shell: string): boolean {
	return isZshShell(shell, platform.OS);
}
