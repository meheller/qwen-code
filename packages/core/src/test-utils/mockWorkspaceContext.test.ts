/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import { describe, it, expect } from 'vitest';
import { createMockWorkspaceContext } from './mockWorkspaceContext.js';

describe('createMockWorkspaceContext', () => {
  it('isPathWithinWorkspace should return true for paths within the workspace', () => {
    const context = createMockWorkspaceContext('/foo/bar');
    expect(context.isPathWithinWorkspace('/foo/bar/baz')).toBe(true);
  });

  it('isPathWithinWorkspace should return false for paths outside the workspace', () => {
    const context = createMockWorkspaceContext('/foo/bar');
    expect(context.isPathWithinWorkspace('/foo/qux/baz')).toBe(false);
  });

  it('isPathWithinWorkspace should return false for paths that partially match', () => {
    const context = createMockWorkspaceContext('/foo/bar');
    expect(context.isPathWithinWorkspace('/foo/bar-and-a-half')).toBe(false);
  });
});
