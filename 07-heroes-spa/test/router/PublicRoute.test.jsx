import { render, screen } from "@testing-library/react"
import { AuthContext } from "../../src/auth/context/AuthContext"
import { PublicRoute } from "../../src/router/publicRoute"
import { MemoryRouter, Route, Routes } from "react-router-dom"

describe('pruebas del publicRoute', () => {
    test('debe de mostrar el children si no esta autenticado', () => {
      
        const contextValue = {
            logged: false
        }

        render( 
            <AuthContext.Provider value={ contextValue }>
                <PublicRoute>
                    <h1>Ruta Pública</h1>
                </PublicRoute>
            </AuthContext.Provider>
        )

        expect( screen.getByText('Ruta Pública') ).toBeTruthy();
    })

    test('debe de navegar si esta autenticado', () => {
      
        const contextValue = {
            logged: true,
            user: {
                name: 'santiago',
                id: 'ABc'
            }
        }

        render( 
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter initialEntries={['/login']}>
                    <Routes>
                        <Route path='login' element={ 
                            <PublicRoute>
                                <h1>Ruta Pública</h1>
                            </PublicRoute>
                         } />
                        <Route path='marvel' element={ <h1>Página Marvel</h1> } />
                    </Routes>
                </MemoryRouter>
            </AuthContext.Provider>
        )

        expect( screen.getByText('Página Marvel') ).toBeTruthy();
    });
    
})
