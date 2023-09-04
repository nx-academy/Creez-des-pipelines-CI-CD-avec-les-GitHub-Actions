import {describe, expect, it} from "vitest";

import makeSum from ".";

describe('makeSum Unit Test Suites', () => {
  it('should return something', () => {
    expect(makeSum(2, 2)).toBeDefined()
  })

  it('should return 4', () => {
    expect(makeSum(2, 2)).toEqual(4)
  })
})

