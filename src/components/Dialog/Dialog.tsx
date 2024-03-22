import { JSX } from 'react'
import { Portal } from 'react-portal'
import FocusTrap from 'focus-trap-react'
import './Dialog.css'

type DialogProps = {
    title: string | JSX.Element
    children?: JSX.Element
    onClose: () => void
}

export function Dialog({ title, children, onClose }: DialogProps) {
    return (
        <Portal>
            <FocusTrap>
                <div className="dialog-overlay">
                    <div className="dialog-content">
                        <div className="dialog-header">
                            <h2>{title}</h2>
                            <button
                                onClick={onClose}
                                className="dialog-close-button"
                            >
                                ×
                            </button>
                        </div>
                        <div className="dialog-body">{children}</div>
                    </div>
                </div>
            </FocusTrap>
        </Portal>
    )
}
