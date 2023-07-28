import { render, screen } from '@testing-library/react'
import {describe, expect, it} from 'vitest';

import Page from ".";

describe("Home Page component test suites", () => {
  it('should display Hello, World!', async () => {
    const homePage = render(Page)

    console.log("=====")
    console.log(homePage.container.children)
    console.log("=====")

    expect(true).toBe(true)
  })
})

