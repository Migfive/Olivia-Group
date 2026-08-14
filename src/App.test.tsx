import { render, screen } from '@testing-library/react'
import App, { catalogProducts, contactInfo, formatWhatsAppLink } from './App'

describe('App contact and WhatsApp configuration', () => {
  it('should expose the expected contact info values', () => {
    expect(contactInfo.emailPrimary).toBe('info@oliviasgroup.com')
    expect(contactInfo.emailSecondary).toBe('consultoria.d.oliviasgroup@gmail.com')
    expect(contactInfo.phone).toBe('3204553927')
    expect(contactInfo.phoneHref).toBe('tel:+573204553927')
    expect(contactInfo.website).toBe('https://www.oliviasgroup.com')
  })

  it('should render the contact links in the footer', () => {
    render(<App />)

    expect(screen.getByRole('link', { name: contactInfo.emailPrimary })).toHaveAttribute(
      'href',
      `mailto:${contactInfo.emailPrimary}`,
    )
    expect(screen.getByRole('link', { name: contactInfo.emailSecondary })).toHaveAttribute(
      'href',
      `mailto:${contactInfo.emailSecondary}`,
    )
    expect(screen.getByRole('link', { name: contactInfo.phone })).toHaveAttribute(
      'href',
      contactInfo.phoneHref,
    )
    expect(screen.getByRole('link', { name: 'www.oliviasgroup.com' })).toHaveAttribute(
      'href',
      contactInfo.website,
    )
  })

  it('should generate WhatsApp links for each product without leaking user data', () => {
    expect(catalogProducts.length).toBeGreaterThan(0)

    catalogProducts.forEach((product) => {
      const link = formatWhatsAppLink(product.name)

      expect(link).toContain('https://wa.me/573204553927?text=')
      expect(link).toContain(encodeURIComponent(`Hola, me interesa comprar el producto ${product.name}. Quisiera más información.`))
      expect(link).not.toContain('http://')
      expect(link).not.toContain('javascript:')
      expect(link).not.toContain('password')
      expect(link).not.toContain('token')
    })
  })

  it('should make every product card link to a valid WhatsApp order URL', () => {
    render(<App />)

    const productLinks = screen.getAllByRole('link', { name: /pedir por whatsapp/i })

    expect(productLinks).toHaveLength(catalogProducts.length)

    productLinks.forEach((productLink, index) => {
      const productName = catalogProducts[index].name

      expect(productLink).toHaveAttribute('target', '_blank')
      expect(productLink).toHaveAttribute('rel', 'noreferrer')
      expect(productLink.getAttribute('href')).toContain('https://wa.me/573204553927?text=')
      expect(productLink.getAttribute('href')).toContain(encodeURIComponent(productName))
    })
  })
})
