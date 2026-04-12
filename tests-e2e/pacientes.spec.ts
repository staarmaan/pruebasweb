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

test('eliminar paciente', async ({ page }) => {
  await page.goto('/')

  // crear paciente
  await page.fill('input[name="name"]', 'Fluffy, gato siames')
  await page.fill('input[name="caretaker"]', 'Juan Perez')
  await page.fill('input[name="email"]', 'juan@test.com')
  await page.fill('input[name="date"]', '2026-02-15')
  await page.fill('textarea[name="symptoms"]', 'Estornudos')

  await page.locator('input[type="submit"]').click()

  // verificar que aparece
  await expect(
    page.getByText('Fluffy, gato siames', { exact: true }).first()
  ).toBeVisible()

  // hacer clic en eliminar
  const eliminarButtons = await page.locator('button:has-text("Eliminar")')
  await eliminarButtons.first().click()

  // confirmar eliminación en el modal
  const confirmButton = await page.locator('button:has-text("Confirmar")')
  await confirmButton.click()

  // verificar que el paciente ya no aparece
  await expect(
    page.getByText('Fluffy, gato siames', { exact: true }).first()
  ).not.toBeVisible()
})

test('editar paciente', async ({ page }) => {
  await page.goto('/')

  // crear paciente
  await page.fill('input[name="name"]', 'Max, perro labrador')
  await page.fill('input[name="caretaker"]', 'Carlos Silva')
  await page.fill('input[name="email"]', 'carlos@test.com')
  await page.fill('input[name="date"]', '2026-03-20')
  await page.fill('textarea[name="symptoms"]', 'Cojera en pata trasera')

  await page.locator('input[type="submit"]').click()

  // verificar que aparece
  await expect(
    page.getByText('Max, perro labrador', { exact: true }).first()
  ).toBeVisible()

  // hacer clic en editar
  const editarButtons = await page.locator('button:has-text("Editar")')
  await editarButtons.first().click()

  // modificar los datos (cuando se implemente la funcionalidad)
  // await page.fill('input[name="name"]', 'Max, perro labrador mejorado')
  // await page.fill('textarea[name="symptoms"]', 'Cojera mejorada')
  // await page.locator('input[type="submit"]').click()

  // verificar que los cambios se aplicaron
  // await expect(
  //   page.getByText('Max, perro labrador mejorado', { exact: true }).first()
  // ).toBeVisible()
})