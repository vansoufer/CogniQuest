import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import SearchByTheme from '../app/searchByTheme/page'
import { processTheme } from '@/lib/gemini'
import '@testing-library/jest-dom'

jest.mock('@/lib/gemini', () => ({
  processTheme: jest.fn(),
}))

describe('SearchByTheme', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('renderiza o campo de input', () => {
    render(<SearchByTheme />)
    expect(screen.getByPlaceholderText('Digite o tema que deseja estudar...')).toBeInTheDocument()
  })

  it('processa tema quando submetido', async () => {
    const mockResponse = { 
      aula: 'Conteúdo da aula', 
      links: 'Links úteis',
      exercicios: 'Exercícios resolvidos' 
    }
    ;(processTheme as jest.Mock).mockResolvedValueOnce(mockResponse)

    render(<SearchByTheme />)
    
    const input = screen.getByPlaceholderText('Digite o tema que deseja estudar...')
    await userEvent.type(input, 'Tema teste')
    fireEvent.keyPress(input, { key: 'Enter', code: 13, charCode: 13 })

    await waitFor(() => {
      expect(processTheme).toHaveBeenCalledWith('Tema teste')
    })

    // Aguardar a renderização do conteúdo
    await waitFor(() => {
      expect(screen.getByText(/Conteúdo da aula/)).toBeInTheDocument()
    })
  })

  it('mostra loading spinner durante o processamento', async () => {
    const mockResponse = { 
      aula: 'Conteúdo', 
      links: 'Links',
      exercicios: 'Exercícios' 
    }
    ;(processTheme as jest.Mock).mockImplementation(() => 
      new Promise(resolve => setTimeout(() => resolve(mockResponse), 100))
    )

    render(<SearchByTheme />)
    
    const input = screen.getByPlaceholderText('Digite o tema que deseja estudar...')
    await userEvent.type(input, 'Tema teste')
    fireEvent.keyPress(input, { key: 'Enter', code: 13, charCode: 13 })

    expect(screen.getByTestId('loading-spinner')).toBeInTheDocument()
  })

  it('habilita botão de novo tema após processamento', async () => {
    const mockResponse = { 
      aula: 'Conteúdo', 
      links: 'Links',
      exercicios: 'Exercícios' 
    }
    ;(processTheme as jest.Mock).mockResolvedValueOnce(mockResponse)

    render(<SearchByTheme />)
    
    const input = screen.getByPlaceholderText('Digite o tema que deseja estudar...')
    await userEvent.type(input, 'Tema teste')
    fireEvent.keyPress(input, { key: 'Enter', code: 13, charCode: 13 })

    await waitFor(() => {
      expect(screen.getByText('Outro Tema')).toBeInTheDocument()
    })
  })
}) 