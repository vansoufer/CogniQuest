import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import SearchByQuestion from '../app/searchByQuestion/page'
import { processText } from '@/lib/gemini'
import '@testing-library/jest-dom'

// Mock do módulo gemini
jest.mock('@/lib/gemini', () => ({
  processText: jest.fn(),
  processImage: jest.fn(),
}))

describe('SearchByQuestion', () => {
  beforeEach(() => {
    // Limpa os mocks antes de cada teste
    jest.clearAllMocks()
  })

  it('renderiza o campo de input', () => {
    render(<SearchByQuestion />)
    
    expect(screen.getByPlaceholderText('Digite sua questão aqui...')).toBeInTheDocument()
  })

  it('processa texto quando submetido', async () => {
    const mockResponse = { aula: 'Conteúdo da aula', links: 'Links úteis' }
    ;(processText as jest.Mock).mockResolvedValueOnce(mockResponse)

    render(<SearchByQuestion />)
    
    const input = screen.getByPlaceholderText('Digite sua questão aqui...')
    await userEvent.type(input, 'Pergunta teste')
    fireEvent.keyPress(input, { key: 'Enter', code: 13, charCode: 13 })

    await waitFor(() => {
      expect(processText).toHaveBeenCalledWith('Pergunta teste')
    })

    // Aguardar a renderização do conteúdo
    await waitFor(() => {
      expect(screen.getByText(/Conteúdo da aula/)).toBeInTheDocument()
    })
  })

  it('mostra loading spinner durante o processamento', async () => {
    const mockResponse = { aula: 'Conteúdo', links: 'Links' }
    ;(processText as jest.Mock).mockImplementation(() => 
      new Promise(resolve => setTimeout(() => resolve(mockResponse), 100))
    )

    render(<SearchByQuestion />)
    
    const input = screen.getByPlaceholderText('Digite sua questão aqui...')
    await userEvent.type(input, 'Pergunta teste')
    fireEvent.keyPress(input, { key: 'Enter', code: 13, charCode: 13 })

    expect(screen.getByTestId('loading-spinner')).toBeInTheDocument()
  })
})