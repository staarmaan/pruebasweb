import { test, expect } from '@playwright/test'

test('crear paciente y verlo en lista', async ({ page }) => {
  await page.goto('/')

  // llenar formulario
  await page.fill('input[name="name"]', 'Kiki, perro del año')
  await page.fill('input[name="caretaker"]', 'Maria Lopez')
  await page.fill('input[name="email"]', 'maria@test.com')
  await page.fill('input[name="date"]', '2026-01-01')
  await page.fill('textarea[name="symptoms"]', 'Dolor')

  // enviar
  await page.locator('input[type="submit"]').click()
  // verificar que aparece en UI
  await expect(
    page.getByText('Kiki, perro del año', { exact: true }).first()
  ).toBeVisible()
})