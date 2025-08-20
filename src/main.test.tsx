import { describe, it, expect, vi, beforeEach } from 'vitest'
import { Provider } from 'react-redux'
import { StrictMode } from 'react'

const renderMock = vi.fn();
const createRootMock = vi.fn(() => ({
    render: renderMock,
}));
vi.mock('react-dom/client', () => ({
    createRoot: createRootMock,
}));

describe('main.tsx', () => {
    beforeEach(() => {
        vi.resetModules();
        renderMock.mockClear();
        createRootMock.mockClear();
        document.body.innerHTML = '';
    });

    it('should render the App component inside Provider and StrictMode', async () => {
        const rootElem = document.createElement('div')
        rootElem.id = 'root'
        document.body.appendChild(rootElem)

        await import('./main.tsx')

        expect(createRootMock).toHaveBeenCalledWith(rootElem)
        expect(renderMock).toHaveBeenCalled()

        const renderedTree = renderMock.mock.calls[0][0]
        expect(renderedTree.type).toBe(StrictMode)
        expect(renderedTree.props.children.type).toBe(Provider)
    })

    it('should throw if root element is missing', async () => {
        await expect(import('./main.tsx')).rejects.toThrow("Failed to find the root element");
    })
})